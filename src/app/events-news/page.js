"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

// Sample data for updates
const updates = [
  {
    id: 1,
    date: 'Dec 15, 2023',
    title: 'Community Health Workshop',
    description: 'IMSESO organized a health awareness workshop in rural areas, educating over 200 participants on preventive care and mental health.'
  },
  {
    id: 2,
    date: 'Nov 20, 2023',
    title: 'Youth Empowerment Launch',
    description: 'New initiative launched to provide skills training to youth in underserved communities, focusing on digital literacy and entrepreneurship.'
  },
  {
    id: 3,
    date: 'Oct 10, 2023',
    title: 'Environmental Cleanup',
    description: 'Volunteers from IMSESO participated in a coastal cleanup, removing over 500kg of waste and raising awareness about marine conservation.'
  }
];

// Sample gallery images
const galleryImages = [
  '/gallery/gallery1.jpeg',
  '/gallery/gallery2.jpeg',
  '/gallery/gallery3.jpeg',
  '/gallery/gallery4.jpeg',
  '/gallery/gallery5.jpeg',
  '/gallery/gallery6.jpeg',
];

const teachers = [
  '/teachers/teacher1.jpeg',
  '/teachers/teacher2.jpeg',
  '/teachers/teacher3.jpeg',
  '/teachers/teacher4.jpeg',
  '/teachers/teacher5.jpeg',
  '/teachers/teacher6.jpeg',
];

const mental = [
  '/mental/mental1.jpeg',
  '/mental/mental2.jpeg',
  '/mental/mental3.jpeg',
  '/mental/mental4.jpeg',
  '/mental/mental5.jpeg',
  '/mental/mental6.jpeg',
  '/mental/mental7.jpeg',
  '/mental/mental8.jpeg',
  '/mental/mental9.jpeg',
  '/mental/mental10.jpeg',
  '/mental/mental11.jpeg',
  '/mental/mental12.jpeg',
]

const children = [
  '/children/child1.jpeg',
  '/children/child2.jpeg',
  '/children/child3.jpeg',
  '/children/child4.jpeg',
  '/children/child5.jpeg',
  '/children/child6.jpeg',
  '/children/child7.jpeg',
  '/children/child8.jpeg',
  '/children/child9.jpeg',
  '/children/child10.jpeg',
  '/children/child11.jpeg',
  '/children/child12.jpeg',
]

const woman = [
  '/woman/woman1.jpeg',
  '/woman/woman2.jpeg',
  '/woman/woman3.jpeg',
  '/woman/woman4.jpeg',
  '/woman/woman5.jpeg',
  '/woman/woman6.jpeg',
]

const meeting = [
  '/meet/meet1.jpeg',
  '/meet/meet2.jpeg',
  '/meet/meet3.jpeg',
  '/meet/meet4.jpeg',
  '/meet/meet5.jpeg',
  '/meet/meet6.jpeg',
]

const EventsNewsPage = () => {
  return (
    <div className='bg-slate-900 min-h-screen text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4 animate-fade-up">
            Events & News
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stay updated with our latest initiatives, community stories, and impact.
          </p>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-20 max-w-6xl">

        {/* Latest Updates Section */}
        {/* <section className="mb-24">
          <div className="flex items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-oswald border-l-4 border-blue-500 dark:border-sky-500 pl-4">
              Latest Updates
            </h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-6"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => (
              <div key={update.id} className="glass-card p-6 rounded-2xl border border-white/10 hover:bg-white/90 dark:hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 group">
                <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-sky-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold rounded-full mb-4 border border-blue-200 dark:border-sky-500/30">
                  {update.date}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-oswald group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {update.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
                  {update.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                  <span className="text-sky-500 text-xs font-bold flex items-center cursor-pointer hover:underline">
                    Read More <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Events Gallery
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “Distributed Emergency Flood Relief Assistance and provided drinking water in the severely Flood effected village in Mannar District, Sri Lanka.”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Event gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teachers Training Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Teachers Training
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “Non-Violent Communication training for teachers”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teachers.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Teacher training image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mental Health Awareness Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Student Mental Health
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “Mental health awareness and Brain activation training for school students.”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mental.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Mental health training image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Children Learning Program Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Child Skills Development
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “After school Learning and Skills Development programme for children in remote villages and hill countries.”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {children.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Children learning program image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Women Empowerment Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Women Empowerment
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “Women Empowerment initiative discussion in Haputale, Badulla District.”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {woman.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Women empowerment initiative image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Discussion Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-oswald mb-4">
              Board Meeting with Donors
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto italic border-l-2 border-sky-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              “Projects discussion meeting with Netherlands donors.”
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {meeting.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl border border-white/10 relative group cursor-pointer">
                <img
                  src={image}
                  alt={`Projects discussion meeting image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-oswald text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <FooterTab />
    </div>
  );
};

export default EventsNewsPage;