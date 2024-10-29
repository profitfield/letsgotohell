// src/screens/ReferralScreen/index.tsx
import React, { useState } from 'react';
import { ChevronLeft, Trophy, Star, Clock } from 'lucide-react';
import { ReferralStats } from '@/features/referral/components/ReferralStats';
import { MissionsList } from '@/features/referral/components/MissionsList';
import { LeaderBoard } from '@/features/referral/components/LeaderBoard';
import { ReferralCode } from '@/features/referral/components/ReferralCode';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

interface ReferralScreenProps {
  onBack: () => void;
}

export const ReferralScreen: React.FC<ReferralScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'missions' | 'leaderboard'>('overview');

  // Моковые данные
  const missions = [
    {
      id: '1',
      title: 'Пригласить друзей',
      description: 'Пригласите 3 друзей',
      reward: 1000,
      progress: 2,
      total: 3,
      status: 'active' as const
    },
    {
      id: '2',
      title: 'Первая поездка',
      description: 'Совершите свою первую поездку',
      reward: 500,
      progress: 0,
      total: 1,
      status: 'active' as const
    }
  ];

  const leaderboardUsers = [
    { position: 1, name: '@john_doe', points: 5430 },
    { position: 2, name: '@alice_w', points: 4850 },
    { position: 3, name: '@robert_m', points: 4220 },
    { position: 4, name: '@current_user', points: 3890, isCurrentUser: true }
  ];

  // Навигация по вкладкам
  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'missions', label: 'Миссии' },
    { id: 'leaderboard', label: 'Рейтинг' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-2 flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-tg-secondary rounded-xl transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-medium">Реферальная программа</h1>
          <div className="text-sm text-tg-hint">Приглашайте друзей и получайте бонусы</div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white px-4 pt-2">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                flex-1 py-3 text-sm font-medium transition-colors relative
                ${activeTab === tab.id ? 'text-tg-button' : 'text-tg-hint'}
              `}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-tg-button" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <ReferralStats
              totalPoints={3890}
              weeklyPoints={350}
              totalReferrals={5}
            />
            <ReferralCode
              code="LETS123GO"
              onShare={() => {
                navigator.share({
                  title: 'LET\'S GO',
                  text: 'Используйте мой реферальный код LETS123GO для поездки!'
                }).catch(console.error);
              }}
            />
          </div>
        )}

        {activeTab === 'missions' && (
          <MissionsList
            missions={missions}
            onMissionClick={console.log}
          />
        )}

        {activeTab === 'leaderboard' && (
          <LeaderBoard
            users={leaderboardUsers}
            currentUserPosition={4}
            currentUserPoints={3890}
          />
        )}
      </div>
    </div>
  );
};