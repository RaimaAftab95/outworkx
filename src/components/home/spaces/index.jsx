import React from "react";
import Heading from "../../shared/Heading";
import Button from "../../ui/Button";
import Space from "./Space";

const Spaces = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading>Newest Flexible Office Spaces</Heading>

        <div className="mt-[60px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
          <Space />
        </div>

        <div className="mt-11 flex flex-col gap-9 justify-center items-center text-center">
          <h2 className="text-[25px] leading-[25px]">
            Continue exploring more trending places
          </h2>

          <Button to="/spaces">Show More</Button>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
