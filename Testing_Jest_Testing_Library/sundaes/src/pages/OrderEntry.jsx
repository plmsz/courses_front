import Options from "./entry/Options";
import { useOrderDetails } from "../contexts/OrderDetails";
import { Button } from "react-bootstrap";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();

  const disabled = orderDetails.totals.scoops === "$0.00";
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button
        variant="dark"
        onClick={() => setOrderPhase(1)}
        disabled={disabled}
      >
        Order Sundae
      </Button>
    </div>
  );
};

export default OrderEntry;
