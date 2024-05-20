import React from 'react';

const Launch = () => {
  return (
    <main>
      <div className="container flex min-h-screen flex-col items-center justify-center gap-5">
        <h2 className="text-center text-6xl leading-10 sm:text-7xl sm:leading-10">
          Cooking our website
        </h2>
        <p className="text-center text-2xl leading-9 text-primary">
          we are going to launch our website very soon!
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-5">
        <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow">
          <img src="/images/icons/linkedin-2.png" alt="" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow">
          <img src="/images/icons/facebook-2.png" alt="" />
        </div>
        <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white shadow">
          <img src="/images/icons/instagram-2.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default Launch;
