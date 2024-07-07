import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="leading-60 sm:leading-72 md:leading-82 lg:leading-95 text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
        Find Your Next <br />
        Coworking Office
      </h2>
      <h4 className="leading-35 mb-10 mt-6 text-xl font-normal sm:text-2xl">
        Explore the workspaces
      </h4>

      <div className="sm:bg-gray mx-auto flex w-full items-center justify-center gap-2 rounded-full py-2 sm:flex-row lg:max-w-2xl">
        <div className="lg:w-11/24 flex w-full items-center gap-2 rounded-full bg-white px-10 py-3 sm:w-5/12 sm:px-5 md:px-10">
          <h3 className="mt-1 text-xl">Find</h3>
          <input
            className="w-full px-2 text-lg outline-none"
            type="text"
            placeholder="Cafe"
          />
        </div>
        <div className="lg:w-11/24 flex w-full items-center gap-2 rounded-full bg-white px-10 py-3 sm:w-5/12 sm:px-5 md:px-10">
          <h3 className="mt-1 text-xl">Where</h3>
          <input
            className="w-full px-2 text-lg outline-none"
            type="text"
            placeholder="Karachi"
          />
        </div>
        <div className="bg-primary flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition-all hover:opacity-60">
          <MagnifyingGlassIcon className="h-8" />
        </div>
      </div>

      <p className="mt-9 text-xl">
        Pakistan&apos;s largest coworking space marketplace
      </p>
    </section>
  );
}
