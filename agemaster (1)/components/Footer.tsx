import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-8 border-b border-slate-800 pb-8">
          {/* Branding Section */}
          <div className="flex items-center gap-2 mb-4">
             <div className="w-6 h-6 bg-brand-500 rounded flex items-center justify-center text-white font-bold text-xs">
              A
            </div>
            <span className="text-white font-bold text-lg">AgeMaster</span>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            The most accurate and free age calculator tool on the web. 
            Built for simplicity and speed.
          </p>
        </div>
        <div className="text-center text-xs text-slate-500">
          &copy; {currentYear} AgeMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;