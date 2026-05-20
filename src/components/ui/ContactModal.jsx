import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    message: ''
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form and close
    setFormData({
      firstName: '', lastName: '', jobTitle: '', company: '',
      email: '', country: '', phone: '', message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl relative my-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-800">
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name <span className="text-red-400">*</span></label>
                      <input
                        type="text" id="firstName" name="firstName" required
                        value={formData.firstName} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name <span className="text-red-400">*</span></label>
                      <input
                        type="text" id="lastName" name="lastName" required
                        value={formData.lastName} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="jobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                      <input
                        type="text" id="jobTitle" name="jobTitle"
                        value={formData.jobTitle} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium text-slate-300">Company/Institution Name <span className="text-red-400">*</span></label>
                      <input
                        type="text" id="company" name="company" required
                        value={formData.company} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Email <span className="text-red-400">*</span></label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="country" className="text-sm font-medium text-slate-300">Country <span className="text-red-400">*</span></label>
                    <input
                      type="text" id="country" name="country" required
                      value={formData.country} onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"

                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Please tell us a bit about your needs. <span className="text-red-400">*</span></label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={formData.message} onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                    <Button type="button" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white shadow-lg shadow-teal-500/20 active:scale-95 transition-all">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
