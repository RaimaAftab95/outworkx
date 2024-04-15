import React from 'react';

const TransactionItem = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex flex-wrap gap-14 items-center">
        <img src="/images/icons/transaction.png" alt="transaction" />
        <p className="text-2xl leading-[30px] font-semibold text-primary/70 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
          Coworking Space: Corporate Suites Rockefeller Center in New York City
        </p>
      </div>
      <span className="text-primary/70 text-2xl leading-[24px] font-bold">
        $140
      </span>
    </div>
  );
};

export default TransactionItem;
