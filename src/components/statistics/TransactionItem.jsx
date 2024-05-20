import React from 'react';

const TransactionItem = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex flex-wrap items-center gap-14">
        <img src="/images/icons/transaction.png" alt="transaction" />
        <p className="w-2/3 text-2xl font-semibold leading-7 text-primary/70 sm:w-3/5 md:w-1/3 lg:w-2/5">
          Coworking Space: Corporate Suites Rockefeller Center in New York City
        </p>
      </div>
      <span className="text-2xl font-bold leading-6 text-primary/70">$140</span>
    </div>
  );
};

export default TransactionItem;
