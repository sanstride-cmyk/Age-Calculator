import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AgeCalculator from './components/AgeCalculator';
import { HowItWorks, Benefits } from './components/InfoSection';
import FAQ from './components/FAQ';
import AdPlaceholder from './components/AdPlaceholder';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-12 pb-20 md:pt-20 md:pb-28 px-4 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
             <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10 mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              How Old Are You <span className="text-brand-600">Exactly?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Calculate your age in years, months, and days instantly. Discover your next birthday countdown and total days lived.
            </p>
          </div>

          {/* Ad Section - Moved above calculator */}
          <div className="max-w-4xl mx-auto px-4 relative z-10 mb-8">
            <AdPlaceholder label="Top Banner Advertisement" />
          </div>

          <div id="calculator" className="relative z-10 scroll-mt-24">
            <AgeCalculator />
          </div>
        </section>

        {/* Content Sections */}
        <HowItWorks />
        <Benefits />
        
        {/* Ad Section */}
        <div className="max-w-4xl mx-auto px-4">
          <AdPlaceholder label="Middle Content Advertisement" />
        </div>

        <FAQ />

        {/* Ad Section */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <AdPlaceholder label="Bottom Advertisement" />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;