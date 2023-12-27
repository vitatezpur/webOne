// Navbar.js
// import Logo from "../../public/assets/img/logo.png"
// import logo from "../../public/assets/img/vintagLogo.png"

import React, { useState } from 'react';
import SignUpButton from './SinupBtn';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
    // menu items 
    const menuItem = [
      { href: '/', name: 'Home' },
      { href: '/courses', name: 'Courses' },
      { href: '/about', name: 'About' },
      { href: '/events', name: 'Events' },
      { href: '/blog', name: 'Blogs' },
  
    ];
  

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl"><img className='w-[4rem]' src="assets/img/vintagLogo.png" /></div>
        <div className="hidden md:flex  space-x-4 items-center">
        {menuItem.map((item) => (
          // Rendering a component for each object
          <Link href={item.href}>{item.name}</Link>
        ))}
         
         <SignUpButton/>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Mobile Menu */}
          <div className="flex flex-col space-y-4">
          {menuItem.map((item) => (
          // Rendering a component for each object
          <Link href={item.href}>{item.name}</Link>
        ))}
        <SignUpButton/>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
