export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-white">
      <img
        className="animate-ping duration-500"
        src="/images/logo.svg"
        alt="logo"
      />
    </div>
  );
}
