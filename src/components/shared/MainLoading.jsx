const MainLoading = () => {
  return (
    <div className="fixed inset-0 z-50 min-h-screen w-full flex items-center justify-center bg-white">
      <img
        className="animate-ping duration-500"
        src="/images/logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default MainLoading;
