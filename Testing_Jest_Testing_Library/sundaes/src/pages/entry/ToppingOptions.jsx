import { Col } from "react-bootstrap";

const ToppingOption = ({ name, imagePath }) => {
	return (
		<div>
			<Col xs={12} sm={6} lg={3} style={{ textAlign: "center" }}>
				<img
					src={`http://localhost:3030/${imagePath}`}
					alt={`${name} Topping`}
					style={{ width: "75%" }}
				/>
			</Col>
		</div>
	);
};

export default ToppingOption;
