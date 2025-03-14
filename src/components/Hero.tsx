import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

// Reusable dropdown component with click-outside detection
const Dropdown = ({ 
  label, 
  options, 
  minWidth = "150px",
  renderOption = (option) => option,
  onSelect,
  isOpenOverride,
  onOpenChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);
  const dropdownRef = useRef(null);
  
  // Use controlled open state if provided
  const openState = isOpenOverride !== undefined ? isOpenOverride : isOpen;
  const setOpenState = onOpenChange || setIsOpen;

  const handleSelect = (option) => {
    const value = typeof option === 'object' ? option.symbol || option.label : option;
    setSelected(value);
    setOpenState(false);
    if (onSelect) onSelect(option);
  };

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && openState) {
        setOpenState(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, openState, setOpenState]);

  return (
    <div ref={dropdownRef} className="relative flex-1 w-full md:w-auto" style={{ minWidth }}>
      <div
        className="flex items-center justify-between cursor-pointer bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300"
        onClick={() => setOpenState(!openState)}
      >
        <span className="text-sm text-gray-700">{selected}</span>
        <ChevronDown size={16} className="text-gray-500" />
      </div>

      {openState && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10 max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              {renderOption(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Constants extracted outside component to prevent recreation on render
const PROPERTY_TYPES = [
  "Office", "Loft", "Land", "Residential", "Rental", 
  "Commercial", "Vacant Land", "Income", "Waterfront", "Villa"
];

const BEDROOM_OPTIONS = ["0", "1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+","10+"];
const BATHROOM_OPTIONS = ["0", "1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+", "10+"];

const CURRENCY_OPTIONS = [
  { symbol: "$", label: "USD" },
  { symbol: "£", label: "GBP" },
  { symbol: "€", label: "EUR" }
];

const PRICE_OPTIONS = [
  "10,000+", "20,000+", "30,000+", "40,000+", "50,000+",
  "60,000+", "70,000+", "80,000+", "90,000+", "100,000+"
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    propertyType: null,
    bedrooms: null,
    bathrooms: null,
    currency: "$",
    price: null
  });
  
  // Track which dropdown is currently open, if any
  const [activeDropdown, setActiveDropdown] = useState(null);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    // Close any open dropdown when searching
    setActiveDropdown(null);
    console.log("Searching with:", { searchQuery, ...filters });
  };

  // Handler to manage dropdown open states
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
  };

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
      <div className="relative z-10 h-full flex flex-col items-center justify-center" 
           onClick={() => setActiveDropdown(null)}>
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Search Bar */}
          <div className="bg-white rounded-lg md:rounded-lg shadow-lg w-lg max-w-7xl mx-auto p-1" 
               onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row items-center gap-1">
              {/* Location Input */}
              <div className="flex-1 w-full md:w-auto flex items-center bg-gray-50 border border-gray-200 rounded-lg p-3">
                <MapPin size={20} className="text-gray-500 mr-" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you looking"
                  className="w- bg-transparent outline-none text-sm text-gray-700"
                  onClick={() => setActiveDropdown(null)}
                />
              </div>
              
              {/* Property Type */}
              <div className="flex-1 w-full md:w-auto">
                <Dropdown 
                  label="Property Type" 
                  options={PROPERTY_TYPES}
                  minWidth="150px"
                  onSelect={(val) => updateFilter('propertyType', val)}
                  isOpenOverride={activeDropdown === 'propertyType'}
                  onOpenChange={() => handleDropdownToggle('propertyType')}
                />
              </div>
              
              {/* Bedrooms */}
              <div className="flex-1 w-full md:w-auto">
                <Dropdown 
                  label="Bedrooms" 
                  options={BEDROOM_OPTIONS}
                  minWidth="120px"
                  onSelect={(val) => updateFilter('bedrooms', val)}
                  isOpenOverride={activeDropdown === 'bedrooms'}
                  onOpenChange={() => handleDropdownToggle('bedrooms')}
                />
              </div>
              
              {/* Bathrooms */}
              <div className="flex-1 w-full md:w-auto">
                <Dropdown 
                  label="Bathrooms" 
                  options={BATHROOM_OPTIONS}
                  minWidth="120px"
                  onSelect={(val) => updateFilter('bathrooms', val)}
                  isOpenOverride={activeDropdown === 'bathrooms'}
                  onOpenChange={() => handleDropdownToggle('bathrooms')}
                />
              </div>
              
              {/* Price Range */}
              <div className="flex-1 w-full md:w-auto flex items-center gap-1">
                <Dropdown 
                  label="$" 
                  options={CURRENCY_OPTIONS}
                  minWidth="80px"
                  renderOption={(option) => (
                    <div className="flex items-center">
                      {option.symbol} <span className="ml-2 text-gray-500">{option.label}</span>
                    </div>
                  )}
                  onSelect={(val) => updateFilter('currency', val.symbol)}
                  isOpenOverride={activeDropdown === 'currency'}
                  onOpenChange={() => handleDropdownToggle('currency')}
                />
                <Dropdown 
                  label="Price" 
                  options={PRICE_OPTIONS}
                  minWidth="120px"
                  onSelect={(val) => updateFilter('price', val)}
                  isOpenOverride={activeDropdown === 'price'}
                  onOpenChange={() => handleDropdownToggle('price')}
                />
              </div>
              
              {/* Search Button */}
              <div className="w-full md:w-auto">
                <button 
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full flex items-center justify-center transition-colors duration-300"
                  onClick={handleSearch}
                >
                  <Search size={25} className="mr-2" />
                  <span className="text-sm"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;