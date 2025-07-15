import crypto from "crypto";
import { instance } from "../index.js";

export const checkOut = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount) * 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json({
      order,
      message: "Order created successfully",
      error: false,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res
        .status(200)
        .json({ success: true, message: "Payment verified successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: true });
  }
};

export const apiKey = async (req, res) => {
  try {
    const apiKey = process.env.RAZORPAY_API_KEY;
    if (!apiKey) {
      return res
        .status(404)
        .json({ message: "API key not found", error: true });
    }
    res
      .status(200)
      .json({ message: "API key fetched successfully", apiKey, error: false });
  } catch (error) {
    console.log("Error fetching API key:", error);
    res.status(500).json({ message: "Internal Server Error", error: true });
  }
};
