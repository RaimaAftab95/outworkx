export default function ErrorPage() {
  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-8 text-3xl font-bold">Oops! 👋</h1>
        <p className="mb-4 text-lg uppercase text-black">404-Page not found.</p>
        <p className="text-gray-500 text-sm">
          <i>We are sorry but the Page you requested does not exist</i>
        </p>
      </div>
    </div>
  );
}
