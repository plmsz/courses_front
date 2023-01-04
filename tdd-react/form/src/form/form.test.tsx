import React from 'react';
import Form from './form';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
  it('should display validation messages', () => {
    render(<Form />);
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/the name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/the size is required/i)).toBeInTheDocument();
    // expect(screen.getByText(/the type is required/i)).toBeInTheDocument();
  });
});
