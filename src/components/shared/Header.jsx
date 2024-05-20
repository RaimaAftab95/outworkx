import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../store';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [openUserOpt, setOpenUserOpt] = useState(false);
  const [openMobileUserOpt, setOpenMobileUserOpt] = useState(false);
  const { auth, logout } = useAuthStore();
  const { user } = auth || {};

  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', hideClickOnOutSide);
    document.addEventListener('click', hideClickOnOutSide2);
  }, []);

  const hideClickOnOutSide = e => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setOpenUserOpt(false);
    }
  };

  const hideClickOnOutSide2 = e => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setOpenMobileUserOpt(false);
    }
  };
  return (
    <header className="bg-white py-8">
      <div className="container relative flex flex-wrap items-center justify-between gap-5">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <nav
          className={`fixed z-50 ${
            activeMenu
              ? 'visible opacity-100'
              : 'invisible opacity-0 sm:visible sm:opacity-100'
          } bottom-0 left-0 right-0 top-0 h-full w-full bg-white transition-all duration-300 sm:relative sm:h-auto sm:w-auto`}
        >
          <div className="flex justify-end pr-10 pt-10 sm:hidden">
            <img
              className="h-4 w-4 cursor-pointer"
              onClick={() => setActiveMenu(false)}
              src="/images/icons/close.png"
              alt="icon"
            />
          </div>
          <ul className="flex h-full flex-col items-center justify-center gap-10 text-xl text-primary sm:flex-row sm:text-base">
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
                className="flex cursor-pointer items-center gap-3 rounded-full border border-gray px-3 py-1.5 transition-all hover:opacity-50"
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
              className="flex cursor-pointer items-center gap-3 rounded-full border border-gray px-3 py-1.5 transition-all hover:opacity-50"
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
              ? 'invisible opacity-0 sm:visible sm:opacity-100'
              : 'invisible opacity-0'
          } right-0 top-full z-40 min-w-64 rounded-md border border-gray bg-white shadow-2xl`}
        >
          <ul className="flex h-full flex-col gap-5 border-b border-gray px-3.5 py-5 text-xl text-primary sm:text-base">
            {user?.id ? (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/login">
                    Account
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link
                    className="block w-full cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/sign-in">
                    Login
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/sign-up">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="flex h-full flex-col gap-5 px-3.5 py-5 text-xl text-primary sm:text-base">
            <li className="transition-all hover:text-primary-light">
              <Link className="block w-full" to="/">
                Gift cards
              </Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link className="block w-full" to="/sign-up">
                Airbnb your home
              </Link>
            </li>
            <li className="transition-all hover:text-primary-light">
              <Link className="block w-full" to="/sign-up">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* user option for mobile */}
        <div
          className={`absolute transition-all duration-300 ${
            openMobileUserOpt
              ? 'visible opacity-100 sm:invisible sm:opacity-0'
              : 'invisible opacity-0'
          } mobile-header left-0 right-0 top-full z-40 w-full rounded-3xl bg-white px-6`}
        >
          <ul className="flex flex-wrap items-center justify-between gap-1 border-b border-gray px-5 py-5 text-primary">
            <li className="">
              <Link
                to="#"
                className="flex flex-col items-center justify-center gap-2 opacity-50 transition-all hover:opacity-100"
              >
                <img src="/images/icons/explore.png" alt="icon" />
                <span>Explore</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex flex-col items-center justify-center gap-2 opacity-50 transition-all hover:opacity-100"
              >
                <img src="/images/icons/about.png" alt="icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex flex-col items-center justify-center gap-2 opacity-50 transition-all hover:opacity-100"
              >
                <img src="/images/icons/list-space.png" alt="icon" />
                <span>List Space</span>
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                className="flex flex-col items-center justify-center gap-2 opacity-50 transition-all hover:opacity-100"
              >
                <img src="/images/icons/location.png" alt="icon" />
                <span>Locations</span>
              </Link>
            </li>
          </ul>

          <ul className="my-5 flex items-center justify-center gap-1 px-3">
            {user?.id ? (
              <>
                <li>
                  <Link to="#" className="transition-all hover:text-primary">
                    Account
                  </Link>
                </li>
                <div className="h-4 w-0.5 bg-gray" />
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
                <div className="h-4 w-0.5 bg-gray" />
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
}
