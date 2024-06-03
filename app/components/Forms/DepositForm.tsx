'use client ';

import DepositAction from '@/actions/DepositAction';

const DepositForm = async ({ fundUuid }: { fundUuid: string }) => {
  const depositActionWithFundUuid = DepositAction.bind(null, fundUuid);

  return (
    <form action={depositActionWithFundUuid} className="self-center">
      <div className="flex">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.3 5.3 0 0 1 2.103.465V2.456A5.6 5.6 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4z" />
          </svg>
          <input
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            type="number"
            required
          />
        </label>
        <button className="btn text-white btn-accent mx-4" type="submit">
          Deposit Amount
        </button>
      </div>
    </form>
  );
};

export default DepositForm;
