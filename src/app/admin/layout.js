"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    HiOutlineViewGrid,
    HiOutlinePhotograph,
    HiOutlineRefresh,
    HiOutlineInbox,
    HiOutlineLogout,
    HiOutlineMenuAlt2,
    HiOutlineX,
    HiOutlineUserGroup
} from 'react-icons/hi';

const AdminLayout = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                setSession(session);
            }
            setLoading(false);
        };

        checkAuth();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT') {
                router.push('/admin/login');
            } else if (session) {
                setSession(session);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const menuItems = [
        { name: 'Dashboard', path: '/admin', icon: <HiOutlineViewGrid className="w-6 h-6" /> },
        { name: 'Banner Management', path: '/admin/banners', icon: <HiOutlineInbox className="w-6 h-6" /> },
        { name: 'Gallery Management', path: '/admin/gallery', icon: <HiOutlinePhotograph className="w-6 h-6" /> },
        { name: 'Daily Updates', path: '/admin/updates', icon: <HiOutlineRefresh className="w-6 h-6" /> },
        { name: 'Member Management', path: '/admin/members', icon: <HiOutlineUserGroup className="w-6 h-6" /> },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!session && pathname !== '/admin/login') {
        return null; // Redirecting...
    }

    // Don't show admin layout for login page
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex overflow-hidden">
            {/* Sidebar */}
            <AnimatePresence mode="wait">
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 shadow-2xl lg:relative"
                    >
                        <div className="flex flex-col h-full">
                            {/* Logo Area */}
                            <div className="p-6 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-white p-1 rounded-lg">
                                        <img src="/imlogo.png" alt="Logo" className="w-8 h-8" />
                                    </div>
                                    <span className="text-xl font-bold head-oswald tracking-wider text-white">IMSESO</span>
                                </div>
                                <button
                                    onClick={() => setSidebarOpen(false)}
                                    className="lg:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-400"
                                >
                                    <HiOutlineX className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 px-4 space-y-2 mt-4">
                                {menuItems.map((item) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <Link key={item.path} href={item.path}>
                                            <div className={`
                        flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 group
                        ${isActive
                                                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                      `}>
                                                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                                                    {item.icon}
                                                </div>
                                                <span className="font-medium tracking-wide">{item.name}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute left-0 w-1 h-6 bg-sky-500 rounded-r-full"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* User Profile / Logout */}
                            <div className="p-4 border-t border-slate-800">
                                <div className="bg-slate-800/50 rounded-2xl p-4 mb-4">
                                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Logged in as</p>
                                    <p className="text-sm font-medium text-slate-200 truncate">{session?.user?.email}</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-3 rounded-xl transition-colors duration-300 font-bold"
                                >
                                    <HiOutlineLogout className="w-5 h-5" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30">
                    <div className="flex items-center space-x-4">
                        {!sidebarOpen && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors"
                            >
                                <HiOutlineMenuAlt2 className="w-6 h-6" />
                            </button>
                        )}
                        <h2 className="text-xl font-bold text-white head-oswald">
                            {menuItems.find(item => item.path === pathname)?.name || 'Admin Panel'}
                        </h2>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1">
                            <span>View Site</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-950 custom-scrollbar">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
        </div>
    );
};

export default AdminLayout;
