import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '@/app/components/ProgressBars/ProgessBar';

describe('ProgressBar Component', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

  test('renders without crashing', () => {
    render(<ProgressBar steps={steps} currentStep={0} />);
  });

  test('displays the correct number of steps', () => {
    render(<ProgressBar steps={steps} currentStep={0} />);
    const stepElements = screen.getAllByRole('listitem');
    expect(stepElements).toHaveLength(steps.length);
  });

  test('highlights the correct steps based on currentStep', () => {
    const currentStep = 2;
    render(<ProgressBar steps={steps} currentStep={currentStep} />);
    const stepElements = screen.getAllByRole('listitem');

    stepElements.forEach((stepElement, index) => {
      if (index <= currentStep) {
        expect(stepElement).toHaveClass('step-accent');
      } else {
        expect(stepElement).not.toHaveClass('step-accent');
      }
    });
  });

  test('displays the correct step text', () => {
    render(<ProgressBar steps={steps} currentStep={0} />);
    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });
});
