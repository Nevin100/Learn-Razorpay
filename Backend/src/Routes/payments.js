import express from "express";

import { checkOut } from "../Controllers/payment-controllers.js";

const router = express.Router();

router.post("/checkout", checkOut);

export default router;
