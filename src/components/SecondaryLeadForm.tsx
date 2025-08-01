
import React, { useState, useEffect, useRef } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from 'lucide-react';

const SecondaryLeadForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription Successful",
        description: "You'll receive property updates for your selected city.",
      });
      setIsSubmitting(false);
      setFormData({
        email: '',
        city: '',
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-estate-dark text-white">
      <div 
        ref={formRef}
        className={`container mx-auto px-4 fade-up ${isVisible ? 'in-view' : ''}`}
      >
        <div className="text-center mb-10">
          <h2 className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm mb-3">
            SUBSCRIBE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on New Properties</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get notified about new listings, price changes, and market trends in your preferred city.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all text-white placeholder-white/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white/80 mb-1">Preferred City</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="" disabled>Select a city</option>
                  <option value="clovis">Clovis</option>
                  <option value="medera">Medera</option>
                  <option value="fresno">Fresno</option>
                  <option value="chowchila">Chowchila</option>
                  <option value="coarsgold">Coarsgold</option>
                  <option value="oakhrust">Oakhrust</option>
                  <option value="kerman">Karman</option>
                  <option value="sanger">Sanger</option>
                  <option value="visalia">Visalia</option>

                </select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-estate-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-center text-white/50 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLeadForm;
