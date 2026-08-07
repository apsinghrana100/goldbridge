'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-teal-500/20 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-200 hover:border-teal-500/50 transition-colors shadow-sm focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-emerald-400 animate-spin-once" />
      ) : (
        <Moon className="w-4 h-4 text-teal-700 animate-spin-once" />
      )}
    </motion.button>
  );
}
