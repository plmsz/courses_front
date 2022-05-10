import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderConfirmation from './pages/confirmation/OrderConfirmation';
import OrderEntry from "./pages/OrderEntry";
import SummaryForm from "./pages/summary/SummaryForm";
import { useState } from 'react';
import "./App.css";
//oderphase pass seterr to pages
//button to update orderphase in the pages
//after click new order button reset contex, context needs aditionall array item resetorder
function App() {
	const [orderPhase, setOrderPhase] = useState(0);

	const entries = [
		<OrderEntry setOrderPhase={setOrderPhase} />,
		<SummaryForm setOrderPhase={setOrderPhase} />,
		<OrderConfirmation setOrderPhase={setOrderPhase} />
	];

	return (
		<div className="App">
			<Container>
				<OrderDetailsProvider>
					{entries[orderPhase]}
				</OrderDetailsProvider>
			</Container>
		</div>
	);
}

export default App;
