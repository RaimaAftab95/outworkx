import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [openUserOpt, setOpenUserOpt] = useState(false);
  const [openMobileUserOpt, setOpenMobileUserOpt] = useState(false);
  const { auth, logout } = useAuthStore();
  const { user } = auth || {};

  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideClickOnOutSide);
    document.addEventListener("click", hideClickOnOutSide2);
  }, []);

  const hideClickOnOutSide = (e) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setOpenUserOpt(false);
    }
  };

  const hideClickOnOutSide2 = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setOpenMobileUserOpt(false);
    }
  };
  return (
    <header className="bg-white py-8">
      <div className="container flex items-center justify-between gap-5 flex-wrap relative">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <nav
          className={`fixed z-50 ${
            activeMenu
              ? "opacity-100 visible"
              : "opacity-0 sm:opacity-100 invisible sm:visible"
          } transition-all duration-300 sm:relative top-0 left-0 right-0 bottom-0 w-full h-full sm:w-auto sm:h-auto bg-white`}
        >
          <div className="flex sm:hidden pt-10 justify-end pr-10">
            <img
              className="cursor-pointer w-4 h-4"
              onClick={() => setActiveMenu(false)}
              src="/images/icons/close.png"
              alt="icon"
            />
          </div>
          <ul className="flex flex-col sm:flex-row justify-center h-full text-xl sm:text-base items-center gap-10 text-primary">
            <li className="transition-all hover:text-primary-light">
              <Link to="/">About Us</Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link to="/">List Space</Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link to="/">Locations</Link>
            </li>
            <li className="flex items-center gap-5">
              <img
                className="cursor-pointer transition-all hover:opacity-50"
                src="/images/icons/language.svg"
                alt="icon"
              />
              <div
                className="flex items-center gap-3 py-[6px] px-3 rounded-full border border-gray transition-all hover:opacity-50 cursor-pointer"
                onClick={() => setOpenUserOpt(!openUserOpt)}
                ref={userMenuRef}
              >
                <img src="/images/icons/bar.svg" alt="icon" />
                <img src="/images/icons/profile.svg" alt="icon" />
              </div>
            </li>
          </ul>
        </nav>
        <div className="block sm:hidden">
          <li className="flex items-center gap-5">
            <img
              className="cursor-pointer transition-all hover:opacity-50"
              src="/images/icons/language.svg"
              alt="icon"
            />
            <div
              className="flex items-center gap-3 py-[6px] px-3 rounded-full border border-gray transition-all hover:opacity-50 cursor-pointer"
              onClick={() => setOpenMobileUserOpt(!openMobileUserOpt)}
              ref={mobileMenuRef}
            >
              <img src="/images/icons/bar.svg" alt="icon" />
              <img src="/images/icons/profile.svg" alt="icon" />
            </div>
          </li>
        </div>

        {/* user option */}
        <div
          className={`absolute transition-all duration-300 ${
            openUserOpt
              ? "opacity-0 invisible sm:opacity-100 sm:visible"
              : "opacity-0 invisible"
          } top-[150%] right-0 z-40 bg-white rounded-md shadow-2xl min-w-[250px] border border-gray`}
        >
          <ul className="flex flex-col h-full text-xl sm:text-base gap-5 text-primary px-[14px] py-5 border-b border-gray">
            {user?.id ? (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="w-full block" to="/login">
                    Account
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link
                    className="w-full block cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="w-full block" to="/sign-in">
                    Login
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link className="w-full block" to="/sign-up">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="flex flex-col h-full text-xl sm:text-base gap-5 text-primary px-[14px] py-5">
            <li className="transition-all hover:text-primary-light">
              <Link className="w-full block" to="/">
                Gift cards
              </Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link className="w-full block" to="/sign-up">
                Airbnb your home
              </Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link className="w-full block" to="/sign-up">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* user option for mobile */}
        <div
          className={`absolute transition-all duration-300 ${
            openMobileUserOpt
              ? "opacity-100 sm:opacity-0 visible sm:invisible"
              : "opacity-0 invisible"
          } top-[150%] left-0 right-0 w-full rounded-[20px] bg-white px-6 z-40 mobile-header`}
        >
          <ul className="py-[18px] flex items-center gap-1 justify-between px-5 text-primary border-b border-gray flex-wrap">
            <li className="">
              <Link
                to="#"
                className="flex items-center flex-col transition-all gap-2 justify-center opacity-50 hover:opacity-100"
              >
                <img src="/images/icons/explore.png" alt="icon" />
                <span>Explore</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex items-center flex-col transition-all gap-2 justify-center opacity-50 hover:opacity-100"
              >
                <img src="/images/icons/about.png" alt="icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex items-center flex-col transition-all gap-2 justify-center opacity-50 hover:opacity-100"
              >
                <img src="/images/icons/list-space.png" alt="icon" />
                <span>List Space</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex items-center flex-col transition-all gap-2 justify-center opacity-50 hover:opacity-100"
              >
                <img src="/images/icons/location.png" alt="icon" />
                <span>Locations</span>
              </Link>
            </li>
          </ul>

          <ul className="flex my-[18px] px-3 items-center justify-center gap-1">
            {user?.id ? (
              <>
                <li>
                  <Link to="#" className="transition-all hover:text-primary">
                    Account
                  </Link>
                </li>
                <div className="w-[2px] h-4 bg-gray" />
                <li>
                  <Link
                    className="cursor-pointer transition-all hover:text-primary"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="transition-all hover:text-primary"
                    to="/sign-in"
                  >
                    Login
                  </Link>
                </li>
                <div className="w-[2px] h-4 bg-gray" />
                <li>
                  <Link
                    className="transition-all hover:text-primary"
                    to="/sign-up"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
