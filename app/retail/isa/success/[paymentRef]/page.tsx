import ProgressBar from '@/app/components/ProgressBars/ProgessBar';
import React from 'react';

const IsaDeposit = async ({ params }: { params: { paymentRef: string } }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary rounded-box grid grid-flow-row auto-rows-max">
        <p className="text-4xl place-self-center p-4 text-white font-semibold">
          Success! Welcome to your ISA...
        </p>
        <ProgressBar
          steps={['Select Fund', 'Deposit', 'Success']}
          currentStep={2}
        />
        <p className="place-self-center text-center pt-4 max-w-4xl text-white">
          Congratualtions! Your ISA has been successfully created please use the
          deposit reference to locate your account on signup.
        </p>
        <div className="card w-96 bg-white text-neutral-content my-4 place-self-center">
          <div className="card-body items-center text-center">
            <h1 className="card-title">Payment Reference</h1>
            <p className="text-4xl text-primary">{params.paymentRef}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsaDeposit;
