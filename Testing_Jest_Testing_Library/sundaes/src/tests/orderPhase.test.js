import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

test("order phases for happy path", async () => {
	render(<App />);

	//add ice creeam
	const vanillaInput = await screen.findByRole("spinbutton", {
		name: "Chocolate",
	});

	userEvent.clear(vanillaInput);
	userEvent.type(vanillaInput, "1");

	//it doesn't need await because if vanillainput showed up chocolateinout also showed up
	const chocolateInput = screen.getByRole("spinbutton", { name: "Chocolate" });

	userEvent.clear(chocolateInput);
	userEvent.type(chocolateInput, "2");

	const mmsCheckbox = await screen.findByRole("checkbox", { name: "M&Ms" });
	userEvent.clear(mmsCheckbox);
	userEvent.type(mmsCheckbox, "1");

	//find and click order button
	const orderSummaryButton = screen.getByRole("button", {
		name: /order sundae/i,
	});
	userEvent.click(orderSummaryButton);

	//check summary information
	const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" });
	expect(scoopsHeading).toBeInTheDocument();

	const toppingsHeading = screen.getByRole("heading", {
		name: "Toppings: $1.50",
	});
	expect(toppingsHeading).toBeInTheDocument();

	// check summary options items;

	/* expect(screen.getByText('1 Vanilla')).toBeInTheDocument()
	expect(screen.getByText('2 Chocolate')).toBeInTheDocument()
	expect(screen.getByText('M&Ms')).toBeInTheDocument() */

	const optionItems = screen.getAllByRole("listitem");
	const optionItemsText = optionItems.map((item) => item.textContent);

	expect(optionItemsText).toEqual(["1 Vanilla", "2 Chocolate", "M&Ms"]);

	// accept terms and conditions
	const checkConfirmOrder = screen.getByRole(
		"checkbox",
		/terms and conditions/i
	);
	userEvent.click(checkConfirmOrder);

	//confirm order number
	const confirmOrderButton = screen.getByRole("button", {
		name: /confirm order/i,
	});
	userEvent.click(confirmOrderButton);

	// // Expect "loading" to show
	const loading = screen.getByText(/loading/i);
	expect(loading).toBeInTheDocument();

	// check confirmation page text
	// this one is async because there is a POST request to server in between summary
	//    and confirmation pages
	const thankYouHeader = await screen.findByRole('heading', {
		name: /thank you/i,
	});
	expect(thankYouHeader).toBeInTheDocument();

	// expect that loading has disappeared
	const notLoading = screen.queryByText(/loading/i);
	expect(notLoading).not.toBeInTheDocument();

	const orderNumber = await screen.findByText(/order number/i);
	expect(orderNumber).toBeInTheDocument();

	const newOrderButton = screen.getByRole("button", { name: /new Order/i });
	userEvent.click(newOrderButton);

	// //check subtotals have been reset
	const totalToppings = screen.getByText("Toppings total: $", { exact: false });
	expect(totalToppings).toHaveTextContent("0.00");

	const totalScoops = screen.getByText("Scoops total: $", { exact: false });
	expect(totalScoops).toHaveTextContent("0.00");

	// await anything to avoid tests errors
	await screen.findByRole("spinbutton", { name: "Vanilla" });
	await screen.findByRole("checkbox", { name: "Cherries" });
});
//TODO: React code
test("Topping header is not on summary page if no toppings ordered", async () => {
	render(<App />);
  
	const vanillaInput = await screen.findByRole("spinbutton", {
	  name: "Vanilla",
	});
	userEvent.clear(vanillaInput);
	userEvent.type(vanillaInput, "1");
  
	const chocolateInput = screen.getByRole("spinbutton", { name: "Chocolate" });
	userEvent.clear(chocolateInput);
	userEvent.type(chocolateInput, "2");
  
	const orderSummaryButton = screen.getByRole("button", {
	  name: /order sundae/i,
	});
  
	userEvent.click(orderSummaryButton);
	const summaryHeading = screen.getByRole("heading", {
	  name: /order summary/i,
	});
	expect(summaryHeading).toBeInTheDocument();
  
	const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" });
	expect(scoopsHeading).toBeInTheDocument();
  
	const toppingsHeading = screen.queryByRole("heading", {
	  name: /toppings/i,
	});
	expect(toppingsHeading).not.toBeInTheDocument();
  });