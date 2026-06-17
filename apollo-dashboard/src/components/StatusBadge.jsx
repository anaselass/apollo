import React from 'react';

export default function StatusBadge({ status }) {
  let badgeClass = 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20';
  let dotClass = 'bg-accent-emerald shadow-[0_0_8px_var(--color-accent-emerald)]';
  
  if (status.toLowerCase() === 'fault') {
    badgeClass = 'bg-accent-amber/10 text-accent-amber border-accent-amber/20';
    dotClass = 'bg-accent-amber shadow-[0_0_8px_var(--color-accent-amber)]';
  } else if (status.toLowerCase() === 'offline') {
    badgeClass = 'bg-accent-red/10 text-accent-red border-accent-red/30';
    dotClass = 'bg-accent-red shadow-[0_0_8px_var(--color-accent-red)]';
  }

  return (
    <div className={`inline-flex items-center gap-2 py-1.5 px-3 rounded-full text-[12px] font-semibold leading-none shrink-0 border ${badgeClass}`}>
      <span className={`w-2 h-2 rounded-full inline-block shrink-0 ${dotClass}`}></span> {status}
    </div>
  );
}
