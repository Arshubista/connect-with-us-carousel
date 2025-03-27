import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nonScrolledColor = isHomePage ? "text-white" : "text-black";
  const scrolledColor = "text-black";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Team', to: '/team' },
    { label: 'Property', to: '/property' }, // ✅ Fix route name here
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md py-2'
          : 'bg-white/10 backdrop-blur-lg border-b border-white/10 py-4'
      )}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/upload/logo.png"
              alt="Trigo Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`${isScrolled ? scrolledColor : nonScrolledColor
                  } font-medium hover:text-estate-blue transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+14084497257"
              className="flex items-center bg-estate-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-estate-darkblue transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white/30 backdrop-blur-lg border-t border-white/10 shadow-lg animate-fade-in"
          style={{
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-estate-dark font-medium hover:text-estate-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+14084497257"
                className="flex items-center bg-estate-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-estate-darkblue transition-colors w-fit"
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
