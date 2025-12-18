"use client";
import React, { useRef } from "react";
import FooterTab from "./components/FooterTab";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./text.css";

const images = ["/Home1.png", "/Home2.jpg", "/Home3.png", "/home4.jpg", "/home5.jpg"]; // Use absolute paths from public/

const HomePage = () => {
  const carouselRef = useRef(null); // Ref to control the carousel

  return (
    <div className="relative pl-1 pr-1 bg-blue-50">
      <div className="flex items-center justify-center px-4">
          <div className="rounded-3xl shadow-4xl p-6 w-full max-w-xl md:max-w-6xl text-left">
            <h1 className="text-2xl md:text-4xl font-black text-blue-500 head-oswald">
              We Believe In
            </h1>
            <div className="w-full">
            <h1 className="typing-effect w-full text-xl md:text-4xl font-black mb-6 bg-white text-yellow-300">
             Social Empowerment with Peaceful Environment..
            </h1>
            </div>
            <Link href="/donate">
              <button className="bg-blue-500 text-white px-3 md:px-6 py-2 md:py-4 mt-4 rounded-full font-bold transition delay-150 body-oswald duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600">
               <p className="text-m md:text-xl">Read More</p>
              </button>
            </Link>
          </div>
        </div>
      {/* First Section: Image Carousel and Text */}
  <div className="container flex flex-col items-center gap-4 m-4">
   <div className="w-full max-w-6xl h-auto md:h-auto flex justify-center items-center">
        {/* Carousel */}
        <Carousel
          className="fade-in"
          ref={carouselRef}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={4000}
          showStatus={false}
          showArrows={true}
          centerMode={false}
          dynamicHeight={false}
          emulateTouch={true}
          swipeable={true}
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full max-w-sm sm:max-w-md md:max-w-3xl h-56 sm:h-72 md:h-[420px] brightness-70 m-4 rounded-2xl object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4 md:px-0 w-full max-w-6xl">
       <Link href="/about">
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-extrabold text-blue-500 head-oswald">ABOUT IMSESO </h3>
           <div className="mt-4">
            <div className="text-gray-800 h-30 md:h-40">
               <img src={'/icons/about.jpg'} alt="About IMSESO" className="w-full h-40 md:h-48 object-cover justify-center rounded"/>
            </div>
          </div>
       </div>
       </Link>
     <Link href="/program">
     <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
       <h3 className="text-xl font-extrabold text-blue-500 head-oswald">OUR IMPACT</h3>
        <div className="mt-4">
        <div className="text-gray-800  h-30 md:h-40">
          <img src={'/icons/impact.jpg'} alt="Our Impact" className="w-full h-40 md:h-48 object-cover justify-center rounded" />

            </div>
          </div>
       </div>
       </Link>
     <Link href="/donate">
     <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
       <h3 className="text-xl font-extrabold text-blue-500 head-oswald">DONATE</h3>
        <div className="mt-4">
        <div className="text-gray-800  h-30 md:h-40">
          <img src={'/icons/donate.jpg'} alt="Donate" className="w-full h-40 md:h-48 object-cover justify-center rounded"/>
        </div>
       </div>
     </div>
     </Link>
     <Link href="/contact">
     <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
       <h3 className="text-xl font-extrabold text-blue-500 head-oswald">CONTACT US </h3>
        <div className="mt-4">
        <div className="text-gray-800 h-30 md:h-40">
          <img src={'/icons/contact.jpg'} alt="Contact Us" className="w-full h-40 md:h-48 object-cover justify-center rounded"/>
        </div>
       </div>
     </div>
     </Link>
      </div>
     </div>
      {/* Second Section: Other Components */}
      <div className="flex flex-col items-center mb-2 mt-6 bg-blue-200 p-4 md:p-8">
        <h1 className="text-3xl font-extrabold text-blue-500 mb-6 md:mb-8 head-oswald">Our Partner Organizations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl">
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 head-oswald">Foundation for Social Dialogue - Poland</h3>
            <div className="mt-4">
            <div className="text-gray-800">
              <div className="mb-2 w-full">
                <p className="head-oswald text-left leading-relaxed break-words">
                  The Foundation for Social Dialogue promotes Marshall B. Rosenberg's Nonviolent Communication, a transformative approach that fosters empathy, understanding, and peaceful conflict resolution in communities worldwide.
                </p>
              </div>
            </div>
            <div className="text-left mt-2">
              <a href="https://nvcfundacjazyrafy.pl" target="_blank" rel="noopener noreferrer">
                <button className="group bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full font-bold transition delay-150 body-oswald duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-600">
                  <p className="text-sm md:text-lg">Go to Website <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span></p>
                </button>
              </a>
            </div>
          </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 head-oswald">Interplast UK (Charity) </h3>
            <div className="mt-4">
            <div className="text-gray-800">
              <div className="mb-2 w-full">
                <p className="head-oswald text-left leading-relaxed break-words">
                  Interplast UK is an International Organization of Plastic Surgeons and associated
                   professionals who provide free reconstructive surgery for underprivileged patients
                   in the developing world. Dr.Charles Viva is Co-Founder and Head of the Organization.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default HomePage;