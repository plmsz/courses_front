import "./App.css";
import React, { useState } from "react";

function App() {
	const [buttonColor, setButtonColor] = useState("red");
	const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [checked, setChecked] = useState(false);

	return (
		<div>
			<button
				style={{ backgroundColor: buttonColor }}
				disabled={checked}
				onClick={() => setButtonColor(newButtonColor)}
			>
				Change to {newButtonColor}
			</button>
			<input
				type="checkbox"
				id="disable-button-checked"
				aria-checked={checked}
				checked={checked}
				onClick={() => setChecked(!checked)}
			/>
			<label htmlFor="disable-button-checked">Disable Button</label>
		</div>
	);
}

export default App;
