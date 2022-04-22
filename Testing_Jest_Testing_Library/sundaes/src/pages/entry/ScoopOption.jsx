import { Col } from "react-bootstrap";

const ScoopOption = ({ name, imagePath }) => {
	return (
		<div>
			<Col xs={12} sm={6} lg={3} style={{ textAlign: "center" }}>
				<img
					src={`http://localhost:3030/${imagePath}`}
					alt={`${name} Scoop`}
					style={{ width: "75%" }}
				/>
			</Col>
		</div>
	);
};

export default ScoopOption;
