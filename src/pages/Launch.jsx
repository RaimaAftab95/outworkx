import React from 'react';

const Launch = () => {
  return (
    <main>
      <div className="container min-h-screen flex flex-col items-center justify-center gap-5">
        <h2 className="text-center text-6xl leading-10 sm:text-7xl sm:leading-10">
          Cooking our website
        </h2>
        <p className="text-primary text-center text-2xl leading-9">
          we are going to launch our website very soon!
        </p>
      </div>

      <div className="flex justify-center gap-5 items-start flex-wrap">
        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/linkedin-2.png" alt="" />
        </div>
        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/facebook-2.png" alt="" />
        </div>
        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow cursor-pointer">
          <img src="/images/icons/instagram-2.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Launch;
