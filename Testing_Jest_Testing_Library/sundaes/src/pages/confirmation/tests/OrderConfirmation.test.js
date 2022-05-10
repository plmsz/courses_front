import OrderConfirmation from '../OrderConfirmation';
import { render, screen } from '../../../tests-utils/testing-library-utils';
import { server } from '../../../mocks/server';
import { rest } from 'msw';

//since OrderConrfimation calls the useOrderDetails we need to wrapp the provider or use utilstest
test('alert shows up when get error from server', async () => {
    server.resetHandlers(
        rest.post("http://localhost:3030/order", (req, res, ctx) => {
            return res(ctx.status(500));
        })

    );
    render(<OrderConfirmation setOrderPhase={jest.fn()} />);

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('An unexpected error ocurred. Please try again later')
});