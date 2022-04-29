import { Col, Form } from "react-bootstrap";

const ToppingOption = ({ name, imagePath, updateItemCount }) => {
	return (
		<div>
			<Col xs={12} sm={6} lg={3} style={{ textAlign: "center" }}>
				<img
					src={`http://localhost:3030/${imagePath}`}
					alt={`${name} Topping`}
					style={{ width: "75%" }}
				/>
				<Form.Group controlId={`${name}-topping-checkbox`}>
					<Form.Check
						type="checkbox"
						onChange={(e) => {
							updateItemCount(name, e.target.checked ? 1 : 0);
						}}
						label={name}
					/>
				</Form.Group>
			</Col>
		</div>
	);
};

export default ToppingOption;
