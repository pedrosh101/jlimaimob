"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-500 py-4 px-8">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <p className="text-white text-xl font-bold">JLima Imóveis</p>
          </Link>
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <span className="block text-white">&times;</span>
            ) : (
              <span className="block text-white">&#9776;</span>
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/">
            <p className="text-white hover:text-black">Início</p>
          </Link>
          <Link href="/sobre">
            <p className="text-white hover:text-black">Sobre</p>
          </Link>
          <Link href="/services">
            <p className="text-white hover:text-black">Anúncie Conosco</p>
          </Link>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <Link href="/">
            <p className="block text-white my-2">Início</p>
          </Link>
          <Link href="/sobre">
            <p className="block text-white my-2">Sobre</p>
          </Link>
          <Link href="/services">
            <p className="block text-white my-2">Anúncie Conosco</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
