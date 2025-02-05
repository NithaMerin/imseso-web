"use client";
import React,{useState, useEffect} from 'react';
import FooterTab from './components/FooterTab';
import Link from 'next/link';

const images = ["./Home1.png", "./Home3.png"];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 1500); // Adjust this timeout to match transition duration
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* First Section: Image and Text */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
           className={`absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] ease-in-out transform ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-600 bg-opacity-20 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center">
            <h1 className="text-4xl font-bold mb-6 text-yellow-400">
              Happiness is not something ready-made because It comes from your own actions.
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              {/* Optional additional text */}
            </p>
            <Link href="/donate">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">
              READ MORE
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section: Other Components */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome</h1>
        {/* Add other components here */}
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default HomePage;
