import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuthStore } from "../store";
import Header from "./components/shared/Header";
import MainLoading from "./components/shared/MainLoading";
import BookingHistory from "./pages/BookingHistory";
import CreateSpace from "./pages/CreateSpace";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Launch from "./pages/Launch";
import ReserveSpace from "./pages/ReserveSpace";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SpaceDetails from "./pages/SpaceDetails";
import Statistics from "./pages/Statistics";

const App = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // store auth information from local storage
  const { setAuth } = useAuthStore();

  useEffect(() => {
    setIsLoading(true);
    let auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);

    if (auth?.token) {
      setAuth(auth);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setAuth]);
  return (
    <>
      {isLoading && <MainLoading />}

      <div
        className={`transition-all duration-500 ${
          isLoading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        {pathname !== "/create-space" &&
          pathname !== "/sign-up" &&
          pathname !== "/sign-in" && <Header />}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaces/:id" element={<SpaceDetails />} />
          <Route path="/create-space" element={<CreateSpace />} />
          <Route path="/launch" element={<Launch />} />
          <Route path="/reserve-space" element={<ReserveSpace />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
