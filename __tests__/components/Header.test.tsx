// Header.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/app/components/Header/Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('displays the logo image', () => {
    render(<Header />);
    const logoElement = screen.getByRole('img', { name: 'logo' });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/logo.svg');
  });

  test('displays the About button', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('displays the Workplace dropdown', () => {
    render(<Header />);
    const workplaceButton = screen.getByText('Workplace');
    expect(workplaceButton).toBeInTheDocument();
    fireEvent.click(workplaceButton);
    expect(screen.getByTestId('workplaceIsa')).toBeInTheDocument();
    expect(screen.getByTestId('workplacePension')).toBeInTheDocument();
  });

  test('displays the Retail dropdown with LinkedButton', () => {
    render(<Header />);
    const retailButton = screen.getByText('Retail');
    expect(retailButton).toBeInTheDocument();
    fireEvent.click(retailButton);
    expect(screen.getByTestId('ISA/retail/isa')).toBeInTheDocument();
    const linkedButton = screen.getByTestId('ISA/retail/isa');
    expect(linkedButton.closest('a')).toHaveAttribute('href', '/retail/isa');
    expect(linkedButton.closest('a')).toHaveClass('justify-between');
    expect(screen.getByTestId('retailPension')).toBeInTheDocument();
    expect(screen.getByText('Coming soon!')).toBeInTheDocument();
  });

  test('displays the Tools & More button', () => {
    render(<Header />);
    expect(screen.getByText('Tools & More')).toBeInTheDocument();
  });

  test('displays the Login button', () => {
    render(<Header />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('displays the Sign Up button', () => {
    render(<Header />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
