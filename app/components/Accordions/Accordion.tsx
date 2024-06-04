import React from 'react';

interface AccordionProps {
  data: {
    [key: string]: string;
  };
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className="max-w-4xl place-self-center grid grid-flow-row auto-rows-max gap-y-4 py-4">
      {Object.entries(data).map(([key, value], index) => (
        <div key={index} className="collapse collapse-arrow bg-base-100">
          <input type="radio" name="accordion" />
          <div className="collapse-title text-xl font-medium">{key}</div>
          <div className="collapse-content">
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
