import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LinkedButton from '@/app/components/Buttons/LinkedButton';

describe('LinkedButton Component', () => {
  const mockProps = {
    text: 'Click Me',
    link: '/test-link',
    style: 'btn-primary'
  };

  test('renders without crashing', () => {
    render(<LinkedButton {...mockProps} />);
  });

  test('displays the correct text', () => {
    render(<LinkedButton {...mockProps} />);
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();
  });

  test('has the correct href attribute', () => {
    render(<LinkedButton {...mockProps} />);
    expect(screen.getByText(mockProps.text).closest('a')).toHaveAttribute(
      'href',
      mockProps.link
    );
  });

  test('applies the correct style', () => {
    render(<LinkedButton {...mockProps} />);
    expect(screen.getByText(mockProps.text).closest('a')).toHaveClass(
      mockProps.style
    );
  });
});
