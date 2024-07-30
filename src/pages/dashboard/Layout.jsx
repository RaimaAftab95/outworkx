import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-secondary py-5">
        <div className="container relative mx-auto flex items-center justify-between">
          {/* Toggle Menu Button */}
          <div className="absolute right-1 top-[-8px] lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow">
            <ul
              className={`flex flex-col items-center justify-center gap-5 text-lg font-bold lg:flex-row ${
                isMenuOpen ? 'flex' : 'hidden'
              } lg:flex`}
            >
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-black-500 underline' : 'text-gray-700'
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/spaces"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-black-500 underline' : 'text-gray-700'
                  }
                >
                  My Places
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-black-500 underline' : 'text-gray-700'
                  }
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/favorites"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-black-500 underline' : 'text-gray-700'
                  }
                >
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-bookings"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? 'text-black-500 underline' : 'text-gray-700'
                  }
                >
                  My Bookings
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
}
