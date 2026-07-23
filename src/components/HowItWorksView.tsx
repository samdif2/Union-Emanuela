import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { ViewMode } from '../types';
import { CtaBox } from './CtaBox';

interface HowItWorksViewProps {
  onNavigate: (view: ViewMode) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6 pb-6">
      {/* Top Navigation Back Button */}
      <div className="flex items-center">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#00A8FF] bg-sky-50 hover:bg-sky-100 border border-sky-200 px-4 py-2 rounded-xl transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla Home</span>
        </button>
      </div>

      {/* Page Title & Description */}
      <div className="text-left space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 text-[#00A8FF] rounded-full text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" /> Guida Passo-Passo
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Come Funziona
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Guida passo-passo al funzionamento dell'app MyUnion, alla generazione del Cashback e a come raggiungere la "Bolletta Zero" ogni mese.
        </p>
      </div>

      {/* Embedded YouTube Vertical Video Player */}
      <div className="w-full flex justify-center my-4">
        <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950 aspect-[9/16] relative">
          <iframe
            src="https://www.youtube.com/embed/7ZB1ofCQFE8?autoplay=1&rel=0&modestbranding=1"
            title="Union Energia Come Funziona"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Call to Action Box (Identico a Home) */}
      <CtaBox />
    </div>
  );
};
