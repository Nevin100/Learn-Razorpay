/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack } from "@chakra-ui/react";
import Card from "../components/Custom/Card.tsx";
import axios from "axios";

interface Order {
  amount: number;
  currency: string;
  order_id: string;
  id: string;
}

const Home = () => {
  const checkOutHandler = async (amount: number) => {
    try {
      // 1. Create order
      const { data } = await axios.post<{ order: Order }>(
        "http://localhost:8000/api/payments/checkout",
        { amount }
      );
      const { order } = data;
      console.log("Response :", order);

      const apiKeyRes = await axios.get<{
        apiKey: string;
        key: string;
      }>("http://localhost:8000/api/payments/apiKey");
      console.log("Razorpay API Key: ", apiKeyRes);
      const key = apiKeyRes.data.apiKey as string;

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Nevin Bali",
        image: "https://avatars.githubusercontent.com/u/146621784?v=4",
        description: "Learning Razorpay Transaction Checkout",
        order_id: order.id,
        handler: async function (response: any) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          try {
            const verifyRes = await axios.post(
              "http://localhost:8000/api/payments/paymentVerification",
              {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
              }
            );
            console.log("Payment verified!", verifyRes);
            alert("Payment Successful 🎉");
          } catch (err) {
            console.error("Verification failed", err);
            alert("Payment verification failed 🚫");
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#8573ecff",
        },
      };

      // 4. Open Razorpay checkout
      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log("Checkout error: ", error);
    }
  };

  return (
    <Box>
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          paddingTop: "6px",
          margin: "4px",
          fontWeight: "bold",
        }}
      >
        Home Page
      </h1>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={4}
        p={4}
      >
        <Card
          amount={5000}
          img={"https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ.jpg"}
          checkOutHandler={checkOutHandler}
        />
        <Card
          amount={1000}
          img={
            "data:image/jpeg;base64,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"
          }
          checkOutHandler={checkOutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
