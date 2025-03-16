
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CityCarousel from '@/components/CityCarousel';
import LeadForm from '@/components/LeadForm';
import TeamSection from '@/components/TeamSection';
import SecondaryLeadForm from '@/components/SecondaryLeadForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      {/* Featured Cities */}
      <CityCarousel />
      
      {/* Lead Form Section */}
      <section 
  className="relative h-auto w-full overflow-hidden bg-cover bg-center bg-fixed py-20"
  style={{
    backgroundImage: `url('https://wpl28.realtyna.net/divi/wp-content/uploads/sites/9/2018/06/message-bg.jpg')`,
  }}
>
  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/50" /> */}

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="inline-block px-3 py-1 bg-estate-blue/30 text-estate-blue rounded-full text-sm mb-3">
                GET IN TOUCH
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-500 mb-4">
                Find Your Dream Home Today
              </h3>
              <p className="text-white mb-6">
                Whether you're looking for a new home, investment property, or commercial space, our expert team is ready to help you every step of the way.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-estate-blue/10 rounded-full p-1 mr-3 text-estate-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-500">Expert Guidance</h4>
                    <p className="text-white">Our team of experienced agents knows the market inside and out.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-blue/10 rounded-full p-1 mr-3 text-estate-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-500">Premium Locations</h4>
                    <p className="text-white">Access to exclusive properties in the most desirable neighborhoods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-estate-blue/10 rounded-full p-1 mr-3 text-estate-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-500">Personalized Experience</h4>
                    <p className="text-white">Tailored services to meet your specific real estate needs and preferences.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Secondary Lead Form */}
      <SecondaryLeadForm />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
