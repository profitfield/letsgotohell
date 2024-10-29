// src/features/referral/components/ReferralTabs.tsx
import React from 'react';

interface ReferralTabsProps {
  activeTab: 'overview' | 'missions' | 'leaderboard';
  onChange: (tab: 'overview' | 'missions' | 'leaderboard') => void;
}

export const ReferralTabs: React.FC<ReferralTabsProps> = ({
  activeTab,
  onChange
}) => {
  const tabs = [
    { id: 'overview' as const, label: 'Обзор' },
    { id: 'missions' as const, label: 'Миссии' },
    { id: 'leaderboard' as const, label: 'Рейтинг' }
  ];

  return (
    <div className="bg-white px-4 pt-2">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              flex-1 py-3 text-sm font-medium transition-colors relative
              ${activeTab === tab.id ? 'text-tg-button' : 'text-tg-hint'}
            `}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tg-button" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};