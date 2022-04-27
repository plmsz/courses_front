import { Container } from "react-bootstrap";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/OrderEntry";
import SummaryForm from "./pages/summary/SummaryForm";

function App() {
	return (
		<div className="App">
			<Container>
				<OrderDetailsProvider>
					<OrderEntry />
					<SummaryForm />
				</OrderDetailsProvider>
			</Container>
		</div>
	);
}

export default App;
