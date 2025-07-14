import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import paymentRoutes from "./Routes/payments.js";
import Razorpay from "razorpay";

const API_KEY = process.env.RAZORPAY_API_KEY;
const KEY_SECRET = process.env.RAZORPAY_API_SECRET;

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY || API_KEY,
  key_secret: process.env.RAZORPAY_KEY_SECRET || KEY_SECRET,
});

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
