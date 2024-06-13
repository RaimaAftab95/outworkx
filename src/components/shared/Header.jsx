import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { logout } from '../../features/auth-slice';

import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

import {
  MapPinIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const dispatch = useAppDispatch();
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * Handle click outside of the menu
   * @param {import('react').SyntheticEvent} event
   * @returns {void}
   */
  function handleClickOutside(event) {
    if (!menuRef.current) {
      return;
    }

    if (menuRef.current.contains(event.target)) {
      return;
    }

    setIsMenuActive(false);
  }

  /**
   * Close the menu on escape key press
   * @param {import('react').SyntheticEvent} event
   * @returns {void}
   */
  function closeMenuOnEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }

    setIsMenuActive(false);
  }

  /**
   * Handle logout
   * @param {import('react').SyntheticEvent} event
   * @returns {void}
   */
  function handleLogout(event) {
    event.preventDefault();

    localStorage.removeItem('token');

    dispatch(logout());
  }

  return (
    <header className="py-6 text-black">
      <nav className="container relative flex items-center justify-between px-4">
        <img src="/images/logo.svg" alt="Brand logo" />

        <div className="flex items-center justify-between gap-3">
          <ul className="hidden h-full flex-col items-center justify-center gap-9 px-2 text-xl text-primary  sm:flex-row sm:text-base md:flex">
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
            </li>
          </ul>

          <button
            className="flex cursor-pointer items-center gap-1 rounded-full border border-gray px-2.5 py-1 transition-all hover:opacity-50"
            onClick={() => setIsMenuActive(!isMenuActive)}
            onKeyDown={closeMenuOnEscape}
            tabIndex={0}
            ref={menuRef}
          >
            <Bars3Icon className="h-6" />
            <UserCircleIcon className="h-7 text-black" />
          </button>
        </div>

        <div
          className={`absolute right-0 top-full z-40 mt-2 hidden min-w-64 rounded-md border border-gray bg-white shadow-2xl transition-all duration-300 md:block ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <ul className="flex h-full flex-col gap-5 border-b border-gray px-3.5 py-5 text-xl text-primary sm:text-base">
            {isUserLoggedIn ? (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/login">
                    Account
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link
                    className="block w-full cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/login">
                    Login
                  </Link>
                </li>
                <li className="transition-all hover:text-primary-light">
                  <Link className="block w-full" to="/register">
                    Register
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
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`absolute top-full z-40 mt-2 w-11/12 rounded-2xl border border-gray bg-white px-6 shadow-2xl transition-all duration-300 md:hidden ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <ul className="flex flex-wrap items-center justify-between gap-1 border-b border-gray px-4 py-5 text-sm">
            <li>
              <Link
                to="#"
                className="flex flex-col items-center justify-center transition-all hover:opacity-50"
              >
                <GlobeAsiaAustraliaIcon className="h-7" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex flex-col items-center justify-center transition-all hover:opacity-100"
              >
                <UserGroupIcon className="h-7" />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex flex-col items-center justify-center transition-all hover:opacity-100"
              >
                <BuildingOffice2Icon className="h-7" />
                <span>List Space</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex flex-col items-center justify-center transition-all hover:opacity-100"
              >
                <MapPinIcon className="h-7" />
                <span>Locations</span>
              </Link>
            </li>
          </ul>

          <ul className="my-5 flex items-center justify-center gap-x-3">
            {isUserLoggedIn ? (
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
                    onClick={() => {}}
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
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <div className="h-4 w-0.5 bg-gray" />
                <li>
                  <Link
                    className="transition-all hover:text-primary"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
