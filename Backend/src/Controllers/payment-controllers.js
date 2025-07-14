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
    console.log(
      `Payment verification initiated with body: ${JSON.stringify(req.body)}`
    );
    res.status(200).json({
      message: "Payment verification successful",
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error", error: true });
  }
};
