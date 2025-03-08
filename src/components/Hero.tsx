
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

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
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-1 flex items-center shadow-lg w-full max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-estate-dark/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for properties, neighborhoods, or cities..."
                className="w-full py-3 pl-10 pr-4 bg-transparent outline-none text-estate-dark"
              />
            </div>
            <button className="bg-estate-red hover:bg-estate-red/90 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium whitespace-nowrap">
              Find Properties
            </button>
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
