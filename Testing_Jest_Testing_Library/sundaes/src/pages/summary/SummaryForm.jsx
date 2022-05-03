import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
const SummaryForm = ({ setOrderPhase }) => {
  const [tcChecked, setTcChecked] = useState(false);

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
        onClick={()=>setOrderPhase(2)}
      >
        Confirm order
      </Button>
    </>
  );
};

export default SummaryForm;
