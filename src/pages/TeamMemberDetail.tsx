import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the import path as needed
import Footer from "../components/Footer"; // Adjust the import path as needed

// Simulated authentication check (replace with real auth logic)
const isAuthenticated = () => {
  // Example: check for a token in localStorage
  // return !!localStorage.getItem("authToken");
  return true; // Set to false to test redirect
};

const teamMembers = [
  {
    id: 1,
    name: "Mario Rivera",
    role: "Chief Executive Officer and Managing Branch Broker",
    image: "/upload/Mario Rivera.png",
    bio: "Mario's real estate journey began over a decade ago, driven by a strong work ethic and a deep commitment to excellence. As the founder and co-owner of Ignite Real Estate & Associates and the Madera Real Branch, he has successfully built and led a high-performing team by equipping them with the tools, knowledge, and strategies needed to thrive in today’s market. Known for his sharp negotiation skills, Mario consistently delivers exceptional results for his clients, advocating fiercely on their behalf to ensure smooth and successful transactions. His in-depth understanding of the California Central Valley region, paired with his extensive industry experience, gives his clients a distinct advantage whether they are buying or selling. Outside of real estate, Mario is passionate about giving back—he generously volunteers his time to local community organizations, reflecting his genuine dedication to the people and neighborhoods he serves.",
  },
  {
    id: 2,
    name: "Michael Rivera",
    role: "Operational Manager",
    image: "/upload/Michael Rivera.png",
    bio: "Michael is passionate about staying informed and sharing knowledge, ensuring that both clients and agents feel confident and well-supported throughout the entire process. When not working directly with clients, he operates behind the scenes—managing compliance, coordinating transactions, and handling the details that keep everything running smoothly. With a commitment to both service and efficiency, he plays a vital role in creating a seamless real estate experience.",
  },
  {
    id: 3,
    name: "Maria Sandoval Rivera",
    role: "Business Development Broker",
    image: "/upload/Maria Sandoval Rivera.png",
    bio: "With over 20 years of experience, she is a trusted Real Estate Broker known for her precision, professionalism, and commitment to results. She expertly represents buyers and sellers in Luxury, Residential, Probate, Divorce, Foreclosures, Commercial, Agricultural, and Distressed Property transactions, delivering excellence at every stage. Maria is especially recognized for her work in the luxury real estate sector, where her attention to detail, discretion, and elevated service make her a standout. Her strong background in contract negotiation and compliance ensures that every transaction is executed with clarity and legal precision. As a respected contract auditor, trainer, and industry mentor, Maria has guided countless professionals in achieving their goals through education, accountability, and excellence. Her leadership continues to shape a higher standard in real estate. From luxury estates to complex probate and foreclosure cases, Maria brings expertise and integrity, earning the trust of both her clients and peers.",
  },
];

const TeamMemberDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Secure route: redirect if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-32 text-center">
          <h2 className="text-4xl font-bold mb-8 text-red-600 drop-shadow">Team Member Not Found</h2>
          <Link to="/team" className="text-blue-700 underline text-lg font-semibold">Back to Team</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-blue-50 to-white min-h-[80vh] py-32 pt-44">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-20 px-4">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-3xl shadow-2xl border-4 border-blue-100 max-w-xs md:max-w-sm w-full bg-white transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-200 to-blue-400 opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none"></div>
            </div>
          </div>
          {/* Info */}
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-lg">
              {member.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-8">
              {member.role}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
              {member.bio}
            </p>
            <Link
              to="/team"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl font-bold text-xl shadow-xl hover:from-blue-800 hover:to-blue-600 transition"
            >
              &larr; Back to Team
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamMemberDetail;