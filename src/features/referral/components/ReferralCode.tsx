// src/features/referral/components/ReferralCode.tsx
import React, { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

interface ReferralCodeProps {
  code: string;
  onShare: () => void;
}

export const ReferralCode: React.FC<ReferralCodeProps> = ({
  code,
  onShare
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Card className="space-y-4">
      <div className="text-center">
        <div className="text-xl font-bold mb-2">
          Пригласите друзей и получайте баллы!
        </div>
        <div className="text-tg-hint">
          За каждого приглашенного друга вы получите
          <span className="text-tg-button font-medium"> 10% </span>
          от его заработанных баллов
        </div>
      </div>

      <div className="bg-tg-secondary rounded-xl p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm text-tg-hint mb-1">
              Ваш реферальный код
            </div>
            <div className="font-mono text-xl font-bold">
              {code}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-xl"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-tg-button" />
            )}
          </button>
        </div>
      </div>

      <Button
        variant="primary"
        fullWidth
        onClick={onShare}
        className="flex items-center justify-center gap-2"
      >
        <Share2 className="w-5 h-5" />
        <span>Поделиться с друзьями</span>
      </Button>

      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>Код скопирован</span>
        </div>
      )}
    </Card>
  );
};