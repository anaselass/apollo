import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Server, BarChart3, Settings, Bell, Zap } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-[260px] h-screen bg-glass-bg backdrop-blur-xl border-r border-glass-border flex flex-col shrink-0 z-10">
      <div className="py-6 px-7 border-b border-glass-border flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-accent-cyan to-blue-600 rounded-lg flex items-center justify-center shadow-[0_4px_16px_rgba(0,229,255,0.35)] text-white">
          <Zap size={20} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-text-primary text-lg font-bold leading-tight tracking-wide">Apollo GS</div>
          <div className="text-accent-cyan text-[11px] font-medium leading-tight tracking-wide uppercase">Energy Management</div>
        </div>
      </div>

      <nav className="p-4 flex-1 flex flex-col gap-1.5">
        <div className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase py-3 px-3 leading-tight">Main</div>

        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3.5 py-3 px-4 rounded-lg text-[14px] font-medium leading-snug transition-all duration-200 no-underline cursor-pointer ${isActive ? 'bg-gradient-to-r from-accent-cyan/10 to-transparent text-text-primary border-l-[3px] border-accent-cyan pl-[13px]' : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'}`} end>
          {({ isActive }) => (
            <>
              <LayoutDashboard className={`shrink-0 transition-colors duration-200 ${isActive ? 'stroke-accent-cyan' : ''}`} size={20} />
              Dashboard
              <div className="ml-auto bg-accent-emerald/15 text-accent-emerald text-[11px] font-bold py-0.5 px-2 rounded-xl leading-none flex items-center justify-center border border-accent-emerald/30">LIVE</div>
            </>
          )}
        </NavLink>

        <NavLink to="/assets" className={({ isActive }) => `flex items-center gap-3.5 py-3 px-4 rounded-lg text-[14px] font-medium leading-snug transition-all duration-200 no-underline cursor-pointer ${isActive ? 'bg-gradient-to-r from-accent-cyan/10 to-transparent text-text-primary border-l-[3px] border-accent-cyan pl-[13px]' : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'}`}>
          {({ isActive }) => (
            <>
              <Server className={`shrink-0 transition-colors duration-200 ${isActive ? 'stroke-accent-cyan' : ''}`} size={20} />
              Assets
            </>
          )}
        </NavLink>



        <div className="text-[11px] font-semibold text-text-tertiary tracking-widest uppercase py-3 px-3 leading-tight mt-3">System</div>

        <div className="flex items-center gap-3.5 py-3 px-4 rounded-lg text-text-secondary text-[14px] font-medium leading-snug transition-all duration-200 hover:bg-white/5 hover:text-text-primary cursor-pointer">
          <Settings className="shrink-0 transition-colors duration-200" size={20} />
          Settings
        </div>

        <div className="flex items-center gap-3.5 py-3 px-4 rounded-lg text-text-secondary text-[14px] font-medium leading-snug transition-all duration-200 hover:bg-white/5 hover:text-text-primary cursor-pointer">
          <Bell className="shrink-0 transition-colors duration-200" size={20} />
          Alerts
          <div className="ml-auto bg-accent-red text-white text-[11px] font-bold py-0.5 px-2 rounded-xl shadow-[0_0_10px_rgba(255,51,102,0.4)]">3</div>
        </div>
      </nav>

      <div className="py-5 px-6 border-t border-glass-border flex items-center gap-3 bg-black/15">
        <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-text-primary text-[13px] font-semibold border border-glass-border">JK</div>
        <div className="flex flex-col justify-center">
          <div className="text-text-primary text-[14px] font-semibold leading-tight">James Kim</div>
          <div className="text-text-tertiary text-[12px] leading-tight">Facility Operator</div>
        </div>
      </div>
    </aside>
  );
}
