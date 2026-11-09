import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png'; // Importing the image logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-[#191c5d] pt-8 sm:pt-12 md:pt-14 pb-6 sm:pb-8 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
            <Link to="/" className="mb-2 text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <img src={logo} alt="Namma Loo Logo" className="h-8 sm:h-10 md:h-12" />
            </Link>
            <p className="text-[#008979] leading-relaxed max-w-xs text-sm sm:text-base font-semibold px-4 sm:px-0">
              Making clean, safe sanitation accessible to everyone, everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
            <h3 className="font-bold text-[#23237b] mb-3 tracking-wide text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 font-medium">
              <li><Link to="/" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link to="/locate" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">Locate</Link></li>

              <li><Link to="/app-guide" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">App Guide</Link></li>
              <li><Link to="/about" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">Privacy Policy</Link></li>


            </ul>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-[#23237b] mb-3 tracking-wide text-base sm:text-lg">Contact & Social</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3">
                <MapPin className="text-[#ed1b24] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-center sm:text-left">
                  2nd Floor, Kathipara Urban Square, 27, 2nd St, near Guindy, Sripuram Colony,
                  Viralur, Rajeswari colony, Chennai, St.Thomas Mount, Tamil Nadu 600016
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Mail className="text-[#1aaf9b] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">info@nammaloo.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Phone className="text-[#1aaf9b] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 999 479 2431</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-4 mt-3">
                <a 
                  href="https://in.linkedin.com/company/sprint6-smart-restroom-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#497abd] hover:text-[#ed1b24] transition-colors p-2 rounded-full hover:bg-white/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/sprint6solutions/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-500 transition-colors p-2 rounded-full hover:bg-white/50"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-blue-100 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          <p className="px-4">
            &copy; 2025 Sprint6 Specialized Services. All rights reserved. Built with <span className="text-[#ed1b24]">❤️</span> for India's sanitation revolution.
            <Link to="/launch" className="hover:text-[#1aaf9b] transition-colors text-sm sm:text-base">.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;