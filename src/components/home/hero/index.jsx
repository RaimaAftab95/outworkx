import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-28 text-center">
      <h2 className="leading-60 sm:leading-72 md:leading-82 lg:leading-95 text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
        Find Your Next <br />
        Coworking Office
      </h2>
      <h4 className="leading-35 mb-10 mt-6 text-xl font-normal sm:text-2xl">
        Explore the workspaces
      </h4>

      <SearchBar />

      <p className="mt-9 text-xl">
        Pakistan&apos;s largest coworking space marketplace
      </p>
    </section>
  );
}
