import React, { useState } from 'react';
import {
  FaToilet, FaUtensils, FaShoppingCart, FaGasPump, FaHospital, FaBuilding, FaSchool, FaLandmark, FaUniversity, FaWarehouse, FaPlaceOfWorship,
  FaDollarSign, FaCreditCard, FaUserGraduate, FaUser, FaCheckCircle, FaTimesCircle, FaWheelchair, FaLock, FaWifi,
  FaHandsWash, FaSoap, FaToiletPaper, FaTrash, FaShower, FaLightbulb, FaSprayCan, FaWind,
  FaTrain, FaBus, FaCar, FaWalking, FaStore, FaTag, FaTools, FaHome, FaGopuram, FaDharmachakra,
  FaBaby,
  FaBandAid
} from 'react-icons/fa';
import { MdOutlineCleaningServices, MdSecurity } from 'react-icons/md';
import { X } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
  icon: React.ElementType;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

const filterCategories: FilterCategory[] = [
  {
    name: 'Cost',
    options: [
      { label: 'Free', value: 'free', icon: FaDollarSign },
      { label: 'Paid (up to 15 rupees)', value: 'paid_15', icon: FaCreditCard },
      { label: 'Paid (15 to 50 rupees)', value: 'paid_50', icon: FaCreditCard },
      { label: 'Paid (50+ rupees)', value: 'paid_50_plus', icon: FaCreditCard },
      { label: 'Students Only', value: 'students_only', icon: FaUserGraduate },
      { label: 'Visitors Only', value: 'visitors_only', icon: FaUser },
      { label: 'Customers Only', value: 'customers_only', icon: FaCheckCircle },
    ],
  },
  {
    name: 'Type',
    options: [
      { label: '-- (Only Toilet)', value: 'only_toilet', icon: FaToilet },
      { label: 'Restaurant/ Cafe', value: 'restaurant_cafe', icon: FaUtensils },
      { label: 'Food Mall', value: 'food_mall', icon: FaShoppingCart },
    ],
  },
  {
    name: 'Access',
    options: [
      { label: 'Accessible', value: 'accessible', icon: FaWheelchair },
      { label: 'Non-Accessible', value: 'non_accessible', icon: FaTimesCircle },
    ],
  },
  {
    name: 'Service',
    options: [
      { label: 'Good', value: 'good', icon: FaCheckCircle },
      { label: 'Needs Attention', value: 'needs_attention', icon: FaTimesCircle },
    ],
  },
  {
    name: 'Style',
    options: [
      { label: 'Modern', value: 'modern', icon: FaBuilding },
      { label: 'Traditional', value: 'traditional', icon: FaGopuram },
    ],
  },
  {
    name: 'Amenities',
    options: [
      { label: 'Water Supply', value: 'water_supply', icon: FaHandsWash },
      { label: 'Liquid Soap/ Sanitizer', value: 'liquid_soap', icon: FaSoap },
      { label: 'Toilet Lid Cover', value: 'toilet_lid_cover', icon: FaToilet },
      { label: 'Paper Towels', value: 'paper_towels', icon: FaToiletPaper },
      { label: 'Washbasin', value: 'washbasin', icon: FaHandsWash },
      { label: 'Diaper Changing Table', value: 'diaper_changing_table', icon: FaBaby },
      { label: 'Sanitary Napkins', value: 'sanitary_napkins', icon: FaBandAid },
      { label: 'Lights', value: 'lights', icon: FaLightbulb },
      { label: 'Mirror', value: 'mirror', icon: FaUser },
      { label: 'Dust Bin/Trash Can', value: 'dust_bin', icon: FaTrash },
      { label: 'Toilet Paper', value: 'toilet_paper', icon: FaToiletPaper },
      { label: 'Automatic Flush', value: 'automatic_flush', icon: FaTools },
      { label: 'Dryers', value: 'dryers', icon: FaWind },
    ],
  },
  {
    name: 'Located in',
    options: [
      { label: 'Petrol pump/ Gas station', value: 'petrol_pump', icon: FaGasPump },
      { label: 'Shopping Mall', value: 'shopping_mall', icon: FaShoppingCart },
      { label: 'Bank', value: 'bank', icon: FaBuilding },
      { label: 'Hospital/ Medical Clinic', value: 'hospital_clinic', icon: FaHospital },
      { label: 'Powder Room', value: 'powder_room', icon: FaToilet },
      { label: 'eToilet', value: 'etoilet', icon: FaToilet },
      { label: 'Residence', value: 'residence', icon: FaHome },
      { label: 'Theater or Auditorium', value: 'theater_auditorium', icon: FaUniversity },
      { label: 'Educational institution', value: 'educational_institution', icon: FaSchool },
      { label: 'Government Building', value: 'government_building', icon: FaBuilding },
      { label: 'Corporate Building', value: 'corporate_building', icon: FaBuilding },
      { label: 'Event Hall', value: 'event_hall', icon: FaBuilding },
      { label: 'Unclassified', value: 'unclassified', icon: FaTimesCircle },
    ],
  },
  {
    name: 'Transportation',
    options: [
      { label: 'Train Station', value: 'train_station', icon: FaTrain },
      { label: 'Bus Stop', value: 'bus_stop', icon: FaBus },
      { label: 'Parking Lot', value: 'parking_lot', icon: FaCar },
      { label: 'Bicycle Stand', value: 'bicycle_stand', icon:  FaCar},
      { label: 'Walking Path', value: 'walking_path', icon: FaWalking },
    ],
  },
  {
    name: 'Store',
    options: [
      { label: 'Retail Store', value: 'retail_store', icon: FaStore },
      { label: 'Department Store', value: 'department_store', icon: FaTag },
      { label: 'Grocery Store', value: 'grocery_store', icon: FaShoppingCart },
    ],
  },
  {
    name: 'Religious places',
    options: [
      { label: 'Temple', value: 'temple', icon: FaGopuram },
      { label: 'Mosque', value: 'mosque', icon: FaDharmachakra },
      { label: 'Church', value: 'church', icon: FaPlaceOfWorship },
    ],
  },
];

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: Record<string, string[]>) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose, onApplyFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(filterCategories[0].name);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const handleFilterToggle = (categoryName: string, optionValue: string) => {
    setSelectedFilters(prev => {
      const categoryFilters = prev[categoryName] || [];
      if (categoryFilters.includes(optionValue)) {
        return { ...prev, [categoryName]: categoryFilters.filter(item => item !== optionValue) };
      } else {
        return { ...prev, [categoryName]: [...categoryFilters, optionValue] };
      }
    });
  };

  const handleClearAll = () => {
    setSelectedFilters({});
  };

  const handleApply = () => {
    onApplyFilters(selectedFilters);
    onClose();
  };

  const currentOptions = filterCategories.find(cat => cat.name === selectedCategory)?.options || [];

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className={`bg-white rounded-2xl shadow-xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'} w-11/12 md:max-w-3xl h-[80vh]`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#191c5d]">FILTERS - {selectedCategory}</h2>
          <button onClick={onClose} className="text-[#191c5d] hover:text-[#ffcb05]">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-grow overflow-hidden">
          {/* Categories Sidebar */}
          <div className="w-1/3 bg-gray-100 border-r border-gray-200 overflow-y-auto">
            {filterCategories.map(category => (
              <button
                key={category.name}
                className={`block w-full text-left p-4 text-gray-700 hover:bg-gray-200 ${selectedCategory === category.name ? 'bg-[#e0f2f7] font-semibold text-[#191c5d] border-l-4 border-[#ffcb05]' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Filter Options Grid */}
          <div className="flex-grow p-4 overflow-y-auto grid grid-cols-2 gap-4 content-start">
            {currentOptions.map(option => (
              <button
                key={option.value}
                className={`flex flex-col items-center justify-center p-4 border rounded-lg text-center transition-all duration-200
                  ${(selectedFilters[selectedCategory] || []).includes(option.value)
                    ? 'bg-[#e0f2f7] text-[#191c5d] border-[#497abd] shadow-md'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#1aaf9b] hover:shadow-sm'
                  }`}
                onClick={() => handleFilterToggle(selectedCategory, option.value)}
              >
                <option.icon size={32} className="mb-2" />
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-around p-4 border-t border-gray-200">
          <button
            className="px-6 py-3 bg-white text-[#191c5d] border border-[#191c5d] rounded-lg font-semibold hover:bg-gray-100 hover:border-[#ffcb05] transition-colors"
            onClick={handleClearAll}
          >
            CLEAR ALL
          </button>
          <button
            className="px-6 py-3 bg-[#1aaf9b] text-white rounded-lg font-semibold hover:bg-[#008979] transition-colors"
            onClick={handleApply}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 