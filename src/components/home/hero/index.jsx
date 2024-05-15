import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section>
      <div className="container min-h-screen rounded-32 py-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-black leading-60 sm:leading-72 md:leading-82 lg:leading-95">
          Find Your Next <br />
          Coworking Office
        </h2>
        <h4 className="text-xl sm:text-2xl text-black leading-35 font-normal mt-6 mb-10">
          Explore the workspaces
        </h4>

        <SearchBar />
        <p className="text-white mt-9 font-medium text-xl">
          The World's Largest Coworking Space Marketplace | Search & Get Quotes
          Today
        </p>
      </div>
    </section>
  );
}
