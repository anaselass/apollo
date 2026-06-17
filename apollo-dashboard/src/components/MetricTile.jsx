import React from 'react';

export default function MetricTile({ icon, label, value, unit, subText, subClass, iconClass, muted, valueClass }) {
  return (
    <div className={`flex-1 bg-glass-bg border border-glass-border rounded-2xl p-5 flex flex-col gap-3 backdrop-blur-md relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent ${muted ? 'opacity-60 pointer-events-none' : ''}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border bg-white/5 border-white/5 stroke-text-tertiary ${iconClass === 'green' ? 'bg-accent-emerald/10 border-accent-emerald/20 stroke-accent-emerald shadow-[inset_0_0_10px_rgba(0,255,157,0.1)]' : iconClass === 'blue' ? 'bg-accent-cyan/10 border-accent-cyan/20 stroke-accent-cyan shadow-[inset_0_0_10px_rgba(0,229,255,0.1)]' : iconClass === 'red' ? 'bg-accent-red/10 border-accent-red/20 stroke-accent-red shadow-[inset_0_0_10px_rgba(255,51,102,0.1)]' : ''}`}>
          {icon}
        </div>
        <div className="text-[12px] font-medium text-text-secondary tracking-wide uppercase leading-tight">{label}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className={`text-[32px] font-bold text-text-primary leading-none flex items-baseline gap-1 tabular-nums ${valueClass === 'ok' ? 'text-accent-emerald drop-shadow-[0_0_20px_rgba(0,255,157,0.4)]' : valueClass === 'error' ? 'text-accent-red drop-shadow-[0_0_15px_rgba(255,51,102,0.6)]' : (valueClass || '')} ${muted ? 'text-text-tertiary font-semibold' : ''}`}>
          {value} {unit && <span className="text-[16px] font-medium text-text-tertiary">{unit}</span>}
        </div>
        {subText && <div className={`text-[13px] flex items-center gap-1.5 leading-tight font-medium ${subClass === 'warn' || subClass === 'error' ? 'text-accent-red' : subClass === 'text-secondary' ? 'text-text-secondary' : 'text-accent-emerald'}`}>{subText}</div>}
      </div>
    </div>
  );
}
