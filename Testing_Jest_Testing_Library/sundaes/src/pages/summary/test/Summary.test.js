import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	expect(checkbox).not.toBeChecked();

	const confirmButton = screen.getByRole("button", { name: /confirm order/i });
	expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	const confirmButton = screen.getByRole("button", { name: /confirm order/i });

	userEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();

	userEvent.click(checkbox);
	expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
	render(<SummaryForm />);

	// popover starts out hidden
	const nullPopover = screen.queryByText(
		/no ice cream will actually be delivered/i
	);
	expect(nullPopover).not.toBeInTheDocument();

	// popover appears upon mouseover of checkbox label
	const termsAndConditions = screen.getByText(/terms and conditions/i);
	userEvent.hover(termsAndConditions);

	const popover = screen.getByText(/no ice cream will actually be delivered/i); //it throws an error, but to make the code more readable will use the expcet anyway
	expect(popover).toBeInTheDocument();

	// popover disappears when we mouse out
	userEvent.unhover(termsAndConditions);
	
	//dissappearance of the popover was happening asynchronously, so it was happening after the xtest completed, by making the assertion asynchronous, solved the problem
	await waitForElementToBeRemoved(() => screen.queryByText(
		/no ice cream will actually be delivered/i
	));

});
