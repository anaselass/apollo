import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import MetricTile from '../components/MetricTile';
import AssetCard from '../components/AssetCard';
import PowerAreaChart from '../components/PowerAreaChart';
import { LayoutDashboard, Zap, ShieldCheck, Server, BatteryCharging, Plug, Activity, Plus, AlertCircle, RefreshCw, Monitor, WifiOff } from 'lucide-react';

export default function Dashboard() {
  const [viewState, setViewState] = useState('normal'); // 'normal', 'empty', 'error'

  const isError = viewState === 'error';
  const isEmpty = viewState === 'empty';

  return (
    <>
      <Topbar 
        title="Dashboard Overview" 
        rightActions={
          <div className="flex items-center gap-2.5">
            <div className="bg-white/10 p-1 rounded-lg flex gap-1 items-center">
              <button onClick={() => setViewState('normal')} className={`text-text-primary text-[13px] font-medium py-1.5 px-3 rounded-md transition-all border-none cursor-pointer ${viewState==='normal'?'bg-white/20':'hover:bg-white/10 bg-transparent'}`}>Normal</button>
              <button onClick={() => setViewState('empty')} className={`text-text-primary text-[13px] font-medium py-1.5 px-3 rounded-md transition-all border-none cursor-pointer ${viewState==='empty'?'bg-white/20':'hover:bg-white/10 bg-transparent'}`}>Empty</button>
              <button onClick={() => setViewState('error')} className={`text-text-primary text-[13px] font-medium py-1.5 px-3 rounded-md transition-all border-none cursor-pointer ${viewState==='error'?'bg-white/20':'hover:bg-white/10 bg-transparent'}`}>Error</button>
            </div>
            <div className="text-text-secondary text-[13px] flex items-center gap-2 leading-tight ml-2">
              <RefreshCw size={14} />
              Last updated 14:32
            </div>
            <button className="bg-white/5 border border-glass-border text-text-primary text-[13px] font-medium py-2 px-4 rounded-lg cursor-pointer inline-flex items-center gap-2 leading-tight transition-all duration-200 hover:bg-white/10 hover:border-white/15">
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>
        }
      />

      {isError && (
        <div className="px-8 py-4 bg-accent-red/10 border-b border-accent-red/20 border-l-4 border-l-accent-red flex items-center gap-4 shrink-0 backdrop-blur-md">
          <AlertCircle className="stroke-accent-red shrink-0 drop-shadow-[0_0_8px_rgba(255,51,102,0.4)]" size={22} />
          <div className="flex-1 text-text-primary text-[14px] leading-relaxed font-medium"><span className="text-accent-red font-bold tracking-wide">EVS-05 is offline.</span> Last data received 43 minutes ago. Check device connectivity or contact support.</div>
          <button className="bg-transparent border border-accent-red/30 text-text-primary text-[13px] font-semibold py-2 px-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent-red/15" onClick={() => setViewState('normal')}>Dismiss</button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto z-10 relative">
        <div className="p-6 sm:p-8 flex flex-col gap-6 w-full">
          <div className="flex gap-4 shrink-0 w-full flex-col lg:flex-row">
          <MetricTile 
            icon={isError ? <Monitor size={20} /> : <Monitor size={20} />}
            iconClass={isEmpty ? '' : "green"}
            label="Total Active Devices"
            value={isEmpty ? "—" : (isError ? "5" : "24")}
            subText={!isEmpty ? "↑ +2 since yesterday" : null}
            muted={isEmpty}
          />
          <MetricTile 
            icon={<Zap size={20} />}
            iconClass={isEmpty ? '' : "blue"}
            label="Total Power Output"
            value={isEmpty ? "—" : "142.6"}
            unit={isEmpty ? null : "kW"}
            subText={!isEmpty ? "Peak today: 148.2 kW" : null}
            subClass="text-secondary"
            muted={isEmpty}
          />
          <MetricTile 
            icon={isError ? <WifiOff size={20} /> : <ShieldCheck size={20} />}
            iconClass={isEmpty ? '' : (isError ? "red" : "green")}
            label="System Status"
            value={isEmpty ? "—" : (isError ? "Offline" : "Optimal")}
            valueClass={isError ? "error" : "ok"}
            subText={!isEmpty ? "1 device needs attention" : null}
            subClass={isError ? "error" : "warn"}
            muted={isEmpty}
          />
        </div>

        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center bg-black/10 rounded-2xl border border-dashed border-white/15 mt-2 p-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-glass-border flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
               <Server size={48} strokeWidth={1} className="stroke-text-tertiary" />
            </div>
            <h2 className="text-text-primary text-[24px] font-semibold mb-3 tracking-[-0.5px]">No Devices Added Yet</h2>
            <p className="text-text-secondary text-[15px] max-w-[460px] leading-relaxed mb-8 mx-auto">Connect your first energy asset to start monitoring live data across your facility. Solar inverters, batteries, EV chargers, and grid meters are all supported.</p>
            <button className="bg-gradient-to-br from-accent-cyan to-blue-600 border-none text-white text-[15px] font-semibold py-3.5 px-7 rounded-xl cursor-pointer inline-flex items-center justify-center mx-auto gap-2.5 leading-tight shadow-[0_4px_16px_rgba(0,229,255,0.25)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5">
              <Plus size={18} />
              Add Your First Device
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between shrink-0 mt-1">
              <div className="text-[16px] font-semibold text-text-primary tracking-wide leading-tight flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:bg-accent-cyan before:rounded-sm">Energy Assets</div>
              {!isError && (
                <button className="bg-gradient-to-br from-accent-cyan to-blue-600 border-none text-white text-[13px] font-semibold py-2 px-4 rounded-lg cursor-pointer inline-flex items-center gap-2 leading-tight shadow-[0_4px_12px_rgba(0,229,255,0.25)] transition-all duration-200 hover:shadow-[0_6px_16px_rgba(0,229,255,0.4)] hover:-translate-y-px">
                  <Plus size={16} />
                  Add Device
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2.5 shrink-0">
              <AssetCard 
                id="inv-01"
                icon={<Server size={20} />}
                iconWrapperClass="stroke-accent-amber"
                name="Solar Inverter INV-01"
                type="Solar Array · Facility A — Roof"
                status="Active"
                value="38.0 kW"
              />
              <AssetCard 
                id="bat-02"
                icon={<BatteryCharging size={20} />}
                iconWrapperClass="stroke-accent-cyan"
                name="Battery Pack BAT-02"
                type="Energy Storage · Facility A — Level B1"
                status="Charging"
                value="87%"
              />
              <AssetCard 
                id="evs-03"
                icon={<Plug size={20} />}
                iconWrapperClass="stroke-accent-amber"
                name="EV Charger EVS-03"
                type="Charging Station · Parking Deck A"
                status="Fault"
                value="0.0 kW"
                isError={true}
              />
              <AssetCard 
                id="gm-04"
                icon={<Activity size={20} />}
                iconWrapperClass="stroke-accent-emerald"
                name="Grid Meter GM-04"
                type="Main Distribution · Facility A"
                status="Active"
                value="104.6 kW"
              />
              {isError && (
                <AssetCard 
                  id="evs-05"
                  icon={<Plug size={20} />}
                  iconWrapperClass="stroke-text-tertiary"
                  name="EV Charger EVS-05"
                  type="EV Charging Station · Parking Deck B"
                  status="Offline"
                  value="Data unavailable"
                  isError={true}
                />
              )}
            </div>

            <div className="bg-glass-bg border border-glass-border rounded-2xl py-5 px-6 shrink-0 w-full flex flex-col gap-4 backdrop-blur-md flex-1 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div className="text-text-primary text-[15px] font-semibold leading-tight flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:bg-accent-cyan before:rounded-full before:shadow-[0_0_10px_var(--color-accent-cyan)]">Power Output Trend — Last 24h</div>
              {isError ? (
                <div className="flex-1 bg-black/20 rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center gap-3 min-h-[160px]">
                   <Activity size={36} className="stroke-text-tertiary drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
                   <div className="text-text-secondary text-[14px] font-medium">Chart data unavailable — device offline</div>
                </div>
              ) : (
                <div className="w-full flex-1 relative min-h-[220px]">
                  <div className="absolute inset-0">
                    <PowerAreaChart />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
}
