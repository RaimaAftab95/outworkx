import React from 'react';

const Launch = () => {
  return (
    <main>
      <div className="container min-h-[80vh] flex flex-col items-center justify-center gap-5">
        <h2 className="text-center text-[60px] leading-[70px] sm:text-[84px] sm:leading-[95px]">
          Cooking our website
        </h2>
        <p className="text-primary text-center text-[30px] leading-[37px]">
          we are going to launch our website very soon!
        </p>
      </div>

      <div className="flex justify-center gap-5 items-start flex-wrap">
        <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/linkedin-2.png" alt="" />
        </div>
        <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/facebook-2.png" alt="" />
        </div>
        <div className="bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/instagram-2.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Launch;
