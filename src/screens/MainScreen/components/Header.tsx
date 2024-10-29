// src/screens/MainScreen/components/Header.tsx
import React from 'react';
import { Globe, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white px-4 py-2 flex items-center justify-between sticky top-0 z-10">
      <div className="flex-1">
        <h1 className="text-xl font-medium text-tg-text">LET'S GO</h1>
        <p className="text-sm text-tg-hint">мини-приложение</p>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-tg-secondary rounded-full transition-colors">
          <Globe className="w-6 h-6 text-tg-hint" />
        </button>
        <button className="p-2 hover:bg-tg-secondary rounded-full transition-colors">
          <HelpCircle className="w-6 h-6 text-tg-hint" />
        </button>
      </div>
    </header>
  );
};