import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    name: "Mario Rivera",
    role: "Chief Executive Officer and Managing Branch Broker",
    image: "/upload/Mario Rivera.png",
    bio: "Mario's real estate journey began over a decade ago, driven by a strong work ethic and a deep commitment to excellence. As the founder and co-owner of Ignite Real Estate & Associates and the Madera Real Branch, he has successfully built and led a high-performing team by equipping them with the tools, knowledge, and strategies needed to thrive in today’s market. Known for his sharp negotiation skills, Mario consistently delivers exceptional results for his clients, advocating fiercely on their behalf to ensure smooth and successful transactions. His in-depth understanding of the California Central Valley region, paired with his extensive industry experience, gives his clients a distinct advantage whether they are buying or selling. Outside of real estate, Mario is passionate about giving back—he generously volunteers his time to local community organizations, reflecting his genuine dedication to the people and neighborhoods he serves.",
    specialties: [
      "Luxury Properties",
      "Commercial Real Estate",
      "Investment Properties",
    ],
  },
  {
    id: 2,
    name: "Michael Rivera",
    role: "Operational Manager",
    image: "/upload/Michael Rivera.png",
    bio: "Michael is passionate about staying informed and sharing knowledge, ensuring that both clients and agents feel confident and well-supported throughout the entire process. When not working directly with clients, he operates behind the scenes—managing compliance, coordinating transactions, and handling the details that keep everything running smoothly. With a commitment to both service and efficiency, he plays a vital role in creating a seamless real estate experience.",
    specialties: ["Urban Development", "Market Analysis", "Property Valuation"],
  },
  {
    id: 3,
    name: "Maria Sandoval Rivera",
    role: "Business Development Broker",
    image: "/upload/Maria Sandoval Rivera.png",
    bio: `With over 20 years of experience, she is a trusted Real Estate Broker known for her precision, professionalism, and commitment to results. She expertly represents buyers and sellers in Luxury, Residential, Probate, Divorce, Foreclosures, Commercial, Agricultural, and Distressed Property transactions, delivering excellence at every stage.
Maria is especially recognized for her work in the luxury real estate sector, where her attention to detail, discretion, and elevated service make her a standout. Her strong background in contract negotiation and compliance ensures that every transaction is executed with clarity and legal precision.
As a respected contract auditor, trainer, and industry mentor, Maria has guided countless professionals in achieving their goals through education, accountability, and excellence. Her leadership continues to shape a higher standard in real estate.
From luxury estates to complex probate and foreclosure cases, Maria brings expertise and integrity, earning the trust of both her clients and peers.`,
    specialties: ["Residential Sales", "Client Relations", "Negotiation"],
  },
  {
    id: 4,
    name: "Jazette Drew",
    role: "Realtor",
    image: "/upload/james-carter.png",
    bio: "A dedicated realtor who makes real estate personal. She shows up for the big moments in her clients’ lives—just as she does when planning proposals or celebrating milestones with those she loves. With a background in procurement and design, Jazette brings strategy, creativity, and heart to every step of the journey. For her, it's never just another transaction—it’s your life, your home, and she’s committed to making sure it feels right from beginning to end. It’s an honor she doesn’t take lightly.",
    specialties: ["Commercial Sales", "Market Analysis", "Negotiation"],
  },
  {
    id: 5,
    name: "Branden Perdomo",
    role: "Realtor",
    image: "/upload/linda-nguyen.png",
    bio: "A trusted real estate professional serving California’s Central Valley, with a specialty in investment properties, commercial real estate, and first-time homebuyers. With deep expertise in the Fresno and Madera County markets, he offers tailored guidance backed by local insight and a client-first approach. Whether you’re expanding your portfolio or purchasing your very first home, he is committed to making the process smooth, strategic, and successful. Always professional, always proactive—and always just a call or text away.",
    specialties: [
      "Client Relations",
      "Transaction Management",
      "Communication",
    ],
  },
  {
    id: 6,
    name: "Celia Herrera",
    role: "Realtor",
    image: "/upload/carlos-ramirez.png",
    bio: "A skilled negotiator and trusted leader who thrives on finding solutions and getting things done. As a Central Valley market expert, Celia buyers make confident decisions backed by data, strategy, and personalized service. With a deep understanding of numbers, investments, and long-term value, she guides clients not only to buy a home but also to build generational wealth. Whether you're just starting or looking to grow, Celia is here to make your real estate journey a smart and successful one.",
    specialties: ["Foreclosures", "Probate", "Legal Compliance"],
  },
  {
    id: 7,
    name: "Travis Diarte",
    role: "Realtor",
    image: "/upload/priya-patel.png",
    bio: "A licensed real estate agent known for fiercely advocating on behalf of his clients and handling every transaction with care and determination. He understands that buying or selling a home is one of life’s most significant decisions, and he treats each experience with the respect it deserves. Clients trust Travis for his responsiveness, honesty, and persistence throughout the entire process. Committed to continuous growth, he stays educated and informed about the ever-changing market. For Travis, real estate isn’t just a job—it’s a passion and a promise to serve with integrity.",
    specialties: ["Marketing", "Brand Strategy", "Digital Campaigns"],
  },
  {
    id: 8,
    name: "Lucy Siong",
    role: "Marketing Director",
    image: "/upload/ethan-lee.png",
    bio: "Lucy holds a BA in Public Relations & Advertising and a Master's in Marketing. With experience in real estate and construction, she enhances the company's market presence by developing and implementing strategic marketing plans, managing advertising campaigns, and promoting the brokerage's brand identity.",
    specialties: ["Data Analysis", "Technology", "Market Insights"],
  },
];

const Team = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
              <Link
                to="/"
                className="flex items-center text-estate-muted hover:text-estate-blue transition-colors"
              >
                Home <ChevronRight size={16} className="mx-2" /> Team
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-estate-dark mb-6">
              Meet Our Exceptional Team
            </h1>
            <p className="text-estate-muted max-w-2xl mb-8">
              Our dedicated team of real estate professionals is committed to
              providing you with exceptional service and expertise in finding
              your perfect property.
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
                  <h3 className="text-xl font-bold text-estate-dark">
                    {member.name}
                  </h3>
                  <p className="text-estate-blue mb-4">{member.role}</p>
                  <div className="text-sm text-gray-700 mb-2">
                    {expandedId === member.id || member.bio.length < 180 ? (
                      <>
                        {member.bio}
                        {member.bio.length > 180 && (
                          <button
                            className="text-blue-600 ml-2 underline"
                            onClick={() => setExpandedId(null)}
                          >
                            Show less
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        {member.bio.slice(0, 180)}...
                        <button
                          className="text-blue-600 ml-2 underline"
                          onClick={() => setExpandedId(member.id)}
                        >
                          Read more
                        </button>
                      </>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-estate-dark mb-2">
                      Specialties:
                    </h4>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Our team is ready to help you find the perfect property that meets
            all your needs and preferences.
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
