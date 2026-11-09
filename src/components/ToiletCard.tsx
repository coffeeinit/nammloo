import React from 'react';
import { MapPin, Star, Clock, Wifi, Users, Shield } from 'lucide-react';

interface ToiletCardProps {
  name: string;
  address: string;
  distance: number;
  rating: number;
  isOpen: boolean;
  hasWifi: boolean;
  isAccessible: boolean;
  isSafe: boolean;
  cleanliness: number;
  lastUpdated: string;
  image?: string;
}


const ToiletCard: React.FC<ToiletCardProps> = ({
  name,
  address,
  distance,
  rating,
  isOpen,
  hasWifi,
  isAccessible,
  isSafe,
  cleanliness,
  lastUpdated,
  image
}) => {
  const getCleanlinessColor = (score: number) => {
    if (score >= 4) return 'text-green-600';
    if (score >= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCleanlinessText = (score: number) => {
    if (score >= 4) return 'Excellent';
    if (score >= 3) return 'Good';
    if (score >= 2) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-[450px] flex flex-col border-2 border-[#1aaf9b]">
      {image && (
        <div className="h-40 bg-gradient-to-r from-[#1aaf9b] to-[#008979] relative">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {isOpen ? 'Open' : 'Closed'}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#191c5d] mb-2 line-clamp-1">{name}</h3>
            <div className="flex items-center text-[#008979] mb-2">
              <MapPin size={16} className="mr-2 text-[#ed1b24]" />
              <span className="text-sm line-clamp-1">{address}</span>
            </div>
            <div className="flex items-center text-[#008979]">
              <Clock size={16} className="mr-2 text-[#1aaf9b]" />
              <span className="text-sm">{distance}m away</span>
            </div>
          </div>
          
          <div className="flex items-center bg-[#ffcb05]/20 px-3 py-1 rounded-full">
            <Star size={16} className="text-[#ffcb05] mr-1" fill="currentColor" />
            <span className="font-semibold text-[#191c5d]">{rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            {hasWifi && (
              <div className="flex items-center text-[#497abd]">
                <Wifi size={16} className="mr-1" />
                <span className="text-xs">WiFi</span>
              </div>
            )}
            {isAccessible && (
              <div className="flex items-center text-[#1aaf9b]">
                <Users size={16} className="mr-1" />
                <span className="text-xs">Accessible</span>
              </div>
            )}
            {isSafe && (
              <div className="flex items-center text-[#008979]">
                <Shield size={16} className="mr-1" />
                <span className="text-xs">Safe</span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-[#1aaf9b]/20 pt-3 mt-auto">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-[#008979]">Cleanliness: </span>
              <span className={`font-semibold ${getCleanlinessColor(cleanliness)}`}>
                {getCleanlinessText(cleanliness)}
              </span>
            </div>
            <span className="text-xs text-[#008979]">Updated {lastUpdated}</span>
          </div>
        </div>

        <button className="w-full mt-3 bg-[#ed1b24] text-white py-2.5 rounded-xl font-semibold hover:bg-[#ed1b24]/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default ToiletCard;


