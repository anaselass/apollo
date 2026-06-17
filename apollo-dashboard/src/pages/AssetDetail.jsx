import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import StatusBadge from '../components/StatusBadge';
import YieldBarChart from '../components/YieldBarChart';
import { ChevronLeft, Server, BatteryCharging, Plug, Activity, RefreshCw, Download, Calendar, CheckCircle2 } from 'lucide-react';
import { mockAssets } from '../data/mockAssets';

const IconMap = {
  server: Server,
  battery: BatteryCharging,
  plug: Plug,
  activity: Activity
};

export default function AssetDetail() {
  const { id } = useParams();
  
  // Default to inv-01 if no id is provided or id is invalid
  const asset = mockAssets.find(a => a.id === id) || mockAssets[0];

  const breadcrumbs = (
    <>
      Dashboard <span className="text-text-tertiary">›</span> Assets <span className="text-text-tertiary">›</span> <span className="text-text-primary font-semibold">{asset.id.toUpperCase()}</span>
    </>
  );

  const AssetIcon = IconMap[asset.iconType] || Server;

  return (
    <>
      <Topbar breadcrumbs={breadcrumbs} />

      <div className="flex-1 overflow-y-auto z-10 relative">
        <div className="p-6 sm:p-8 flex flex-col gap-5 w-full">
          <div>
            <Link to="/" className="bg-white/5 border border-glass-border text-text-primary text-[13px] font-medium py-2 px-4 rounded-lg cursor-pointer inline-flex items-center gap-2 leading-tight transition-all duration-200 hover:bg-white/10 hover:border-white/15 no-underline">
              <ChevronLeft size={16} />
              Back to Dashboard
            </Link>
          </div>

          <div className="flex gap-6 flex-col lg:flex-row">
            {/* LEFT */}
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col backdrop-blur-md relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent flex-none">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-16 h-16 rounded-xl border flex items-center justify-center shrink-0 ${asset.iconBg}`}>
                    <AssetIcon size={32} color={asset.iconColor} />
                  </div>
                  <div>
                    <div className="text-text-primary text-[22px] font-bold leading-tight tracking-tight">{asset.title}</div>
                    <div className="text-text-secondary text-[14px] mt-1 leading-tight">{asset.typeSubtitle}</div>
                    <div className="mt-3">
                      <StatusBadge status={asset.status} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/20 border border-glass-border rounded-xl p-5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.02]">
                    <div className="text-[12px] font-medium text-text-secondary tracking-wide uppercase mb-2">Current Output</div>
                    <div className="text-[32px] font-bold text-text-primary leading-none tabular-nums">{asset.stats.currentOutput} <span className="text-[16px] font-medium text-text-tertiary">{asset.stats.currentOutputUnit}</span></div>
                  </div>
                  <div className="bg-black/20 border border-glass-border rounded-xl p-5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.02]">
                    <div className="text-[12px] font-medium text-text-secondary tracking-wide uppercase mb-2">Daily Yield</div>
                    <div className="text-[32px] font-bold text-text-primary leading-none tabular-nums">{asset.stats.dailyYield} <span className="text-[16px] font-medium text-text-tertiary">{asset.stats.dailyYieldUnit}</span></div>
                  </div>
                  <div className="bg-black/20 border border-glass-border rounded-xl p-5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.02]">
                    <div className="text-[12px] font-medium text-text-secondary tracking-wide uppercase mb-2">Efficiency</div>
                    <div className="text-[32px] font-bold text-text-primary leading-none tabular-nums">{asset.stats.efficiency} <span className="text-[16px] font-medium text-text-tertiary">{asset.stats.efficiencyUnit}</span></div>
                  </div>
                  <div className="bg-black/20 border border-glass-border rounded-xl p-5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.02]">
                    <div className="text-[12px] font-medium text-text-secondary tracking-wide uppercase mb-2">Temperature</div>
                    <div className="text-[32px] font-bold text-text-primary leading-none tabular-nums">{asset.stats.temperature} {asset.stats.temperatureUnit && <span className="text-[16px] font-medium text-text-tertiary">{asset.stats.temperatureUnit}</span>}</div>
                  </div>
                </div>
              </div>

              <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col backdrop-blur-md relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent flex-1">
                <div className="text-text-primary text-[15px] font-semibold flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:bg-accent-cyan before:rounded-full before:shadow-[0_0_10px_var(--color-accent-cyan)] mb-4">Output Power — Last 7 Days</div>
                <div className="w-full flex-1 relative min-h-[220px]">
                  <div className="absolute inset-0 mt-4">
                    <YieldBarChart />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5 w-full lg:w-[380px] shrink-0">
            <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col backdrop-blur-md relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div className="text-text-primary text-[16px] font-semibold mb-5 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-4 before:bg-accent-cyan before:rounded-sm">Device Controls</div>
              <div className="flex flex-col gap-1 pb-4 border-b border-glass-border mb-5">
                <div className="text-text-primary text-[15px] font-semibold leading-tight">Remote Control</div>
                <div className="text-text-tertiary text-[13px] leading-tight">access enabled</div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="bg-gradient-to-br from-[#00D4FF] to-[#0088FF] border-none text-white text-[14px] font-semibold py-3 px-5 rounded-lg cursor-pointer flex items-center justify-center gap-2 w-full leading-tight shadow-[0_4px_12px_rgba(0,229,255,0.25)] transition-all duration-200 hover:shadow-[0_6px_16px_rgba(0,229,255,0.4)] hover:-translate-y-px">
                  <RefreshCw size={16} />
                  Restart Inverter
                </button>
                <button className="bg-[#12141C] border border-glass-border text-text-primary text-[14px] font-medium py-3 px-5 rounded-lg cursor-pointer flex items-center justify-center gap-2 w-full leading-tight transition-all duration-200 hover:bg-white/5 hover:border-white/10">
                  <Download size={16} />
                  Export Data
                </button>
              </div>
            </div>
            
            <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col backdrop-blur-md relative before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent">
              <div className="text-text-primary text-[16px] font-semibold mb-5 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-4 before:bg-accent-cyan before:rounded-sm">Device Info</div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Serial No.</span><span className="font-mono text-[13px] text-accent-cyan bg-accent-cyan/10 py-0.5 px-1.5 rounded text-text-primary font-semibold">{asset.info.serialNo}</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Firmware</span><span className="text-text-primary text-[14px] font-semibold">{asset.info.firmware}</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Model</span><span className="text-text-primary text-[14px] font-semibold">{asset.info.model}</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Connected to</span><span className="text-text-primary text-[14px] font-semibold">{asset.info.connectedTo}</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Last sync</span><span className="text-accent-emerald text-[14px] font-semibold flex items-center gap-1"><CheckCircle2 size={14} /> {asset.info.lastSync}</span></div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3"><span className="text-text-secondary text-[14px]">Location</span><span className="text-text-primary text-[14px] font-semibold">{asset.info.location}</span></div>
                <div className="flex justify-between items-center"><span className="text-text-secondary text-[14px]">Installed</span><span className="text-text-primary text-[14px] font-semibold">{asset.info.installed}</span></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
