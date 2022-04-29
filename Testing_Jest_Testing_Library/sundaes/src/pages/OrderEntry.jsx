import Options from "./entry/Options";
import { useOrderDetails } from "../contexts/OrderDetails";

const OrderEntry = () => {
	const [orderDetails] = useOrderDetails();
	return (
		<div>
			<Options optionType={"scoops"} />
			<Options optionType={"toppings"} />
			<h2>Grand Total: {orderDetails.totals.grandTotal} </h2>
		</div>
	);
};

export default OrderEntry;
