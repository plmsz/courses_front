import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

xdescribe("Checkbox enables button", () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole("checkbox", {
		name: "I agree to Terms and Conditions",
	});

	const button = screen.getByRole("button", { name: /confirm order/i });

	test("Checkbox is unchecked by default", () => {
		expect(checkbox).not.toBeChecked();
	});

	test("Checking enables the button and Unchecking disables button", () => {
		// fireEvent.click(checkbox);

		userEvent.click(checkbox);
		expect(button).toBeEnabled();

		// fireEvent.click(checkbox);
		userEvent.click(checkbox);
		expect(button).toBeDisabled();
	});
});

describe("popover reponds to hover", () => {
	render(<SummaryForm />);

	const nullPopover = screen.queryByText(
		/no ice cream will actually be delivered/i
	);

	test("popover starts out hidden", () => {
		expect(nullPopover).not.toBeInTheDocument();
	});

	test("popover responds to hover", () => {
		// popover starts out hidden
		expect(nullPopover).not.toBeInTheDocument();

		// popover appears upon mouseover of checkbox label
		const termsAndConditions = screen.getByText(/terms and conditions/i);
		userEvent.hover(termsAndConditions);

		// const popover = screen.getByText(
		// 	/no ice cream will actually be delivered/i
		// );
		// expect(popover).toBeInTheDocument();
	});
});
