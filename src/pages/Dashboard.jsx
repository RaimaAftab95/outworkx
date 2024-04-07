import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Footer from '../components/shared/Footer';
import Heading from '../components/shared/Heading';

const Dashboard = () => {
  return (
    <main className="pt-10 text-primary/70">
      <div className="container pb-20">
        <div className="flex items-center gap-5 justify-between flex-wrap">
          <Heading>Dashboard</Heading>

          <div className="flex items-center gap-10 flex-wrap">
            <div className="border border-primary rounded-lg px-5 flex items-center justify-between gap-2 w-full sm:w-[300px]">
              <select className="w-full py-[13px] outline-none text-xl leading-[47px] bg-transparent">
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
            <div className="border border-primary rounded-lg px-5 flex items-center justify-between gap-2 w-full sm:w-[300px]">
              <input
                type="text"
                className="w-full outline-none text-xl leading-[47px]"
                placeholder="Search"
              />
              <img src="/images/icons/search-dark.png" alt="icon" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-14">
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                Complete booking
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">03</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                No show off
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">127</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                Total Revenue
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">$127,000</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                Active Users
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">60</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                Total Bookings
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">127</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] px-5 py-4 rounded-2xl">
              <h4 className="text-xl leading-[36px] text-primary/70">
                Pending Bookings
              </h4>
              <div className="mt-[30px] mb-8 flex items-center gap-6">
                <h2 className="text-[46px] leading-[24px]">03</h2>
                <img src="/images/icons/static.png" alt="static" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[350px] h-fit bg-[#F2F2F2] px-5 py-4 rounded-2xl">
            <h4 className="text-xl leading-[36px] text-primary/70">
              Bookings Breakdown
            </h4>

            <div className="w-[150px] h-[150] mx-auto mt-4">
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
              <div className="flex items-center justify-between gap-2 flex-wrap text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#E6E6E6] rounded-[7px]" />
                  <span className="font-semibold font-nohemi text-primary/70">
                    confirmed
                  </span>
                </div>
                <span>220 bookings</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#CBCBCB] rounded-[7px]" />
                  <span className="font-semibold font-nohemi text-primary/70">
                    Pending
                  </span>
                </div>
                <span>48 bookings</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-sm uppercase">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#919191] rounded-[7px]" />
                  <span className="font-semibold font-nohemi text-primary/70">
                    Cancelled
                  </span>
                </div>
                <span>32 bookings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-primary/70 overflow-x-auto pb-5">
          <table className="min-w-[1020px] lg:w-full">
            <thead className="bg-[#F2F2F2] !rounded-[15px]">
              <th className="font-bold text-primary leading-[36px] py-8 pl-[30px] text-left">
                Space
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                Location
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                Access Hours
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                Reservation Date
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                No of People
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                Price
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 text-left">
                Table
              </th>
              <th className="font-bold text-primary leading-[36px] py-8 pr-5 text-left">
                Guests
              </th>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
              </tr>
              <tr>
                <td className="flex items-center gap-[30px] pt-[30px]">
                  <img
                    className="w-[72px] h-[72px] rounded-[20px]"
                    src="/images/spaces/1.jpg"
                    alt="space"
                  />
                  <p>
                    Coworking Space: Corporate Suites Rockefeller Center in New
                    York City
                  </p>
                </td>
                <td className="pt-[30px]">234 Hickle Heights</td>
                <td className="pt-[30px]">09:00 AM- 06:00 PM</td>
                <td className="pt-[30px]">12/7/2023</td>
                <td className="pt-[30px]">05</td>
                <td className="pt-[30px]">$140</td>
                <td className="pt-[30px]">01</td>
                <td className="pt-[30px]">01</td>
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
