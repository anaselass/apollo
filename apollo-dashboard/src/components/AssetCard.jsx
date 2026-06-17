import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

export default function AssetCard({ id, name, type, status, value, isError, icon, iconWrapperClass }) {
  const CardWrapper = id ? Link : 'div';
  const cardProps = id ? { to: `/assets/${id}` } : {};

  let defaultIconWrapper = "bg-black/20 stroke-accent-cyan";
  if (isError) defaultIconWrapper = "bg-accent-red/10 border-accent-red/40 stroke-accent-red shadow-[inset_0_0_12px_rgba(255,51,102,0.1)]";

  return (
    <CardWrapper className={`w-full bg-glass-bg border border-glass-border rounded-xl py-3 px-5 flex items-center gap-5 transition-all duration-200 no-underline hover:bg-white/5 hover:border-white/15 hover:scale-[1.005] ${isError ? 'bg-accent-red/5 border-accent-red/30 hover:bg-accent-red/10 hover:border-accent-red/40' : ''}`} {...cardProps}>
      <div className={`w-11 h-11 rounded-lg border border-glass-border flex items-center justify-center shrink-0 ${iconWrapperClass || defaultIconWrapper}`}>
        {icon}
      </div>
      <div className="flex-1 flex flex-col gap-0.5">
        <div className="text-[15px] font-semibold text-text-primary leading-tight" style={isError ? { color: 'var(--color-accent-red)' } : {}}>{name}</div>
        <div className="text-[12px] text-text-secondary leading-tight">{type}</div>
      </div>
      <StatusBadge status={status} />
      <div className={`text-[16px] font-bold text-text-primary min-w-[90px] text-right shrink-0 leading-tight tabular-nums ${status.toLowerCase() === 'offline' ? 'text-text-tertiary italic font-medium text-[14px]' : ''}`} style={isError && status.toLowerCase() !== 'offline' ? { color: 'var(--color-accent-red)' } : {}}>
        {value}
      </div>
    </CardWrapper>
  );
}
