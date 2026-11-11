"use client";
import React from 'react';

const UpdatesPage = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white head-oswald">Daily Updates</h1>
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl font-bold transition duration-300">
                    Create New Update
                </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h5M7 12h8M7 16h8" />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-300 mb-2">No Updates Found</h2>
                <p className="text-slate-500 max-w-sm">Connect your Supabase database table 'updates' to start posting daily news and announcements.</p>
            </div>
        </div>
    );
};

export default UpdatesPage;
