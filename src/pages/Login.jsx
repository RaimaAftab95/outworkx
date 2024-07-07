import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogin } from '../hooks/useLogin';

export default function Signin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { user } = useAuthContext();
  const { search } = useLocation();
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const redirect = new URLSearchParams(search).get('redirect');

  useEffect(() => {
    if (user) {
      navigate(redirect || '/dashboard');
    }
  }, [user, navigate, redirect]);

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   * @returns {void}
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await toast.promise(login({ email, password }), {
      loading: 'Loading...',
      success: 'Login successful!',
      error: 'Login failed. Please try again!'
    });

    navigate(redirect || '/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col justify-between lg:flex-row">
      <div className="max-h-screen min-h-screen w-full px-5 py-7 sm:px-20 lg:w-1/2 xl:w-1/3">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex min-h-full items-center  py-10 pt-20">
          <div className="w-full">
            <h1>Login Page</h1>

            <form
              onSubmit={handleFormSubmit}
              className="mt-11 flex flex-col gap-5"
            >
              <input
                type="email"
                placeholder="E-mail*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="w-full" type="submit" disabled={isLoading}>
                Login
              </button>

              {error && <p className="text-red-500">{error}</p>}

              <p className="text-primary/70 text-xl font-bold leading-9">
                Don’t have an account? {''}
                <Link to="/register" className="underline">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden min-h-screen lg:block lg:w-1/2 xl:w-2/3">
        <img
          src="/images/auth/sign-up-banner.jpg"
          className="h-auto max-h-screen min-h-screen max-w-full"
          alt=""
        />
      </div>
    </main>
  );
}
