import React, { useState, FormEvent } from 'react';
import { calculateAgeDetails, isValidDate, AgeResult } from '../utils/dateHelpers';

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>('');
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsAnimating(false);

    if (!dob) {
      setError('Please enter your date of birth.');
      return;
    }

    const dobDate = new Date(dob);
    
    if (!isValidDate(dobDate)) {
      setError('Invalid date format.');
      return;
    }

    const calculation = calculateAgeDetails(dobDate);
    
    if (!calculation) {
      setError('Date of birth cannot be in the future.');
      setResult(null);
      return;
    }

    // Trigger animation
    setResult(null);
    setTimeout(() => {
        setResult(calculation);
        setIsAnimating(true);
    }, 50);
  };

  // Share Links
  const shareUrl = "https://agemaster.app";
  const twitterText = result ? `I am ${result.years} years old! Find out your exact age:` : "";
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(shareUrl)}&hashtags=AgeMaster,AgeCalculator`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-lg mx-auto border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-cyan-400"></div>
      
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Enter your details</h2>
      
      <form onSubmit={handleCalculate} className="space-y-4">
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-slate-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-4 focus:ring-brand-100 focus:border-brand-500 transition-colors outline-none text-lg text-slate-700"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Calculate Age
        </button>
      </form>

      {/* Results Section */}
      {result && (
        <div className={`mt-8 transition-opacity duration-700 ease-out ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
          <div className="text-center mb-6">
            <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-1">Exact Age</p>
            <div className="flex justify-center items-end gap-2 text-brand-900 leading-none">
              <span className="text-5xl md:text-6xl font-extrabold">{result.years}</span>
              <span className="text-xl md:text-2xl font-medium mb-1.5 md:mb-2">years</span>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-slate-600">
                <span className="text-lg"><strong className="text-slate-900">{result.months}</strong> months</span>
                <span className="text-lg"><strong className="text-slate-900">{result.days}</strong> days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ResultCard title="Day of Birth" value={result.dayOfWeekBorn} delay="delay-100" />
            <ResultCard title="Next Birthday" value={`${result.nextBirthdayDays} days`} delay="delay-200" highlight />
            <ResultCard title="Total Months" value={result.totalMonths.toLocaleString()} delay="delay-300" />
            <ResultCard title="Total Days" value={result.totalDays.toLocaleString()} delay="delay-400" />
          </div>

          {/* Social Share Section */}
          <div className="mt-8 pt-6 border-t border-slate-100 animate-fade-in-up delay-500">
            <p className="text-center text-slate-500 text-sm font-medium mb-4">Share your result</p>
            <div className="flex justify-center gap-3">
                <a 
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a91da] transition-colors text-sm font-bold shadow-sm"
                    aria-label="Share on Twitter"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    Twitter
                </a>
                <a 
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899] transition-colors text-sm font-bold shadow-sm"
                    aria-label="Share on Facebook"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ResultCard: React.FC<{ title: string; value: string; delay?: string; highlight?: boolean }> = ({ title, value, delay = "", highlight = false }) => (
  <div className={`bg-slate-50 p-4 rounded-xl border border-slate-200 animate-fade-in-up ${delay}`}>
    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">{title}</p>
    <p className={`text-lg md:text-xl font-bold ${highlight ? 'text-brand-600' : 'text-slate-800'}`}>{value}</p>
  </div>
);

export default AgeCalculator;