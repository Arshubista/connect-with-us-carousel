
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
          alt="Aerial city view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-estate-dark/70 to-estate-dark/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <p className="text-white/90 text-lg md:text-xl mb-2 font-light tracking-wide">Discover Your Dream Property</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect Place in Prime Locations
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl font-light">
                Explore exclusive properties in the most desirable neighborhoods across major cities. Your journey to the perfect home starts here.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 flex items-center shadow-lg max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
              <button className="bg-estate-blue hover:bg-estate-darkblue text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium whitespace-nowrap">
                Find Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
