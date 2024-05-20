import React from 'react';
import { Chart } from 'react-google-charts';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';
import TransactionItem from '../components/statistics/TransactionItem';

const data = [
  ['', '', ''],
  ['Jan', 1000, 400],
  ['Feb', 1170, 460],
  ['Mar', 660, 1120],
  ['Apr', 660, 1120],
  ['May', 660, 1120],
  ['Jun', 660, 1120],
  ['Jul', 660, 1120],
  ['Aug', 1030, 540],
  ['Sep', 1030, 540],
  ['Nov', 1030, 540],
  ['Dec', 1030, 540]
];

const Statistics = () => {
  return (
    <main className="pt-10 text-primary/70">
      <div className="container pb-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Heading>Available Balance</Heading>
          <div className="flex items-center gap-3">
            <img src="/images/icons/top-up.png" alt="top-up" />
            <span className="leading-1/3 text-3xl font-bold text-primary">
              Top up
            </span>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl lg:leading-tight">
            Rs 127,000
          </h2>

          <div className="mt-24">
            <Heading>Statistics</Heading>

            <div className="chart mt-12 overflow-auto">
              <div className="min-w-96 pb-5">
                <Chart
                  chartType="Bar"
                  width="100%"
                  height="400px"
                  data={data}
                />
              </div>
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <Heading>Transactions</Heading>
                <button className="text-2xl font-bold leading-8 text-primary">
                  View all
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-8">
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
                <TransactionItem />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Statistics;
