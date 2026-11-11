"use client";
import React from 'react';

const GalleryPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white head-oswald">Gallery Management</h1>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl font-bold transition duration-300">
                    Upload Photo
                </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-300 mb-2">Empty Gallery</h2>
                <p className="text-slate-500 max-w-sm">Connect your Supabase database table 'gallery' and bucket to start managing your media items.</p>
            </div>
        </div>
    );
};

export default GalleryPage;
