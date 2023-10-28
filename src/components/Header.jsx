import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 30 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-10 w-full transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="mx-24 flex items-center justify-between h-16 md:h-20">
        <Link to="/">
          <img className="w-40" src="./algocanvas.png" alt="" />
        </Link>
        <nav>
          <ul className="flex grow justify-end flex-wrap items-center gap-5 text-lg">
            <li>
              <Link
                to="/"
                className="font-medium hover:text-blue-500 text-gray-700 flex items-center transition duration-150 ease-in-out"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/visualize"
                className="font-medium hover:text-blue-500 text-gray-700 flex items-center transition duration-150 ease-in-out"
              >
                Visualize
              </Link>
            </li>

            <li>
              <a
                href="#feature"
                className="font-medium hover:text-blue-500 text-gray-700 flex items-center transition duration-150 ease-in-out"
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
