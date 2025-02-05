import React from 'react';
import Link from 'next/link';

const FooterTab = () => {
  return (
    <footer className="bg-sky-800 text-white py-8 border-sky-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">IMSESO</h3>
            <p className="text-sm">
            &copy; {new Date().getFullYear()} IMSESO. All rights reserved.
          </p>
          </div>

          {/* Quick Links Section */}
          <div>
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
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: info@imseso.org</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 IMSESO Street, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTab;