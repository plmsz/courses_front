import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useOrderDetails } from "../contexts/OrderDetails";

const OrderConfirmation = ({ setOrderPhase }) => {
  const [orderNumber, setOrderNumber] = useState(null);
  const [, , resetOrder] = useOrderDetails()

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch((error) => {
        //     //TODO ERROR
        console.log(error);
      });
  }, []);

  const handleSubmit=()=>{
    setOrderPhase(0);
    resetOrder()
  }

  return (
    <div styled={{textAlign: 'center'}}>
      <h1>Thank You!</h1>
      <h2>Your order number is {orderNumber}</h2>
      <p>as per our terms and conditions, nothing will happen now</p>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Create a new order
      </Button>
    </ div>
  );
};

export default OrderConfirmation;
