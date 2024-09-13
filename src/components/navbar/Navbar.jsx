"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navItems } from "@/utils/navItems";


const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname()


  const toggleMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const closeMenu = () => {
    setIsNavMenuOpen(false);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isNavMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavMenuOpen]);



  return (
    <>
      <div className="bg-slate-800 bg-opacity-10 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800">
        <div className="container flex flex-row justify-between items-center text-white m-auto p-5">
          <div className="logo">
            <p className="text-3xl font-bold">Diatomic-Soft</p>
          </div>
          <div className="hidden md:flex">
            <ul className="flex flex-row gap-10">
              {navItems.map((navItem, index) => (
                <li key={index} className="   cursor-pointer">
                  <Link href={navItem.href} className={`link ${pathname === navItem.href ? 'border-b-4 border-blue-600' : 'border-transparent '} border-b-4  p-3 uppercase`}>
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {/* Hamburger menu icon */}
              <svg
                className="w-6 h-6"
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
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-slate-800 text-white transform ${isNavMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white"
        >
          {/* close/cross icon  */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-12 mt-20 ml-6">
          {navItems.map((navItem, index) => (
                <li key={index} onClick={closeMenu} className="cursor-pointer">
                  <Link href={navItem.href} className={`link ${pathname === navItem.href ? 'border-b-4 border-blue-600 text-blue-600' : 'border-transparent'} border-b-4  p-3`}>
                    {navItem.label}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
