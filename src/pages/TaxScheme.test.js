import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TaxSchemePages from './TaxSchemePages';

describe("<TaxSchemePages />", () => {
 
  test('render income input', () => {
    render(<TaxSchemePages />);
 
    const inputEl = screen.getByTestId("income-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });
 
});