export const mockAssets = [
  {
    id: 'inv-01',
    title: 'Solar Inverter INV-01',
    subtitle: 'Solar Array · Facility A — Roof',
    typeSubtitle: 'Facility A — Roof · Grid-Tied',
    status: 'Active',
    value: '38.0 kW',
    iconType: 'server',
    iconColor: 'var(--color-accent-amber)',
    iconBg: 'bg-accent-amber/10 border-accent-amber/20',
    stats: {
      currentOutput: '38.0',
      currentOutputUnit: 'kW',
      dailyYield: '210',
      dailyYieldUnit: 'kWh',
      efficiency: '96.2',
      efficiencyUnit: '%',
      temperature: '47',
      temperatureUnit: '°C'
    },
    info: {
      serialNo: 'INV-2024-00142',
      firmware: 'v3.1.4',
      model: 'SunPower X3-50K',
      connectedTo: 'Grid Meter GM-04',
      lastSync: '2 min ago',
      location: 'Facility A — Roof',
      installed: 'Mar 12, 2024'
    }
  },
  {
    id: 'bat-02',
    title: 'Battery Pack BAT-02',
    subtitle: 'Energy Storage · Facility A — Level B1',
    typeSubtitle: 'Facility A — Level B1 · Li-Ion',
    status: 'Charging',
    value: '87%',
    iconType: 'battery',
    iconColor: 'var(--color-accent-emerald)',
    iconBg: 'bg-accent-emerald/10 border-accent-emerald/20',
    stats: {
      currentOutput: '15.2',
      currentOutputUnit: 'kW',
      dailyYield: '45',
      dailyYieldUnit: 'kWh',
      efficiency: '98.5',
      efficiencyUnit: '%',
      temperature: '32',
      temperatureUnit: '°C'
    },
    info: {
      serialNo: 'BAT-2023-00891',
      firmware: 'v2.0.1',
      model: 'PowerWall Pro 100',
      connectedTo: 'Solar Inverter INV-01',
      lastSync: '1 min ago',
      location: 'Facility A — Level B1',
      installed: 'Nov 05, 2023'
    }
  },
  {
    id: 'evs-03',
    title: 'EV Charger EVS-03',
    subtitle: 'Charging Station · Parking Deck A',
    typeSubtitle: 'Parking Deck A · Level 2',
    status: 'Fault',
    value: '0.0 kW',
    iconType: 'plug',
    iconColor: 'var(--color-accent-red)',
    iconBg: 'bg-accent-red/10 border-accent-red/20',
    stats: {
      currentOutput: '0.0',
      currentOutputUnit: 'kW',
      dailyYield: '12',
      dailyYieldUnit: 'kWh',
      efficiency: '0.0',
      efficiencyUnit: '%',
      temperature: 'N/A',
      temperatureUnit: ''
    },
    info: {
      serialNo: 'EVS-2022-00342',
      firmware: 'v1.4.2',
      model: 'ChargePoint XT',
      connectedTo: 'Main Distro Panel',
      lastSync: '43 min ago',
      location: 'Parking Deck A',
      installed: 'Jan 20, 2022'
    }
  },
  {
    id: 'gm-04',
    title: 'Grid Meter GM-04',
    subtitle: 'Main Distribution · Facility A',
    typeSubtitle: 'Facility A · Smart Meter',
    status: 'Active',
    value: '104.6 kW',
    iconType: 'activity',
    iconColor: 'var(--color-accent-emerald)',
    iconBg: 'bg-accent-emerald/10 border-accent-emerald/20',
    stats: {
      currentOutput: '104.6',
      currentOutputUnit: 'kW',
      dailyYield: '850',
      dailyYieldUnit: 'kWh',
      efficiency: '99.9',
      efficiencyUnit: '%',
      temperature: '25',
      temperatureUnit: '°C'
    },
    info: {
      serialNo: 'GM-2021-00999',
      firmware: 'v4.0.0',
      model: 'SmartMeter Pro',
      connectedTo: 'City Grid',
      lastSync: 'Just now',
      location: 'Facility A — Main Elec Room',
      installed: 'Oct 10, 2021'
    }
  }
];
