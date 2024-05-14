const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:bg-gray bg-transparent rounded-full p-2.5 w-full sm:w-95 mx-auto lg:max-w-800">
      <div className="bg-white w-full rounded-full sm:w-40 lg:w-45 flex items-center gap-6 px-10 sm:px-5 md:px-16">
        <h3 className="text-2xl leading-24">Find</h3>
        <input
          className="py-4 leading-20  bg-transparent outline-none text-xl"
          type="text"
          placeholder="Ex: workspace"
        />
      </div>
      <div className="hidden sm:block w-1 bg-gray min-h-20" />
      <div className="bg-white w-full rounded-full sm:w-40 lg:w-45 flex items-center gap-6 px-10 sm:px-5 md:px-16">
        <h3 className="text-2xl leading-24">Where</h3>
        <input
          className="py-4  bg-transparent outline-none leading-20 text-xl"
          type="text"
          placeholder="Your City"
        />
      </div>
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
        <img src="/images/icons/search.png" alt="search" />
      </div>
    </div>
  );
};

export default SearchBar;
