import checksum_lib from "paytmchecksum";
import https from "https";

export const initiatePayment = async (req, res) => {
  const { orderId, customerId, amount } = req.body;

  const paytmParams = {
    MID: process.env.PAYTM_MID,
    WEBSITE: "WEBSTAGING",
    CHANNEL_ID: "WEB",
    INDUSTRY_TYPE_ID: "Retail",
    ORDER_ID: orderId,
    CUST_ID: customerId,
    TXN_AMOUNT: amount,
    CALLBACK_URL: "http://localhost:4747/api/payment/verify-payment",
  };

  try {
    const checksum = await checksum_lib.generateSignature(
      paytmParams,
      process.env.PAYTM_MERCHANT_KEY
    );
    paytmParams.CHECKSUMHASH = checksum;

    const formFields = Object.keys(paytmParams)
      .map(
        (key) =>
          `<input type="hidden" name="${key}" value="${paytmParams[key]}"/>`
      )
      .join("");

    const paymentUrl = `<html><body><form method="post" action="https://securegw-stage.paytm.in/order/process" name="paytmForm">${formFields}</form><script type="text/javascript">document.paytmForm.submit();</script></body></html>`;

    res.json({ paymentUrl });
  } catch (error) {
    console.error("Checksum generation error:", error);
    res.status(500).json({ error: "Error generating checksum" });
  }
};

export const verifyPayment = async (req, res) => {
  const paytmChecksum = req.body.CHECKSUMHASH;
  delete req.body.CHECKSUMHASH; // Remove checksum for verification

  const isVerifySignature = checksum_lib.verifySignature(
    req.body,
    process.env.PAYTM_MERCHANT_KEY,
    paytmChecksum
  );

  if (isVerifySignature) {
    if (req.body.STATUS === "TXN_SUCCESS") {
      console.log("Payment successful:", req.body);
      res.send("Payment successful");
    } else {
      console.log("Payment failed:", req.body);
      res.send("Payment failed");
    }
  } else {
    console.log("Checksum Mismatch");
    res.status(500).send("Checksum Mismatch");
  }
};
