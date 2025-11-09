"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mark mounted so we only rely on client-only values (like pathname) after hydration
    setMounted(true);
  }, []);

  return (
    <nav className="bg-sky-700 p-3 border-b-4 border-sky-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={'/imlogo.png'} alt="IMSESO Logo" className="h-10 w-10 bg-white rounded-full shadow-2xl" />
          <h1 className="text-white text-2xl md:text-3xl font-bold ml-2 head-oswald">IMSESO</h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex space-x-6 text-lg head-oswald">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/program", label: "Programs & Impact" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition duration-300 ${
                    // avoid using pathname during SSR/hydration mismatch; only apply active styles after mount
                    !mounted ? 'text-white' : (pathname === href ? 'text-yellow-300 font-extrabold' : 'text-white hover:text-yellow-100')
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/donate">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 head-oswald">
              Donate
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {/* Hamburger icon: three lines */}
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - dropdown */}
      <div className={`md:hidden bg-sky-700 border-t border-sky-800 overflow-hidden transition-max-h duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6">
          <ul className="flex flex-col space-y-3 text-lg head-oswald">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/program", label: "Programs & Impact" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded ${
                    !mounted ? 'text-white' : (pathname === href ? 'text-yellow-300 font-extrabold' : 'text-white hover:text-yellow-100')
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link href="/donate">
              <button onClick={() => setOpen(false)} className="w-full bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 head-oswald">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
