import Options from "./entry/Options";
import { useOrderDetails } from "../contexts/OrderDetails";
import { Button } from "react-bootstrap";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button variant="dark" onClick={() => setOrderPhase(1)}>
        Order Sundae
      </Button>
    </div>
  );
};

export default OrderEntry;
