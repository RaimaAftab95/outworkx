export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  gap-2 sm:bg-gray rounded-full p-2.5 w-full sm:max-w-24 mx-auto lg:max-w-4xl">
      <div className="bg-white w-full rounded-full sm:w-5/12 lg:w-11/24 flex items-center gap-6  px-10 sm:px-5 md:px-16">
        <h3 className="text-2xl leading-6">Find</h3>
        <input
          className="py-4 leading-6 w-full outline-none text-xl"
          type="text"
          placeholder="Ex: workspace"
        />
      </div>
      <div className="hidden sm:block bg-gray min-h-10" />
      <div className="bg-white w-full rounded-full sm:w-5/12 lg:w-3/7 flex items-center gap-6 px-10 sm:px-5 md:px-10">
        <h3 className="text-2xl leading-6">Where</h3>
        <input
          className="py-4 w-full outline-none leading-6 text-xl"
          type="text"
          placeholder="Your City"
        />
      </div>
      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all hover:opacity-60">
        <img src="/images/icons/search.png" alt="search" />
      </div>
    </div>
  );
}
