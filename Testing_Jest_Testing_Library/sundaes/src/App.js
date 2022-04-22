import Options from "./pages/entry/Options";
import SummaryForm from "./pages/summary/SummaryForm";

function App() {
	return (
		<div className="App">
			<SummaryForm />
			<Options optionType={"scoops"} />
		</div>
	);
}

export default App;
