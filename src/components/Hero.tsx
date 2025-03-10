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
    <div ref={dropdownRef} className="relative flex-1 px-6 py-4 border-gray-200 rounded-md" style={{ minWidth }}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpenState(!openState)}
      >
        <span className="text-estate-dark">{selected}</span>
        <ChevronDown size={18} className="text-gray-400 ml-2" />
      </div>

      {openState && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2 z-10 max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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

const BEDROOM_OPTIONS = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+", "10+"];
const BATHROOM_OPTIONS = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+", "10+"];

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
          rc="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2244&q=80" 
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
          <div className="bg-white rounded-full shadow-lg w-full max-w-5xl mx-auto" 
               onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-wrap md:flex-nowrap items-center">
              {/* Location Input */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center min-w-[150px]">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where are you looking for?"
                  className="w-full outline-none text-estate-dark"
                  onClick={() => setActiveDropdown(null)}
                />
              </div>
              
              {/* Property Type */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[200px]">
                <Dropdown 
                  label="Property Type" 
                  options={PROPERTY_TYPES}
                  minWidth="200px"
                  onSelect={(val) => updateFilter('propertyType', val)}
                  isOpenOverride={activeDropdown === 'propertyType'}
                  onOpenChange={() => handleDropdownToggle('propertyType')}
                />
              </div>
              
              {/* Bedrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <Dropdown 
                  label="Bedrooms" 
                  options={BEDROOM_OPTIONS}
                  onSelect={(val) => updateFilter('bedrooms', val)}
                  isOpenOverride={activeDropdown === 'bedrooms'}
                  onOpenChange={() => handleDropdownToggle('bedrooms')}
                />
              </div>
              
              {/* Bathrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <Dropdown 
                  label="Bathrooms" 
                  options={BATHROOM_OPTIONS}
                  onSelect={(val) => updateFilter('bathrooms', val)}
                  isOpenOverride={activeDropdown === 'bathrooms'}
                  onOpenChange={() => handleDropdownToggle('bathrooms')}
                />
              </div>
              
              {/* Price Range */}
              <div className="flex items-center">
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[80px]">
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
                </div>
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[120px]">
                  <Dropdown 
                    label="Price" 
                    options={PRICE_OPTIONS}
                    minWidth="120px"
                    onSelect={(val) => updateFilter('price', val)}
                    isOpenOverride={activeDropdown === 'price'}
                    onOpenChange={() => handleDropdownToggle('price')}
                  />
                </div>
              </div>
              
              {/* Search Button */}
              <div className="p-2 md:p-0">
                <button 
                  className="bg-estate-dark hover:bg-estate-dark/90 text-white p-4 rounded-full transition-colors duration-300"
                  onClick={handleSearch}
                >
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 uppercase">
              Find Neighborhoods in These Cities
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;