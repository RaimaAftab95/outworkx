import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section>
      <div className="container min-h-screen py-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
          Find Your Next <br />
          Coworking Office
        </h2>
        <h4 className="text-xl sm:text-2xl font-normal mt-6 mb-10">
          Explore the workspaces
        </h4>

        <SearchBar />
        <p className="mt-9 font-medium text-xl">
          The World&apos;s Largest Coworking Space Marketplace | Search & Get
          Quotes Today
        </p>
      </div>
    </section>
  );
}
