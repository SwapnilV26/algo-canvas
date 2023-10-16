import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 bg-gray-200 w-full transition duration-300 ease-in-out">
      <div className="mx-24 flex items-center justify-between h-16 md:h-20">
        <div>LOGO</div>
        <nav>
          <ul className="flex grow justify-end flex-wrap items-center gap-5 text-lg">
            <li>
              <Link
                to="/"
                className="font-medium hover:text-blue-500 text-gray-600 flex items-center transition duration-150 ease-in-out"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/visualize"
                className="font-medium hover:text-blue-500 text-gray-600 flex items-center transition duration-150 ease-in-out"
              >
                Visualize
              </Link>
            </li>

            <li>
              <a
                href="#feature"
                className="font-medium hover:text-blue-500 text-gray-600 flex items-center transition duration-150 ease-in-out"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
