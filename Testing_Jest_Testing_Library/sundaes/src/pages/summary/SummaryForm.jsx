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
        <span style={{ color: "pink" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <>
      <Container>
        <h2>Toppings: $ {orderDetails.totals.toppings}</h2>
        <h2>Scoops: $ {orderDetails.totals.scoops}</h2>
      </Container>
      <Form.Group controlId="terms">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
          name="checkbox"
        />
      </Form.Group>
      <Button
        variant="primary"
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
