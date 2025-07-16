import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mario Rivera',
    role: 'Founder & CEO',
    image: '/upload/Mario Rivera.png',
    bio: 'Maria founded Trigo with a vision to transform the real estate experience. With over 15 years in luxury real estate, she has developed a reputation for her integrity, expertise, and personalized approach.',
    specialties: ['Luxury Properties', 'Commercial Real Estate', 'Investment Properties']
  },
  {
    id: 2,
    name: 'Michael Rivera',
    role: 'Chief Operating Officer',
    image: '/upload/Michael Rivera.png',
    bio: 'Michael oversees daily operations at Trigo, ensuring excellence in every client interaction. His background in finance and real estate development brings valuable insights to our strategic planning.',
    specialties: ['Urban Development', 'Market Analysis', 'Property Valuation']
  },
  {
    id: 3,
    name: 'Maria Sandoval Rivera',
    role: 'Head of Sales',
    image: '/upload/Maria Sandoval Rivera.png',
    bio: 'Mario leads our sales team with passion and dedication. His extensive knowledge of property markets and negotiation skills has helped countless clients find their perfect properties at optimal prices.',
    specialties: ['Residential Sales', 'Client Relations', 'Negotiation']
  },
  // {
  // //   id: 4,
  //   name: 'Alexandra Kim',
  //   role: 'Marketing Director',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1761&q=80',
  //   bio: 'Alexandra brings creativity and strategic thinking to our marketing efforts. Her innovative campaigns have significantly enhanced our brand visibility and client engagement.',
  //   specialties: ['Digital Marketing', 'Brand Strategy', 'Content Creation']
  // },
  // {
  //   id: 5,
  //   name: 'David Thompson',
  //   role: 'Senior Real Estate Agent',
  //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
  //   bio: 'David has an exceptional track record in matching clients with their ideal properties. His attention to detail and understanding of client needs make him a valuable asset to our team.',
  //   specialties: ['Luxury Homes', 'Waterfront Properties', 'Client Matching']
  // },
  // {
  //   id: 6,
  //   name: 'Sophia Patel',
  //   role: 'Client Relations Manager',
  //   image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80',
  //   bio: 'Sophia ensures our clients receive the highest level of service throughout their real estate journey. Her warm personality and problem-solving abilities have earned her numerous client accolades.',
  // //   specialties: ['Customer Service', 'Process Optimization', 'Client Satisfaction']
  // }
];

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <Link to="/" className="flex items-center text-estate-muted hover:text-estate-blue transition-colors">
                Home <ChevronRight size={16} className="mx-2" /> Team
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-estate-dark mb-6">Meet Our Exceptional Team</h1>
            <p className="text-estate-muted max-w-2xl mb-8">
              Our dedicated team of real estate professionals is committed to providing you with exceptional service and expertise in finding your perfect property.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-estate-dark">{member.name}</h3>
                  <p className="text-estate-blue mb-4">{member.role}</p>
                  <p className="text-estate-muted mb-4">{member.bio}</p>
                  
                  <div>
                    <h4 className="font-medium text-estate-dark mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="bg-estate-blue/10 text-estate-blue text-xs px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-estate-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Our team is ready to help you find the perfect property that meets all your needs and preferences.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-estate-blue hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
