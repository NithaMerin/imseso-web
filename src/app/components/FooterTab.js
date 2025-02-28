"use client";
import React from 'react';

const FooterTab = () => {
  return (
    <footer className="bg-sky-800 text-white py-8 border-sky-800">
      <div className="container text-center mx-auto px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* About Section */}
          <div>
            {/* <h3 className="text-xl font-bold mb-4">IMSESO</h3> */}
            <p className="text-sm">
            &copy; {new Date().getFullYear()} IMSESO. All rights reserved.
          </p>
          </div>

          {/* Quick Links Section */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-200">About Us</Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-gray-200">Programs & Impact</Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-gray-200">Media Room</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Information Section */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: imseso2013@gmail.com</li>
              <li>Phone: +94766722724 / +94778874221</li>
              <li>Negombo Office : Don Bosco Technical Centre, Don Bosco Mawatha, Ethukala, Negombo, Sri Lanka.</li>
              <li>Mannar Office : Alavakai, Murunkan, Mannar, Sri Lanka.</li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default FooterTab;