import express from "express";
import { initiatePayment, verifyPayment } from "../controllers/paymentController";
const router = express.Router();

router.post('/initiate-payment',initiatePayment);
router.post('/verify-payment',verifyPayment);

export default router;
