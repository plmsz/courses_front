import React, { useState } from "react";
import { Form, Button, Popover } from "react-bootstrap";
const SummaryForm = () => {
	const [tcChecked, setTcChecked] = useState(false);

	const popover = (
		<Popover id="popover-basic">
			<Popover.Body>No ice cream will actually be delivered</Popover.Body>
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
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
			<Button variant="primary" type="submit" disabled={!tcChecked}>
				Confirm order
			</Button>
		</>
	);
};

export default SummaryForm;
