import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Container = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <nav className="flex flex-col sm:flex-row transition items-center justify-between px-6 pt-6 md:px-8 md:pt-8 max-w-7xl w-full mx-auto">
        <div className="flex relative justify-between w-full items-center">
          <a href="/">
            <h1 className="text-3xl md:text-4xl font-bold">CRISV.CO</h1>
          </a>
          <div className="flex flex-col sm:hidden pt-2">
            {!menuOpen && (
              <button
                className="focus:outline-none stroke-current hover:text-gray-500 transition ease-in-out duration-200"
                onClick={() => setMenuOpen(true)}
              >
                <svg
                  className="w-10 h-10 pb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            )}

            {menuOpen && (
              <button
                className="focus:outline-none stroke-current hover:text-gray-500 transition ease-in-out duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-10 h-10 pb-2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="hidden sm:flex space-x-4">
          <a href="/">
            <div
              className={`text-xl ${
                router.route === "/" && "border-b border-black"
              }`}
            >
              Home
            </div>
          </a>
          <a href="/photos">
            <div
              className={`text-xl ${
                router.route.substring(0, 7) === "/photos" &&
                "border-b border-black"
              }`}
            >
              Photos
            </div>
          </a>
          <a href="/film">
            <div
              className={`text-xl ${
                router.route.substring(0, 5) === "/film" &&
                "border-b border-black"
              }`}
            >
              Film
            </div>
          </a>
          <a href="/contact">
            <div
              className={`text-xl ${
                router.route === "/contact" && "border-b border-black"
              }`}
            >
              Contact
            </div>
          </a>
        </div>

        {menuOpen && (
          <div
            className="sm:hidden w-full -ml-9 trasition duration-500"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
              <a
                href="/"
                className={`text-md block px-3 py-2 font-medium hover:text-gray-500 transition ease-in-out duration-200`}
              >
                Home
              </a>

              <a
                href="/photos"
                className={`text-md block px-3 py-2 font-medium hover:text-gray-500 transition ease-in-out duration-200`}
              >
                Photos
              </a>
              <a
                href="/film"
                className={`text-md block px-3 py-2 font-medium hover:text-gray-500 transition ease-in-out duration-200`}
              >
                Film
              </a>
              <a
                href="/contact"
                className={`text-md block px-3 py-2 font-medium hover:text-gray-500 transition ease-in-out duration-200`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      <main className="flex flex-col justify-center">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
