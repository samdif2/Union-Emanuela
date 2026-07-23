import React from 'react';
import { Download, Sparkles } from 'lucide-react';

export const CtaBox: React.FC = () => {
  const referralUrl = "https://share.unionenergia.it/referral/c803a799940c518d7dee931879d6bd72";

  return (
    <div className="bg-gradient-to-br from-[#00A8FF] to-[#0070F3] rounded-3xl p-6 sm:p-7 text-white shadow-xl my-6 relative overflow-hidden text-center border-2 border-sky-300/40">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-900/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3 shadow-inner">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
          Pronto ad azzerare la Tua bolletta?
        </h3>

        <p className="text-sky-50 text-sm sm:text-base max-w-sm font-medium mb-6 leading-relaxed">
          Iscriviti subito GRATUITAMENTE! Scarica l’app e inizia a risparmiare da oggi
        </p>

        <a
          href={referralUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0070F3] hover:bg-slate-50 font-extrabold text-base px-6 py-3.5 rounded-2xl shadow-lg transition-all transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          <Download className="w-5 h-5 text-[#0070F3]" />
          <span>Scarica MyUnion Ora</span>
        </a>
      </div>
    </div>
  );
};
