import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import ToppingOption from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { pricePerItem } from "../../constants";

//in real life, use Enum for optionType, since has only two types
const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(false);
	const [orderDetails, updateItemCount] = useOrderDetails();

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => {
				setError(true);
			});
	}, [optionType]);

	if (error) {
		return <AlertBanner />;
	}

	const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
	const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	 const optionItems = items.map((item) => (
			<ItemComponent
				key={item.name}
				name={item.name}
				imagePath={item.imagePath}
				updateItemCount={(itemName, newItemCount) =>
					updateItemCount(itemName, newItemCount, optionType)
				}
			/>
		));


	return (
		<>
			<h2>{title}</h2>
			<p>{pricePerItem[optionType]} each</p>
			<p>
				{title} total: {orderDetails.totals[optionType]}
			</p>
			<Row>{optionItems}</Row>;
		</>
	);
};

export default Options;
