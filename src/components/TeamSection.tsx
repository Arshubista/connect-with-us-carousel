import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'COO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
  },
  {
    id: 3,
    name: 'Mario Rossi',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
  }
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
    <section className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 fade-up ${isVisible ? 'in-view' : ''}`}
      >
        <div className="text-center mb-12">
          {/* Updated "OUR TEAM" Text */}
          {/* <h2 className="inline-block px-3 py-1 bg-estate-blue/10 text-estate-blue rounded-full text-2xl md:text-2xl font-bold mb-3">
            OWNER
          </h2> */}
          <h3 className="text-5xl md:text-4xl font-bold text-estate-dark mb-4">Meet Our Leadership</h3>
          <p className="text-estate-muted max-w-2xl mx-auto">
            Guided by expertise and passion, our leadership team is committed to finding you the perfect property.
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
                    // Fallback image if the original fails to load
                    if (e.currentTarget.src !== 'https://via.placeholder.com/300') {
                      e.currentTarget.src = 'https://via.placeholder.com/300';
                    }
                  }}
                  loading="lazy"
                  aria-label={`Image of ${member.name}`}
                />
              </div>

              {/* Member Details */}
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-estate-dark">{member.name}</h4>
                <p className="text-estate-muted mb-4">{member.role}</p>
                <Link 
                  to="/team" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-estate-blue text-white rounded-full hover:bg-estate-darkblue transition-colors"
                >
                  Meet the Team <ChevronRight size={16} className="ml-1" />
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