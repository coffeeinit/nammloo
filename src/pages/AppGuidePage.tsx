import React from 'react';
import { MapPin, Filter, QrCode, Info, User, Languages, Star, Share2, Bell, Droplet, Baby, Accessibility, Sun, Bath } from 'lucide-react';

const AppGuidePage = () => {
  const scenarios = [
    {
      icon: <MapPin className="w-8 h-8 text-[#23237b] mb-2" />, 
      title: 'Open the App – See the Map',
      desc: 'The home screen shows a map with all nearby toilets, color-coded for cleanliness and accessibility. Instantly know whats around you.',
      animation: 'animate-fade-in-up',
    },
    {
      icon: <Filter className="w-8 h-8 text-[#1aaf9b] mb-2" />, 
      title: 'Filter for Your Needs',
      desc: 'Tap the filter icon to show only toilets with water, baby stations, wheelchair access, and more. Find exactly what you need, fast.',
      animation: 'animate-fade-in-up delay-100',
    },
    {
      icon: <Info className="w-8 h-8 text-[#ed1b24] mb-2" />, 
      title: 'View Details & Amenities',
      desc: 'Tap any toilet pin to see open hours, amenities, user ratings, and hygiene status. Make informed choices before you go.',
      animation: 'animate-fade-in-up delay-200',
    },
    {
      icon: <QrCode className="w-8 h-8 text-[#ffcb05] mb-2" />, 
      title: 'Scan QR to Access',
      desc: 'At select locations, scan the QR code at the entrance to unlock and use the restroom securely.',
      animation: 'animate-fade-in-up delay-300',
    },
    {
      icon: <User className="w-8 h-8 text-[#23237b] mb-2" />, 
      title: 'Manage Your Profile',
      desc: 'Update your details, see your activity, and manage your preferences in the profile tab.',
      animation: 'animate-fade-in-up delay-400',
    },
    {
      icon: <Languages className="w-8 h-8 text-[#1aaf9b] mb-2" />, 
      title: 'Choose Your Language',
      desc: 'Switch between English, Hindi, and more for a comfortable experience.',
      animation: 'animate-fade-in-up delay-500',
    },
    {
      icon: <Star className="w-8 h-8 text-[#ffcb05] mb-2" />, 
      title: 'Rate & Review',
      desc: 'Share your feedback and help others find the best toilets.',
      animation: 'animate-fade-in-up delay-600',
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#ed1b24] mb-2" />, 
      title: 'Share the App',
      desc: 'Invite friends and family to join the NammaLoo community.',
      animation: 'animate-fade-in-up delay-700',
    },
  ];

  const amenities = [
    { icon: <Bath className="w-7 h-7 text-[#23237b] mb-1" />, label: 'Western & Indian Toilets' },
    { icon: <Droplet className="w-7 h-7 text-[#1aaf9b] mb-1" />, label: 'Clean Water' },
    { icon: <Baby className="w-7 h-7 text-[#ed1b24] mb-1" />, label: 'Baby-changing' },
    { icon: <Accessibility className="w-7 h-7 text-[#497abd] mb-1" />, label: 'Wheelchair Access' },
    { icon: <Sun className="w-7 h-7 text-[#ffcb05] mb-1" />, label: 'Solar Lighting' },
    { icon: <Bell className="w-7 h-7 text-[#ed1b24] mb-1" />, label: 'Safety Alarms' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16">
      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#23237b] mb-2">How to Use NammaLoo</h1>
          <p className="text-lg text-[#497abd] max-w-2xl mx-auto">
            Discover, filter, and access clean toilets—right from your phone. Here's how the NammaLoo app works in real life.
          </p>
        </div>

        {/* Scenario/Screen-wise Walkthrough */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6">
          {scenarios.map((s, i) => (
            <div key={i} className={`bg-white/80 rounded-xl shadow-sm px-3 py-4 sm:px-4 sm:py-6 flex flex-col items-center text-center gap-2 ${s.animation}`}> 
              {s.icon}
              <h2 className="text-sm sm:text-lg font-bold mb-1 text-[#23237b]">{s.title}</h2>
              <p className="text-[#497abd] text-xs sm:text-sm max-w-lg">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1aaf9b] mb-6 text-center">Amenities You Can Expect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {amenities.map((a, i) => (
              <div key={i} className="flex flex-col items-center">
                {a.icon}
                <span className="text-sm font-bold text-[#23237b] text-center">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppGuidePage; 