import React from 'react';
import { Wallet, Users, Leaf, Smartphone } from 'lucide-react';

export const AdvantagesGrid: React.FC = () => {
  const advantages = [
    {
      icon: <Wallet className="w-6 h-6 text-[#FF6600]" />,
      title: "Cashback Reale",
      desc: "Ottieni rimborsi per gli acquisti nei negozi convenzionati.",
      bgColor: "bg-orange-50 border-orange-100",
    },
    {
      icon: <Users className="w-6 h-6 text-[#00A8FF]" />,
      title: "Community Power",
      desc: "Condividi la Sharing Economy e azzera le bollette.",
      bgColor: "bg-sky-50 border-sky-100",
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "100% Verde",
      desc: "Solo energia elettrica proveniente da fonti certificate.",
      bgColor: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: "Tutto in un'App",
      desc: "Gestione consumi, wallet cashback e supporto dedicato.",
      bgColor: "bg-indigo-50 border-indigo-100",
    },
  ];

  return (
    <div className="my-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Perchè scegliere UNION
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          I vantaggi esclusivi del nostro modello di energetica condivisa
        </p>
      </div>

      {/* Grid: 2 rows x 2 columns */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border ${item.bgColor} flex flex-col justify-between shadow-xs transition-transform hover:-translate-y-0.5`}
          >
            <div>
              <div className="mb-2 p-2 bg-white rounded-xl inline-block shadow-xs">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
