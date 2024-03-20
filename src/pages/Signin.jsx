import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import Heading from "../components/shared/Heading";
import Button from "../components/ui/Button";
import Error from "../components/ui/Error";
import { login } from "../http/api";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get("redirect");

  const router = useNavigate();

  // loginUser function
  const loginUser = async () => {
    const { data } = await login({
      email,
      password,
    });

    return data;
  };

  // zustand store
  const { setAuth } = useAuthStore();

  // create server request
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      // store in local storage
      localStorage.setItem("auth", JSON.stringify(data?.data));

      // store in zustand
      setAuth(data?.data);

      if (redirect) {
        router(`/${redirect}`);
      } else {
        router("/");
      }

      toast.success("Login successful.");
    },
    onError: async (error) => {
      const property = error?.response?.data?.data?.message?.replace("/", "");
      setErrors({
        [property]: `${property} is Required!`,
      });
    },
  });

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is Required!";
    }

    if (!password) {
      validationErrors.password = "Password is Required!";
    }

    if (Object.keys(validationErrors).length > 0) {
      return setErrors(validationErrors);
    }

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
            <Heading>Login</Heading>

            <form
              onSubmit={submitHandler}
              className="mt-11 flex flex-col gap-5"
            >
              <input
                type="email"
                placeholder="E-mail*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Error>{errors?.email}</Error>
              <input
                type="password"
                placeholder="Password*"
                className="text-primary/70 px-9 py-4 border border-primary rounded-lg outline-none placeholder:text-primary/70 block w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Error>{errors?.password}</Error>
              <Button className="w-full" type="submit" loading={isPending}>
                Sign In
              </Button>
              <p className="text-xl font-bold leading-[37px] text-primary/70">
                Don’t have an account?
                <Link to="/sign-up" className="underline">
                  Signup
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

export default Signin;
