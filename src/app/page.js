"use client";
import React, { useState, useRef } from "react";
import FooterTab from "./components/FooterTab";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const images = ["./Home1.png", "./Home2.jpg", "./Home3.png"]; // Ensure paths start with /

const HomePage = () => {
  const carouselRef = useRef(null); // Ref to control the carousel

  return (
    <div className="relative pl-1 pr-1 shadow-xl">
      {/* First Section: Image Carousel and Text */}
      <div className="w-full h-full relative rounded-xl shadow-2xl">
        {/* Carousel */}
        <Carousel
          ref={carouselRef} // Attach ref to the carousel
          showThumbs={false} // Hide thumbnail navigation
          autoPlay={true} // Enable auto-play
          infiniteLoop={true} // Enable infinite loop
          interval={8000} // Set interval between slides (8 seconds)
          showStatus={false} // Hide status bar
          showArrows={false} // Hide default arrows
        >
          {images.map((image, index) => (
            <div key={index} >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[60vh] object-cover shadow-2xl brightness-50 " // Set image size to cover the container
              />
            </div>
          ))}
        </Carousel>

        {/* Overlay Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-3xl shadow-4xl p-8 w-[1000px] text-center">
            <h1 className="text-6xl font-black mb-6 text-yellow-300" 
              style={{
                WebkitTextStroke: '1px black', // Outline thickness and color
                textStroke: '5px black', // Standard property (not widely supported yet)
                filter: 'drop-shadow(0 0 3px black)', // Adds a shadow for better visibility
              }}
            >
              Happiness is not something ready-made because It comes from your own actions.
            </h1>
            <Link href="/donate">
              <button className="bg-sky-700 text-white px-6 py-3 rounded-full font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* Custom Next and Previous Buttons */}
        <motion.button
          onClick={() => carouselRef.current?.decrement()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-70 z-20"
          whileHover={{ scale: 1.1, opacity: 1 }}
          initial={{ opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => carouselRef.current?.increment()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-70 z-20"
          whileHover={{ scale: 1.1, opacity: 1 }}
          initial={{ opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
      {/* Second Section: Other Components */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to IMSESO WEBSITE..</h1>
        {/* Add other components here */}
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default HomePage;