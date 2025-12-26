"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? "glass-dark py-2 shadow-lg" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-full border-2 border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <img src={'/imlogo.png'} alt="IMSESO Logo" className="h-10 w-10 md:h-12 md:w-12 bg-white object-contain" />
            </div>
            <span className="text-white text-2xl md:text-3xl font-bold ml-3 tracking-wide head-oswald drop-shadow-md">
              IMSESO
            </span>
          </Link>
          <div className="hidden md:block">
            {/* Theme Toggle Removed */}
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-8 text-lg font-medium tracking-wide">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/events-news", label: "Events & News" },
              { href: "/program", label: "Programs & Impact" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative pb-1 transition-colors duration-300 ${!mounted ? 'text-white' : (pathname === href ? 'text-sky-400' : 'text-white/90 hover:text-white')
                    } group`}
                >
                  {label}
                  <span className={`absolute left-0 bottom-0 block h-0.5 bg-sky-400 transition-all duration-300 ${!mounted ? 'w-0' : (pathname === href ? 'w-full' : 'w-0 group-hover:w-full')
                    }`}></span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/donate">
            <button className="bg-sky-400 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-sky-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
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
            className="text-white p-2 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-dark border-b border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 flex flex-col space-y-4">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/events-news", label: "Events & News" },
            { href: "/program", label: "Programs & Impact" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-xl font-medium ${!mounted ? 'text-white' : (pathname === href ? 'text-sky-400' : 'text-white hover:text-sky-200')
                }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4">
            <Link href="/donate">
              <button onClick={() => setOpen(false)} className="w-full bg-sky-400 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-sky-300 transition duration-300">
                Donate
              </button>
            </Link>
          </div>
          <div className="pt-2 flex justify-center">
            {/* Theme Toggle Removed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
