"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

// Sample data for updates
const updates = [
  {
    id: 1,
    date: '2023-12-15',
    title: 'Community Health Workshop',
    description: 'IMSESO organized a health awareness workshop in rural areas, educating over 200 participants on preventive care and mental health.'
  },
  {
    id: 2,
    date: '2023-11-20',
    title: 'Youth Empowerment Program Launch',
    description: 'New initiative launched to provide skills training to youth in underserved communities, focusing on digital literacy and entrepreneurship.'
  },
  {
    id: 3,
    date: '2023-10-10',
    title: 'Environmental Cleanup Drive',
    description: 'Volunteers from IMSESO participated in a coastal cleanup, removing over 500kg of waste and raising awareness about marine conservation.'
  }
];

// Sample gallery images (placeholder paths - replace with actual images)
const galleryImages = [
  '/gallery/gallery1.jpeg',
  '/gallery/gallery2.jpeg',
  '/gallery/gallery3.jpeg',
  '/gallery/gallery4.jpeg',
  '/gallery/gallery5.jpeg',
  '/gallery/gallery6.jpeg',
];

const EventsNewsPage = () => {
  return (
    <div className='bg-blue-50 min-h-screen'>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold font-oswald text-blue-500 text-center head-oswald mb-8">
          Events & News
        </h1>

        {/* Latest Updates Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 head-oswald mb-6 text-center">
            Latest Updates
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {updates.map((update) => (
              <div key={update.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3 head-oswald">
                  {update.title}
                </h3>
                <p className="text-gray-700 text-justify head-oswald">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 head-oswald mb-6 text-center">
            Event Gallery
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={image}
                  alt={`Event gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/icons/about.jpg'; // Fallback image
                  }}
                />
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