"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black py-6 px-8">
      <div className="flex md:justify-center md:items-center text-sm font-medium">
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="">
            {isMenuOpen ? (
              <span className="block ">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1.6em"
                  width="1.6em"
                >
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </span>
            ) : (
              <span className="block ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1.6em"
                  width="1.6em"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </span>
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">
            <p className="hover:text-slate-700">Início</p>
          </Link>
          <Link href="/sobre">
            <p className="hover:text-slate-700">Sobre</p>
          </Link>
          <a href="https://wa.me/5512991510984" target="_blank">
            <p>Anuncie Conosco</p>
          </a>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <Link href="/">
            <p className="block my-2">Início</p>
          </Link>
          <Link href="/sobre">
            <p className="block my-2">Sobre</p>
          </Link>
          <a href="https://wa.me/5512991510984" target="_blank">
            <p>Anuncie Conosco</p>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
