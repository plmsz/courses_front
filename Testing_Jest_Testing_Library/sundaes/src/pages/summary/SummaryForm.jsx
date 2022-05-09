import React, { useState } from "react";
import {
  Form,
  Button,
  Popover,
  OverlayTrigger,
  Container,
} from "react-bootstrap";
import { useOrderDetails } from "./../../contexts/OrderDetails";

const SummaryForm = ({ setOrderPhase }) => {
  const [tcChecked, setTcChecked] = useState(false);
  const [orderDetails] = useOrderDetails();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "violet" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const scoopArray = Array.from(orderDetails.scoops.entries());

  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingsArray = Array.from(orderDetails.toppings.keys());
  const toppingsList = toppingsArray.map((key, value) => (
    <li key={key}>{key}</li>
  ));

  return (
    <>
      <Container>
        <h1>Order Summary</h1>
        <h2>Scoops: {orderDetails.totals.scoops}</h2>
        <ul>{scoopList}</ul>
        <h2>Toppings: {orderDetails.totals.toppings}</h2>
        <ul>{toppingsList}</ul>
      </Container>
      <Form.Group
        controlId="terms"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
          name="checkbox"
        />
      </Form.Group>
      <Button
        variant="dark"
        type="submit"
        disabled={!tcChecked}
        onClick={() => setOrderPhase(2)}
      >
        Confirm order
      </Button>
    </>
  );
};

export default SummaryForm;
