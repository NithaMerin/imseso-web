"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-sky-700 p-2 border-b-4 border-sky-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="imlogo.png" alt="IMSESO Logo" className="h-12 w-12 bg-white rounded-full shadow-2xl" />
          <h1 className="text-white text-3xl font-bold ml-2 head-oswald">IMSESO</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-xl head-oswald">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us"},
            { href: "/program", label: "Programs & Impact" },
            // { href: "/media", label: "Media Room" },
            { href: "/contact", label: "Contact Us" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition duration-300 ${
                  pathname === href
                    ? "text-yellow-300 font-extrabold "
                    : "text-white hover:text-yellow-100"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <div>
          <Link href="/donate">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition duration-300 head-oswald">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
