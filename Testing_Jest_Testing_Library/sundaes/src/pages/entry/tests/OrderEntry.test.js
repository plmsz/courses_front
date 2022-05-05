import OrderEntry from "../../OrderEntry";
import {
	render,
	screen,
	waitFor,
} from "../../../tests-utils/testing-library-utils";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("handles error for scoops and toppings routes", async () => {
	server.resetHandlers(
		rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
			res(ctx.status(500))
		),
		rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
			res(ctx.status(500))
		)
	);
//it's not necessary here because setphase is not called
	render(<OrderEntry setOrderPhase={jest.fn()}/>);

	await waitFor(async () => {
		const alerts = await screen.findAllByRole("alert");
		expect(alerts).toHaveLength(2);
	});
});
