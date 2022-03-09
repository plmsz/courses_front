import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

const Counter = (props: any) => {
		return <h1>Counter{props.counter.toFixed(2)}</h1>;
};

const ErrorHandler = () => {
  return <>
  <h1>Oops, something went wrong!</h1>;
  <h3>But we are working to fix it!</h3>
  </>
}

const notifyError = (error: Error, info: {componentStack: string}) => {
  // Do something with the error
  console.log("bug", error, info)
}

function App() {
	return (
		<div className="App">
			<ErrorBoundary FallbackComponent={ErrorHandler} onError={notifyError}>
				<Counter />
			</ErrorBoundary>
		</div>
	);
}

export default App;
