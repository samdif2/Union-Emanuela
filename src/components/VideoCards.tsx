import React from 'react';
import { Play, ExternalLink, Sparkles, HelpCircle } from 'lucide-react';
import { ViewMode } from '../types';

interface VideoCardsProps {
  onNavigate: (view: ViewMode) => void;
}

export const VideoCards: React.FC<VideoCardsProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-4 my-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
          Scopri come funziona
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card Video 1: INTRO */}
        <button
          onClick={() => onNavigate('intro')}
          className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md text-left transition-all hover:shadow-xl hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 active:scale-98"
        >
          {/* Thumbnail Container */}
          <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
            <img
              src="https://img.youtube.com/vi/IKjtfrUS_7M/hqdefault.jpg"
              alt="Video Intro Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#FF6600] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>

            <span className="absolute top-3 left-3 bg-[#FF6600] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> INTRO
            </span>
          </div>

          <div className="p-4">
            <h4 className="font-extrabold text-slate-900 text-base group-hover:text-[#FF6600] transition-colors">
              Guarda il Video Intro
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Scopri la Sharing Economy applicata alle utenze domestiche e come iniziare subito.
            </p>
          </div>
        </button>

        {/* Card Video 2: COME FUNZIONA */}
        <button
          onClick={() => onNavigate('come-funziona')}
          className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md text-left transition-all hover:shadow-xl hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] active:scale-98"
        >
          {/* Thumbnail Container */}
          <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
            <img
              src="https://img.youtube.com/vi/7ZB1ofCQFE8/hqdefault.jpg"
              alt="Video Come Funziona Preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#00A8FF] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>

            <span className="absolute top-3 left-3 bg-[#00A8FF] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs flex items-center gap-1">
              <HelpCircle className="w-3 h-3" /> GUIDA
            </span>
          </div>

          <div className="p-4">
            <h4 className="font-extrabold text-slate-900 text-base group-hover:text-[#00A8FF] transition-colors">
              Come Funziona L'App
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              Guida passo-passo al cashback, alla Community e a come azzerare la bolletta.
            </p>
          </div>
        </button>
      </div>

      {/* External Link Button */}
      <div className="pt-2">
        <a
          href="http://www.unionenergia.it"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm px-4 py-3.5 rounded-2xl shadow-md transition-all active:scale-98"
        >
          <span>Visita la pagina ufficiale Union Energia</span>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </a>
      </div>
    </div>
  );
};
