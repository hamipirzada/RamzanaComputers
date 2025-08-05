import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-r from-navy-500/90 to-teal-500/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-teal-500" />
              <span className={`text-xl font-bold transition-colors duration-200 ${
                isScrolled ? 'text-teal-500' : 'text-white'
              }`}>
                Ramzana Computers
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? `text-gray-700 hover:text-teal-500 ${location.pathname === link.href ? 'text-teal-500 font-semibold' : ''}`
                        : `text-white hover:text-teal-200 ${location.pathname === link.href ? 'text-teal-200 font-semibold' : ''}`
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-teal-500' : 'text-white hover:text-teal-200'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 transition-colors duration-200 ${
                    location.pathname === link.href ? 'text-teal-500 font-semibold bg-gray-50' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-navy-500 to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-6 w-6 text-teal-300" />
                <span className="text-lg font-bold text-teal-300">
                  Ramzana Computers
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Transform Your Career with Professional Training in Jammu & Kashmir
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-gray-300 hover:text-teal-300 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Duroo Sopore Tehsil – Dangerpora</p>
                <p>District Baramulla, J&K</p>
                <p>Phone: 7006487735</p>
                <p>Email: rcinstitute2022@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Monitor className="h-5 w-5 text-teal-300" />
              <span className="text-base font-bold text-teal-300">
                Ramzana Computers
              </span>
            </div>
            <p className="text-gray-400 text-xs">
              © 2025 Ramzana Computers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;