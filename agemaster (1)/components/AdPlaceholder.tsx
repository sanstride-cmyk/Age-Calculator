import React from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label = "Advertisement", className = "" }) => {
  return (
    <div className={`w-full bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center py-8 my-6 text-slate-400 text-sm ${className}`}>
      <span className="font-semibold tracking-widest uppercase mb-2">Google AdSense</span>
      <span>{label}</span>
      {/* Actual AdSense code would be injected here in production */}
      {/* <!-- AdSense Area --> */}
    </div>
  );
};

export default AdPlaceholder;