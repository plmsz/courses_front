import Options from "./entry/Options";
import { useOrderDetails } from "../contexts/OrderDetails";
import { Button } from "react-bootstrap";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <h2>Grand Total: {orderDetails.totals.grandTotal} </h2>
      <Button variant="primary" onClick={() => setOrderPhase(1)}>
        Order Sundae
      </Button>
    </div>
  );
};

export default OrderEntry;
