import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

// Import routes
import PaymentRoutes from "./Routes/payments.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/payments", PaymentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
