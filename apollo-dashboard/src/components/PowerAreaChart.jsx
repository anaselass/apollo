import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { time: '00:00', power: 40 },
  { time: '02:00', power: 42 },
  { time: '04:00', power: 40 },
  { time: '06:00', power: 45 },
  { time: '08:00', power: 85 },
  { time: '10:00', power: 120 },
  { time: '12:00', power: 142 },
  { time: '14:00', power: 135 },
  { time: '16:00', power: 90 },
  { time: '18:00', power: 50 },
  { time: '20:00', power: 42 },
  { time: '22:00', power: 40 },
];

export default function PowerAreaChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dx={-10} tickFormatter={(val) => `${val}kW`} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(18, 20, 28, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#00E5FF' }}
          />
          <Area type="monotone" dataKey="power" stroke="#00E5FF" strokeWidth={3} fillOpacity={1} fill="url(#colorPower)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
