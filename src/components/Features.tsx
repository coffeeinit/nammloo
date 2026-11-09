import React from 'react';
import { 
  MapPin, 
  Shield, 
  Users, 
  Smartphone, 
  Award, 
  Heart,
  Building,
  Wifi,
  Star,
  CheckCircle,
  QrCode,
  Droplet,
  FileText,
  Accessibility,
  User,
  AlertCircle,
  Wrench,
  Truck,
  Home,
  Leaf,
  Filter,
  Bath,
  IndianRupee,
  ListFilter,
  HandSoap,
  Baby,
  Lightbulb,
  Reflect,
  Trash2,
  Zap,
  Fan,
  ShowerHead,
  Syringe,
  ScrollText,
  Faucet
} from 'lucide-react';

interface Feature {
  icon?: any;
  title: string;
  description: string;
  color: string;
  gradient: string;
  image?: string;
}

const Features = () => {
  const keyFeatures: Feature[] = [
    {
      title: "Smart Technology",
      description: "IoT-enabled sensors and real-time monitoring",
      icon: Smartphone,
      color: "text-[#1aaf9b]",
      gradient: "from-[#1aaf9b] to-[#008979]"
    },
    {
      title: "Hygiene First",
      description: "Touchless fixtures and automated cleaning",
      icon: Droplet,
      color: "text-[#497abd]",
      gradient: "from-[#497abd] to-[#191c5d]"
    },
    {
      title: "Accessibility",
      description: "Universal design for all users",
      icon: Accessibility,
      color: "text-[#ed1b24]",
      gradient: "from-[#ed1b24] to-[#ffcb05]"
    },
    {
      title: "Sustainability",
      description: "Water-saving and eco-friendly solutions",
      icon: Leaf,
      color: "text-[#ed008c]",
      gradient: "from-[#ed008c] to-[#ffcb05]"
    },
    {
      title: "Comprehensive Filters",
      description: "Advanced filtering options by cost, type, amenities, and location.",
      icon: Filter,
      color: "text-[#1aaf9b]",
      gradient: "from-[#1aaf9b] to-[#008979]"
    },
    {
      title: "Detailed Amenities",
      description: "Information on available amenities like water supply, soap, and diaper changing.",
      icon: Bath,
      color: "text-[#497abd]",
      gradient: "from-[#497abd] to-[#191c5d]"
    },
    {
      title: "Location-Based Discovery",
      description: "Find toilets based on proximity and location types like malls or hospitals.",
      icon: MapPin,
      color: "text-[#ed1b24]",
      gradient: "from-[#ed1b24] to-[#ffcb05]"
    },
    {
      title: "Flexible Pricing Options",
      description: "View cost details including free, paid, and user-specific access.",
      icon: IndianRupee,
      color: "text-[#ed008c]",
      gradient: "from-[#ed008c] to-[#ffcb05]"
    },
    {
      title: "User Reviews & Ratings",
      description: "Access real user reviews and ratings to choose the best facilities.",
      icon: Star,
      color: "text-[#191c5d]",
      gradient: "from-[#191c5d] to-[#497abd]"
    },
    {
      title: "Smart Sorting & Network",
      description: "Sort search results by distance and view network connectivity options.",
      icon: ListFilter,
      color: "text-[#008979]",
      gradient: "from-[#008979] to-[#1aaf9b]"
    }
  ];

  const amenities: Feature[] = [
    {
      title: "Water Supply",
      description: "Consistent and clean water supply for all facilities.",
      icon: Droplet,
      color: "text-[#1aaf9b]",
      gradient: "from-[#1aaf9b] to-[#008979]"
    },


  
    {
      title: "Diaper Changing Table",
      description: "Dedicated facilities for infant care.",
      icon: Baby,
      color: "text-[#008979]",
      gradient: "from-[#008979] to-[#1aaf9b]"
    },
    {
      title: "Sanitary Napkins",
      description: "Provision for sanitary napkin disposal and vending machines.",
      icon: Syringe,
      color: "text-[#ffcb05]",
      gradient: "from-[#ffcb05] to-[#ed1b24]"
    },

    {
      title: "Lights",
      description: "Well-lit facilities for safety and visibility.",
      icon: Lightbulb,
      color: "text-[#497abd]",
      gradient: "from-[#497abd] to-[#191c5d]"
    },
   
    {
      title: "Dust Bin/Trash Can",
      description: "Proper waste disposal bins for cleanliness.",
      icon: Trash2,
      color: "text-[#ed008c]",
      gradient: "from-[#ed008c] to-[#ffcb05]"
    },
    {
      title: "Toilet Paper",
      description: "Availability of toilet paper.",
      icon: ScrollText,
      color: "text-[#191c5d]",
      gradient: "from-[#191c5d] to-[#497abd]"
    },
    {
      title: "Automatic Flush",
      description: "Touchless automatic flush systems.",
      icon: Zap,
      color: "text-[#008979]",
      gradient: "from-[#008979] to-[#1aaf9b]"
    },
    {
      title: "Dryers",
      description: "Hand dryers for convenience.",
      icon: Fan,
      color: "text-[#ffcb05]",
      gradient: "from-[#ffcb05] to-[#ed1b24]"
    }
  ];

  

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#191c5d] mb-6">Key Features</h2>
          <p className="text-xl text-[#008979] max-w-3xl mx-auto leading-relaxed">
            Discover how Namma Loo is transforming public sanitation in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2"
              style={{
                borderColor: feature.gradient.split(' ')[1].replace('from-', '')
              }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6`}>
                <feature.icon className="w-8 h-8 text-white stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-[#191c5d] mb-4">{feature.title}</h3>
              <p className="text-[#008979] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#191c5d] mb-6">Amenities</h2>
          <p className="text-xl text-[#008979] max-w-3xl mx-auto leading-relaxed">
            Discover the detailed amenities available in Namma Loo facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2"
              style={{
                borderColor: amenity.gradient.split(' ')[1].replace('from-', '')
              }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.gradient} p-3 mb-6`}>
                {amenity.icon ? (
                  <amenity.icon className="w-8 h-8 text-white stroke-[2.5]" />
                ) : (
                  <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-[#191c5d] mb-4">{amenity.title}</h3>
              <p className="text-[#008979] leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 