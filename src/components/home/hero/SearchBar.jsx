export default function SearchBar() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-full bg-transparent  p-2.5  sm:flex-row sm:bg-gray lg:max-w-3xl">
      <div className="lg:w-11/24 flex w-full items-center gap-2 rounded-full bg-white px-10 py-4  sm:w-5/12 sm:px-5 md:px-16">
        <h3 className="text-xl">Find</h3>
        <input
          className="w-full text-xl outline-none"
          type="text"
          placeholder="Ex: workspace"
        />
      </div>
      <div className="lg:w-11/24  flex w-full items-center gap-2 rounded-full bg-white px-10 py-4 sm:w-5/12 sm:px-5 md:px-10">
        <h3 className="text-xl">Where</h3>
        <input
          className="w-full text-xl outline-none"
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
