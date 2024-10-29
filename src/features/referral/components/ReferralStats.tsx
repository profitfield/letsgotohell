// src/features/referral/components/ReferralStats.tsx
import React from 'react';
import { Trophy, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/shared/ui/Card';

interface ReferralStatsProps {
  totalPoints: number;
  weeklyPoints: number;
  totalReferrals: number;
}

export const ReferralStats: React.FC<ReferralStatsProps> = ({
  totalPoints,
  weeklyPoints,
  totalReferrals
}) => {
  return (
    <div className="space-y-4">
      {/* Общие баллы */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#FFD700]/20 rounded-xl flex items-center justify-center">
            <Trophy className="w-5 h-5 text-[#FFD700]" />
          </div>
          <div>
            <div className="font-medium">Ваши бонусы</div>
            <div className="text-tg-hint text-sm">За все время</div>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="text-2xl font-bold">{totalPoints.toLocaleString()} P</div>
          <div className="text-sm text-green-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>+{weeklyPoints.toLocaleString()} P</span>
            <span className="text-tg-hint">за неделю</span>
          </div>
        </div>
      </Card>

      {/* Статистика рефералов */}
      <div className="grid grid-cols-1 gap-4">
        <Card className="bg-tg-secondary">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-tg-hint mb-1">Приглашено друзей</div>
              <div className="text-xl font-bold">{totalReferrals}</div>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-tg-button" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};