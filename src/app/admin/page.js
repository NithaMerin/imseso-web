"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineInbox,
    HiOutlinePhotograph,
    HiOutlineRefresh,
    HiOutlineUserGroup
} from 'react-icons/hi';
import Link from 'next/link';

const AdminDashboard = () => {
    const stats = [
        { name: 'Banners', value: '15', icon: <HiOutlineInbox className="w-8 h-8 text-sky-400" />, path: '/admin/banners', color: 'bg-sky-500/10 border-sky-500/20' },
        { name: 'Gallery Items', value: '124', icon: <HiOutlinePhotograph className="w-8 h-8 text-blue-400" />, path: '/admin/gallery', color: 'bg-blue-500/10 border-blue-500/20' },
        { name: 'Daily Updates', value: '42', icon: <HiOutlineRefresh className="w-8 h-8 text-indigo-400" />, path: '/admin/updates', color: 'bg-indigo-500/10 border-indigo-500/20' },
        { name: 'Team Members', value: '21', icon: <HiOutlineUserGroup className="w-8 h-8 text-teal-400" />, path: '/admin/members', color: 'bg-teal-500/10 border-teal-500/20' },
    ];

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <img src="/imlogo.png" alt="Logo" className="w-32 h-32" />
                </div>
                <h1 className="text-3xl font-bold text-white head-oswald tracking-wide mb-2">Welcome Back, Admin</h1>
                <p className="text-slate-400 max-w-lg">Manage your website content, update news, and keep the community informed with the professional IMSESO management dashboard.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <Link key={idx} href={stat.path}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className={`p-6 rounded-2xl border ${stat.color} hover:bg-slate-800/50 transition-all duration-300 cursor-pointer group`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-slate-900 rounded-xl">
                                    {stat.icon}
                                </div>
                                <span className="text-slate-600 group-hover:text-slate-400 transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.name}</h3>
                            <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Recent Activity Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white head-oswald mb-6">Recent Updates</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-4 p-4 hover:bg-slate-800/50 rounded-2xl transition-colors border border-transparent hover:border-slate-700">
                                <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-400 font-bold">U</div>
                                <div>
                                    <h4 className="text-slate-200 font-medium">New update posted for Flood Relief</h4>
                                    <p className="text-slate-500 text-xs text-justify">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                    <h3 className="text-xl font-bold text-white head-oswald mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors space-y-2 border border-slate-700">
                            <HiOutlineInbox className="w-8 h-8 text-sky-400" />
                            <span className="text-sm font-medium">Add Banner</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors space-y-2 border border-slate-700">
                            <HiOutlinePhotograph className="w-8 h-8 text-blue-400" />
                            <span className="text-sm font-medium">Upload Photo</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors space-y-2 border border-slate-700">
                            <HiOutlineRefresh className="w-8 h-8 text-indigo-400" />
                            <span className="text-sm font-medium">Post Update</span>
                        </button>
                        <Link href="/" className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-2xl transition-colors space-y-2 border border-slate-700">
                            <div className="w-8 h-8 flex items-center justify-center text-slate-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium">Public View</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
