import {
	render,
	screen,
} from "../../../tests-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../../OrderEntry";

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

	expect(toppingsSubtotal).toHaveTextContent("0.00");

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

describe("grand total", () => {
	test("grand total updates properly if scoop is added first", async () => {
		render(<OrderEntry />);

		const grandTotal = screen.getByRole("heading", {
			name: /grand total: \$/i,
		});

		expect(grandTotal).toHaveTextContent("0.00");

		const vanillaInput = await screen.findByRole("spinbutton", {
			name: "Vanilla",
		});

		userEvent.clear(vanillaInput);
		userEvent.type(vanillaInput, "2");

		const cherriesCheckbox = await screen.findByRole("checkbox", {
			name: "Cherries",
		});

		userEvent.click(cherriesCheckbox);

		expect(grandTotal).toHaveTextContent("5.50");
	});

	test("grand total updates properly if topping is added first", async () => {
		render(<OrderEntry />);

		const grandTotal = screen.getByRole("heading", {
			name: /grand total: \$/i,
		});

		const cherriesCheckbox = await screen.findByRole("checkbox", {
			name: "Cherries",
		});

		userEvent.click(cherriesCheckbox);

		const vanillaInput = await screen.findByRole("spinbutton", {
			name: "Vanilla",
		});

		userEvent.clear(vanillaInput);
		userEvent.type(vanillaInput, "2");

		expect(grandTotal).toHaveTextContent("5.50");
	});

	test("grand total updates properly if item is removed", async () => {
		render(<OrderEntry />);

		// add cherries
		const cherriesCheckbox = await screen.findByRole("checkbox", {
			name: "Cherries",
		});
		userEvent.click(cherriesCheckbox);
		// grand total $1.50

		// update vanilla scoops to 2; grand total should be $5.50
		const vanillaInput = await screen.findByRole("spinbutton", {
			name: "Vanilla",
		});
		userEvent.clear(vanillaInput);
		userEvent.type(vanillaInput, "2");

		// remove 1 scoop of vanilla and check grand total
		userEvent.clear(vanillaInput);
		userEvent.type(vanillaInput, "1");

		// check grand total
		const grandTotal = screen.getByRole("heading", {
			name: /grand total: \$/i,
		});
		expect(grandTotal).toHaveTextContent("3.50");

		// remove cherries and check grand total
		userEvent.click(cherriesCheckbox);
		expect(grandTotal).toHaveTextContent("2.00");
	});
});
