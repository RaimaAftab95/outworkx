import React from "react";

const Review = () => {
  return (
    <div className="flex justify-between gap-4">
      <div className="w-[60px] h-[60px] bg-[#F2F2F2] rounded-full"></div>
      <div className="flex-1">
        <h4 className="text-[17px] font-bold">Aslam</h4>
        <span className="text-[15px]">Hyderabad, Pakistan</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <img src="/images/icons/star.png" alt="" />
            <img src="/images/icons/star.png" alt="" />
            <img src="/images/icons/star.png" alt="" />
            <img src="/images/icons/star.png" alt="" />
            <img src="/images/icons/star.png" alt="" />
          </div>
          <div className="w-1 h-1 rounded-full bg-primary" />
          <span className="text-[17px] font-bold text-primary">October 22</span>
        </div>
        <p className="text-lg leading-[47px]">
          Beautiful setting with clean and comfty rooms. Great price too. would
          recommend.
        </p>

        <button className="text-lg font-bold leading-[47px] text-primary cursor-pointer underline">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Review;
