import React, { useState, useEffect } from 'react';
import { Menu, X, Beaker, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page, href) => {
    setIsOpen(false);
    if (page) {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
    } else if (href) {
      // If it's a section link, we might need to go to home first then scroll,
      // but for simplicity, let's just go home and scroll
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Home', action: () => handleNavigate('home') },
    { name: 'Services',
       action: () => handleNavigate(null, '#services'),
          
      isDropdown: true,
      items: [
        { name: 'Lab Services', action: () => handleNavigate('Lab-services') },
      ]
     },
    { 
      name: 'Solutions', 
      isDropdown: true,
      items: [
        { name: 'Overview', action: () => handleNavigate(null, '#solutions') },
        { name: 'Preclinical Development', action: () => handleNavigate('preclinical') },
        { name: 'Early Phase Development', action: () => handleNavigate('early-phase') },
         
      ]
    },
    { name: 'Research', action: () => handleNavigate(null, '#research') },
    { name: 'About', action: () => handleNavigate(null, '#about') },
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
        <div 
          className="flex items-center gap-2.5 cursor-pointer" 
          onClick={() => handleNavigate('home')}
        >
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
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
            >
              <button
                onClick={link.isDropdown ? undefined : link.action}
                className="relative text-sm font-semibold text-slate-200 hover:text-teal-300 transition-colors duration-300 py-1.5 group flex items-center gap-1"
              >
                {link.name}
                {link.isDropdown && <ChevronDown className="w-4 h-4" />}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Desktop Dropdown */}
              {link.isDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-2"
                    >
                      {link.items.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setActiveDropdown(null);
                            item.action();
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-semibold shadow-md shadow-teal-500/10 hover:shadow-teal-500/25 active:scale-95 transition-all duration-300"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactModal'));
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-slate-950/95 to-primary-950/95 backdrop-blur-xl border-t border-slate-900/60 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-lg font-semibold text-slate-200 hover:text-teal-300 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-6 flex flex-col gap-2 mt-2"
                          >
                            {link.items.map((item) => (
                              <button
                                key={item.name}
                                onClick={item.action}
                                className="text-left text-slate-400 hover:text-teal-300 py-1.5 transition-colors font-medium"
                              >
                                {item.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={link.action}
                      className="w-full text-left text-lg font-semibold text-slate-200 hover:text-teal-300 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <Button
                className="w-full mt-2 bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-semibold shadow-lg shadow-teal-500/20 active:scale-95 transition-all"
                variant="primary"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent('openContactModal'));
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

