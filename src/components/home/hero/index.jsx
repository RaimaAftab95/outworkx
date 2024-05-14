import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="mt-4">
      {/* style={{ backgroundImage: 'url(/images/hero-banner.png)' }} */}
      <div className="container min-h-[85vh] bg-no-repeat bg-cover rounded-[32px] py-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-[40px] leading-[50px] sm:text-[60px] sm:leading-[72px] md:text-[70px] md:leading-[82px] lg:text-[82px] lg:leading-[95px] text-black">
          Find Your Next <br />
          Coworking Office
        </h2>
        <h4 className="text-[30px] leading-[30px] sm:text-[35px] sm:leading-[35px] text-black font-normal mt-6 mb-10">
          Explore the workspaces
        </h4>

        <SearchBar />
        <p className="text-white mt-9 font-medium text-[22px]">
          The World's Largest Coworking Space Marketplace | Search & Get Quotes
          Today
        </p>
      </div>
    </section>
  );
}

// export default Hero;
