import React, { useState, useEffect } from 'react';
import { Menu, X, Beaker } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-950/90 via-primary-950/90 to-teal-950/90 backdrop-blur-lg py-3.5 shadow-lg border-b border-teal-500/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-tr from-primary-600 to-teal-500 p-2.5 rounded-xl shadow-lg shadow-primary-500/10">
            <Beaker className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            CNC <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-teal-300 ml-1.5 font-extrabold" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Path Lab</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-slate-200 hover:text-teal-300 transition-colors duration-300 py-1.5 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-semibold shadow-md shadow-teal-500/10 hover:shadow-teal-500/25 active:scale-95 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-200 hover:text-teal-300 transition-colors rounded-xl hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-950/95 to-primary-950/95 backdrop-blur-xl border-t border-slate-900/60 shadow-2xl p-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-slate-200 hover:text-teal-300 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="w-full mt-2 bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-semibold shadow-lg shadow-teal-500/20 active:scale-95 transition-all"
            variant="primary"
            onClick={() => {
              setIsOpen(false);
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

