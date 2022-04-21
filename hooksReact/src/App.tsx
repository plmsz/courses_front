import "./App.css";
import State from "./components/State/State";
import Effect from "./components/Effect/Effect";

function App() {
	return (
		<div className="App">
			<div className="container">
        <h1>useState</h1>
				<State />
			</div>
			<div className="container">
        <h1>useEffect/useCallback</h1>
				<Effect />
			</div>
			<div className="container">
        <h1>useRef</h1>
				
			</div>
			<div className="container">
        <h1>fowardRef</h1>
				
			</div>
			<div className="container">
        <h1>useReducer</h1>
				
			</div>
			<div className="container">
        <h1>useMemo</h1>
				
			</div>
		</div>
	);
}

export default App;
