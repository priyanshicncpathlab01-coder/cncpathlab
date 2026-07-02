import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

import slide1 from '../assets/images/earlyphase.webp';
import slide2 from '../assets/labimage.webp';
import slide3 from '../assets/images/slide3.png';

const slides = [
  {
    image: slide1,
    title: "CNC Path Lab",
    subtitle: "Pioneering Specialty Diagnostic & Biomarker Analysis Services",
    tagline: "Advancing Precision Medicine"
  },
  {
    image: slide2,
    title: "CNC Path Lab",
    subtitle: "World-Class Central Laboratory Solutions for Clinical Trials",
    tagline: "Scientific Excellence"
  },
  {
    image: slide3,
    title: "CNC Path Lab",
    subtitle: "High-Throughput Translational Research & Biospecimen Repository",
    tagline: "State-of-the-Art Precision"
  }
];

const PARALLAX_SPEED = 0.4; // Background moves at 40% of scroll speed

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const rafId = useRef(null);

  // Uses getBoundingClientRect so the offset is always relative to the viewport,
  // regardless of ancestor positioning or sticky navbars.
  const updateParallax = useCallback(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    // Only apply while the hero is intersecting the viewport
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      // rect.top is 0 when section top aligns with viewport top, negative while scrolled past.
      // Translating DOWN by (-rect.top * speed) makes the background move up more slowly
      // than the foreground, producing the parallax depth effect.
      const offset = -rect.top * PARALLAX_SPEED;
      bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    rafId.current = null;
  }, []);

  const handleScroll = useCallback(() => {
    // rAF acts as the throttle — only one frame scheduled at a time
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(updateParallax);
    }
  }, [updateParallax]);

  useEffect(() => {
    // Respect prefers-reduced-motion for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax(); // Set correct position if page is already scrolled on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll, updateParallax]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
    <section ref={sectionRef} className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Slideshow with Ken Burns + Parallax Effect */}
      {/* Extends 50% above/below the section so the background never exposes a gap
          while translating. At PARALLAX_SPEED=0.4 the max translate is ~40% of
          section height; 50% gives a comfortable safety margin on all screen sizes. */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0 z-0 overflow-hidden"
        style={{
          willChange: 'transform',
          top: '-50%',
          height: '200%',
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].subtitle}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-slate-950/85"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Typography overlay */}
      <div className="container-custom relative z-10 pt-20 flex flex-col items-center text-center justify-center h-full max-w-5xl mx-auto pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-teal-400/20 border border-teal-400/30 text-teal-300 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm shadow-teal-500/5">
              {slides[currentSlide].tagline}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6">
              CNC <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-teal-300 to-primary-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Path Lab</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl font-medium">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white shadow-lg shadow-teal-500/20 active:scale-95 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Bullet Indicators */}
        <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-teal-400 w-8 shadow-md shadow-teal-400/30'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>

      {/* Horizontal Contact Us CTA Glassmorphism */}
      <div className="w-full bg-slate-200 py-10 md:py-14">
        <div className="w-[92%] max-w-6xl mx-auto px-1">
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-primary-500 before:to-teal-400 before:rounded-t-2xl md:before:rounded-t-3xl overflow-hidden">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Connect With Our Specialists</h3>
              <p className="text-sm md:text-base text-slate-300">
                Ready to accelerate your specialty clinical studies? Speak with our diagnostic path lab experts.
              </p>
              {/* Contact details */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm text-slate-300 mt-4 font-medium">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>8588029096</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>info@cncpathlab.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>2E/21, Block E 2, Jhandewalan Extension, Karol Bagh, New Delhi, Delhi 110055</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Button
                size="lg"
                className="w-full lg:w-auto bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white font-bold shadow-lg shadow-teal-500/25 active:scale-95 transition-all duration-300"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openContactModal'));
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

