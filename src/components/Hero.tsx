
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2244&q=80" 
          alt="Aerial city view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Search Bar - Updated to match image */}
          <div className="bg-white rounded-full shadow-lg w-full max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-wrap md:flex-nowrap items-center">
              {/* Location Input */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center min-w-[250px]">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you looking for?"
                  className="w-full outline-none text-estate-dark"
                />
              </div>
              
              {/* Property Type */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[200px]">
                <PropertyTypeDropdown />
              </div>
              
              {/* Bedrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <BedroomsDropdown />
              </div>
              
              {/* Bathrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <BathroomsDropdown />
              </div>
              
              {/* Price Range */}
              <div className="flex items-center">
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[80px]">
                  <CurrencyDropdown />
                </div>
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[120px]">
                  <PriceDropdown />
                </div>
              </div>
              
              {/* Search Button */}
              <div className="p-2 md:p-0">
                <button className="bg-estate-dark hover:bg-estate-dark/90 text-white p-4 rounded-full transition-colors duration-300">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up text-center mt-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase">
              Find Neighborhoods in These Cities
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const PropertyTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Property Type");

  const propertyTypes = [
    "Office",
    "Loft",
    "Land",
    "Residential",
    "Rental",
    "Commercial",
    "Vacant Land",
    "Income",
    "Waterfront",
    "Villa",
  ];

  return (
    <div className="relative flex-1 px-6 py-4 border-gray-200 rounded-md min-w-[200px]">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-estate-dark">{selectedType}</span>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2 z-10 max-h-48 overflow-y-auto">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedType(type);
                setIsOpen(false);
              }}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BedroomsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState("Bedrooms");

  const bedroomOptions = [
    "1+",
    "2+",
    "3+",
    "4+",
    "5+",
    "6+",
    "7+",
    "8+",
    "9+",
    "10+",
  ];

  return (
    <div className="relative flex-1 px-6 py-4 border-gray-200 rounded-md min-w-[150px]">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-estate-dark">{selectedBedrooms}</span>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2 z-10 max-h-48 overflow-y-auto">
          {bedroomOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedBedrooms(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BathroomsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBathrooms, setSelectedBathrooms] = useState("Bathrooms");

  const bathroomOptions = [
    "1+",
    "2+",
    "3+",
    "4+",
    "5+",
    "6+",
    "7+",
    "8+",
    "9+",
    "10+",
  ];

  return (
    <div className="relative flex-1 px-6 py-4 border-gray-200 rounded-md min-w-[150px]">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-estate-dark">{selectedBathrooms}</span>
        <ChevronDown size={18} className="text-gray-400" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-gray-150 rounded-md shadow-md mt-2 z-10 max-h-48 overflow-y-auto">
          {bathroomOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedBathrooms(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("$");

  const currencyOptions = [
    { symbol: "$", label: "USD" },
    { symbol: "£", label: "GBP" },
    { symbol: "€", label: "EUR" },
  ];

  return (
    <div className="relative flex-1 px-6 py-4 gray-200 rounded-md min-w-[200
    px]">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-estate-dark">{selectedCurrency}</span>
        <ChevronDown size={18} className="text-gray-400 ml-2" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2 z-10">
          {currencyOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => {
                setSelectedCurrency(option.symbol);
                setIsOpen(false);
              }}
            >
              {option.symbol} <span className="ml-2 text-gray-500">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const PriceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Price");

  const priceOptions = [
    "10,000+",
    "20,000+",
    "30,000+",
    "40,000+",
    "50,000+",
    "60,000+",
    "70,000+",
    "80,000+",
    "90,000+",
    "100,000+",
  ];

  return (
    <div className="relative flex-1 px-6 py-4 border-gray-200 rounded-md min-w-[15
    0px]">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-estate-dark">{selectedPrice}</span>
        <ChevronDown size={18} className="text-gray-400 ml-2" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2 z-10 max-h-48 overflow-y-auto">
          {priceOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedPrice(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default Hero;
