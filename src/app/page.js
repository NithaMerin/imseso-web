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
              <button className="bg-blue-500 text-white px-3 md:px-6 py-2 md:py-4 mt-4 rounded-full font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600">
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

      {/* New Section: Sri Lanka Flood Relief */}
      <div className="w-full max-w-6xl mt-8 px-4 md:px-0">
        <h2 className="text-2xl md:text-5xl font-extrabold text-blue-500 text-center head-oswald mb-6">
          Holding Each Other Through Hard Times: <br/>Sri Lanka Flood Relief
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-600 text-center head-oswald mb-6 italic">
          Finding Strength in the Healing Power of Belonging
        </h3>
        <div className="flex justify-center mb-6">
          <Link href="/donate">
            <img
              src="/Fundraiser.jpg" // Replace with actual image path
              alt="Sri Lanka Flood Relief"
              className="w-full max-w-2xl h-96 md:h-[28rem] object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
        <div className="text-center">
          <p className="text-gray-700 text-justify head-oswald leading-relaxed max-w-4xl mx-auto">
            This fundraiser is more than a response to a natural disaster — it is an act of solidarity with people
who have been cultivating NVC values ​​for years, often under challenging social and economic
conditions. The Sri Lankan NVC community has been steadily growing, with practitioners working
in schools, interfaith dialogue, mental health, community peacebuilding, and youth development.
Now, many of these same people are directly affected by the floods.
<br /><br />
We are collaborating with a local Sri Lankan NGO that works on the ground in coordination with
local authorities to deliver essential supplies, especially in Mannar and  Nuwara Eliya and other
severely affected areas. All funds will go directly to flood relief and support for the families affected.
<br /><br />
<strong>Why this matters</strong><br />
This is not only a fundraiser it is a call to collective care. The people we are supporting are Sri
Lankan citizens, and individuals who live NVC as a daily practice and who have, for years,
contributed to their communities through nonviolence, reconciliation, trauma support, youth
empowerment, and social transformation. Many continue their service even in the midst of crisis.
Your support helps ensure they can meet basic needs now — and continue their meaningful
work in the future.
<br /><br />
<strong>Project summary</strong><br />
Cyclone Ditwah caused widespread flooding and landslides across multiple districts in Sri
Lanka, severely disrupting school communities. Many students experienced displacement, loss
of homes, interruption of education, and exposure to distressing events. These experiences have
significantly increased psychological stress, anxiety, fear, and behavioral challenges among
children. severely affecting districts such as Mannar, Batticaloa, Badulla, Nuwara Eliya Districts.
<br /><br />
<strong>Goal of the Project</strong><br />
To strengthen the self-reliance of disaster-affected communities in four targeted districts by
improving educational continuity, psychosocial wellbeing, peaceful community relations, youth
leadership, sustainable livelihoods, and environmental protection.
<br /><br />
<strong>Specific Objectives</strong><br />
• Providing clean water and heath services in the flood effed villages.<br />
• Improve educational access and continuity for children affected by disasters.<br />
• Provide psychosocial support and build emotional resilience among children, youth, and
families.<br />
• Promote Non-Violent Communication (NVC) and peaceful coexistence within
communities.<br />
• Strengthen youth leadership, employability, and civic engagement.<br />
• Restore and diversify livelihoods for families affected by disasters.<br />
• Promote environmental sustainability and community-based disaster risk reduction
(DRR).
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 mt-6 max-w-4xl mx-auto">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQi3NIt-358qfuCy_PT6TK1fUEHv4EXzGs3Vudjm-ezSEtVg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-600 head-oswald"
          >
            Register Here
          </a>
          <a 
            href="https://nvcfundacjazyrafy.pl/en/wydarzenie/holding-each-other-through-hard-times-sri-lanka-flood-relief/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-full font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 head-oswald"
          >
            More Info
          </a>
        </div>
        
        {/* Video Section */}
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden relative group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                autoPlay={false}
                muted={false}
                playsInline
                id="flood-relief-video"
                onLoadedData={() => {
                  // Video is ready, ensure overlay is visible initially
                  const overlay = document.querySelector('.video-overlay');
                  if (overlay) overlay.style.display = 'flex';
                }}
                onPlay={() => {
                  const overlay = document.querySelector('.video-overlay');
                  const posterOverlay = document.querySelector('.poster-overlay');
                  if (overlay) overlay.style.display = 'none';
                  if (posterOverlay) posterOverlay.style.display = 'none';
                }}
                onPause={() => {
                  const overlay = document.querySelector('.video-overlay');
                  if (overlay) overlay.style.display = 'flex';
                }}
                onEnded={() => {
                  const overlay = document.querySelector('.video-overlay');
                  const posterOverlay = document.querySelector('.poster-overlay');
                  if (overlay) overlay.style.display = 'flex';
                  if (posterOverlay) posterOverlay.style.display = 'flex';
                }}
              >
                <source src="/gallery/Imseso.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Poster Overlay - shown initially */}
              <div className="poster-overlay absolute inset-0 bg-black flex items-center justify-center">
                <img
                  src="/gallery/video-thumbnail.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Custom Play Button Overlay */}
              <div 
                className="video-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 z-10"
                onClick={() => {
                  const video = document.getElementById('flood-relief-video');
                  const posterOverlay = document.querySelector('.poster-overlay');
                  if (video) {
                    video.play();
                  }
                  if (posterOverlay) {
                    posterOverlay.style.display = 'none';
                  }
                }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-sky-500 rounded-full flex items-center justify-center shadow-lg hover:bg-sky-600 transition-colors duration-300">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <button className="group bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-sky-600">
                  <p className="text-sm md:text-m">Go to Website</p>
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