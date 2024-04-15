import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import Heading from '../components/shared/Heading';
import Button from '../components/ui/Button';
import Error from '../components/ui/Error';
import { signUp } from '../http/api';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});

  const router = useNavigate();

  // signupUser function
  const signupUser = async () => {
    const { data } = await signUp({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      dateOfBirth,
      gender
    });

    return data;
  };

  // zustand store
  const { setAuth } = useAuthStore();

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ['signup'],
    mutationFn: signupUser,
    onSuccess: async data => {
      // store in local storage
      localStorage.setItem('auth', JSON.stringify(data?.data));

      // store in zustand
      setAuth(data?.data);
      router('/');

      toast.success('Signup successful.');
    },
    onError: async error => {
      const property = error?.response?.data?.data?.message?.replace('/', '');
      setErrors({
        [property]: `${property} is Required!`
      });
    }
  });

  // submit handler
  const submitHandler = e => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = 'First Name is Required!';
    }

    if (!lastName) {
      validationErrors.lastName = 'Last Name is Required!';
    }

    if (!email) {
      validationErrors.email = 'Email is Required!';
    }

    if (!password) {
      validationErrors.password = 'Password is Required!';
    } else if (password?.length < 8) {
      validationErrors.password =
        'Password Must be Greater or Equal 8 Characters!';
    }

    if (!dateOfBirth) {
      validationErrors.dateOfBirth = 'Date Of Birth is Required!';
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone Number is Required!';
    }

    if (!gender) {
      validationErrors.gender = 'Gender is Required!';
    }

    // if (Object.keys(validationErrors).length > 0) {
    //   return setErrors(validationErrors);
    // }

    mutate();
  };
  return (
    <main className="flex flex-col lg:flex-row justify-between">
      <div className="py-7 px-5 sm:px-20 w-full min-h-[90vh] lg:w-[50%] xl:w-[30%]">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="min-h-[90vh] py-10 flex items-center">
          <div className="w-full">
            <Heading>Sign up</Heading>

            <form
              onSubmit={submitHandler}
              className="mt-11 flex flex-col gap-5"
            >
              <input
                type="text"
                placeholder="First Name*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <Error>{errors?.firstName}</Error>
              <input
                type="text"
                placeholder="Last Name*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <Error>{errors?.lastName}</Error>
              <input
                type="email"
                placeholder="E-mail*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Error>{errors?.email}</Error>
              <input
                type="text"
                placeholder="Phone Number*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <Error>{errors?.phoneNumber}</Error>
              <input
                type="password"
                placeholder="Create password*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Error>{errors?.password}</Error>
              <input
                type="date"
                placeholder="Selecte Date of birth*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={dateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
              />
              <Error>{errors?.dateOfBirth}</Error>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <input
                    value="male"
                    onChange={e => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label className="font-medium text-primary" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    value="female"
                    onChange={e => setGender(e.target.value)}
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="font-medium text-primary" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              <Error>{errors?.gender}</Error>
              {/* <p className="text-xl font-bold leading-[37px] text-primary/70">
                Password must be at least 8 characters log
              </p> */}
              <Button loading={isPending} type="submit" className="w-full">
                Sign up
              </Button>
              <p className="text-xl font-bold leading-[37px] text-primary/70">
                Already a member?{' '}
                <Link to="/sign-in" className="underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[50%] xl:w-[70%] min-h-screen">
        <img
          src="/images/auth/sign-up-banner.jpg"
          className="w-full h-full"
          alt=""
        />
      </div>
    </main>
  );
};

export default Signup;
