'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = ['Home', 'Menu', 'About', 'Location', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-warm-beige shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Navigation Bar */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className={`font-display text-2xl transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-coffee' : 'text-warm-beige'
            }`}
          >
            BREW & CO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`font-body transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-charcoal hover:text-coffee' 
                    : 'text-warm-beige hover:text-gold'
                } ${
                  pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'font-medium'
                    : ''
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-coffee' : 'bg-gold'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-coffee' : 
                isScrolled ? 'bg-charcoal' : 'bg-warm-beige'
              }`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 bg-coffee' : 
                isScrolled ? 'bg-charcoal' : 'bg-warm-beige'
              }`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-coffee' : 
                isScrolled ? 'bg-charcoal' : 'bg-warm-beige'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-warm-beige transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          style={{ top: '80px' }}
        >
          <div className="p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`text-lg font-body py-2 transition-colors ${
                    pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-coffee font-medium'
                      : 'text-charcoal hover:text-coffee'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 