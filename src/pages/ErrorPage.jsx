import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage =
    error?.statusText ||
    error?.message ||
    "This page doesn't exist. Please enter a valid path.";

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-8 text-3xl font-bold">Oops! 👋</h1>
        <p className="mb-4 text-lg text-black">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 text-sm">
          <i>{errorMessage}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
