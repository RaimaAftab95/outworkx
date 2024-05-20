export default function SearchBar() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 rounded-full bg-transparent p-2.5 sm:max-w-24 sm:flex-row sm:bg-gray lg:max-w-3xl">
      <div className="lg:w-11/24 flex w-full items-center gap-6 rounded-full bg-white px-10  sm:w-5/12 sm:px-5 md:px-16">
        <h3 className="text-2xl leading-6">Find</h3>
        <input
          className="w-full bg-transparent py-4 text-xl leading-6 outline-none"
          type="text"
          placeholder="Ex: workspace"
        />
      </div>
      <div className="lg:w-11/24 flex w-full items-center gap-6 rounded-full bg-white px-10 sm:w-5/12 sm:px-5 md:px-10">
        <h3 className="text-2xl leading-6">Where</h3>
        <input
          className="w-full bg-transparent py-4 text-xl leading-6 outline-none"
          type="text"
          placeholder="Your City"
        />
      </div>
      <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary transition-all hover:opacity-60">
        <img src="/images/icons/search.png" alt="search" />
      </div>
    </div>
  );
}
