import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { login } from '../features/auth-slice';
import { useState } from 'react';

import Heading from '../components/shared/Heading';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const router = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get('redirect');

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} event
   * @returns {void}
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is Required!';
    }

    if (!password) {
      validationErrors.password = 'Password is Required!';
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

    const results = await dispatch(
      login({
        email,
        password
      })
    );

    localStorage.setItem('token', results.payload.data.token);

    router(redirect ? redirect : '/');
  }

  return (
    <main className="flex min-h-screen flex-col justify-between lg:flex-row">
      <div className="max-h-screen min-h-screen w-full px-5 py-7 sm:px-20 lg:w-1/2 xl:w-1/3">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex min-h-full items-center  py-10 pt-20">
          <div className="w-full">
            <Heading>Login Page</Heading>

            <form onSubmit={handleSubmit} className="mt-11 flex flex-col gap-5">
              <input
                type="email"
                placeholder="E-mail*"
                className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Error>{errors?.email}</Error>

              <input
                type="password"
                placeholder="Password*"
                className="block w-full rounded-lg border border-primary px-9 py-4 text-primary/70 outline-none placeholder:text-primary/70"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Error>{errors?.password}</Error>

              <Button className="w-full" type="submit" loading={isLoading}>
                Sign In
              </Button>

              <p className="text-xl font-bold leading-9 text-primary/70">
                Don’t have an account? {''}
                <Link to="/sign-up" className="underline">
                  Signup
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
