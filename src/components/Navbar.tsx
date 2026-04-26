/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, User, BookOpen } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ onHomeClick, isDarkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-20 bg-book-bg">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={onHomeClick}
      >
        <span className="text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
          BookHub
        </span>
      </div>

      <div className="flex items-center gap-10">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-72 h-10 px-4 transition-all bg-book-accent/30 text-white placeholder-white/50 border-none outline-none rounded-md focus:bg-book-accent/50"
          />
        </div>

        <div className="flex items-center gap-2 cursor-pointer text-white hover:opacity-80">
          <span className="font-semibold text-base">
            Username
          </span>
        </div>
      </div>
    </nav>
  );
}
