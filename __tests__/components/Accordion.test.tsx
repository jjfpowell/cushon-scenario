import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Accordion from '@/app/components/Accordions/Accordion';

describe('Accordion Component', () => {
  const mockData = {
    'Section 1': 'Content for section 1',
    'Section 2': 'Content for section 2'
  };

  test('renders without crashing', () => {
    render(<Accordion data={mockData} />);
  });

  test('renders the correct number of sections', () => {
    render(<Accordion data={mockData} />);
    const sections = screen.getAllByRole('radio');
    expect(sections).toHaveLength(Object.keys(mockData).length);
  });

  test('renders section titles and content correctly', () => {
    render(<Accordion data={mockData} />);
    Object.entries(mockData).forEach(([key, value]) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  test('expands the correct section when clicked', () => {
    render(<Accordion data={mockData} />);
    const sectionTitles = screen.getAllByRole('radio');
    sectionTitles.forEach((title, index) => {
      title.click();
      const content = screen.getByText(Object.values(mockData)[index]);
      expect(content).toBeVisible();
    });
  });
});
