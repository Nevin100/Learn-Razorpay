/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, VStack, Button, Text } from "@chakra-ui/react"

type Cardprops = {
  amount : number,
  img: string,
  checkOutHandler: any
}

const Card = ({ amount, img, checkOutHandler }: Cardprops) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin:"5px" , padding:"5px"}}>
    <VStack
      width="600px"
      height="600px"
      borderWidth="1px"
      borderRadius="lg" 
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      padding={"20px"}
    >
      <Image src={img} alt="Card Image" boxSize="500px" objectFit="contain" />
        <Text fontSize="xl" fontWeight="bold">
          ₹{amount}
      </Text>
      <Button colorScheme="teal" onClick={() => checkOutHandler(amount)}>Buy Now</Button>
    </VStack>
  </div>
  )
}

export default Card