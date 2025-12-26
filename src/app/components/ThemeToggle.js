"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200 border border-white/10 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
                <FaMoon className="w-5 h-5 text-sky-600" />
            )}
        </button>
    );
};

export default ThemeToggle;
