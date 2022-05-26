import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import ScoopOption from '../ScoopOption';
test('box turns red if user type invalid number of scoops', async () => {
    render(<ScoopOption name='' imagePath='' updateItemCount={jest.fn()} />);

    const vanillaInput = screen.getByRole('spinbutton');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '-1');
    expect(vanillaInput).toHaveClass('is-invalid');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1.5');
    expect(vanillaInput).toHaveClass('is-invalid');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '11');
    expect(vanillaInput).toHaveClass('is-invalid');

    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(vanillaInput).not.toHaveClass('is-invalid');

});