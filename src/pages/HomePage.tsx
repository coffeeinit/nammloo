import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Radar, LocateFixed, Construction, HandHeart, Globe, Landmark,
  Droplet, Wifi, Shield, Users, Clock, Navigation, Heart, Star,
  Smartphone, CheckCircle, AlertTriangle, Building, Bath, Hand, Settings, Lightbulb,
  QrCode, HeartPulse, Accessibility, User, Handshake, Wrench, Baby, Sun, Bell, Trash2, ArrowRight, Smile, Search, Map, Bus, ShoppingBag, Car
} from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import TamilNaduMap from '../assets/Map_of_Tamil_Nadu_districts.svg';

import playBadge from '../assets/Google_Play_Store_badge.svg';
import appStoreBadge from '../assets/download-on-the-app-store.svg';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  bg?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
}

function useInView(ref: React.RefObject<HTMLElement>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

const FeatureCard = ({ icon, title, special }: { icon: React.ReactNode; title: React.ReactNode; special?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, '-50px');
  return (
    <div
      ref={ref}
      className="relative flex items-center bg-gradient-to-r from-white via-[#f7f8fa] to-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 px-2 py-2 md:px-4 md:py-3 mb-3 group overflow-hidden min-h-[64px] md:min-h-[72px]"
      style={{ maxWidth: '100%', minHeight: 64 }}
    >
      {/* Left blue bar */}
      <div className="h-12 md:h-16 w-2 bg-[#23237b] rounded-l-2xl mr-2 md:mr-3 flex-shrink-0" />
      {/* Icon area with pointer */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white rounded-full border-2 border-red-500 shadow-sm mr-3 md:mr-5 z-10">
        <span className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white ${inView ? (special ? 'animate-pulse' : 'animate-[pop_0.5s_ease]') : ''}`}>{icon}</span>
        {/* Red pointer triangle */}
        <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)', background: '#ef4444' }} />
      </div>
      {/* Text */}
      <div className="flex-1 text-base md:text-lg font-semibold text-black leading-snug px-1 md:px-2 py-2 md:py-3">
        {title}
      </div>
      {/* Subtle hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:bg-[#f3f6fa] group-hover:opacity-80 transition-all duration-300" />
    </div>
  );
};

const Section = ({ icon, title, children, bg = "bg-white" }: SectionProps) => (
  <section className={`${bg} py-16 px-6 md:px-16`}>
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-blue-800 p-3 bg-blue-100 rounded-lg">{icon}</div>
        <h2 className="text-3xl font-bold text-[#191c5d]">{title}</h2>
      </div>
      <div className="text-gray-700 leading-relaxed space-y-6">{children}</div>
    </div>
  </section>
);

const SolutionCard = ({ icon, title, subtitle }: { icon: React.ReactNode; title: React.ReactNode; subtitle?: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-md flex gap-4 items-start hover:shadow-lg transition-all duration-300">
    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">{icon}</div>
    <div>
      <p className="text-gray-800 font-medium leading-relaxed">{title}</p>
      {subtitle && <p className="text-sm mt-2 text-blue-800 font-semibold">{subtitle}</p>}
    </div>
  </div>
);

const SolutionPill = ({ icon, title, highlight, children, pointer = 'right' }: { icon: React.ReactNode; title: React.ReactNode; highlight?: boolean; children?: React.ReactNode; pointer?: 'right' | 'left' }) => (
  <div className="relative flex items-center bg-[#f5f6fa] rounded-full shadow-md px-8 py-6 min-w-[320px] max-w-xl w-full mx-auto mb-6 md:mb-0">
    {/* Icon with blue border and pointer */}
    <div className={`relative flex-shrink-0 ${pointer === 'right' ? 'mr-6' : 'ml-6 order-2'}`}>
      <div className="bg-white border-4 border-[#23237b] rounded-full w-16 h-16 flex items-center justify-center z-10">
        {icon}
      </div>
      {/* Blue pointer */}
      <div className={`absolute ${pointer === 'right' ? 'right-[-18px]' : 'left-[-18px]'} top-1/2 -translate-y-1/2 w-6 h-6 bg-[#23237b] rounded-full z-0`} style={{ clipPath: pointer === 'right' ? 'polygon(0 0, 100% 50%, 0 100%)' : 'polygon(100% 0, 0 50%, 100% 100%)' }} />
    </div>
    <div className="flex-1">
      <div className={`text-lg font-semibold ${highlight ? 'text-red-600' : 'text-gray-900'}`}>{title}</div>
      {children && <div className="mt-1 text-base text-gray-700 leading-snug">{children}</div>}
    </div>
  </div>
);

const MarketOpportunitySection = () => (
  <section className="py-16 px-2 md:px-0 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
      {/* Left: Funnel and text */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-[#191c5d]">Market </span>
          <span className="text-[#ed1b24]">Opportunity</span>
        </h2>
        <div className="flex flex-row items-center gap-6">
          {/* Funnel */}
          <div className="flex flex-col gap-[-16px] w-28 md:w-36">
            <div className="relative z-10">
              <div className="bg-[#ed1b24] text-white font-bold text-xl md:text-2xl flex items-center justify-center h-16 md:h-20 rounded-b-[60px] rounded-t-[40px] shadow-lg" style={{ borderBottomLeftRadius: 60, borderBottomRightRadius: 60, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>TAM</div>
            </div>
            <div className="relative z-10 -mt-4">
              <div className="bg-[#23237b] text-white font-bold text-xl md:text-2xl flex items-center justify-center h-14 md:h-16 rounded-b-[50px] rounded-t-[30px] shadow-lg" style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>SAM</div>
            </div>
            <div className="relative z-10 -mt-4">
              <div className="bg-[#888888] text-white font-bold text-xl md:text-2xl flex items-center justify-center h-12 md:h-14 rounded-b-[40px] rounded-t-[20px] shadow-lg" style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>SoM</div>
            </div>
          </div>
          {/* Texts for each funnel segment */}
          <div className="flex flex-col gap-8 ml-4">
            <div className="flex items-center min-h-[64px]">
              <div>
                <div className="text-base md:text-lg font-medium text-black">1.4B people, <span className="text-[#ed1b24] font-bold">$10B</span> sanitation economy</div>
              </div>
            </div>
            <div className="flex items-center min-h-[56px]">
              <div>
                <div className="text-base md:text-lg font-medium text-black"><span className="text-[#23237b] font-bold">300M</span> people in South India</div>
              </div>
            </div>
            <div className="flex items-center min-h-[48px]">
              <div>
                <div className="text-base md:text-lg font-medium text-[#888888]">Initial focus on <span className="font-bold">Tamil Nadu</span> highways and cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Map with overlay */}
      <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="w-full h-full absolute inset-0" style={{background: 'white', opacity: .85, zIndex: 1}} />
          <img src={TamilNaduMap} alt="Tamil Nadu Map" className="w-full h-full object-cover absolute inset-0 z-0"/>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="text-white text-center text-xl md:text-2xl font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 8px #0006' }}>
            Phase 1 includes <br />
            <span className="text-3xl md:text-4xl font-extrabold">1,000+<br />potential sites in TN</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Animated SVG restroom illustration (larger and visually prominent)
const AnimatedRestroomSVG = () => (
  <svg width="400" height="400" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto md:mx-0 drop-shadow-xl">
    {/* Restroom building */}
    <rect x="60" y="90" width="140" height="90" rx="12" fill="#e0e7ff" stroke="#23237b" strokeWidth="3"/>
    <rect x="100" y="140" width="30" height="40" rx="6" fill="#fff" stroke="#23237b" strokeWidth="2"/>
    <rect x="160" y="140" width="30" height="40" rx="6" fill="#fff" stroke="#23237b" strokeWidth="2"/>
    {/* Roof */}
    <rect x="55" y="80" width="150" height="15" rx="5" fill="#23237b" />
    {/* Crane */}
    <rect x="190" y="40" width="10" height="50" rx="3" fill="#b4b4b4" className="animate-pulse" />
    <rect x="175" y="40" width="40" height="10" rx="3" fill="#b4b4b4" />
    <rect x="213" y="50" width="7" height="30" rx="3" fill="#fbbf24" className="animate-bounce" />
    {/* Sparkles */}
    <circle cx="90" cy="80" r="5" fill="#fbbf24" className="animate-ping" />
    <circle cx="170" cy="70" r="3.5" fill="#1aaf9b" className="animate-pulse" />
    <circle cx="140" cy="65" r="2.5" fill="#ed1b24" className="animate-pulse" />
  </svg>
);

const HomePage = () => (
  <div className="font-sans antialiased bg-[#f7f8fa] text-gray-800">
    {/* Hero Section - Optimized for mobile and web */}
    <section className="relative w-full">
      <div className="relative overflow-hidden">
      <img 
        src={heroImage} 
        alt="NammaLoo Hero" 
          className="w-full h-auto object-cover"
        />
        {/* Mobile-first app store badges */}
        <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 p-4 sm:p-6 sm:absolute sm:left-[5%] sm:bottom-8 md:bottom-16 lg:bottom-24 sm:z-20">
          <a 
            href="https://play.google.com/store/apps/details?id=com.nammaloo.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition cursor-pointer"
          >
            <img 
              src={playBadge} 
              alt="Google Play" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto shadow-lg bg-white/10 backdrop-blur-sm rounded-lg p-1" 
            />
          </a>
          <a 
            href="https://apps.apple.com/app/nammaloo/id1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition cursor-pointer"
          >
            <img 
              src={appStoreBadge} 
              alt="App Store" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto shadow-lg bg-white/10 backdrop-blur-sm rounded-lg p-1" 
            />
          </a>
        </div>
      </div>
    </section>

    {/* Find a Clean Toilet - Mobile optimized */}
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Animated bubbles background - Responsive */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute left-1/4 top-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-blue-200 rounded-full opacity-30 animate-pulse-slow" />
        <div className="absolute right-1/4 bottom-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-20 animate-pulse-slow delay-200" />
        <div className="absolute left-1/2 top-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-300 rounded-full opacity-20 animate-pulse-slow delay-500" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#23237b] mb-2 leading-tight">Find a Clean Toilet When You Need It Most</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#23237b] max-w-xl font-semibold px-4">
            Instantly <span className="text-[#1aaf9b] font-bold">discover</span> the nearest clean, safe, and accessible restroom—wherever you are.
          </p>
        </div>
        {/* Responsive search bar */}
        <div className="flex w-full max-w-sm sm:max-w-md mx-auto bg-white rounded-full shadow-lg border border-blue-100 overflow-hidden mt-4">
          <span className="flex items-center px-3 sm:px-4 text-blue-400">
            <MapPin size={20} className="sm:w-6 sm:h-6" />
          </span>
          <input 
            className="flex-1 px-2 py-2 sm:py-3 outline-none text-sm sm:text-lg bg-transparent" 
            placeholder="Search for toilets near..." 
            disabled 
          />
          <Link to="/app-guide" className="bg-[#23237b] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-full hover:bg-[#191c5d] transition inline-block">Find Now</Link>
        </div>
        {/* Responsive feature icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 px-4">
          <div className="flex flex-col items-center animate-fade-in-up delay-100">
            <Shield className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce-slow" />
            <span className="text-xs sm:text-sm font-semibold text-[#ed1b24]">Safe</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-200">
            <Users className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce-slow" />
            <span className="text-xs sm:text-sm font-semibold text-[#1aaf9b]">Community</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-300">
            <Accessibility className="text-[#497abd] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce-slow" />
            <span className="text-xs sm:text-sm font-semibold text-[#497abd]">Accessible</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-400">
            <Heart className="text-[#ffcb05] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce-slow" />
            <span className="text-xs sm:text-sm font-semibold text-[#ffcb05]">Women-Friendly</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up delay-500">
            <Smile className="text-[#23237b] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce-slow" />
            <span className="text-xs sm:text-sm font-semibold text-[#23237b]">Clean</span>
          </div>
        </div>
      </div>
    </section>

    {/* Why NammaLoo - Responsive grid */}
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t border-b border-blue-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <Globe className="text-[#1aaf9b] animate-fade-in w-8 h-8 sm:w-10 sm:h-10" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#191c5d] mt-2 mb-2 text-center">Why NammaLoo?</h2>
          <div className="text-base sm:text-lg md:text-xl text-[#ed1b24] font-semibold mb-4 text-center px-4">Because using a toilet shouldn't be a privilege.</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div className="flex items-start gap-3 sm:gap-4 group">
            <MapPin className="text-[#23237b] w-8 h-8 sm:w-10 sm:h-12 flex-shrink-0 group-hover:scale-110 transition" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#23237b] mb-1">Real-time discovery</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Our app shows you the closest verified restrooms based on your location.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 group">
            <Shield className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-12 flex-shrink-0 group-hover:scale-110 transition" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#ed1b24] mb-1">Hygiene you can trust</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Each unit is equipped with IoT sensors to monitor cleanliness, water availability, and safety.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 group">
            <Users className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-12 flex-shrink-0 group-hover:scale-110 transition" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1aaf9b] mb-1">Built for all</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Designed for women, children, differently-abled, and everyone in between.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 group">
            <Handshake className="text-[#497abd] w-8 h-8 sm:w-10 sm:h-12 flex-shrink-0 group-hover:scale-110 transition" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#497abd] mb-1">Local and inclusive</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Toilets are maintained by trained community teams, with a focus on women-led operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works - Mobile optimized */}
    <section className="py-8 sm:py-10 md:py-12 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-white via-blue-50 to-teal-50 border-b border-blue-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <Smartphone className="text-[#23237b] animate-fade-in w-7 h-7 sm:w-8 sm:h-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#191c5d] mt-1 mb-1 text-center">How It Works</h2>
        </div>
        {/* Mobile-first step layout */}
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4 justify-between items-center">
          <div className="flex flex-col items-center flex-1 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ed1b24] to-[#23237b] text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">1</div>
            <Smartphone className="text-[#23237b] mb-1 w-7 h-7 sm:w-8 sm:h-9" />
            <h4 className="text-base sm:text-lg font-bold text-[#23237b] mb-0.5 text-center">Open the app</h4>
            <p className="text-xs sm:text-sm text-[#191c5d] text-center">See a map of clean restrooms near you.</p>
          </div>
          <div className="w-6 h-6 lg:hidden flex items-center justify-center">
            <span className="block w-full h-0.5 bg-gradient-to-r from-[#ed1b24] to-[#1aaf9b] rounded-full"></span>
          </div>
          <div className="w-6 h-6 hidden lg:flex items-center justify-center">
            <span className="block w-full h-0.5 bg-gradient-to-r from-[#ed1b24] to-[#1aaf9b] rounded-full"></span>
          </div>
          <div className="flex flex-col items-center flex-1 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ed1b24] to-[#23237b] text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">2</div>
            <Shield className="text-[#ed1b24] mb-1 w-7 h-7 sm:w-8 sm:h-9" />
            <h4 className="text-base sm:text-lg font-bold text-[#ed1b24] mb-0.5 text-center">Check hygiene status</h4>
            <p className="text-xs sm:text-sm text-[#191c5d] text-center">Live updates let you know which restrooms are safe to use.</p>
          </div>
          <div className="w-6 h-6 lg:hidden flex items-center justify-center">
            <span className="block w-full h-0.5 bg-gradient-to-r from-[#1aaf9b] to-[#497abd] rounded-full"></span>
          </div>
          <div className="w-6 h-6 hidden lg:flex items-center justify-center">
            <span className="block w-full h-0.5 bg-gradient-to-r from-[#1aaf9b] to-[#497abd] rounded-full"></span>
          </div>
          <div className="flex flex-col items-center flex-1 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1aaf9b] to-[#497abd] text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">3</div>
            <ArrowRight className="text-[#1aaf9b] mb-1 w-7 h-7 sm:w-8 sm:h-9" />
            <h4 className="text-base sm:text-lg font-bold text-[#1aaf9b] mb-0.5 text-center">Get directions</h4>
            <p className="text-xs sm:text-sm text-[#191c5d] text-center">Navigate directly to the location with a tap.</p>
          </div>
        </div>
      </div>
    </section>

    {/* We're Also Building - Responsive layout */}
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
        {/* Responsive SVG */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify mb-8 lg:mb-0">
          <div className="">
          <AnimatedRestroomSVG />
          </div>
        </div>
        {/* Responsive content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-[#23237b] p-2 rounded-full">
              <Wrench size={24} className="sm:w-7 sm:h-7" color="#fff" />
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#23237b]">Not Just Finding – We're Also Building</h2>
          </div>
          <p className="text-base sm:text-lg text-[#23237b] max-w-xl mb-4 px-4 lg:px-0">
            We don't just show you toilets. We help <span className="font-bold text-[#1aaf9b]">build</span> and <span className="font-bold text-[#ed1b24]">maintain</span> smart restrooms in high-footfall areas like:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition animate-fade-in-up">
              <Car className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <span className="font-bold text-[#1aaf9b] text-base sm:text-lg">Highways</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">Rest stops for travelers</span>
            </div>
            <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition animate-fade-in-up delay-100">
              <Bus className="text-[#497abd] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <span className="font-bold text-[#497abd] text-base sm:text-lg">Bus Stands & Transit Hubs</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">Clean facilities for commuters</span>
            </div>
            <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition animate-fade-in-up delay-200">
              <ShoppingBag className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <span className="font-bold text-[#ed1b24] text-base sm:text-lg">Urban Markets</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">Accessible in busy areas</span>
            </div>
            <div className="flex flex-col items-center bg-white/90 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition animate-fade-in-up delay-300">
              <MapPin className="text-[#ffcb05] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
              <span className="font-bold text-[#ffcb05] text-base sm:text-lg">Tourist Destinations</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">Welcoming for visitors</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Designed with Dignity - Mobile optimized grid */}
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#23237b] mb-2">Designed with Dignity in Mind</h2>
        <p className="text-base sm:text-lg text-[#23237b] max-w-2xl mb-6 sm:mb-8 px-4">
          Every NammaLoo unit includes:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 w-full items-end justify-center">
          <div className="flex flex-col items-center">
            <Bath className="text-[#23237b] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
            <span className="text-xs sm:text-sm font-semibold text-[#23237b] text-center">Western & Indian toilets</span>
          </div>
          <div className="flex flex-col items-center">
            <Droplet className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-bounce" style={{ animationDuration: '1.2s' }} />
            <span className="text-xs sm:text-sm font-semibold text-[#1aaf9b] text-center">Clean water & sanitary bins</span>
          </div>
          <div className="flex flex-col items-center">
            <Baby className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-10 mb-2" />
            <span className="text-xs sm:text-sm font-bold text-[#23237b] text-center">Baby-changing stations</span>
          </div>
          <div className="flex flex-col items-center">
            <Accessibility className="text-[#497abd] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-[wiggle_1.5s_ease-in-out_infinite]" />
            <span className="text-xs sm:text-sm font-bold text-[#23237b] text-center">Wheelchair accessibility</span>
          </div>
          <div className="flex flex-col items-center">
            <Sun className="text-[#ffcb05] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-bold text-[#23237b] text-center">Solar lighting</span>
          </div>
          <div className="flex flex-col items-center">
            <Bell className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-10 mb-2 animate-shake" />
            <span className="text-xs sm:text-sm font-bold text-[#23237b] text-center">Safety alarms</span>
          </div>
        </div>
      </div>
    </section>

    {/* Our Growing Footprint - Mobile optimized */}
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#23237b]/40 to-[#1aaf9b]/30 z-0" />
        <img src={TamilNaduMap} alt="Tamil Nadu Map" className="w-[50%] sm:w-[60%] md:w-[70%] lg:w-[80%] max-w-xl opacity-40 drop-shadow-2xl mx-auto z-10 object-contain" />
      </div>
      <div className="max-w-3xl mx-auto relative z-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Users className="text-[#23237b] w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#191c5d]">Our Growing Footprint</span>
        </div>
        <ul className="space-y-4 sm:space-y-5 mt-2">
          <li className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-[#23237b] font-semibold animate-fade-in">
            <CheckCircle className="text-[#1aaf9b] w-5 h-5 sm:w-6 sm:h-6" />
            <span>Smart restrooms mapped across Tamil Nadu</span>
          </li>
          <li className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-[#23237b] font-semibold animate-fade-in">
            <CheckCircle className="text-[#1aaf9b] w-5 h-5 sm:w-6 sm:h-6" />
            <span>Expanding to cities, highways, and towns across South India</span>
          </li>
          <li className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-[#23237b] font-semibold animate-fade-in">
            <CheckCircle className="text-[#1aaf9b] w-5 h-5 sm:w-6 sm:h-6" />
            <span>Local teams trained for upkeep and hygiene monitoring</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Call-to-action - Mobile optimized */}
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f7f8fa] via-blue-50 to-white text-center overflow-hidden">
      <Shield className="absolute opacity-10 text-[#1aaf9b] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 left-1/2 -translate-x-1/2 top-0 pointer-events-none select-none" />
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6 relative z-10">
        <Shield className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-12 mb-2" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#23237b] mb-2 px-4">
          Because dignity, hygiene, and safety are not optional—they're <span className="text-[#ed1b24]">essential</span>.
        </h2>
        <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-[#23237b] font-semibold mb-4">
          <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#497abd] mr-1" />
          Get NammaLoo Now
        </div>
        <div className="flex justify-center gap-3 sm:gap-4 mt-2">
          <a 
            href="https://play.google.com/store/apps/details?id=com.nammaloo.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition cursor-pointer"
          >
            <img 
              src={playBadge} 
              alt="Google Play" 
              className="h-10 sm:h-12 w-auto shadow-lg bg-white/10 backdrop-blur-sm rounded-lg p-1" 
            />
          </a>
          <a 
            href="https://apps.apple.com/app/nammaloo/id1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-105 transition cursor-pointer"
          >
            <img 
              src={appStoreBadge} 
              alt="App Store" 
              className="h-10 sm:h-12 w-auto shadow-lg bg-white/10 backdrop-blur-sm rounded-lg p-1" 
            />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
