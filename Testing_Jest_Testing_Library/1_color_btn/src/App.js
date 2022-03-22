import "./App.css";
import React, { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
	const [buttonColor, setButtonColor] = useState("MediumVioletRed");
	const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

	const [checked, setChecked] = useState(false);

	return (
		<div>
			<button
				style={{
					backgroundColor: checked ? "gray" : buttonColor,
					color: "white",
				}}
				disabled={checked}
				onClick={() => setButtonColor(newButtonColor)}
			>
				Change to {replaceCamelWithSpaces(newButtonColor)}
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
