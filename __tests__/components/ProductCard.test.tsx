import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '@/app/components/Cards/ProductCard';

const mockProps = {
  imageUrl: 'https://example.com/product.jpg',
  title: 'Test Product',
  description: 'This is a test product description.',
  buttonText: 'Buy Now',
  redirectLink: '/buy-now'
};

describe('ProductCard Component', () => {
  test('renders without crashing', () => {
    render(<ProductCard {...mockProps} />);
  });

  test('displays the correct image', () => {
    render(<ProductCard {...mockProps} />);
    const imgElement = screen.getByAltText(mockProps.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.imageUrl);
  });

  test('displays the correct title', () => {
    render(<ProductCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  test('displays the correct description', () => {
    render(<ProductCard {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  test('renders the LinkedButton with correct props', () => {
    render(<ProductCard {...mockProps} />);
    const buttonElement = screen.getByText(mockProps.buttonText);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.closest('a')).toHaveAttribute(
      'href',
      mockProps.redirectLink
    );
    expect(buttonElement.closest('a')).toHaveClass(
      'btn text-white btn-primary'
    );
  });
});
