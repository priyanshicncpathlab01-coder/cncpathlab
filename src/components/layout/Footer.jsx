import React from 'react';
import { Beaker, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const handleNavigate = (e, page, href) => {
    e.preventDefault();
    if (page) {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
    } else if (href) {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div 
              className="flex items-center gap-2 mb-6 cursor-pointer"
              onClick={(e) => handleNavigate(e, 'home')}
            >
              <div className="bg-primary-600 p-2 rounded-lg">
                <Beaker className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                CNC Path Lab
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Advancing healthcare through precision diagnostics and specialized laboratory services. 
              Turning science into clinical solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400 transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><FaXTwitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><FaFacebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleNavigate(e, 'home')} className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => handleNavigate(e, null, '#services')} className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#solutions" onClick={(e) => handleNavigate(e, null, '#solutions')} className="hover:text-primary-400 transition-colors">Solutions</a></li>
              <li><a href="#research" onClick={(e) => handleNavigate(e, null, '#research')} className="hover:text-primary-400 transition-colors">Research</a></li>
              <li><a href="#about" onClick={(e) => handleNavigate(e, null, '#about')} className="hover:text-primary-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Specialty Lab Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Central Lab Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Genomics</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Bioanalysis</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Biospecimen Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                <span>123 Biotech Plaza, Science Park, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span>contact@cncpathlab.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>© {new Date().getFullYear()} CNC Path Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
