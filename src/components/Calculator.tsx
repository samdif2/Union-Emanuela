import React, { useState } from 'react';
import { CalculatorState } from '../types';

export const Calculator: React.FC = () => {
  const [values, setValues] = useState<CalculatorState>({
    bollettaAttuale: 80,
    spesaSupermercato: 500,
    spesaCarburante: 300,
    speseVarie: 200,
    amiciInvitati: 0,
  });

  // Cashback Calculations
  // Supermercato: 3%
  const cashbackSupermercato = values.spesaSupermercato * 0.03;
  // Carburante: 3%
  const cashbackCarburante = values.spesaCarburante * 0.03;
  // Spese Varie: 4%
  const cashbackVarie = values.speseVarie * 0.04;
  // Amici invitati: 2€ / amico
  const cashbackAmici = values.amiciInvitati * 2;

  // Totals
  const risparmioTotale = cashbackSupermercato + cashbackCarburante + cashbackVarie + cashbackAmici;
  const nuovaBollettaRaw = values.bollettaAttuale - risparmioTotale;
  const isAzzerata = nuovaBollettaRaw <= 0;
  const nuovaBolletta = isAzzerata ? 0 : nuovaBollettaRaw;
  const risparmioAnnuale = risparmioTotale * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(Math.round(val));
  };

  return (
    <div className="bg-[#FF6600] rounded-3xl p-4 sm:p-5 text-white shadow-xl border-2 border-orange-400 relative overflow-hidden my-5">
      {/* Decorative accent background circles */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-black/10 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-4 text-center">
        <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
          Calcolatore Risparmio
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
          Calcola il tuo risparmio
        </h2>
        <p className="text-orange-100 text-xs mt-0.5">
          Regola i parametri per scoprire quanto puoi azzerare.
        </p>
      </div>

      {/* Sliders Compact List */}
      <div className="relative z-10 space-y-3 mb-4 bg-black/10 backdrop-blur-xs rounded-2xl p-3 border border-white/15">
        {/* Item 1: Bolletta Attuale */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="bollettaAttuale" className="text-xs font-bold text-white">
              Bolletta attuale
            </label>
            <span className="text-xs font-black bg-white text-[#FF6600] px-2 py-0.5 rounded-md shadow-xs">
              {formatCurrency(values.bollettaAttuale)}
            </span>
          </div>
          <input
            id="bollettaAttuale"
            type="range"
            min={50}
            max={300}
            step={5}
            value={values.bollettaAttuale}
            onChange={(e) => setValues({ ...values, bollettaAttuale: Number(e.target.value) })}
            className="w-full accent-slate-900 cursor-pointer h-1.5 bg-orange-200/50 rounded-lg appearance-none"
          />
        </div>

        {/* Item 2: Spesa Supermercato */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="spesaSupermercato" className="text-xs font-bold text-white">
              Spesa Supermercato
            </label>
            <span className="text-xs font-black bg-white text-[#FF6600] px-2 py-0.5 rounded-md shadow-xs">
              {formatCurrency(values.spesaSupermercato)}
            </span>
          </div>
          <input
            id="spesaSupermercato"
            type="range"
            min={200}
            max={800}
            step={10}
            value={values.spesaSupermercato}
            onChange={(e) => setValues({ ...values, spesaSupermercato: Number(e.target.value) })}
            className="w-full accent-slate-900 cursor-pointer h-1.5 bg-orange-200/50 rounded-lg appearance-none"
          />
        </div>

        {/* Item 3: Spesa Carburante */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="spesaCarburante" className="text-xs font-bold text-white">
              Spesa Carburante
            </label>
            <span className="text-xs font-black bg-white text-[#FF6600] px-2 py-0.5 rounded-md shadow-xs">
              {formatCurrency(values.spesaCarburante)}
            </span>
          </div>
          <input
            id="spesaCarburante"
            type="range"
            min={100}
            max={500}
            step={10}
            value={values.spesaCarburante}
            onChange={(e) => setValues({ ...values, spesaCarburante: Number(e.target.value) })}
            className="w-full accent-slate-900 cursor-pointer h-1.5 bg-orange-200/50 rounded-lg appearance-none"
          />
        </div>

        {/* Item 4: Spese Varie */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="speseVarie" className="text-xs font-bold text-white">
              Spese Varie
            </label>
            <span className="text-xs font-black bg-white text-[#FF6600] px-2 py-0.5 rounded-md shadow-xs">
              {formatCurrency(values.speseVarie)}
            </span>
          </div>
          <input
            id="speseVarie"
            type="range"
            min={50}
            max={800}
            step={10}
            value={values.speseVarie}
            onChange={(e) => setValues({ ...values, speseVarie: Number(e.target.value) })}
            className="w-full accent-slate-900 cursor-pointer h-1.5 bg-orange-200/50 rounded-lg appearance-none"
          />
        </div>

        {/* Item 5: Amici invitati nella Community */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="amiciInvitati" className="text-xs font-bold text-white">
              Amici invitati nella Community
            </label>
            <span className="text-xs font-black bg-white text-[#FF6600] px-2 py-0.5 rounded-md shadow-xs">
              {values.amiciInvitati} {values.amiciInvitati === 1 ? 'amico' : 'amici'}
            </span>
          </div>
          <input
            id="amiciInvitati"
            type="range"
            min={0}
            max={50}
            step={1}
            value={values.amiciInvitati}
            onChange={(e) => setValues({ ...values, amiciInvitati: Number(e.target.value) })}
            className="w-full accent-slate-900 cursor-pointer h-1.5 bg-orange-200/50 rounded-lg appearance-none"
          />
        </div>
      </div>

      {/* Results Box (Blu Scuro interno al riquadro arancio: #0A192F / #0D1B2A) */}
      <div className="relative z-10 bg-[#0A192F] rounded-2xl p-3.5 border border-sky-900/60 shadow-2xl text-white">
        <div className="grid grid-cols-2 gap-2 pb-2.5 border-b border-slate-700/60">
          {/* Left: Risparmio Totale */}
          <div className="flex flex-col">
            <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider">
              Risparmio Totale
            </span>
            <span className="text-lg font-black text-emerald-400 mt-0.5">
              {formatCurrency(risparmioTotale)}
              <span className="text-[10px] font-normal text-slate-400 block">/ mese</span>
            </span>
          </div>

          {/* Right: Nuova bolletta */}
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-sky-300 font-bold uppercase tracking-wider">
              Nuova bolletta
            </span>
            <div className="mt-0.5">
              {isAzzerata ? (
                <span className="inline-flex items-center text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.5 rounded-md">
                  0€ (Azzerata)
                </span>
              ) : (
                <span className="text-lg font-black text-white">
                  {formatCurrency(nuovaBolletta)}
                  <span className="text-[10px] font-normal text-slate-400 block">/ mese</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom in small text: Risparmio Annuale */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
          <span className="font-medium text-slate-400 text-[11px]">Risparmio annuale:</span>
          <span className="font-bold text-sky-300 text-xs">
            {formatCurrency(risparmioAnnuale)} / anno
          </span>
        </div>
      </div>
    </div>
  );
};
