import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SchematicProps {
  type: 'cisco-network' | 'routing-protocols' | 'pc-assembly';
  className?: string;
}

export const ProjectSchematic: React.FC<SchematicProps> = ({ type, className = '' }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (type === 'cisco-network') {
    return (
      <div className={`relative w-full h-48 sm:h-56 rounded-xl overflow-hidden flex items-center justify-center border ${
        isDark ? 'bg-[#061222] border-[#168BFF]/20' : 'bg-slate-900 border-slate-700'
      } ${className}`}>
        {/* Network Topology Blueprint SVG */}
        <svg viewBox="0 0 400 220" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle Grid */}
          <defs>
            <pattern id="sched-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#168BFF" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sched-grid-1)" />

          {/* Connection Lines with Pulsing Data Nodes */}
          <line x1="200" y1="50" x2="200" y2="110" stroke="#168BFF" strokeWidth="2" strokeDasharray="4,2" />
          <line x1="200" y1="110" x2="100" y2="170" stroke="#36D9FF" strokeWidth="2" />
          <line x1="200" y1="110" x2="300" y2="170" stroke="#36D9FF" strokeWidth="2" />
          <line x1="200" y1="50" x2="340" y2="50" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Router (Gateway / Core) */}
          <g transform="translate(170, 25)">
            <rect width="60" height="40" rx="8" fill="#0B2545" stroke="#168BFF" strokeWidth="2" />
            <circle cx="20" cy="20" r="4" fill="#36D9FF" />
            <circle cx="30" cy="20" r="4" fill="#36D9FF" />
            <circle cx="40" cy="20" r="4" fill="#36D9FF" />
            <text x="30" y="35" fill="#E2E8F0" fontSize="8" fontWeight="bold" textAnchor="middle">Router (R1)</text>
          </g>

          {/* Switch (Distribution / VLAN) */}
          <g transform="translate(170, 95)">
            <rect width="60" height="32" rx="6" fill="#08203E" stroke="#36D9FF" strokeWidth="1.5" />
            <line x1="180" y1="111" x2="220" y2="111" stroke="#36D9FF" strokeWidth="1" strokeDasharray="2,2" />
            <text x="200" y="115" fill="#36D9FF" fontSize="8" fontWeight="bold" textAnchor="middle">Switch (SW1)</text>
          </g>

          {/* VLAN 10 (Admin) Subnet Box */}
          <g transform="translate(50, 145)">
            <rect width="100" height="55" rx="8" fill="#132F52" fillOpacity="0.4" stroke="#168BFF" strokeWidth="1" strokeDasharray="2,2" />
            <rect x="35" y="10" width="30" height="22" rx="4" fill="#0E233D" stroke="#36D9FF" strokeWidth="1" />
            <text x="50" y="24" fill="#FFFFFF" fontSize="7" textAnchor="middle">PC-01</text>
            <text x="50" y="44" fill="#A9B8CC" fontSize="7" textAnchor="middle">VLAN 10: 192.168.10.0/24</text>
          </g>

          {/* VLAN 20 (Students) Subnet Box */}
          <g transform="translate(250, 145)">
            <rect width="100" height="55" rx="8" fill="#132F52" fillOpacity="0.4" stroke="#36D9FF" strokeWidth="1" strokeDasharray="2,2" />
            <rect x="35" y="10" width="30" height="22" rx="4" fill="#0E233D" stroke="#36D9FF" strokeWidth="1" />
            <text x="50" y="24" fill="#FFFFFF" fontSize="7" textAnchor="middle">PC-02</text>
            <text x="50" y="44" fill="#A9B8CC" fontSize="7" textAnchor="middle">VLAN 20: 192.168.20.0/24</text>
          </g>

          {/* Packet Tracer Indicator Badge */}
          <rect x="12" y="12" width="112" height="18" rx="4" fill="#168BFF" fillOpacity="0.2" stroke="#168BFF" strokeWidth="1" />
          <text x="68" y="24" fill="#36D9FF" fontSize="8" fontWeight="bold" textAnchor="middle">Packet Tracer Simulation</text>
        </svg>
      </div>
    );
  }

  if (type === 'routing-protocols') {
    return (
      <div className={`relative w-full h-48 sm:h-56 rounded-xl overflow-hidden flex items-center justify-center border ${
        isDark ? 'bg-[#061222] border-[#168BFF]/20' : 'bg-slate-900 border-slate-700'
      } ${className}`}>
        {/* Routing Protocols Diagram SVG */}
        <svg viewBox="0 0 400 220" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sched-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#168BFF" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sched-grid-2)" />

          {/* OSPF Area 0 Ring Boundary */}
          <ellipse cx="200" cy="115" rx="140" ry="75" fill="#168BFF" fillOpacity="0.08" stroke="#168BFF" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x="200" y="60" fill="#36D9FF" fontSize="9" fontWeight="bold" textAnchor="middle">OSPF Area 0 (Backbone)</text>

          {/* Multi-Router Mesh Topology */}
          <line x1="120" y1="125" x2="200" y2="90" stroke="#36D9FF" strokeWidth="2" />
          <line x1="200" y1="90" x2="280" y2="125" stroke="#36D9FF" strokeWidth="2" />
          <line x1="120" y1="125" x2="280" y2="125" stroke="#168BFF" strokeWidth="2" strokeDasharray="3,3" />

          {/* Router 1 (HQ) */}
          <g transform="translate(95, 105)">
            <circle cx="25" cy="20" r="18" fill="#0B2545" stroke="#168BFF" strokeWidth="2" />
            <text x="25" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">R1</text>
            <text x="25" y="48" fill="#94A3B8" fontSize="7" textAnchor="middle">Static / Default</text>
          </g>

          {/* Router 2 (Core) */}
          <g transform="translate(175, 70)">
            <circle cx="25" cy="20" r="18" fill="#08203E" stroke="#36D9FF" strokeWidth="2" />
            <text x="25" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">R2</text>
            <text x="25" y="3" fill="#36D9FF" fontSize="7" fontWeight="bold" textAnchor="middle">OSPF & EIGRP</text>
          </g>

          {/* Router 3 (Branch) */}
          <g transform="translate(255, 105)">
            <circle cx="25" cy="20" r="18" fill="#0B2545" stroke="#168BFF" strokeWidth="2" />
            <text x="25" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">R3</text>
            <text x="25" y="48" fill="#94A3B8" fontSize="7" textAnchor="middle">RIPv2 / BGP</text>
          </g>

          {/* Route Table Box */}
          <rect x="15" y="165" width="370" height="42" rx="6" fill="#081A30" stroke="#1E3557" strokeWidth="1" />
          <text x="25" y="180" fill="#36D9FF" fontSize="8" fontFamily="monospace">Router# show ip route</text>
          <text x="25" y="195" fill="#A9B8CC" fontSize="8" fontFamily="monospace">O 10.1.1.0/24 [110/2] via 192.168.1.2 | R 172.16.0.0/16 via Serial0/0</text>
        </svg>
      </div>
    );
  }

  // PC Assembly & Windows Hardware Schematic
  return (
    <div className={`relative w-full h-48 sm:h-56 rounded-xl overflow-hidden flex items-center justify-center border ${
      isDark ? 'bg-[#061222] border-[#168BFF]/20' : 'bg-slate-900 border-slate-700'
    } ${className}`}>
      {/* PC Workstation Architecture Schematic */}
      <svg viewBox="0 0 400 220" className="w-full h-full p-2" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sched-grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#168BFF" strokeWidth="0.5" strokeOpacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sched-grid-3)" />

        {/* Desktop Chassis Boundary */}
        <rect x="25" y="20" width="350" height="180" rx="10" fill="#081A30" stroke="#168BFF" strokeWidth="1.5" />

        {/* Motherboard Tray */}
        <rect x="45" y="35" width="220" height="150" rx="6" fill="#0D2545" stroke="#36D9FF" strokeWidth="1" strokeDasharray="3,2" />
        <text x="55" y="50" fill="#36D9FF" fontSize="8" fontWeight="bold">ATX Motherboard</text>

        {/* CPU Socket & Cooler */}
        <rect x="90" y="65" width="55" height="55" rx="6" fill="#143A66" stroke="#168BFF" strokeWidth="1.5" />
        <circle cx="117" cy="92" r="18" fill="#0A1E35" stroke="#36D9FF" strokeWidth="1" />
        <text x="117" y="95" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">CPU Socket</text>

        {/* Dual Channel RAM Slots */}
        <rect x="160" y="60" width="8" height="65" rx="2" fill="#36D9FF" fillOpacity="0.7" />
        <rect x="174" y="60" width="8" height="65" rx="2" fill="#36D9FF" fillOpacity="0.7" />
        <text x="171" y="135" fill="#A9B8CC" fontSize="7" textAnchor="middle">DDR4 RAM</text>

        {/* PCIe Expansion Slot */}
        <rect x="65" y="140" width="120" height="12" rx="2" fill="#168BFF" fillOpacity="0.6" />
        <text x="125" y="149" fill="#FFFFFF" fontSize="7" textAnchor="middle">PCIe x16 GPU</text>

        {/* Power Supply Unit (PSU) */}
        <rect x="280" y="130" width="80" height="55" rx="6" fill="#091B33" stroke="#94A3B8" strokeWidth="1" />
        <text x="320" y="155" fill="#E2E8F0" fontSize="8" fontWeight="bold" textAnchor="middle">Power Supply</text>
        <text x="320" y="168" fill="#A9B8CC" fontSize="7" textAnchor="middle">24-Pin ATX / 12V EPS</text>

        {/* Windows OS Deployment Badge */}
        <rect x="280" y="45" width="80" height="65" rx="6" fill="#0B2545" stroke="#36D9FF" strokeWidth="1" />
        <text x="320" y="65" fill="#36D9FF" fontSize="8" fontWeight="bold" textAnchor="middle">Windows Deployment</text>
        <text x="320" y="80" fill="#FFFFFF" fontSize="7" textAnchor="middle">UEFI / GPT Boot</text>
        <text x="320" y="95" fill="#A9B8CC" fontSize="7" textAnchor="middle">Driver Management</text>
      </svg>
    </div>
  );
};
