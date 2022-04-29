import { render, screen } from "../../../tests-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoops changes", async () => {
	render(<Options optionType={"scoops"} />);

	//total starts out $0.00
	const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });

	expect(scoopsSubtotal).toHaveTextContent("0.00");

	//vanilla updates to 1

	const vanillaInput = await screen.findByRole("spinbutton", {
		name: "Vanilla",
	});

	userEvent.clear(vanillaInput);
	userEvent.type(vanillaInput, "1");

	expect(scoopsSubtotal).toHaveTextContent("2.00");

	//chocolate update to 2
	const chocolateInput = await screen.findByRole("spinbutton", {
		name: "Chocolate",
	});

	userEvent.clear(chocolateInput);
	userEvent.type(chocolateInput, "2");

	expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings total update", async () => {
	render(<Options optionType="toppings" />);

	const cherriesCheckbox = await screen.findByRole("checkbox", {
		name: "Cherries",
	});

	const toppingsSubtotal = screen.getByText("Toppings total: $", {
		exact: false,
	});

	expect(toppingsSubtotal).toHaveTextContent("0.00")

	userEvent.click(cherriesCheckbox);

	expect(toppingsSubtotal).toHaveTextContent("1.50");

	const mmsCheckbox = await screen.findByRole("checkbox", {
		name: "M&Ms",
	});

	userEvent.click(mmsCheckbox);

	expect(toppingsSubtotal).toHaveTextContent("3.00");

	userEvent.click(cherriesCheckbox);

	expect(toppingsSubtotal).toHaveTextContent("1.50");
});
