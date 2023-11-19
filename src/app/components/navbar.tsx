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
      <div className="flex justify-center items-center text-sm font-medium">
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="">
            {isMenuOpen ? (
              <span className="block ">&times;</span>
            ) : (
              <span className="block ">&#9776;</span>
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
          <Link href="/services">
            <p className="hover:text-slate-700">Anúncie Conosco</p>
          </Link>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <Link href="/">
            <p className="block  my-2">Início</p>
          </Link>
          <Link href="/sobre">
            <p className="block my-2">Sobre</p>
          </Link>
          <Link href="/services">
            <p className="block  my-2">Anúncie Conosco</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
