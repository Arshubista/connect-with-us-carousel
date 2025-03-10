import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/1920x1080/?city,night",
  "https://source.unsplash.com/random/1920x1080/?architecture",
  "https://source.unsplash.com/random/1920x1080/?buildings",
  "https://source.unsplash.com/random/1920x1080/?real-estate",
];

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const properties = ["Apartment", "House", "Office", "Villa", "Condo", "Townhouse"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProperties(
        properties.filter((property) =>
          property.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProperties([]);
    }
  }, [searchQuery]);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.img
          key={activeImage}
          src={images[activeImage]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-full shadow-lg w-full max-w-3xl mx-auto relative">
          <div className="flex items-center px-6 py-4">
            <MapPin size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties..."
              className="w-full outline-none text-gray-800"
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition">
              <Search size={20} />
            </button>
          </div>
          {/* Search Dropdown */}
          {isDropdownOpen && filteredProperties.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md mt-1 z-10">
              {filteredProperties.map((property, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchQuery(property)}
                >
                  {property}
                </div>
              ))}
            </div>
          )}
        </div>

        <h1 className="text-center text-3xl font-bold text-white mt-6 uppercase">
          Find Your Dream Property
        </h1>
      </div>
    </section>
  );
};

export default Hero;
