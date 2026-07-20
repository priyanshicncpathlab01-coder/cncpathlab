'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from '@/lib/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
const labLogo = '/assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path, href) => {
    setIsOpen(false);
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (href) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', action: () => handleNavigate('/') },
    { name: 'Services',
       action: () => handleNavigate(null, '#services'),
      isDropdown: true,
      items: [
        { name: 'Lab Services', action: () => handleNavigate('/lab-services') },
      ]
     },
    { 
      name: 'Solutions', 
      isDropdown: true,
      items: [
        { name: 'Overview', action: () => handleNavigate(null, '#solutions') },
        { name: 'Preclinical Development', action: () => handleNavigate('/preclinical') },
        { name: 'Early Phase Development', action: () => handleNavigate('/early-phase') },
      ]
    },
    {
      name: 'Genomics',
      isDropdown: true,
      items: [
        { name: 'Whole Genome Sequencing', action: () => handleNavigate('/whole-genome-sequencing') },
        { name: 'Whole Exome Sequencing', action: () => handleNavigate('/whole-exome-sequencing') },
        { name: 'Whole Plasmid Sequencing', action: () => handleNavigate('/whole-plasmid-sequencing') },
        { name: '10x Genomics Visium HD', action: () => handleNavigate('/visium-hd') },
        { name: 'Solid Tumor Panel', action: () => handleNavigate('/solid-tumor-panel') },
      ]
    },
    { name: 'About Us', action: () => handleNavigate('/about') },
  ];

  return (
    <nav
      className={`fixed top-2 sm:top-3 lg:top-4 inset-x-2 sm:inset-x-4 lg:inset-x-6 z-50 py-3 border transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-3xl border-white/60 rounded-3xl shadow-[0_12px_45px_rgba(15,23,42,0.08)]'
          : 'bg-transparent backdrop-blur-none border-transparent rounded-none shadow-none'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center shrink-0 cursor-pointer"
          onClick={() => handleNavigate('/')}
        >
          {/* Height tiers are mutually exclusive ranges so cascade order can't matter.
              The 768-799px band stays small: anything taller widens the logo enough to
              squeeze the nav links below their natural width and wrap them. */}
          <img
            src={labLogo}
            alt="CNC Path Lab Logo"
            className="h-14 min-[640px]:max-[768px]:h-[72px] min-[768px]:max-[800px]:h-[48px] min-[800px]:max-[1024px]:h-[65px] min-[1024px]:max-[1536px]:h-[88px] min-[1536px]:h-[100px] w-auto object-contain transition-all duration-300"
          />
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
                className={`relative text-sm font-semibold transition-colors duration-300 py-1.5 group flex items-center gap-1 ${
                  isScrolled
                    ? 'text-slate-900 hover:text-teal-600'
                    : 'text-white hover:text-teal-200 [text-shadow:0_1px_6px_rgba(15,23,42,0.6)]'
                }`}
              >
                {link.name}
                {link.isDropdown && <ChevronDown className="w-4 h-4" />}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
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
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg border border-slate-200/80 rounded-xl shadow-xl shadow-slate-900/10 overflow-hidden py-2"
                    >
                      {link.items.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setActiveDropdown(null);
                            item.action();
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-100 transition-colors"
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
          className={`md:hidden p-2 transition-colors rounded-xl ${
            isScrolled
              ? 'text-slate-900 hover:text-teal-600 hover:bg-slate-900/5'
              : 'text-white hover:text-teal-200 hover:bg-white/10 drop-shadow-[0_1px_4px_rgba(15,23,42,0.6)]'
          }`}
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
            className="md:hidden absolute top-full left-0 mt-2 w-full bg-white/95 backdrop-blur-lg border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between text-lg font-semibold text-slate-900 hover:text-teal-600 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-slate-900/5"
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
                                className="text-left text-slate-600 hover:text-teal-600 py-1.5 transition-colors font-medium"
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
                      className="w-full text-left text-lg font-semibold text-slate-900 hover:text-teal-600 px-3 py-2 rounded-xl transition-all duration-200 hover:bg-slate-900/5"
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