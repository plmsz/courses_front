import { render, screen } from "../../../tests-utils/testing-library-utils";
import Options from "../Options";
import userEvent from '@testing-library/user-event';

test("displays image for each scoop option from server", async () => {
	render(<Options optionType="scoops" />);

	//find images
	//$ it ends with scoop
	const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
	expect(scoopImages).toHaveLength(2);

	//confirm alt text of images
	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(["Chocolate Scoop", "Vanilla Scoop"]);
});

test("displays image for each topping from server", async () => {
	render(<Options optionType="toppings" />);

	const toppingImages = await screen.findAllByRole("img", {
		name: /topping$/i,
	});

	expect(toppingImages).toHaveLength(3);

	const altText = toppingImages.map((element) => element.alt);

	expect(altText).toEqual([
		"Cherries Topping",
		"M&Ms Topping",
		"Hot fudge Topping",
	]);
});

test(`subtotal scoops it doesn't change after type invalid value for scoops`, async () => {
	render(<Options optionType='scoops' />);


	const input = await screen.findByRole('spinbutton', { name: /vanilla/i });

	userEvent.clear(input);
	userEvent.type(input, '-1');

	const subtotal = screen.getByText('Scoops total: $0.00');
	expect(subtotal).toBeInTheDocument();


});