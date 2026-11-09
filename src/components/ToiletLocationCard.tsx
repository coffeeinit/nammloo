import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { IconType } from 'react-icons';

interface ToiletLocationCardProps {
  location: {
    name: string;
    rating: number;
    status: string;
    isOpen: boolean;
    distance: string;
    icons: IconType[];
  };
}

const ToiletLocationCard: React.FC<ToiletLocationCardProps> = ({ location }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-gray-800">{location.name}</h3>
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < location.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
        ))}
        <span className="ml-2 text-sm text-gray-600">({location.rating})</span>
        <span className="ml-4 text-sm font-semibold" style={{ color: location.isOpen ? '#28a745' : '#dc3545' }}>
          {location.isOpen ? '@Open' : '@Closed'}
        </span>
        <span className="ml-2 text-sm text-gray-600">{location.status}</span>
      </div>
      <div className="flex items-center mt-2 space-x-3 text-gray-500">
        {location.icons.map((Icon, i) => (
          <Icon key={i} className="h-5 w-5" />
        ))}
      </div>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-red-500 font-bold text-md"><MapPin className="inline-block h-4 w-4 mr-1" />{location.distance}</span>
    </div>
  </div>
);

export default ToiletLocationCard; 