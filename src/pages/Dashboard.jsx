import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';

const Dashboard = () => {
  return (
    <main className="pt-10 text-primary/70">
      <div className="container pb-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <Heading>Dashboard</Heading>

          <div className="flex flex-wrap items-center gap-10">
            <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-primary px-5 sm:w-80">
              <select className="w-full bg-transparent py-3.5 text-xl leading-10 outline-none">
                <option value="" className="w-full px-5">
                  Select
                </option>
                <option value="" className="w-full px-5">
                  Weekly
                </option>
                <option value="" className="w-full px-5">
                  Monthly
                </option>
                <option value="" className="w-full px-5">
                  Yearly
                </option>
              </select>
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-lg border border-primary px-5 sm:w-72">
              <input
                type="text"
                className="w-full text-xl leading-10 outline-none"
                placeholder="Search"
              />
              <img src="/images/icons/search-dark.png" alt="icon" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-6 lg:flex-row">
          <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">
                Complete booking
              </h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">03</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">No show off</h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">127</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">
                Total Revenue
              </h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">$127,000</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">
                Active Users
              </h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">60</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">
                Total Bookings
              </h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">127</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="rounded-2xl bg-[#F2F2F2] px-5 py-4">
              <h4 className="text-xl leading-9 text-primary/70">
                Pending Bookings
              </h4>
              <div className="mb-8 mt-8 flex items-center gap-6">
                <h2 className="text-5xl leading-6">03</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
          </div>
          <div className="h-fit w-full rounded-2xl bg-[#F2F2F2] px-5 py-4 sm:w-96">
            <h4 className="text-xl leading-9 text-primary/70">
              Bookings Breakdown
            </h4>

            <div className="mx-auto mt-4 h-36 w-36">
              <PieChart
                data={[
                  { title: 'confirmed', value: 220, color: '#E6E6E6' },
                  { title: 'pending', value: 48, color: '#CBCBCB' },
                  { title: 'cancelled', value: 32, color: '#919191' }
                ]}
                lineWidth={25}
                rounded
                animate
                background="#ddd"
              />
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md bg-[#E6E6E6]" />
                  <span className="font-nohemi font-semibold text-primary/70">
                    confirmed
                  </span>
                </div>
                <span>220 bookings</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md bg-[#CBCBCB]" />
                  <span className="font-nohemi font-semibold text-primary/70">
                    Pending
                  </span>
                </div>
                <span>48 bookings</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-md bg-[#919191]" />
                  <span className="font-nohemi font-semibold text-primary/70">
                    Cancelled
                  </span>
                </div>
                <span>32 bookings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-x-auto pb-5 text-primary/70">
          <table className="min-w-[1020px] lg:w-full">
            <thead className="!rounded-2xl bg-[#F2F2F2]">
              <th className="py-8 pl-8 text-left font-bold leading-9 text-primary">
                Space
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                Location
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                Access Hours
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                Reservation Date
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                No of People
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                Price
              </th>
              <th className="py-8 text-left font-bold leading-9 text-primary">
                Table
              </th>
              <th className="py-8 pr-5 text-left font-bold leading-9 text-primary">
                Guests
              </th>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-7 pt-7">
                  <img
                    className="h-20 w-20 rounded-2xl"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-7">234 Hickle Heights</td>
                <td className="pt-7">09:00 AM- 06:00 PM</td>
                <td className="pt-7">12/7/2023</td>
                <td className="pt-7">05</td>
                <td className="pt-7">$140</td>
                <td className="pt-7">01</td>
                <td className="pt-7">01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Dashboard;
