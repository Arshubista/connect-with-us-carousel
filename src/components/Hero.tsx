
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
                <div className="text-estate-dark">Property Type</div>
                <ChevronDown size={18} className="text-gray-400" />
              </div>
              
              {/* Bedrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <div className="text-estate-dark">Bedrooms</div>
                <ChevronDown size={18} className="text-gray-400" />
              </div>
              
              {/* Bathrooms */}
              <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[150px]">
                <div className="text-estate-dark">Bathrooms</div>
                <ChevronDown size={18} className="text-gray-400" />
              </div>
              
              {/* Price Range */}
              <div className="flex items-center">
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[80px]">
                  <div className="text-estate-dark">$</div>
                  <ChevronDown size={18} className="text-gray-400 ml-2" />
                </div>
                <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-between min-w-[120px]">
                  <div className="text-estate-dark">Price</div>
                  <ChevronDown size={18} className="text-gray-400 ml-2" />
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

export default Hero;
