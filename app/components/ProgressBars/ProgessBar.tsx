import React from 'react';

interface ProgressBar {
  steps: string[];
  currentStep: number;
}

const ProgressBar = ({ steps, currentStep }: ProgressBar) => {
  return (
    <ul className="steps text-white">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step ${index <= currentStep ? 'step-accent' : ''}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
