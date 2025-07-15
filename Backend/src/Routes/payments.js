import express from "express";

import {
  checkOut,
  paymentVerification,
  apiKey,
} from "../Controllers/payment-controllers.js";

const router = express.Router();

router.post("/checkout", checkOut);

router.post("/paymentVerification", paymentVerification);

router.get("/apiKey", apiKey);

export default router;
