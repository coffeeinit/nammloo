import { FaMale, FaFemale, FaRestroom, FaWheelchair, FaBabyCarriage, FaBuilding } from 'react-icons/fa';

export const toiletLocations = [
  {
    name: "Saraswat Bank",
    rating: 0,
    status: "Reviewed",
    isOpen: true,
    distance: "0.1 kms",
    icons: [FaMale, FaFemale, FaRestroom, FaWheelchair, FaBabyCarriage, FaBuilding]
  },
  {
    name: "Domino's Pizza",
    rating: 0,
    status: "Probable",
    isOpen: true,
    distance: "0.1 kms",
    icons: [FaMale, FaFemale, FaRestroom, FaBabyCarriage, FaBuilding]
  },
  {
    name: "Axis Bank",
    rating: 0,
    status: "No data",
    isOpen: false,
    distance: "0.1 kms",
    icons: [FaMale, FaFemale, FaRestroom, FaWheelchair]
  },
  {
    name: "State Bank of India",
    rating: 0,
    status: "Probable",
    isOpen: false,
    distance: "0.2 kms",
    icons: [FaMale, FaFemale, FaRestroom, FaBuilding]
  },
  {
    name: "IDBI Bank",
    rating: 0,
    status: "Probable",
    isOpen: false,
    distance: "0.2 kms",
    icons: [FaMale, FaFemale, FaRestroom]
  },
  {
    name: "Subway",
    rating: 0,
    status: "Probable",
    isOpen: true,
    distance: "0.3 kms",
    icons: [FaMale, FaFemale, FaRestroom, FaWheelchair, FaBabyCarriage]
  }
]; 