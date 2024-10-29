// src/features/referral/components/LeaderBoard.tsx
import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';
import { Card } from '@/shared/ui/Card';

interface LeaderboardUser {
  position: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

interface LeaderBoardProps {
  users: LeaderboardUser[];
  currentUserPosition: number;
  currentUserPoints: number;
}

export const LeaderBoard: React.FC<LeaderBoardProps> = ({
  users,
  currentUserPosition,
  currentUserPoints
}) => {
  const getMedalEmoji = (position: number) => {
    switch (position) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* Текущая позиция пользователя */}
      <Card>
        <div className="text-tg-hint mb-2">Ваша позиция</div>
        <div className="flex justify-between items-center">
          <div className="font-medium text-xl">#{currentUserPosition}</div>
          <div className="flex items-center gap-2">
            <div className="font-medium text-xl">{currentUserPoints.toLocaleString()} P</div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </Card>

      {/* Топ пользователей */}
      <Card>
        <div className="font-medium mb-4">Топ пользователей</div>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.position}
              className={`flex items-center justify-between py-2 
                ${user.isCurrentUser ? 'text-tg-button' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-8 h-8 rounded-xl flex items-center justify-center text-base
                  ${user.position <= 3 ? 'bg-[#FFD700]/20' : 'bg-tg-secondary'}
                `}>
                  {getMedalEmoji(user.position) || (
                    <Trophy className={`w-4 h-4 ${
                      user.position === 1 ? 'text-[#FFD700]' :
                      user.position === 2 ? 'text-[#C0C0C0]' :
                      user.position === 3 ? 'text-[#CD7F32]' :
                      'text-tg-hint'
                    }`} />
                  )}
                </div>
                <div className="font-medium">{user.name}</div>
              </div>
              <div className="font-medium">
                {user.points.toLocaleString()} P
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Информация о следующем уровне */}
      <Card className="bg-tg-secondary">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="w-5 h-5 text-[#FFD700]" />
          <div className="font-medium">До следующего уровня</div>
        </div>
        <div className="h-2 bg-white rounded-full overflow-hidden">
          <div
            className="h-full bg-tg-button transition-all"
            style={{
              width: '75%'
            }}
          />
        </div>
        <div className="mt-2 text-sm text-tg-hint text-center">
          Осталось 1,500 P
        </div>
      </Card>
    </div>
  );
};