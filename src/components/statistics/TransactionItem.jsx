import React from 'react';

const TransactionItem = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex flex-wrap gap-14 items-center">
        <img src="/images/icons/transaction.png" alt="transaction" />
        <p className="text-2xl leading-7 font-semibold text-primary/70 w-2/3 sm:w-3/5 md:w-1/3 lg:w-2/5">
          Coworking Space: Corporate Suites Rockefeller Center in New York City
        </p>
      </div>
      <span className="text-primary/70 text-2xl leading-6 font-bold">$140</span>
    </div>
  );
};

export default TransactionItem;
