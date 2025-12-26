"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

const MediaPage = () => {
  return (
    <div className='bg-blue-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-sky-400 dark:to-blue-600 mb-4 animate-fade-up">
            Media & Features
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Press releases, videos, and stories from our journey.
          </p>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        <div className="glass-card p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-sky-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-2xl font-bold font-oswald text-slate-900 dark:text-white mb-4">Content Coming Soon</h2>
          <p className="text-slate-600 dark:text-slate-400">
            We are currently curating the best media content to showcase our impact. Please check back later.
          </p>
        </div>
      </div>

      <FooterTab />
    </div>
  );
};

export default MediaPage;