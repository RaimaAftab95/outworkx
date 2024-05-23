export default function SearchBar() {
  return (
    <div className="mx-auto flex w-full items-center justify-center gap-2 rounded-full py-2 sm:flex-row sm:bg-gray lg:max-w-2xl">
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
      <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary transition-all hover:opacity-60">
        <img src="/images/icons/search.png" alt="search" />
      </div>
    </div>
  );
}
