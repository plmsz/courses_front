import { render, screen } from "@testing-library/react";
import Options from "../Options";

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

	console.log(altText);

	expect(altText).toEqual([
		"Cherries Topping",
		"M&Ms Topping",
		"Hot fudge Topping",
	]);
});
