import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaLightbulb, FaUsers, FaHandshake, FaChartLine, FaBuilding } from 'react-icons/fa';
import { MdEngineering, MdOutlineArchitecture, MdOutlineConstruction, MdOutlineDesignServices } from 'react-icons/md';
import { GiMechanicalArm, GiWaterRecycling } from 'react-icons/gi';
import { BsTools, BsGear, BsBuilding } from 'react-icons/bs';
import kaliSuryaImage from '../assets/kali-surya.jpg';
import sprint6Logo from '../assets/sprint6-logo.png';
import nammaloologo from '../assets/logo.svg';
import { Trophy, Linkedin, Twitter, Facebook, Users, CheckCircle, Globe, Shield, Handshake, Wrench, Car, Bus, ShoppingBag, MapPin } from 'lucide-react';

const AboutPage = () => {
  const leaderInfo = {
    name: "Mr. Kaliappan K",
    role: "Founder & CEO",
    company: "Sprint6 Smart Restroom Solutions",
    description: [
      "A visionary leader with over 15 years of experience in engineering and infrastructure development.",
      "Passionate about creating sustainable solutions for public sanitation challenges in India.",
      "Leading the transformation of public restroom facilities through innovative technology and design."
    ],
    achievements: [
      "Pioneered smart restroom solutions in India",
      "Developed innovative water-saving technologies",
      "Established partnerships with major municipalities",
      "Created employment opportunities in local communities"
    ]
  };

  const strengths = [
    {
      title: "Engineering Excellence",
      description: "Expert team of engineers with deep domain knowledge",
      icon: <MdEngineering />,
      color: "text-[#1aaf9b]"
    },
    {
      title: "Self-Execution",
      description: "Complete in-house project execution capabilities",
      icon: <BsTools />,
      color: "text-[#497abd]"
    },
    {
      title: "Cost-Effective",
      description: "Optimized solutions without compromising quality",
      icon: <FaChartLine />,
      color: "text-[#ed1b24]"
    },
    {
      title: "Technical Expertise",
      description: "Advanced technology integration and innovation",
      icon: <GiMechanicalArm />,
      color: "text-[#ffcb05]"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control and testing processes",
      icon: <BsGear />,
      color: "text-[#1aaf9b]"
    },
    {
      title: "Sustainable Solutions",
      description: "Environmentally conscious design and implementation",
      icon: <GiWaterRecycling />,
      color: "text-[#497abd]"
    }
  ];

  const processSteps = {
    discover: [
      "Initial Research",
      "Site Analysis",
      "Vision Planning",
      "Space Assessment",
      "Budget Analysis",
      "Development Plan"
    ],
    create: [
      "Design Development",
      "Technical Planning",
      "Compliance Check",
      "Engineering Design",
      "Material Selection",
      "Project Schedule"
    ],
    achieve: [
      "Material Sourcing",
      "Construction Start",
      "Installation Work",
      "Project Management",
      "Quality Assurance",
      "Aftercare Support"
    ]
  };

  const achievements = [
    {
      title: "Innovation Award",
      description: "Recognized for pioneering smart restroom solutions",
      icon: <FaAward />,
      color: "text-[#1aaf9b]"
    },
    {
      title: "Community Impact",
      description: "Created positive change in public sanitation",
      icon: <FaUsers />,
      color: "text-[#497abd]"
    },
    {
      title: "Industry Recognition",
      description: "Leading the transformation of public facilities",
      icon: <FaBuilding />,
      color: "text-[#ed1b24]"
    }
  ];

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Hero Section - Mobile optimized */}
      <section className="py-2 sm:py-2 px-2 sm:px-2 lg:px-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 relative z-10 bg-white/90 px-4 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl backdrop-blur-sm">
                <img 
                  src={sprint6Logo} 
                  alt="Sprint6 Logo" 
                  className="h-12 sm:h-16 md:h-20"
                />
                <span className="text-xl sm:text-2xl font-bold text-[#191c5d]">×</span>
                <img 
                  src={nammaloologo} 
                  alt="Namma Loo Logo" 
                  className="h-12 sm:h-16 md:h-20"
                />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[#23237b] max-w-3xl font-semibold px-4">
                A proud initiative of Sprint6 Smart Restroom Solutions, 
                bringing innovation and excellence to public sanitation across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Mobile optimized */}
      <section className="py-2 sm:py-2 md:py-2 px-2 sm:px-2 lg:px-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <Users className="text-[#1aaf9b] animate-fade-in w-8 h-8 sm:w-10 sm:h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c5d] mt-2 mb-2 text-center">Our Leadership</h2>
            <div className="text-base sm:text-lg text-[#ed1b24] font-semibold mb-4 text-center px-4">Visionary leadership driving change</div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12">
            <div className="w-full lg:w-1/3">
              <img 
                src={kaliSuryaImage} 
                alt="Kali Surya" 
                className="w-full aspect-square rounded-2xl object-cover border-4 border-[#ffcb05] shadow-lg hover:shadow-xl transition-all duration-300" 
              />
              <div className="flex flex-row items-center justify-center mt-4 sm:mt-6 space-x-4 sm:space-x-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#191c5d] hover:text-[#ffcb05] transition-colors duration-300 p-2 rounded-full bg-white shadow-md hover:shadow-lg">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#191c5d] hover:text-[#ffcb05] transition-colors duration-300 p-2 rounded-full bg-white shadow-md hover:shadow-lg">
                  <Twitter size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#191c5d] hover:text-[#ffcb05] transition-colors duration-300 p-2 rounded-full bg-white shadow-md hover:shadow-lg">
                  <Facebook size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#191c5d] mb-2 sm:mb-3">{leaderInfo.name}</h3>
              <p className="text-lg sm:text-xl text-[#ffcb05] font-semibold mb-2">{leaderInfo.role}</p>
              <p className="text-base sm:text-lg text-[#497abd] mb-4 sm:mb-6 font-medium">{leaderInfo.company}</p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {leaderInfo.description.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base text-[#191c5d] leading-relaxed">{paragraph}</p>
                ))}
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#191c5d] mb-4 sm:mb-6">Key Achievements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {leaderInfo.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-3 sm:gap-4 group bg-white"
                    >
                      <Trophy className="text-[#191c5d] flex-shrink-0 mt-1 group-hover:text-[#ffcb05] transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                      <p className="text-sm sm:text-base text-[#191c5d] font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Achievements Section - Mobile optimized */}
      <section className="py-3 sm:py-3 md:py-3 px-3 sm:px-3 lg:px-3 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <Trophy className="text-[#1aaf9b] animate-fade-in w-8 h-8 sm:w-10 sm:h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c5d] mt-2 mb-2 text-center">Our Achievements</h2>
            <div className="text-base sm:text-lg text-[#ed1b24] font-semibold mb-4 text-center px-4">Recognition and impact</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white text-center group"
              >
                <div className={`text-4xl sm:text-5xl mb-3 sm:mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#191c5d] mb-2">{achievement.title}</h3>
                <p className="text-sm sm:text-base text-[#191c5d] leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - Mobile optimized */}
      <section className="py-4 sm:py-4 md:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <Globe className="text-[#1aaf9b] animate-fade-in w-8 h-8 sm:w-10 sm:h-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c5d] mt-2 mb-2 text-center">Our Impact</h2>
            <div className="text-base sm:text-lg text-[#ed1b24] font-semibold mb-4 text-center px-4">Making a difference across India</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <Car className="text-[#1aaf9b] w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-[#1aaf9b] mb-2">Highways</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Smart restrooms on major highways</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <Bus className="text-[#497abd] w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-[#497abd] mb-2">Transit Hubs</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Clean facilities at bus stands</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <ShoppingBag className="text-[#ed1b24] w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-[#ed1b24] mb-2">Urban Markets</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Accessible in busy areas</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <MapPin className="text-[#ffcb05] w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-[#ffcb05] mb-2">Tourist Spots</h3>
              <p className="text-sm sm:text-base text-[#191c5d]">Welcoming for visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Mobile optimized */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1aaf9b] to-[#497abd] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Handshake className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-white" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 px-4">
            Ready to Transform Public Sanitation?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 px-4">
            Join us in creating a cleaner, safer, and more accessible India. 
            Let's work together to build better public facilities for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#1aaf9b] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 inline-block text-center">
              Get in Touch
            </Link>
            <Link to="/app-guide" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-[#1aaf9b] transition-colors duration-300 inline-block text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 