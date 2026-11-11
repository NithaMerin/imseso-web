"use client";
import React from 'react';

const BannersPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white head-oswald">Banner Management</h1>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl font-bold transition duration-300">
                    Add New Banner
                </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-300 mb-2">No Banners Found</h2>
                <p className="text-slate-500 max-w-sm">Connect your Supabase database table 'banners' to start managing your home page hero slides.</p>
            </div>
        </div>
    );
};

export default BannersPage;
