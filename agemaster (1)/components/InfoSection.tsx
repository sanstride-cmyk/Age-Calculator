import React from 'react';

export const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-12 md:py-16">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">How It Works</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { step: 1, title: 'Enter DOB', desc: 'Select your date of birth using the easy calendar input.' },
          { step: 2, title: 'Calculate', desc: 'Click the big blue button to instantly process your age.' },
          { step: 3, title: 'View Result', desc: 'See your age in years, months, days, and more.' }
        ].map((item) => (
          <div key={item.step} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
            <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Benefits: React.FC = () => (
  <section id="benefits" className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4">
       <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Why Use AgeMaster?</h2>
       <div className="grid md:grid-cols-3 gap-8">
         <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Instant Results</h3>
            <p className="text-slate-600">No loading times. Get your exact age calculated in milliseconds directly in your browser.</p>
         </div>
         <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">100% Accurate</h3>
            <p className="text-slate-600">We handle leap years and differing month lengths precisely so you don't have to.</p>
         </div>
         <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2">Privacy First</h3>
            <p className="text-slate-600">Your data never leaves your device. Calculations happen locally for maximum privacy.</p>
         </div>
       </div>
    </div>
  </section>
);