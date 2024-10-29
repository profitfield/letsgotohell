// src/features/locations/components/PlacesModal.tsx
import React, { useState } from 'react';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import { Modal } from '@/shared/ui/Modal';
import { Location } from '@/shared/lib/types/common';
import { POPULAR_PLACES, AIRPORTS } from '../data/places';

interface PlacesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (location: Location) => void;
  type: 'from' | 'to';
}

export const PlacesModal: React.FC<PlacesModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  type
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const allPlaces = [...POPULAR_PLACES, ...AIRPORTS];

  const filteredPlaces = allPlaces.filter(place =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={type === 'from' ? 'Откуда едем?' : 'Куда едем?'}
    >
      <div className="p-4">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tg-hint" />
          <input
            type="text"
            placeholder="Поиск места"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-tg-secondary rounded-xl outline-none"
          />
        </div>

        {/* Places list */}
        <div className="space-y-2">
          {filteredPlaces.map((place) => (
            <button
              key={place.id}
              className="w-full p-4 flex items-center gap-3 hover:bg-tg-secondary rounded-xl"
              onClick={() => {
                onSelect(place);
                onClose();
              }}
            >
              <div className="w-10 h-10 bg-tg-secondary rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-tg-button" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium">{place.name}</div>
                <div className="text-sm text-tg-hint">{place.address}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-tg-hint" />
            </button>
          ))}

          {filteredPlaces.length === 0 && (
            <div className="text-center text-tg-hint py-8">
              Ничего не найдено
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};