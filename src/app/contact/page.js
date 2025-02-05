import React from 'react';
import FooterTab from '../components/FooterTab';

const ContactUs = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-8">
          If you have any questions, feedback, or inquiries, please feel free to reach out to us using the form below or through our contact information.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="5"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
          <p className="text-gray-700">Email: info@imseso.org</p>
          <p className="text-gray-700">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-700">Address: 123 IMSESO Street, City, Country</p>
        </div>
      </div>
    </div>
    <FooterTab />
    </>
  );
};

export default ContactUs;