import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import ToppingOption from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";
//in real life, use Enum for optionType, since has only two types
const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {
				setError(true)
			});
	}, [optionType]);

	if (error) {
		return <AlertBanner />;
	}

	const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
		/>
	));

	return <Row>{optionItems}</Row>;
};

export default Options;
