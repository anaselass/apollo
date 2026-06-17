import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const data = [
  { day: 'Mon', yield: 160 },
  { day: 'Tue', yield: 210 },
  { day: 'Wed', yield: 180 },
  { day: 'Thu', yield: 210, isCurrent: true },
  { day: 'Fri', yield: 190 },
  { day: 'Sat', yield: 140 },
  { day: 'Sun', yield: 150 },
];

export default function YieldBarChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }} maxBarSize={80}>
          <defs>
            <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#00E5FF" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF9D" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#00FF9D" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dx={-10} />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.02)' }}
            contentStyle={{ backgroundColor: 'rgba(18, 20, 28, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
          />
          <Bar dataKey="yield" radius={[4, 4, 4, 4]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.isCurrent ? 'url(#barGrad2)' : 'url(#barGrad1)'} 
                stroke={entry.isCurrent ? '#00FF9D' : '#00E5FF'} 
                strokeWidth={1.5} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
