<script>
  import { onMount } from "svelte";
  let selectedMethod = "";
  let userDetails = [];
  let transportDetails = [];
  let totalAmountOfUsers = 0;
  let paymentId = "";
  let transactionId = "";

  onMount(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const data = queryParams.get("data");

    console.log("====================================");
    console.log(data, "data");
    console.log("====================================");

    if (data) {
      const parsedData = JSON.parse(decodeURIComponent(data));
      console.log(parsedData, "parsed data");

      userDetails = parsedData.userDetails || [];
      transportDetails = parsedData.transportDetails || [];
      totalAmountOfUsers = parsedData.totalAmountOfUsers || 0;
      paymentId = parsedData.paymentId || "";
      transactionId = parsedData.transactionId || "";
    }
  });

  async function handlePayment() {
    if (selectedMethod === "paytm") {
      // Add Paytm payment gateway logic here
      console.log("Proceeding with Paytm payment gateway...");

      // Call the initiatePayment function
      await initiatePayment(paymentId, transactionId,totalAmountOfUsers);

      // Redirect or open Paytm payment page
      //    window.location.href = `https://paytm.com/pay?amount=${totalAmountOfUsers}`;
    } else {
      alert("Please select a payment gateway to continue.");
    }
  }

  // This function is triggered when the user clicks 'Pay Now'
  async function initiatePayment(orderId, customerId, amount) {
    const response = await fetch("http::localhost:4747/api/payment/initiate-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, customerId, amount }),
    });
    const { paymentUrl } = await response.json();
    // Redirect to the Paytm payment page
    window.location.href = paymentUrl;
  }
</script>

<div class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 my-10 mt-20">
  <!-- Title -->
  <h2 class="text-2xl font-bold text-center mb-6">Select Payment Method</h2>

  <!-- Wallets Section -->
  <div class="mb-6">
    <h3 class="font-semibold text-lg mb-2">Wallets</h3>
    <div class="grid grid-cols-1 gap-4">
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="irctc"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">Amazon</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="paytm"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">Paytm</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="mobikwik"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">MobiKwik</span>
      </label>
    </div>
  </div>

  <!-- Multiple Payment Options Section -->
  <div class="mb-6">
    <h3 class="font-semibold text-lg mb-2">Multiple Payment Options</h3>
    <div class="grid grid-cols-1 gap-4">
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="payu"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">PayU</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="razorpay"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">Razorpay</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="phonepe"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">PhonePe</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="icici"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">ICICI Bank</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="hdfc"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">HDFC Bank</span>
      </label>
      <label
        class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <input
          type="radio"
          name="payment"
          value="americanexpress"
          class="radio radio-primary"
          bind:group={selectedMethod}
        />
        <span class="ml-3 text-sm font-medium">American Express</span>
      </label>
    </div>
  </div>

  <!-- Payment Summary and Pay Button -->
  <div
    class="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center"
  >
    <span class="text-lg font-semibold">Total: ₹ {totalAmountOfUsers}</span>
    <button
      on:click={handlePayment}
      class=" border-0 bg-blue-600 py-1.5 rounded-md text-white hover:bg-blue-700 btn-wide"
      >Pay ₹ {totalAmountOfUsers}</button
    >
  </div>
</div>
