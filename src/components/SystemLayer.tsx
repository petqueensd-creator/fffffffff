import React, { useEffect, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SystemLayerProps {
  depth: number;
  faithLevel: number;
}

export const SystemLayer: React.FC<SystemLayerProps> = ({ depth, faithLevel }) => {
  const [time, setTime] = useState(new Date().toISOString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] p-4 font-mono text-[10px] uppercase tracking-widest text-bone/40 mix-blend-difference">
      {/* Top Left: Signal Status */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blood animate-pulse rounded-full" />
          <span className="text-blood/80">SIGNAL_LOST // RECOVERING_DATA...</span>
        </div>
        <div>SYS_TIME: {time}</div>
      </div>

      {/* Top Right: Faith Level */}
      <div className="absolute top-4 right-4 text-right">
        <div>FAITH_LEVEL: {faithLevel.toString().padStart(3, '0')}%</div>
        <div className="w-24 h-1 bg-bone/10 mt-1 overflow-hidden">
          <div 
            className="h-full bg-blood transition-all duration-1000" 
            style={{ width: `${faithLevel}%` }}
          />
        </div>
      </div>

      {/* Bottom Left: Depth */}
      <div className="absolute bottom-4 left-4">
        <div className="text-[14px] font-bold text-bone/60">
          DEPTH: {depth.toString().padStart(4, '0')}M
        </div>
        <div className="text-[8px] opacity-50">LOCATION: UNKNOWN_SECTOR_7</div>
      </div>

      {/* Bottom Right: System Metadata */}
      <div className="absolute bottom-4 right-4 text-right opacity-30">
        <div>ENCRYPTION: AES_256_SACRED</div>
        <div>STATUS: AWAITING_JUDGMENT</div>
      </div>
    </div>
  );
};
