export const checkOut = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(200).json({
      message: "Order created successfully",
      error: false,
      data: order,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
