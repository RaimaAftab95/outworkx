import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/shared/Heading";
import Button from "../components/ui/Button";

const ReserveSpace = () => {
  return (
    <main className="py-10 text-primary/70">
      <div className="container">
        <div className="flex items-center gap-7">
          <Link href="/spaces/single-space">
            <img src="/images/icons/right-arrow-lg.png" alt="icon" />
          </Link>
          <Heading>Reserve space</Heading>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-20 sm:gap-28">
          <div>
            <h3 className="text-[35px] leading-[42px]">Your trip</h3>

            <div className="text-[22px] leading-[32px] mt-14 flex flex-col gap-12">
              <div
                className="flex items-center justify-between 
              gap-5 flex-wrap"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold">People</span>
                  <span>3</span>
                </div>
                <button className="font-bold underline">Edit</button>
              </div>
              <div
                className="flex items-center justify-between 
              gap-5 flex-wrap"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Date</span>
                  <span>Dec 13-18</span>
                </div>
                <button className="font-bold underline">Edit</button>
              </div>
            </div>

            <div className="mt-14">
              <Button className="w-full">Confirm reservation</Button>
            </div>
          </div>

          <div className="bg-white px-10 py-12 border border-gray rounded-[25px] h-fit">
            <div className="flex flex-col sm:flex-row justify-between gap-6 pb-4 border-b border-gray">
              <div className="w-full sm:w-[40%]">
                <img
                  className="w-full rounded-[25px]"
                  src="/images/spaces/8.jpg"
                  alt="space"
                />
              </div>
              <div className="w-full sm:w-[55%] flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-[32px]">
                  Reservation
                </h3>
                <p className="text-lg leading-[32px]">
                  Coworking Space: Corporate Suites Rockefeller Center in New
                  York City
                </p>
                <div className="flex items-center flex-wrap gap-2 text-xl text-primary font-bold">
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/star-lg.png" alt="" />
                    <span>4.86</span>
                  </div>
                  <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  <span>300 Reviews</span>
                </div>
              </div>
            </div>

            <div className="py-8 border-b border-gray">
              <h3 className="text-[25px] leading-[30px] font-normal">
                Price details
              </h3>
              <div className="mt-6 flex flex-col gap-4 text-xl font-medium leading-[32px]">
                <div className="flex items-center justify-between gap-5 flex-wrap">
                  <span className="underline">$19 X 5 People</span>
                  <span>$95.00</span>
                </div>
                <div className="flex items-center justify-between gap-5 flex-wrap">
                  <span className="underline">Our fee</span>
                  <span>$10.00</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 flex-wrap">
              <h3 className="text-[25px] mt-6 leading-[30px] font-normal">
                Total (USD)
              </h3>
              <h3 className="text-[20px] mt-6 leading-[30px] font-bold">
                $105.38
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReserveSpace;
