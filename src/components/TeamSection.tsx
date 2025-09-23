import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mario Rivera",
    role: "Chief Executive Officer and Managing Branch Broker",
    image: "/upload/Mario Rivera.png",
  },
  {
    id: 2,
    name: "Michael Rivera",
    role: "Operational Manager",
    image: "/upload/Michael Rivera.png",
  },
  {
    id: 3,
    name: "Maria Sandoval Rivera",
    role: "Business Development Broker",
    image: "/upload/Maria Sandoval Rivera.png",
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Store the current value of sectionRef in a variable
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text on the left */}
        <div className="w-full md:w-1/2 md:pr-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-6">
            Our dedicated team combines years of experience and a passion for
            real estate. We work together to help you find the perfect property
            and provide exceptional service every step of the way.
          </p>
          <div className="mt-6">
            <Link
              to="/team"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Meet Us
            </Link>
          </div>
        </div>
        {/* Image on the right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/upload/team pic.png"
            alt="team"
            className="rounded-xl shadow-lg max-w-xs md:max-w-sm w-full"
          />
        </div>
      </div>

      <div
        ref={sectionRef}
        className={`py-20 container mx-auto px-4 fade-up ${
          isVisible ? "in-view" : ""
        }`}
      >
        <div className="text-center mb-12">
          {/* Updated "OUR TEAM" Text */}
          {/* <h2 className="inline-block px-3 py-1 bg-estate-blue/10 text-estate-blue rounded-full text-2xl md:text-2xl font-bold mb-3">
            OWNER
          </h2> */}
          <h3 className="text-5xl md:text-4xl font-bold text-estate-dark mb-4">
            Meet Our Leadership
          </h3>
          <p className="text-estate-muted max-w-2xl mx-auto">
            Guided by expertise and passion, our leadership team is committed to
            finding you the perfect property.
          </p>
        </div>

        {/* Grid View for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                  onError={(e) => {
                    // Fallback to a local placeholder if image fails
                    if (
                      !e.currentTarget.src.endsWith("/placeholder-user.png")
                    ) {
                      e.currentTarget.src = "/upload/placeholder-user.png";
                    }
                  }}
                  loading="lazy"
                  aria-label={`Image of ${member.name}`}
                />
              </div>

              {/* Member Details */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-estate-dark">
                  {member.name}
                </h4>
                <p className="text-estate-muted mb-4">{member.role}</p>
                <Link
                  to={`/team/${member.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-estate-blue text-white rounded-full hover:bg-estate-darkblue transition-colors"
                >
                  Get to Know Me <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Meet the Entire Team Link */}
        <div className="mt-12 text-center">
          <Link
            to="/team"
            className="inline-flex items-center text-estate-blue hover:text-estate-darkblue font-medium transition-colors"
          >
            Meet the entire team <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
