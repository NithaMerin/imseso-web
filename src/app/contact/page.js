import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import FooterTab from "../components/FooterTab";

export default function page() {
  return (
    <>
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container lg:w-10/12 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 font-extrabold">A PROMISE WITH CONFIDENCE!</h2>
        <p className="mt-4 text-lg text-gray-700 italic">
        We are proud to be an organization you can trust, and we invite you to learn about our financial accountability.
        </p>
        <h3 className="text-4xl font-bold text-sky-700 mt-8">FIND US</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4 md:px-0">
          {/* Card 1 - Call Us */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaPhoneAlt className="text-blue-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Call us</h3>
            <div className="mt-4">
            <span className="text-gray-800">
              <strong>Phone:</strong>
              <div className="ml-2">
                +94766722724<br />
                +94778874221
              </div>
            </span>
          </div>
          </div>

          {/* Card 2 - Visit Us */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Visit us</h3>
            <div className="mt-4">
            <div className="text-gray-800">
              <div className="mb-2">
                <strong>Negombo Address:</strong> Don Bosco Technical Centre, Don Bosco Mawatha, Ethukala, Negombo, Sri Lanka.
              </div>
              <div>
                <strong>Mannar Address:</strong> Alavakai, Murunkan, Mannar, Sri Lanka.
              </div>
            </div>
          </div>
          </div>

          {/* Card 3 - Email Us */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-full mb-4">
                <FaEnvelope className="text-green-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Email us</h3>
            <div className="mt-4">
              <span className="text-gray-800">
                <strong>Email:</strong> imseso2013@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-stretch">
          {/* Child 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form action="#" method="post" className="space-y-4 flex-grow">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Child 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex">
            <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.543106602742!2d79.9910374702688!3d8.833739272636027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdcfc4d8ebb12f%3A0x958e38bddfc5f113!2sIMSESO%20-%20Inclusive%20Management%20%26%20Social%20Empowering%20Security%20Organisation!5e1!3m2!1sen!2slk!4v1739955876251!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
          <div className="mt-6 flex space-x-6 justify-center">
            {/* <a
              href="https://www.tiktok.com/@gideon_ingermany?_t=8qm4y7odswq&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaTiktok className="w-8 h-8" />
            </a> */}
            {/* Instagram */}
            <a
              href="https://www.instagram.com/imseso2015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/imseso.jesus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            {/* YouTube */}
            {/* <a
              href="https://youtube.com/@gidzunipath?si=WoGKw0TkY3Aj0Ar-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <FaYoutube className="w-8 h-8" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
    <FooterTab />
    </>
  );
}
