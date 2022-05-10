import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const ScoopOption = ({ name, imagePath, updateItemCount }) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const numberOfScoops = event.target.value;
    if (numberOfScoops < 1 || numberOfScoops > 10 || !Number.isInteger(parseFloat(numberOfScoops))) {
      setError(true);
    } else {
      setError(false);
    }
    updateItemCount(name, numberOfScoops);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} Scoop`}
        style={{ width: "75%" }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
            isInvalid={error}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
