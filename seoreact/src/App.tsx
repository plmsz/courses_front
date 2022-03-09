import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Shop from "./pages/Shop";

function App() {
	return (
		<div className="App">
			<>
				<h1>Home</h1>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/shop" element={<Shop />} />
					</Routes>
				</BrowserRouter>
			</>
		</div>
	);
}

export default App;
