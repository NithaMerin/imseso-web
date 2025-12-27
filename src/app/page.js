"use client";
import React, { useState, useEffect } from "react";
import FooterTab from "./components/FooterTab";
import Link from "next/link";
import "./text.css";

const images = [
  "/Home1.jpeg", "/Home1.png", "/Home2.jpg", "/gallery/gallery3.jpeg",
  "/Home9.jpeg", "gallery2.jpeg", "/gallery4.jpeg", "/Home3.png",
  "/Home2.jpeg", "/Home3.jpeg", "/Home4.jpeg", "/Home5.jpeg",
  "/Home6.jpeg", "/Home7.jpeg", "/Home8.jpeg"
];

const textContent = [
  {
    title: "We Believe In",
    subtitle: "Social Empowerment with Peaceful Environment.."
  },
  {
    title: "Empowering Communities",
    subtitle: "Building a future where every voice is heard."
  },
  {
    title: "Compassionate Action",
    subtitle: "Healing the world through non-violent communication."
  },
  {
    title: "Sustainable Growth",
    subtitle: "Nurturing nature and people together."
  }
];

const heroSlides = images.map((image, index) => ({
  image,
  ...textContent[index % textContent.length]
}));

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden mb-12">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-50"
            />
            {/* Overlay - Right Aligned */}
            <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 md:px-20 z-10">
              <h1 className="text-3xl md:text-5xl font-black text-white head-oswald mb-2 md:mb-4 drop-shadow-lg transform transition-all duration-700 translate-y-0">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-sky-300 font-bold max-w-xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <Link href="/donate">
                <button className="bg-sky-500 text-white px-5 py-2 md:px-8 md:py-3 mt-4 md:mt-8 rounded-full font-bold transition duration-300 hover:bg-sky-600 hover:scale-105 shadow-lg shadow-sky-400/30">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
        {/* Floating Glass Navigation */}
        <div className="absolute bottom-0 w-full z-20 backdrop-blur-md bg-black/30 border-t border-white/20 py-4 md:py-6">
          <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-12 px-4">
            {[
              { name: "ABOUT IMSESO", link: "/about" },
              { name: "OUR IMPACT", link: "/program" },
              { name: "DONATE", link: "/donate" },
              { name: "CONTACT US", link: "/contact" },
              { name: "EVENTS & NEWS", link: "/events-news" },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} className="group">
                <span className="text-white font-bold text-sm md:text-lg tracking-wider head-oswald relative overflow-hidden inline-block hover:text-sky-300 transition-colors duration-300">
                  {item.name}
                  <span className="block h-0.5 bg-sky-300 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center gap-4 m-4">

        {/* New Section: Sri Lanka Flood Relief */}
        <div className="w-full max-w-6xl mt-8 px-4 md:px-0">
          <h2 className="text-2xl md:text-5xl font-extrabold text-sky-400 text-center head-oswald mb-6">
            Holding Each Other Through Hard Times: <br />Sri Lanka Flood Relief
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-slate-300 text-center head-oswald mb-6 italic">
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
            <p className="text-slate-300 text-justify head-oswald leading-relaxed max-w-4xl mx-auto">
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
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-center text-sky-400 head-oswald mb-6">Related Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/jQ_bADGMi7c"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/2VM0IoX2w0s"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/npd_DsRLZtI"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/sgyTdpX2GFg"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden md:col-span-2">
                <video
                  src="/gallery/ania.mp4"
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* Second Section: Partner Organizations */}
      <div className="flex flex-col items-center mb-12 mt-12 px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-extrabold text-sky-400 mb-8 md:mb-12 head-oswald tracking-wide animate-fade-up">Our Partner Organizations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="glass-card p-8 hover:bg-slate-800 transition-all duration-300 group">
            <div className="h-2 w-20 bg-blue-500 mb-6 rounded-full group-hover:w-32 transition-all duration-300"></div>
            <h3 className="text-2xl font-bold text-white head-oswald mb-4">Foundation for Social Dialogue - Poland</h3>
            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              The Foundation for Social Dialogue promotes Marshall B. Rosenberg's Nonviolent Communication, a transformative approach that fosters empathy, understanding, and peaceful conflict resolution in communities worldwide.
            </p>
            <a href="https://nvcfundacjazyrafy.pl" target="_blank" rel="noopener noreferrer">
              <button className="text-blue-600 dark:text-sky-400 font-bold hover:text-blue-800 dark:hover:text-sky-300 flex items-center space-x-2 transition-colors">
                <span>Visit Website</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </a>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 hover:bg-slate-800 transition-all duration-300 group">
            <div className="h-2 w-20 bg-blue-500 mb-6 rounded-full group-hover:w-32 transition-all duration-300"></div>
            <h3 className="text-2xl font-bold text-white head-oswald mb-4">Interplast UK (Charity)</h3>
            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              Interplast UK is an International Organization of Plastic Surgeons and associated professionals who provide free reconstructive surgery for underprivileged patients in the developing world. Dr. Charles Viva is Co-Founder.
            </p>
            <button className="text-slate-500 cursor-default font-bold flex items-center space-x-2">
              <span>Partner</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default HomePage;