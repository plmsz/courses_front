import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color and change color to Midnight Blue when clicked", () => {
	render(<App />);

	const colorButton = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	//button has correct initial color
	expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

	//button change color to Midnight Blue when clicked and text to be 'Change to Medium Violet Red'
	fireEvent.click(colorButton);

	expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
	expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
	//buton enabled
	//checkbox unchecked

	render(<App />);
	const colorButton = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	const checkbox = screen.getByRole("checkbox");

	expect(checkbox).not.toBeChecked();

	expect(colorButton).toBeEnabled();
});

test("when clicked the checkbox button should be disabled, when unchecked button enables", () => {
	render(<App />);

	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
	const colorButton = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test("disabled button has gray background color and reverts to Medium Violet Red", () => {
	//disable btn, enabled button
	render(<App />);

	const colorButton = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("when click a disabled button has gray background color and reverts to Medium Violet Red", () => {
	//change color, disabled
	render(<App />);

	const colorButton = screen.getByRole("button", {
		name: "Change to Midnight Blue",
	});
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(colorButton);

	fireEvent.click(checkbox);

	expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});
//Unit Testing Functions (replaceCamelWithSpaces)
describe("spaces before camel-case capital letters", () => {
	test("no inner capital letter", () => {
		expect(replaceCamelWithSpaces("Red")).toBe("Red");
	});

	test("one inner capital letter", () => {
		expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
	});

	test("multiple capital letters", () => {
		expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
	});
});

//Ex do React
// test('renders learn react link', () => {
// 	render(<App />);
// 	// const linkElement = screen.getByText(/learn react/i);
// 	const linkElement = screen.getByRole('link', { name: /learn react/i });
// 	expect(linkElement).toBeInTheDocument();
// });
