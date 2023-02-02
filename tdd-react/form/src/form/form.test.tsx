import React from 'react';
import Form from './form';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  CREATED_STATUS,
  ERROR_SERVER_STATUS,
  INVALID_REQUEST_STATUS,
} from '../constants/httpStatus';

const server = setupServer(
  rest.post('/products', async (req, res, ctx) => {
    const { name, size, type } = await req.json();
    if (name && size && type) {
      return res(ctx.status(CREATED_STATUS));
    }
    return res(ctx.status(ERROR_SERVER_STATUS));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('when the form is mounted', () => {
  it('should render the form', () => {
    render(<Form />);
    expect(
      screen.getByRole('heading', { name: /create product/i })
    ).toBeInTheDocument();
  });
  it('must have the fields: name, size, type (electronic, furniture, clothing)', () => {
    render(<Form />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/electronic/i)).toBeInTheDocument();
    expect(screen.getByText(/furniture/i)).toBeInTheDocument();
    expect(screen.getByText(/clothing/i)).toBeInTheDocument();
  });
  it('should exist the submit button', () => {
    render(<Form />);
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
describe('when the user submits the form without values', () => {
  it('should display validation messages', async () => {
    render(<Form />);
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/the name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/the size is required/i)).toBeInTheDocument();
    expect(screen.getByText(/the type is required/i)).toBeInTheDocument();
  });
});
describe('when the user blurs an empty field', () => {
  it('should display validation error messages for input name', () => {
    render(<Form />);
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText(/name/i), {
      name: /name/i,
      value: '',
    });
    expect(screen.getByText(/the name is required/i)).toBeInTheDocument();
  });
  it('should display validation error messages for input size', () => {
    render(<Form />);
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText(/size/i), {
      name: /size/i,
      value: '',
    });
    expect(screen.getByText(/the size is required/i)).toBeInTheDocument();
  });
  it('should display validation error messages for input type', () => {
    render(<Form />);
    expect(screen.queryByText(/the type is required/i)).not.toBeInTheDocument();
    fireEvent.blur(screen.getByLabelText(/type/i), {
      name: /type/i,
      value: '',
    });
    expect(screen.getByText(/the type is required/i)).toBeInTheDocument();
  });
});
describe('when the user clicks on the submit button', () => {
  it('should the submit button be disabled until the request is done', async () => {
    render(<Form />);
    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(button).toBeDisabled();

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });
  it('should display the success message and clear the form', async () => {
    render(<Form />);
    const inputName = screen.getByLabelText(/name/i);
    const inputSize = screen.getByLabelText(/size/i);
    const selectType = screen.getByLabelText(/type/i);

    fireEvent.change(inputName, {
      target: { value: 'foo' },
    });
    fireEvent.change(inputSize, {
      target: { value: '10' },
    });
    fireEvent.change(selectType, {
      target: { value: 'electronic' },
    });

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/product stored/i)).toBeInTheDocument();
    });

    expect(inputName).toHaveValue('');
    expect(inputSize).toHaveValue('');
    expect(selectType).toHaveValue('');
  });
});

describe('when the user submits the form and server throws an error', () => {
  it(`should display the error message 'Unexpected error, please try again'`, async () => {
    render(<Form />);

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(/unexpected error, please try again/i)
      ).toBeInTheDocument();
    });
  });
});
describe('when the user submits the form returns a invalid requrest error', () => {
  it(`should display the error message 'the form is invalid, the fields [field, ...fieldN]are required`, async () => {
    render(<Form />);
    server.use(
      rest.post('/products', (req, res, ctx) => {
        return res(
          ctx.status(INVALID_REQUEST_STATUS),
          ctx.json({
            message:
              'The form is invalid, the fields name, size, type are required',
          })
        );
      })
    );
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(
          /the form is invalid, the fields name, size, type are required/i
        )
      ).toBeInTheDocument();
    });
  });
});

describe('when the user submits the form and display the error message "connection error, please try later"', () => {
  it('the form page must display the error message "connection error, please try later"', async () => {
    render(<Form />);
    rest.post('/products', (req, res, ctx) => {
      return res.networkError('Failed to connect');
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    await screen.findByText(/connection error, please try later/i);
  });
});
