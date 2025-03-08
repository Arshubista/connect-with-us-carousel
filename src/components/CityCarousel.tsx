
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface City {
  id: number;
  name: string;
  image: string;
  properties: number;
}

const cities: City[] = [
  {
    id: 1,
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    properties: 234
  },
  {
    id: 2,
    name: 'Chicago',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    properties: 156
  },
  {
    id: 3,
    name: 'Orlando',
    image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    properties: 97
  },
  {
    id: 4,
    name: 'Seattle',
    image: 'https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
    properties: 128
  },
  {
    id: 5,
    name: 'Sarasota',
    image: 'https://images.unsplash.com/photo-1569303787068-b857a2463fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    properties: 72
  },
  {
    id: 6,
    name: 'Miami',
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80',
    properties: 189
  }
];

const CityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cities.length / itemsPerPage);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleResize = () => {
      // Reset to first page when screen size changes
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCities = () => {
    const start = currentIndex * itemsPerPage;
    return cities.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block px-3 py-1 bg-estate-blue/10 text-estate-blue rounded-full text-sm mb-3">
            FIND NEIGHBORHOODS IN THESE CITIES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-estate-dark mb-4">Discover Our Premium Locations</h3>
          <p className="text-estate-muted max-w-2xl mx-auto">
            Explore properties in some of the most vibrant and sought-after cities across the country.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-estate-blue hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-estate-blue hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cities.map((city) => (
                <div 
                  key={city.id} 
                  className="min-w-[33.333%] px-4 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <div className="city-card rounded-xl overflow-hidden shadow-lg h-[300px] relative group cursor-pointer">
                    <img 
                      src={city.image} 
                      alt={city.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-estate-dark to-transparent opacity-70 city-overlay transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                      <p className="text-white/80">{city.properties} Properties</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-estate-blue' : 'w-2 bg-gray-300'
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityCarousel;
