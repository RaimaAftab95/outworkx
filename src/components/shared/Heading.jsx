import React from "react";

const Heading = ({ children }) => {
  return (
    <h2 className="text-[35px] leading-[40px] sm:text-[40px] sm:leading-[45px] md:text-[44px] md:leading-[50px]">
      {children}
    </h2>
  );
};

export default Heading;
