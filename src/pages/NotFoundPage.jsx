import React from 'react';
import { Link } from 'react-router-dom';
import { Lead, H1 } from '../components/primitives/typography';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <H1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform select-none text-50vw leading-none text-gray-200 opacity-50 sm:text-50vw md:text-30vw lg:text-15vw xl:text-20vw">
          404
        </H1>
        <main className="relative z-10 flex flex-col items-center">
          <Lead className="mt-4 text-lg text-gray-800 sm:text-xl md:text-2xl">
            So sorry,
          </Lead>
          <Lead className="text-lg text-gray-800 sm:text-xl md:text-2xl">
            we couldn’t find what you were looking for...
          </Lead>
          <Link
            to="/"
            className="mt-6 rounded-full bg-black px-4 py-1.5 text-base text-white transition-all hover:opacity-60 sm:text-lg md:text-xl"
          >
            Back to the home page →
          </Link>
        </main>
      </div>
    </>
  );
}
