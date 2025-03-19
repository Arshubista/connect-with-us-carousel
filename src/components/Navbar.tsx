import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({isHomePage=false}:{isHomePage?:boolean}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nonScrolledColor = isHomePage ? "text-white" : "text-black";
  const scrolledColor = "text-black"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Trigo Logo" 
              className="h-10 w-auto" 
            />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className={`${isScrolled ? scrolledColor :nonScrolledColor} first-letter:font-medium hover:text-estate-blue transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/team" 
              className={`${isScrolled ? scrolledColor :nonScrolledColor} first-letter:font-medium hover:text-estate-blue transition-colors`}
            >
              Team
            </Link>
            <Link 
              to="/property" 
              className={`${isScrolled ? scrolledColor :nonScrolledColor} first-letter:font-medium hover:text-estate-blue transition-colors`}
            >
              Properties
            </Link>
            <Link 
              to="/" 
              className={`${isScrolled ? scrolledColor :nonScrolledColor} first-letter:font-medium hover:text-estate-blue transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/" 
              className={`${isScrolled ? scrolledColor :nonScrolledColor} first-letter:font-medium hover:text-estate-blue transition-colors`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+14084497257" 
              className="flex items-center bg-estate-blue text-white px-4 py-2 rounded hover:bg-estate-darkblue transition-colors"
            >
              <Phone size={16} className="mr-2" />
              <span>+1 408 449 7257</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-estate-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/team" 
                className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/property" 
                className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/" 
                className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/" 
                className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+11234567890" 
                className="flex items-center bg-estate-blue text-white px-4 py-2 rounded hover:bg-estate-darkblue transition-colors w-fit"
              >
                <Phone size={16} className="mr-2" />
                <span>+1 408 449 7257</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;