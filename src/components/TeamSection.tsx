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
    <section className="bg-white py-0">
      <div className="w-full flex items-center justify-center min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] p-0 m-0">
        <img
          src="/upload/team pic.png"
          alt="Our Team"
          className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover"
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100%",
            display: "block",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
          }}
        />
      </div>

      <div
        ref={sectionRef}
        className={`py-20 container mx-auto px-4 fade-up ${
          isVisible ? "in-view" : ""
        }`}
      >
        <div className="text-center mb-12">
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
