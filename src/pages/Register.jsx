import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';
import toast from 'react-hot-toast';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  const { register, isLoading, error } = useRegister();
  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param {import('react').SyntheticEvent} e Event object
   * @returns {void}
   */
  async function handleFormSubmit(e) {
    e.preventDefault();

    await toast.promise(
      register({
        firstName,
        lastName,
        email,
        password,
        dateOfBirth: new Date(dateOfBirth).toJSON(),
        phoneNumber,
        gender
      }),
      {
        loading: 'Creating account...',
        success: 'Account created successfully!',
        error: 'Failed to create account. Please try again!'
      }
    );

    navigate('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-col justify-between lg:flex-row">
      <div className="max-h-screen min-h-screen w-full px-5 py-5 sm:px-20 lg:w-1/2 xl:w-1/3">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="mt-7 flex items-center">
          <div className="w-full">
            <h1>Sign up</h1>

            <form
              onSubmit={handleFormSubmit}
              className="mt-5 flex flex-col gap-2"
            >
              <input
                type="text"
                placeholder="First Name*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="Create password*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="date"
                placeholder="Select Date of birth*"
                className="border-primary text-primary/70 placeholder:text-primary/70 block w-full rounded-lg border px-9 py-4 outline-none"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <input
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label className="text-primary font-medium" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="text-primary font-medium" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full" disabled={isLoading}>
                Sign up
              </button>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <p className="text-primary/70 text-xl font-bold leading-9">
                Already a member?{' '}
                <Link to="/login" className="underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden min-h-screen  overflow-hidden lg:block lg:w-1/2 xl:w-2/3">
        <img
          src="/images/auth/sign-up-banner.jpg"
          className="h-auto max-h-screen min-h-screen max-w-full"
          alt=""
        />
      </div>
    </main>
  );
}
