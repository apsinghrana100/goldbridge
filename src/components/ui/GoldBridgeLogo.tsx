'use client';

import React from 'react';
import { COMPANY_DETAILS } from '@/data/goldBridgeData';

interface GoldBridgeLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showMotto?: boolean;
  textColor?: string;
}

export default function GoldBridgeLogo({
  className = '',
  size = 48,
  showText = true,
  showMotto = true,
  textColor = '#0B5D4B',
}: GoldBridgeLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Exact Golden Lotus Icon Image Asset */}
      <img
        src="/images/gold-lotus-icon.png"
        alt="Gold Bridge Lotus Logo Icon"
        className="object-contain filter drop-shadow-sm flex-shrink-0"
        style={{ height: `${size}px`, width: 'auto' }}
      />

      {/* Elegant Matching Typography & Motto */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className="text-lg font-extrabold tracking-[0.08em] uppercase"
            style={{
              color: textColor === 'gold' ? '#D4AF37' : textColor,
              fontFamily: 'Georgia, serif, Times',
            }}
          >
            GOLD BRIDGE
          </span>
          <span
            className="text-[10px] font-black tracking-[0.24em] uppercase font-sans -mt-0.5"
            style={{ color: textColor === 'gold' ? '#F3E5AB' : '#C9A227' }}
          >
            CAPITAL SOLUTION
          </span>
          {showMotto && (
            <span
              className="text-[9px] font-bold italic tracking-wide mt-0.5"
              style={{ color: textColor === 'gold' ? '#E2E8F0' : '#555555' }}
            >
              "{COMPANY_DETAILS.motto}"
            </span>
          )}
        </div>
      )}
    </div>
  );
}
