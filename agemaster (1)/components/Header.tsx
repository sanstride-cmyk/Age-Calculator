import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
              A
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">AgeMaster</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              How it works
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              Benefits
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <a 
            href="#calculator" 
            onClick={(e) => scrollToSection(e, 'calculator')}
            className="text-sm bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Calculate Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;