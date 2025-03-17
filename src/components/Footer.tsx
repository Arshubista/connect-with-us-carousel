
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Trigo Logo" 
                className="h-10 w-auto" 
              />
            </Link>f
            <p className="text-white/70 leading-relaxed">
              We help you find the perfect property in prime locations across major cities. Your journey to the perfect home starts with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-estate-blue shrink-0 mt-1" size={18} />
                <span className="text-white/70">
                  123 Real Estate Ave<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-estate-blue shrink-0" size={18} />
                <a href="tel:+11234567890" className="text-white/70 hover:text-white transition-colors">
                  +1 (408) 449-7257
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-estate-blue shrink-0" size={18} />
                <a href="mailto:info@trigo.com" className="text-white/70 hover:text-white transition-colors">
                  info@trigo.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Neighborhoods
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/70">Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/70">
                Need urgent assistance?
              </p>
              <a href="tel:+11234567890" className="font-medium text-estate-blue hover:text-blue-400 transition-colors">
                Call our 24/7 hotline
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Trigo Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
