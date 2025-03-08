
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Form Submitted",
        description: "Thank you! We'll contact you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: 'residential',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-xl">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-estate-dark mb-2">Find Your Dream Property</h3>
        <p className="text-estate-muted mb-6">Fill out the form below and our experts will contact you</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-estate-dark mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-estate-dark mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-estate-dark mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-estate-dark mb-1">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="land">Land</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-estate-dark mb-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-estate-blue focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your property requirements..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-estate-blue hover:bg-estate-darkblue text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
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
              "Get Started"
            )}
          </button>
          
          <p className="text-xs text-center text-estate-muted mt-4">
            By submitting this form, you agree to our <a href="#" className="text-estate-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-estate-blue hover:underline">Terms of Service</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
