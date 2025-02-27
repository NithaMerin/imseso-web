"use client";
import React from 'react';
import Link from 'next/link';
import FooterTab from '../components/FooterTab';

const Donate = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div>
        <img src='./donate1.png'/>
      </div>

      {/* New Section for jgf.JPG Content */}
      <div className="relative z-10 bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join our journey to give children a sustainable future
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            There are several ways in which you can contribute to transform lives of our younger generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusive Youth Empowerment & Entrepreneurship */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Inclusive Youth Empowerment & Entrepreneurship
              </h3>
              <p className="text-lg text-gray-600">
                Building disabled youth resilience and autonomy by promoting entrepreneurship activities, providing necessary skills, mentorship, and helping them secure credit facilities.
              </p>
            </div>

            {/* Water and Sanitation */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Water and Sanitation
              </h3>
              <p className="text-lg text-gray-600">
                Ensuring access to clean water and sanitation facilities for children and their communities.
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-10">
            <Link href="/donate">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                DONATE
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default Donate;
