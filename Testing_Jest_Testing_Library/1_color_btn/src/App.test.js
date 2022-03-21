import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and change color to blue when clicked", () => {
	render(<App />);

	const colorButton = screen.getByRole("button", { name: "Change to blue" });

	//button has correct initial color
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });

	//button change color to blue when clicked and text to be "Change to red"
	fireEvent.click(colorButton);

	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
	expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
	//buton enabled
	//checkbox unchecked

	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });

	const checkbox = screen.getByRole("checkbox");

	expect(checkbox).not.toBeChecked();

	expect(colorButton).toBeEnabled();
});

test("when clicked the checkbox button should be disabled, when unchecked button enables", () => {
	render(<App />);

	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
	const colorButton = screen.getByRole("button", { name: "Change to blue" });

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test("disabled button has gray background color and reverts to red", () => {
	//disable btn, enabled button
	render(<App />);

	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({backgroundColor: "gray"})

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("when click a disabled button has gray background color and reverts to red", () => {
	//change color, disabled
	render(<App />);

	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(colorButton);

	fireEvent.click(checkbox);

	expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
//Ex do React
// test("renders learn react link", () => {
// 	render(<App />);
// 	// const linkElement = screen.getByText(/learn react/i);
// 	const linkElement = screen.getByRole("link", { name: /learn react/i });
// 	expect(linkElement).toBeInTheDocument();
// });
