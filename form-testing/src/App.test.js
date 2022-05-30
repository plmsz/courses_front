import { render, screen } from "@testing-library/react";
import App, { validateInput, hanldeSubmit } from "./App";
import userEvent from "@testing-library/user-event";

describe("login", () => {
	test("validate function should pass on correct input", () => {
		expect(validateInput("p@m")).toBe(true);
	});
	test("validate function should fail on correct input", () => {
		expect(validateInput("pm")).not.toBe(true);
	});

	test("login form should be in the document", () => {
		render(<App />);
		const inputNode = screen.getByRole("textbox", { name: /email/i });
		expect(inputNode).toBeInTheDocument();
	});

	test("email field should have label", () => {
		render(<App />);
		const inputNode = screen.getByLabelText(/email/i);
		expect(inputNode.getAttribute("name")).toBe("email");
		userEvent.type("k");
	});

	it("email should accept text", async() => {
        render(<App />);
		const inputNode = screen.getByRole("textbox", { name: /email/i });
		userEvent.clear(inputNode);
		expect(inputNode).toHaveValue("");

		userEvent.type(inputNode, "t");
		expect(inputNode).toHaveValue("t");
        
		// error
		const errorMessage = await screen.findByText(/o campo email não está válido/i);
		expect(errorMessage).toBeInTheDocument();

		userEvent.clear(inputNode);
		userEvent.type(inputNode, "testing@");
		// expect(errorMessage).not.toBeInTheDocument();

	});

	test("should be able to submit form", () => {
		render(<App />);

		const emailInput = screen.getByRole("textbox", { name: /email/i });
		userEvent.type(emailInput, "testing");

		const passwordInput = screen.getByLabelText(/password/i);
		userEvent.type(passwordInput, "123");

		const button = screen.getByRole("button");
		userEvent.click(button);
        //error
		expect(hanldeSubmit).toHaveBeenCalledTimes(1);
	});
});
