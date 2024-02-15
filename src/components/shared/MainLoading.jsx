const MainLoading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 min-h-screen w-full flex items-center justify-center bg-white">
      <img
        className="animate-ping duration-500"
        src="/images/logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default MainLoading;
