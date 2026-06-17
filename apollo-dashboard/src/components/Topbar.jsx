import React from 'react';
import { Clock, RefreshCw } from 'lucide-react';

export default function Topbar({ title, breadcrumbs, rightActions }) {
  return (
    <div className="px-8 border-b border-glass-border bg-[#080A11]/60 backdrop-blur-md flex items-center justify-between shrink-0 h-[72px] z-10">
      {title && <div className="text-text-primary text-[22px] font-semibold leading-tight tracking-[-0.5px]">{title}</div>}
      
      {breadcrumbs && (
        <div className="text-text-secondary text-[15px] flex items-center gap-2 font-medium">
          {breadcrumbs}
        </div>
      )}

      <div className="flex items-center gap-5">
        {rightActions || (
          <>
            <div className="text-text-secondary text-[13px] flex items-center gap-2 leading-tight">
              <Clock size={14} />
              Last updated 14:32
            </div>
            <button className="bg-white/5 border border-glass-border text-text-primary text-[13px] font-medium py-2 px-4 rounded-lg cursor-pointer inline-flex items-center gap-2 leading-tight transition-all duration-200 hover:bg-white/10 hover:border-white/15">
              <RefreshCw size={16} />
              Refresh
            </button>
          </>
        )}
      </div>
    </div>
  );
}
