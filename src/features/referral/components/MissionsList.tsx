// src/features/referral/components/MissionsList.tsx
import React from 'react';
import { Star, Gift, CheckCircle } from 'lucide-react';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import type { Mission } from '@/shared/lib/types/common';

interface MissionsListProps {
  missions: Mission[];
  onMissionClick?: (mission: Mission) => void;
}

export const MissionsList: React.FC<MissionsListProps> = ({
  missions,
  onMissionClick
}) => {
  return (
    <div className="space-y-4">
      {/* Ежедневная миссия */}
      <Card>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFD700]/20 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-[#FFD700]" />
            </div>
            <div>
              <div className="font-medium">Ежедневный бонус</div>
              <div className="text-tg-hint text-sm">Обновляется каждый день</div>
            </div>
          </div>
          <div className="text-tg-button font-medium">+100 P</div>
        </div>
        <Button
          variant="primary"
          fullWidth
        >
          Получить
        </Button>
      </Card>

      {/* Список миссий */}
      <div className="space-y-3">
        {missions.map((mission) => (
          <Card
            key={mission.id}
            onClick={() => onMissionClick?.(mission)}
            className={`
              ${mission.status === 'locked' ? 'opacity-50' : ''}
              ${onMissionClick ? 'cursor-pointer' : ''}
            `}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-tg-secondary rounded-xl flex items-center justify-center">
                {mission.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Gift className="w-5 h-5 text-tg-button" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-medium">{mission.title}</div>
                <div className="text-sm text-tg-hint">{mission.description}</div>
              </div>
              <div className="text-tg-button font-medium">
                +{mission.reward.toLocaleString()} P
              </div>
            </div>

            {mission.status !== 'completed' && (
              <>
                <div className="h-2 bg-tg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-tg-button transition-all"
                    style={{
                      width: `${(mission.progress / mission.total) * 100}%`
                    }}
                  />
                </div>
                <div className="mt-2 text-sm text-tg-hint text-center">
                  {mission.progress} из {mission.total}
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};