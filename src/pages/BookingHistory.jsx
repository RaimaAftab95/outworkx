import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/shared/Heading";

const BookingHistory = () => {
  return (
    <main className="py-10 text-primary/70">
      <div className="container">
        <div className="flex items-center gap-5 justify-between flex-wrap">
          <div className="flex items-center gap-7">
            <Link href="/spaces/single-space">
              <img src="/images/icons/right-arrow-lg.png" alt="icon" />
            </Link>
            <Heading>Booking history</Heading>
          </div>

          <div className="flex items-center gap-10 flex-wrap">
            <div className="border border-primary rounded-lg px-5 flex items-center justify-between gap-2 w-full sm:w-[300px]">
              <input
                type="date"
                className="w-full outline-none text-xl leading-[47px]"
                placeholder="Choose"
              />
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

        <div className="mt-10 text-primary/70 overflow-x-auto pb-5">
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
    </main>
  );
};

export default BookingHistory;
