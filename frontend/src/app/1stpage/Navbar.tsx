"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  interface NavigateFunction {
    (route: string): void;
  }

  const navigate: NavigateFunction = (route) => {
    router.push(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-sky-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo */}
              <span className="text-white text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                Travel AI
              </span>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              
            </div>
          </div>
          
          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="px-4 py-2 text-white hover:text-sky-200 font-medium"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth/signup")}
              className="px-4 py-2 bg-white text-sky-950 rounded-md hover:bg-sky-100 font-medium transition duration-300"
            >
              Sign up
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Heroicon name: x */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        
          <div className="pt-4 pb-3 border-t border-sky-800">
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="block px-3 py-2 text-base font-medium text-white hover:text-sky-200 w-full text-left"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth/signup")}
              className="mt-2 block w-full text-left px-3 py-2 text-base font-medium text-white bg-sky-800 hover:bg-sky-700 rounded-md"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;