import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Filter, List, Map, Loader, AlertCircle, RefreshCw } from 'lucide-react';
import ToiletCard from '../components/ToiletCard';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import type { LeafletEvent } from 'leaflet';
import FilterSidebar from '../components/FilterSidebar';

// Fix default icon issue with Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom user location icon
const userLocationIcon: L.Icon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom toilet icon
const toiletIcon: L.Icon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Location {
  latitude: number;
  longitude: number;
}

interface Toilet {
  id: string;
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
  coordinates: {
    lat: number;
    lng: number;
  };
  facilityType: 'paid' | 'unpaid';
  waterAvailability: boolean;
  maintenanceStatus: 'good' | 'needs_attention' | 'maintenance_required';
  iotEnabled: boolean;
  hygieneSensors: {
    airQuality: number;
    cleanliness: number;
    waterLevel: number;
  };
}

// Component to update map center based on location state
const MapUpdater = ({ center }: { center: [number, number] }) => {
  const map = useMapEvents({
    locationfound: (e: L.LocationEvent) => {
      map.setView(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

const LocatePage = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [toilets, setToilets] = useState<Toilet[]>([]);
  const [isLoadingToilets, setIsLoadingToilets] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'cleanliness'>('distance');
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string[]>>({});

  // Sample toilet data
  const sampleToilets: Toilet[] = [
    {
      id: '1',
      name: 'Saraswat Bank',
      address: 'Poonamallee High Rd, Park Town, Chennai, Tamil Nadu 600003',
      distance: 150,
      rating: 4.5,
      isOpen: true,
      hasWifi: true,
      isAccessible: true,
      isSafe: true,
      cleanliness: 4.2,
      lastUpdated: '2 mins ago',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 13.0850, lng: 80.2787 },
      facilityType: 'paid',
      waterAvailability: true,
      maintenanceStatus: 'good',
      iotEnabled: true,
      hygieneSensors: {
        airQuality: 85,
        cleanliness: 90,
        waterLevel: 95
      }
    },
    {
      id: '2',
      name: 'Marina Beach Public Toilet',
      address: 'Marina Beach Road, Triplicane, Chennai, Tamil Nadu 600005',
      distance: 280,
      rating: 4.1,
      isOpen: true,
      hasWifi: false,
      isAccessible: true,
      isSafe: true,
      cleanliness: 3.8,
      lastUpdated: '5 mins ago',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 13.0645, lng: 80.2831 },
      facilityType: 'unpaid',
      waterAvailability: false,
      maintenanceStatus: 'needs_attention',
      iotEnabled: false,
      hygieneSensors: {
        airQuality: 0,
        cleanliness: 0,
        waterLevel: 0
      }
    },
    {
      id: '3',
      name: 'Guindy National Park Restroom',
      address: 'Guindy, Chennai, Tamil Nadu 600025',
      distance: 420,
      rating: 3.9,
      isOpen: true,
      hasWifi: false,
      isAccessible: false,
      isSafe: true,
      cleanliness: 3.5,
      lastUpdated: '8 mins ago',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 13.0079, lng: 80.2223 },
      facilityType: 'paid',
      waterAvailability: true,
      maintenanceStatus: 'maintenance_required',
      iotEnabled: true,
      hygieneSensors: {
        airQuality: 0,
        cleanliness: 0,
        waterLevel: 0
      }
    },
    {
      id: '4',
      name: 'T. Nagar Ranganathan Street Facility',
      address: 'Ranganathan Street, T. Nagar, Chennai, Tamil Nadu 600017',
      distance: 350,
      rating: 4.3,
      isOpen: false,
      hasWifi: true,
      isAccessible: true,
      isSafe: true,
      cleanliness: 4.0,
      lastUpdated: '12 mins ago',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 13.0371, lng: 80.2307 },
      facilityType: 'unpaid',
      waterAvailability: false,
      maintenanceStatus: 'maintenance_required',
      iotEnabled: false,
      hygieneSensors: {
        airQuality: 0,
        cleanliness: 0,
        waterLevel: 0
      }
    },
    {
      id: '5',
      name: 'Phoenix Marketcity Mall Restroom',
      address: 'Velachery Main Rd, Velachery, Chennai, Tamil Nadu 600042',
      distance: 520,
      rating: 4.7,
      isOpen: true,
      hasWifi: true,
      isAccessible: true,
      isSafe: true,
      cleanliness: 4.5,
      lastUpdated: '15 mins ago',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 12.9916, lng: 80.2201 },
      facilityType: 'paid',
      waterAvailability: true,
      maintenanceStatus: 'good',
      iotEnabled: true,
      hygieneSensors: {
        airQuality: 90,
        cleanliness: 95,
        waterLevel: 100
      }
    },
    {
      id: '6',
      name: 'Fort St. George Toilet',
      address: 'Fort St George, Chennai, Tamil Nadu 600009',
      distance: 680,
      rating: 3.6,
      isOpen: true,
      hasWifi: false,
      isAccessible: false,
      isSafe: true,
      cleanliness: 3.2,
      lastUpdated: '20 mins ago',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      coordinates: { lat: 13.0809, lng: 80.2882 },
      facilityType: 'unpaid',
      waterAvailability: false,
      maintenanceStatus: 'maintenance_required',
      iotEnabled: false,
      hygieneSensors: {
        airQuality: 0,
        cleanliness: 0,
        waterLevel: 0
      }
    }
  ];

  const requestLocation = () => {
    setIsLoadingLocation(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        setLocation(newLocation);
        setIsLoadingLocation(false);
        loadNearbyToilets(newLocation);
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location.';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        setLocationError(errorMessage);
        setIsLoadingLocation(false);
        // Load sample data even without location
        loadSampleToilets();
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  const loadNearbyToilets = (userLocation: Location) => {
    setIsLoadingToilets(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Calculate distances and update sample data
      const toiletsWithDistance = sampleToilets.map(toilet => ({
        ...toilet,
        distance: Math.floor(Math.random() * 1000) + 100 // Random distance for demo
      }));
      
      setToilets(toiletsWithDistance);
      setIsLoadingToilets(false);
    }, 1500);
  };

  const loadSampleToilets = () => {
    setIsLoadingToilets(true);
    setTimeout(() => {
      setToilets(sampleToilets);
      setIsLoadingToilets(false);
    }, 1000);
  };

  const sortToilets = (toilets: Toilet[], sortBy: string) => {
    return [...toilets].sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'rating':
          return b.rating - a.rating;
        case 'cleanliness':
          return b.cleanliness - a.cleanliness;
        default:
          return 0;
      }
    });
  };

  const handleApplyFilters = (filters: Record<string, string[]>) => {
    console.log('Applied Filters:', filters);
    setAppliedFilters(filters);
    // Here you would typically re-fetch or filter your toilet data based on `filters`
  };

  const sortedToilets = sortToilets(toilets, sortBy);

  useEffect(() => {
    // Load sample data on component mount
    loadSampleToilets();
  }, []);

  // Default map center (Chennai)
  const defaultMapCenter: [number, number] = [13.0827, 80.2707]; 
  const mapCenter: [number, number] = location ? [location.latitude, location.longitude] : defaultMapCenter;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-nammaloo-navy">Find Nearby Toilets</h1>
          <button 
            onClick={() => setFilterOpen(true)}
            className="bg-nammaloo-teal text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 flex items-center"
          >
            <Filter className="mr-2 text-white" size={20} /> Filters
          </button>
        </div>

        {/* Location Request */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-nammaloo-navy">Your Location</h2>
            <button
              onClick={requestLocation}
              disabled={isLoadingLocation}
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoadingLocation ? (
                <Loader className="animate-spin mr-2" size={20} />
              ) : (
                <Navigation className="mr-2" size={20} />
              )}
              {isLoadingLocation ? 'Getting Location...' : 'Get My Location'}
            </button>
          </div>

          {locationError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <div className="flex items-center">
                <AlertCircle className="text-red-500 mr-3" size={20} />
                <p className="text-red-700">{locationError}</p>
              </div>
            </div>
          )}

          {location && (
            <div className="bg-nammaloo-teal bg-opacity-10 border border-nammaloo-teal border-opacity-30 rounded-xl p-4">
              <div className="flex items-center">
                <MapPin className="text-nammaloo-teal mr-3" size={20} />
                <div>
                  <p className="font-semibold text-nammaloo-navy">Location Found!</p>
                  <p className="text-gray-600 text-sm">
                    Lat: {location.latitude.toFixed(6)}, Lng: {location.longitude.toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200
                    ${viewMode === 'list' 
                      ? 'bg-red-500 text-white shadow-md transform hover:scale-105 hover:bg-red-600' 
                      : 'bg-gray-200 text-nammaloo-navy hover:bg-gray-300'
                    }`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="inline mr-2" size={18} /> List View
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200
                    ${viewMode === 'map' 
                      ? 'bg-red-500 text-white shadow-md transform hover:scale-105 hover:bg-red-600' 
                      : 'bg-gray-200 text-nammaloo-navy hover:bg-gray-300'
                    }`}
                  onClick={() => setViewMode('map')}
                >
                  <Map className="inline mr-2" size={18} /> Map View
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
              <select
                id="sort-select"
                name="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nammaloo-blue focus:border-transparent w-full"
              >
                <option value="distance">Sort by Distance</option>
                <option value="rating">Sort by Rating</option>
                <option value="cleanliness">Sort by Cleanliness</option>
              </select>

              <button
                onClick={() => location ? loadNearbyToilets(location) : loadSampleToilets()}
                className="flex items-center px-4 py-2 bg-nammaloo-teal text-white rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                <RefreshCw className="mr-2" size={18} />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          {isLoadingToilets ? (
            <div className="text-center py-12">
              <Loader className="animate-spin mx-auto mb-4 text-nammaloo-blue" size={48} />
              <p className="text-xl text-gray-600">Finding nearby toilets...</p>
            </div>
          ) : viewMode === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toilets.map((toilet) => (
                <ToiletCard key={toilet.id} {...toilet} />
              ))}
            </div>
          ) : ( 
            <div className="h-[50vh] md:h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
              {location ? (
                <MapContainer
                  center={[location.latitude, location.longitude]}
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {/* User Location Marker */}
                  <Marker 
                    position={[location.latitude, location.longitude]}
                    icon={userLocationIcon}
                  >
                    <Popup>
                      You are here
                    </Popup>
                  </Marker>
                  {/* Toilet Markers */}
                  {toilets.map((toilet) => (
                    <Marker 
                      key={toilet.id} 
                      position={[toilet.coordinates.lat, toilet.coordinates.lng]}
                      icon={toiletIcon}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-nammaloo-navy">{toilet.name}</h3>
                          <p className="text-sm text-gray-600">{toilet.address}</p>
                          <p className="text-sm text-nammaloo-red">{toilet.distance}m away</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                  <MapUpdater center={[location.latitude, location.longitude]} />
                </MapContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Please enable location access to view the map
                </div>
              )}
            </div>
          )}
        </div>

        {!isLoadingToilets && toilets.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-xl text-gray-600">No toilets found nearby</p>
          </div>
        )}
      </div>

      <FilterSidebar 
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default LocatePage;