import React from 'react';

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/393284642207";

  return (
    <footer className="mt-8 mb-6 text-center px-2">
      <div className="bg-slate-900 rounded-3xl p-5 text-white shadow-xl max-w-md mx-auto border border-slate-800">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
          Hai domande o vuoi maggiori info?
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-[#25D366] font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-2xl shadow-lg border border-slate-100 transition-all transform active:scale-95 w-full focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
        >
          <img
            src="https://i.postimg.cc/5t6MJpF6/icona-whatsapp-removebg-preview.png"
            alt="WhatsApp"
            className="w-7 h-7 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-[#25D366] font-black">Emanuela Di Michele</span>
        </a>
      </div>
    </footer>
  );
};
