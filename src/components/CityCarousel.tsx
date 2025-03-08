
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

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid layout for city cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div key={city.id} className="city-card rounded-xl overflow-hidden shadow-lg h-[220px] relative group cursor-pointer">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCarousel;
