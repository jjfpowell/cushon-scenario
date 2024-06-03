import ProductCard from '@/app/components/Cards/ProductCard';
import ProgressBar from '@/app/components/ProgressBars/ProgessBar';
import { Fund } from '@/types/Fund';
import React from 'react';

async function getAvailableFunds() {
  const res = await fetch('http://localhost:3000/api/funds', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const RetailIsa = async () => {
  const funds: Fund[] = await getAvailableFunds();
  const nextStep = '/retail/isa/deposit/';

  return (
    <div className="container mx-auto p-4">
      <div className="bg-primary rounded-box grid grid-flow-row auto-rows-max">
        <p className="text-4xl place-self-center p-4 text-white font-semibold">
          Retail ISA
        </p>
        <p className="place-self-center text-center max-w-4xl p-4 text-white">
          An ISA is an account that lets you hold cash and/or investments
          without having to pay tax on any interest, investment income or gains
          you make on your money. Setting up and ISA with Cushon is easy, simply
          select your funds and deposit an initial amount to get started.
        </p>
        <ProgressBar
          steps={['Select Fund', 'Deposit', 'Success']}
          currentStep={0}
        />
        <p className="place-self-center text-center max-w-4xl p-4 text-white">
          Explore our top rated funds below which spread your money across a
          specially selected range of top-rated funds from our impartial
          comparison tables.
        </p>
        <div className="pb-4 place-self-center">
          <div className="carousel carousel-center max-w-xl p-4 space-x-4 bg-neutral rounded-box">
            {funds.map((fund) => (
              <div key={fund.uuid} className="carousel-item">
                <ProductCard
                  imageUrl={fund.imgUrl}
                  title={fund.name}
                  description={fund.desc}
                  buttonText={'Select fund'}
                  redirectLink={nextStep.concat(fund.uuid)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailIsa;
