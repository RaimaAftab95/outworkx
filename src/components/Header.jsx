import { useAuthContext } from '../hooks/useAuthContext';
import { useRef, useEffect, useState } from 'react';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';

import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

import {
  MapPinIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

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

    logout();
  }

  return (
    <header className="py-6">
      <nav className="container relative mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <img src="/images/logo.svg" alt="Brand logo" />
        </Link>

        <div className="flex items-center justify-between gap-3">
          <ul className="text-primary hidden h-full flex-col items-center justify-center gap-9 px-2 text-xl sm:flex-row sm:text-base md:flex">
            <li className="hover:text-primary-light transition-all">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-primary-light transition-all">
              <Link to="/locations">Locations</Link>
            </li>
            <li className="rounded-full bg-black px-4 py-1.5 text-white transition-all hover:opacity-60">
              <Link to="/space/create">List Space</Link>
            </li>
          </ul>

          <button
            className="border-gray flex cursor-pointer items-center gap-1 rounded-full border px-2.5 py-1 transition-all hover:opacity-50"
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
          className={`border-gray absolute right-0 top-full z-40 mt-2 hidden min-w-64 rounded-md border bg-white shadow-2xl transition-all duration-300 md:block ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <ul className="border-gray text-primary flex h-full flex-col gap-5 border-b px-3.5 py-5 text-xl sm:text-base">
            {user !== null ? (
              <>
                <li className="hover:text-primary-light transition-all">
                  <Link className="block w-full" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="hover:text-primary-light transition-all">
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
                <li className="hover:text-primary-light transition-all">
                  <Link className="block w-full" to="/login">
                    Login
                  </Link>
                </li>
                <li className="hover:text-primary-light transition-all">
                  <Link className="block w-full" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="text-primary flex h-full flex-col gap-5 px-3.5 py-5 text-xl sm:text-base">
            <li className="hover:text-primary-light transition-all">
              <Link className="block w-full" to="/">
                Gift cards
              </Link>
            </li>
            <li className="hover:text-primary-light transition-all">
              <Link className="block w-full" to="/sign-up">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`border-gray absolute top-full z-40 mt-2 w-11/12 rounded-2xl border bg-white px-6 shadow-2xl transition-all duration-300 md:hidden ${isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <ul className="border-gray flex flex-wrap items-center justify-between gap-1 border-b px-4 py-5 text-sm">
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
            {user !== null ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-primary transition-all"
                  >
                    Dashboard
                  </Link>
                </li>
                <div className="bg-gray h-4 w-0.5" />
                <li>
                  <Link
                    className="hover:text-primary cursor-pointer transition-all"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="hover:text-primary transition-all"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <div className="bg-gray h-4 w-0.5" />
                <li>
                  <Link
                    className="hover:text-primary transition-all"
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
