import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface City {
  id: number;
  name: string;
  image: string;
  properties: number;
}

const cities: City[] = [
  {
    id: 1,
    name: "Clovis",
    image:
      "/upload/cityimage/Clovis.png",
    properties: 234,
  },
  {
    id: 2,
    name: "Madera",
    image:
      "/upload/cityimage/Madera.png",
    properties: 156,
  },
  {
    id: 3,
    name: "Fresno",
    image:
      "/upload/cityimage/Fresno.png",
    properties: 97,
  },
  {
    id: 4,
    name: "Chowchila",
    image:
      "/upload/cityimage/Chowchila.png",
    properties: 128,
  },
  {
    id: 5,
    name: "Coarsgold",
    image:
      "/upload/cityimage/Coarsgold.png",
    properties: 72,
  },
  {
    id: 6,
    name: "Oakhurst",
    image:
      "/upload/cityimage/Oakhurst.png",
    properties: 189,
  },
  {
    id: 7,
    name: "Kerman",
    image:
      "/upload/cityimage/Kerman.png",
    properties: 18,
  },
  {
    id: 8,
    name: "Sanger",
    image:
      "/upload/cityimage/Sanger.png",
    properties: 1,
  },
  {
    id: 9,
    name: "Visalia",
    image:
      "/upload/cityimage/Visalia.png",
    properties: 3,
  },
];

const CityCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cities.length / itemsPerPage));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(cities.length / itemsPerPage)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(cities.length / itemsPerPage) - 1
        : prevIndex - 1
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-6">
          Find Neighborhoods in These Cities
        </h2>

        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({
              length: Math.ceil(cities.length / itemsPerPage),
            }).map((_, index) => (
              <div key={index} className="flex w-full flex-shrink-0">
                {cities
                  .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
                  .map((city) => (
                    <div
                      key={city.id}
                      className={`w-full p-2 ${
                        itemsPerPage === 3
                          ? "md:w-1/3"
                          : itemsPerPage === 2
                          ? "sm:w-1/2"
                          : "w-full"
                      }`}
                    >
                      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-fill"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-10"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg md:text-xl font-bold">
                            {city.name}
                          </h3>
                          <p className="text-white/80">
                            {city.properties} Properties
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CityCarousel;
