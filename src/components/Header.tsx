import React from 'react';
import { ViewMode } from '../types';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Logo & Branding */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1 transition-transform active:scale-98"
          title="Torna alla Home"
        >
          <img 
            src="https://i.postimg.cc/8k2QsHNk/Logo-Union-Energia.png" 
            alt="Logo Union Energia" 
            className="h-10 w-auto object-contain drop-shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              AZZERA <span className="text-[#FF6600]">la Tua bolletta</span>
            </h1>
            <p className="text-xs font-medium text-slate-500 tracking-tight leading-none">
              La tua spesa paga la bolletta
            </p>
          </div>
        </button>

        {/* Quick View switcher badges for quick access if on subpages */}
        {currentView !== 'home' && (
          <button
            onClick={() => onNavigate('home')}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF6600] hover:text-white transition-colors"
          >
            Home
          </button>
        )}
      </div>
    </header>
  );
};
