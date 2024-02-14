import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/shared/Heading";
import Button from "../components/ui/Button";

const Signup = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-between">
      <div className="py-7 px-5 sm:px-20 w-full min-h-[90vh] lg:w-[50%] xl:w-[30%]">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="min-h-[90vh] py-10 flex items-center">
          <div className="w-full">
            <Heading>Sign up</Heading>

            <form action="" className="mt-11 flex flex-col gap-5">
              <input
                type="text"
                placeholder="First Name*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
              />
              <input
                type="password"
                placeholder="Create password*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
              />
              <p className="text-xl font-bold leading-[37px] text-primary/70">
                Password must be at least 8 characters log
              </p>
              <Button className="w-full">Sign up</Button>
              <p className="text-xl font-bold leading-[37px] text-primary/70">
                Already a member?{" "}
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
