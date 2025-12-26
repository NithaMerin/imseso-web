"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import FooterTab from "../components/FooterTab";

export default function page() {
  return (
    <div className='bg-blue-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-sky-400 dark:to-blue-600 mb-4 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic">
            "A Promise with Confidence!"
          </p>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl pb-24">

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center hover:bg-white/90 dark:hover:bg-white/5 transition duration-300 group">
            <div className="w-16 h-16 bg-blue-100 dark:bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FaPhoneAlt className="text-blue-500 dark:text-sky-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-oswald text-slate-900 dark:text-white mb-4">Call Us</h3>
            <div className="text-slate-600 dark:text-slate-400 space-y-2 text-sm">
              <p>+94 76 672 2724</p>
              <p>+94 77 887 4221</p>
              <p className="border-t border-gray-200 dark:border-white/10 pt-2 mt-2">General: +94 70 196 9149</p>
            </div>
          </div>

          {/* Visit */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center hover:bg-white/90 dark:hover:bg-white/5 transition duration-300 group">
            <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FaMapMarkerAlt className="text-red-500 dark:text-red-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-oswald text-slate-900 dark:text-white mb-4">Visit Us</h3>
            <div className="text-slate-600 dark:text-slate-400 space-y-4 text-sm">
              <div>
                <strong className="text-slate-800 dark:text-white block mb-1">Official Address:</strong>
                Alavakai, Murunkan, Mannar District, 41000, Northern Province, Sri Lanka.
              </div>
              <div>
                <strong className="text-slate-800 dark:text-white block mb-1">Negombo Address:</strong>
                Don Bosco Technical Centre, Ethukala, Negombo, Sri Lanka.
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="glass-card p-8 rounded-2xl border border-white/10 text-center hover:bg-white/90 dark:hover:bg-white/5 transition duration-300 group">
            <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FaEnvelope className="text-green-600 dark:text-green-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold font-oswald text-slate-900 dark:text-white mb-4">Email Us</h3>
            <p className="text-slate-600 dark:text-slate-400">
              imseso2013@gmail.com
            </p>
          </div>
        </div>

        {/* Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold font-oswald text-slate-900 dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-sky-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-sky-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-sky-500 transition-colors"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition-transform transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-sky-500/30">
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="glass-card p-2 rounded-2xl border border-white/10 h-[500px] lg:h-auto overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.543106602742!2d79.9910374702688!3d8.833739272636027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdcfc4d8ebb12f%3A0x958e38bddfc5f113!2sIMSESO%20-%20Inclusive%20Management%20%26%20Social%20Empowering%20Security%20Organisation!5e1!3m2!1sen!2slk!4v1739955876251!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold font-oswald text-slate-900 dark:text-white mb-6">Follow Us On Social Media</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/imseso2015" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-500 hover:scale-110 transition border border-white/10">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.facebook.com/imseso.jesus" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition border border-white/10">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

      </div>
      <FooterTab />
    </div>
  );
}
