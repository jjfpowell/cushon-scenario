import Accordion from '@/app/components/Accordions/Accordion';
import DepositForm from '@/app/components/Forms/DepositForm';
import ProgressBar from '@/app/components/ProgressBars/ProgessBar';
import { Fund } from '@/types/Fund';
import React from 'react';

async function getFundData(uuid: string) {
  const res = await fetch(`http://localhost:3000/api/funds?uuid=${uuid}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const IsaDeposit = async ({ params }: { params: { uuid: string } }) => {
  const fundData: Fund = await getFundData(params.uuid);

  const accordionData = {
    'Fund Name': fundData.name,
    'Fund Description': fundData.desc,
    ISIN: fundData.isin
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary rounded-box grid grid-flow-row auto-rows-max">
        <p className="text-4xl place-self-center p-4 text-white font-semibold">
          Deposit Funds
        </p>
        <ProgressBar
          steps={['Select Fund', 'Deposit', 'Success']}
          currentStep={1}
        />
        <div className="flex flex-row w-full justify-center pt-4">
          <p className="text-center p-4 text-white">Please enter an amount:</p>
          <DepositForm fundUuid={fundData.uuid} />
        </div>
        <p className="place-self-center text-center max-w-4xl p-4 text-white">
          This amount you are considering paying in now. The maximum you can
          invest is £20,000 which is the total ISA allowance for the tax year
          2024/25.
        </p>
        <p className="text-2xl place-self-center text-white font-semibold">
          About your chosen Investment:
        </p>
        <Accordion data={accordionData} />
      </div>
    </div>
  );
};

export default IsaDeposit;
