import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewMode } from './types';
import { Header } from './components/Header';
import { VideoCards } from './components/VideoCards';
import { Calculator } from './components/Calculator';
import { CtaBox } from './components/CtaBox';
import { AdvantagesGrid } from './components/AdvantagesGrid';
import { Footer } from './components/Footer';
import { IntroView } from './components/IntroView';
import { HowItWorksView } from './components/HowItWorksView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-slate-900 sm:py-6 flex flex-col items-center justify-start antialiased selection:bg-orange-500 selection:text-white">
      {/* Smartphone Container Frame (Ratio 9:16 optimized, mobile responsive) */}
      <div className="w-full max-w-[430px] min-h-screen sm:min-h-[850px] bg-slate-50 text-slate-800 sm:rounded-[40px] shadow-2xl sm:border-8 sm:border-slate-800 relative overflow-hidden flex flex-col">
        {/* Top Mobile Header */}
        <Header currentView={currentView} onNavigate={handleNavigate} />

        {/* Main Content Area */}
        <main className="flex-1 px-4 pt-4 pb-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Home Page Main Hero Headline */}
                <section className="text-center mb-5 pt-1">
                  <span className="inline-block bg-[#FF6600]/10 text-[#FF6600] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    Sharing Economy Energetica
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    L’energia che torna a te.
                  </h2>
                  <p className="text-slate-600 text-xs mt-1.5 max-w-xs mx-auto leading-relaxed font-medium">
                    Scarica l’App MyUnion e ottieni Cashback immediato sulle tue spese quotidiane.
                  </p>
                </section>

                {/* Video Cards Preview (INTRO & COME FUNZIONA + External Official Link) */}
                <VideoCards onNavigate={handleNavigate} />

                {/* Calcolatore di Risparmio (Riquadro Arancio) */}
                <Calculator />

                {/* Riquadro Call to Action (Riquadro Azzurro) */}
                <CtaBox />

                {/* Sezione Vantaggi (Grid 2x2) */}
                <AdvantagesGrid />

                {/* Footer WhatsApp */}
                <Footer />
              </motion.div>
            )}

            {currentView === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <IntroView onNavigate={handleNavigate} />
                <Footer />
              </motion.div>
            )}

            {currentView === 'come-funziona' && (
              <motion.div
                key="come-funziona"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <HowItWorksView onNavigate={handleNavigate} />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
