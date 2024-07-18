import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { H1, H5, H4, P } from './primitives/typography';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center">
      <H1 className="py-2 !font-bold">Find Your Next Coworking Office</H1>
      <H4 className="py-2">Explore the workspaces</H4>

      <div className="mx-auto my-4 flex w-full flex-col items-center justify-center gap-2 rounded-3xl bg-secondary px-4 py-2 sm:flex-row sm:rounded-full sm:px-0 lg:max-w-2xl">
        <div className="lg:w-11/24 flex w-full items-center gap-2 rounded-full bg-white px-10 py-3 sm:w-5/12 sm:px-5 md:px-10">
          <H5 className="mt-1 text-xl">Find</H5>
          <input
            className="w-full px-2 text-lg outline-none"
            type="text"
            placeholder="Cafe"
          />
        </div>
        <div className="lg:w-11/24 flex w-full items-center gap-2 rounded-full bg-white px-10 py-3 sm:w-5/12 sm:px-5 md:px-10">
          <H5 className="mt-1 text-xl">Where</H5>
          <input
            className="w-full px-2 text-lg outline-none"
            type="text"
            placeholder="Karachi"
          />
        </div>
        <div className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-black transition-all hover:opacity-60 sm:w-14">
          <MagnifyingGlassIcon className="h-8 text-white" />
        </div>
      </div>

      <P className="!mt-2">
        Pakistan&apos;s largest coworking space marketplace
      </P>
    </section>
  );
}
