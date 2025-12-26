"use client";
import React from 'react';

const FooterTab = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 font-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-full">
                <img src="/imlogo.png" alt="Logo" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide head-oswald">IMSESO</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Inclusive Management & Social Empowering Security Organization. Dedicated to building peaceful and sustainable communities.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold text-white head-oswald tracking-wide relative pb-2 after:content-[''] after:absolute after:left-1/2 md:after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-sky-400">
              Contact Us
            </h3>
            <ul className="text-sm space-y-3">
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>imseso2013@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+94 76 672 2724 / +94 77 887 4221</span>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-bold text-white head-oswald tracking-wide relative pb-2 after:content-[''] after:absolute after:left-1/2 md:after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-sky-400">
              Locations
            </h3>
            <ul className="text-sm space-y-3 text-slate-400">
              <li>
                <strong className="text-white block mb-1">Negombo Office:</strong>
                Don Bosco Technical Centre, Ethukala, Negombo, Sri Lanka.
              </li>
              <li>
                <strong className="text-white block mb-1">Mannar Office:</strong>
                Alavakai, Murunkan, Mannar, Sri Lanka.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} IMSESO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTab;