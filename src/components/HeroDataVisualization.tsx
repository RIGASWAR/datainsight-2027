import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Image as ImageIcon, 
  Volume2, 
  Database
} from 'lucide-react';
import datainsightLogo from '../assets/datainsight_logo.png';
import analyticsHexIcon from '../assets/analytics_hex.png';

// Blue hexagonal analytics/bar-chart symbol from official DATAINSIGHT logo
const AnalyticsHexIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = () => (
  <img 
    src={analyticsHexIcon} 
    alt="Analytics" 
    className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain select-none pointer-events-none" 
  />
);

interface HeroDataVisualizationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const HeroDataVisualization: React.FC<HeroDataVisualizationProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // The 4 multimodal component concepts present inside the official DATAINSIGHT logo
  const multimodalNodes = [
    {
      id: 'image',
      name: 'Image',
      concept: 'Vision & Multimodal Imagery',
      icon: ImageIcon,
      color: '#00A8E8',
      position: '-top-2 -left-2 sm:-top-2.5 sm:-left-2.5',
      // Position tooltip downward-inward to prevent going behind the sticky navbar
      badgePos: 'top-full mt-1.5 left-0',
    },
    {
      id: 'audio',
      name: 'Audio',
      concept: 'Acoustic & Voice Signals',
      icon: Volume2,
      color: '#176BFF',
      position: '-top-2 -right-2 sm:-top-2.5 sm:-right-2.5',
      // Position tooltip downward-inward to prevent going behind the sticky navbar
      badgePos: 'top-full mt-1.5 right-0',
    },
    {
      id: 'analytics',
      name: 'Analytics',
      concept: 'Statistical Data & Analytics',
      icon: AnalyticsHexIcon,
      color: '#244A91',
      position: '-bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5',
      badgePos: 'top-full mt-1.5 left-0',
    },
    {
      id: 'database',
      name: 'Data',
      concept: 'Heterogeneous Storage & Lakes',
      icon: Database,
      color: '#D9A441',
      position: '-bottom-2 -right-2 sm:-bottom-2.5 sm:-right-2.5',
      badgePos: 'top-full mt-1.5 right-0',
    },
  ];

  const logoHeightClasses = {
    sm: 'h-14 sm:h-16 md:h-18',
    md: 'h-16 sm:h-20 md:h-22 lg:h-24 xl:h-[6.5rem]',
    lg: 'h-20 sm:h-24 md:h-28 lg:h-32',
  }[size];

  return (
    <div 
      className={`relative inline-flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#F7FAFF] to-[#EEF5FF]/80 border border-[#176BFF]/20 shadow-md shadow-[#0B2D6B]/6 transition-all duration-300 hover:border-[#176BFF]/50 hover:shadow-lg group ${className}`}
    >
      {/* Subtle Animated Connecting Network Lines (SVG) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradCyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#176BFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#244A91" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradGold" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D9A441" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#176BFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Diagonal interconnected network lines converging toward central logo insight */}
        <line 
          x1="12" y1="12" x2="38%" y2="38%" 
          stroke="url(#lineGradCyanBlue)" 
          strokeWidth="1.2" 
          strokeDasharray="3 3"
          className={shouldReduceMotion ? '' : 'animate-pulse'}
        />
        <line 
          x1="calc(100% - 12px)" y1="12" x2="62%" y2="38%" 
          stroke="url(#lineGradCyanBlue)" 
          strokeWidth="1.2" 
          strokeDasharray="3 3"
          className={shouldReduceMotion ? '' : 'animate-pulse'}
        />
        <line 
          x1="12" y1="calc(100% - 12px)" x2="38%" y2="62%" 
          stroke="url(#lineGradGold)" 
          strokeWidth="1.2" 
          strokeDasharray="3 3"
          className={shouldReduceMotion ? '' : 'animate-pulse'}
        />
        <line 
          x1="calc(100% - 12px)" y1="calc(100% - 12px)" x2="62%" y2="62%" 
          stroke="url(#lineGradGold)" 
          strokeWidth="1.2" 
          strokeDasharray="3 3"
          className={shouldReduceMotion ? '' : 'animate-pulse'}
        />
      </svg>

      {/* 4 Multimodal Satellite Indicator Nodes */}
      {multimodalNodes.map((node) => {
        const Icon = node.icon;
        const isHovered = hoveredNode === node.id;

        return (
          <div
            key={node.id}
            role="button"
            tabIndex={0}
            aria-label={`${node.name}: ${node.concept}`}
            onClick={(e) => {
              e.stopPropagation();
              setHoveredNode(prev => (prev === node.id ? null : node.id));
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className={`absolute ${node.position} z-20 flex items-center justify-center cursor-pointer transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'hover:scale-115'
            }`}
            title={`${node.name}: ${node.concept}`}
          >
            {/* Outer subtle pulse ring */}
            <div 
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white border border-[#176BFF]/25 shadow-xs transition-colors"
              style={{
                borderColor: isHovered ? node.color : undefined,
                boxShadow: isHovered ? `0 0 10px ${node.color}40` : undefined,
              }}
            >
              <Icon 
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors" 
                style={{ color: node.color }}
              />
            </div>

            {/* Hover / Tap Tooltip - Positioned safely away from the navbar */}
            {isHovered && (
              <motion.div
                data-testid="hero-node-tooltip"
                initial={{ opacity: 0, y: 3, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                className={`hero-node-tooltip absolute ${node.badgePos} z-40 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-md bg-[#071A3D] text-white text-[10px] font-bold shadow-lg border border-white/20`}
              >
                <div className="flex items-center gap-1">
                  <span style={{ color: node.color }}>●</span>
                  <span>{node.name}</span>
                </div>
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Central Official DATAINSIGHT Logo Asset (Crisp, Preserved, Aspect-Ratio Maintained) */}
      <div className="relative z-10 flex items-center justify-center px-1.5 py-0.5">
        <img
          src={datainsightLogo}
          alt="DATAINSIGHT 2027 Official Logo"
          className={`${logoHeightClasses} w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[240px] xl:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-xs`}
        />
      </div>
    </div>
  );
};
