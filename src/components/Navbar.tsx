
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../image/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking on links
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation items
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/process', label: 'Process' },
    { href: '/teams', label: 'Teams' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2  text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+977-980-230-1091" 
              className="flex items-center space-x-1 hover:text-accent transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-3 h-3" />
              <span>+977-980-230-1091</span>
            </a>
            <a 
              href="mailto:info@ntcs.com.np" 
              className="flex items-center space-x-1 hover:text-accent transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-3 h-3" />
              <span>info@ntcs.com.np</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Leading IT Solutions Provider in Nepal</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className=""
              aria-label="NTCS Home"
            >
             <img src={Logo} alt="logo" className='h-10'/>
            </Link>
            <div className="hidden sm:block ml-2 text-sm text-accent">
              <div>New Tech</div>
              <div>Consultancy Services</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-200 relative ${
                  location.pathname === item.href ? 'text-primary font-medium' : ''
                }`}
                onClick={closeMenu}
              >
                {item.label}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-primary"></div>
                )}
              </Link>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu lg:hidden ${isOpen ? 'open' : ''}`}>
          <div className="py-4 space-y-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors ${
                  location.pathname === item.href ? 'text-primary font-medium bg-gray-50' : ''
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
