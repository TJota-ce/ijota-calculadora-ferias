import React from 'react';

export const InfoTooltip: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="group relative inline-block ml-2">
      <div className="cursor-pointer text-ijota-400 hover:text-ijota-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-64 p-2 text-xs text-white bg-slate-800 rounded shadow-lg group-hover:block z-10">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </div>
  );
};