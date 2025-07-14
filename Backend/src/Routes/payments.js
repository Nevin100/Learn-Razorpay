import express from "express";

import {
  checkOut,
  paymentVerification,
} from "../Controllers/payment-controllers.js";

const router = express.Router();

router.post("/checkout", checkOut);
router.post("/paymentVerification", paymentVerification);

export default router;
