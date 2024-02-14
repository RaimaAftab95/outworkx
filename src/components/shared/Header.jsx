import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <header className="bg-white py-8">
      <div className="container flex items-center justify-between gap-5 flex-wrap">
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
              <div className="flex items-center gap-3 py-[6px] px-3 rounded-full border border-gray transition-all hover:opacity-50 cursor-pointer">
                <img src="/images/icons/bar.svg" alt="icon" />
                <img src="/images/icons/profile.svg" alt="icon" />
              </div>
            </li>
          </ul>
        </nav>
        <div className="block sm:hidden">
          <img
            className="cursor-pointer"
            onClick={() => setActiveMenu(true)}
            src="/images/icons/bar.svg"
            alt="icon"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
