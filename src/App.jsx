import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/shared/Header";
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
  console.log("pathname", pathname);
  return (
    <>
      {pathname !== "/create-space" &&
        pathname !== "/sign-up" &&
        pathname !== "/sign-in" && <Header />}
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
    </>
  );
};

export default App;
