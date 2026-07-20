'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import Button from './Button';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria",
  "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia",
  "Ethiopia", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece",
  "Guatemala", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Malaysia",
  "Maldives", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco",
  "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saudi Arabia", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Turkmenistan",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleClose = () => {
    setSubmitError('');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://cncpathlab.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // Reset form and close
      setFormData({
        firstName: '', lastName: '', jobTitle: '', company: '',
        email: '', country: '', phone: '', message: ''
      });
      handleClose();
    } catch (err) {
      const message = err instanceof TypeError
        ? 'Unable to reach the server. Please check your connection and try again.'
        : err.message || 'Something went wrong. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
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
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-2xl relative my-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                <button
                  onClick={handleClose}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="firstName" name="firstName" required
                        value={formData.firstName} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="lastName" name="lastName" required
                        value={formData.lastName} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="jobTitle" className="text-sm font-medium text-slate-700">Job Title</label>
                      <input
                        type="text" id="jobTitle" name="jobTitle"
                        value={formData.jobTitle} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-sm font-medium text-slate-700">Company/Institution Name <span className="text-red-500">*</span></label>
                      <input
                        type="text" id="company" name="company" required
                        value={formData.company} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel" id="phone" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="country" className="text-sm font-medium text-slate-700">Country <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        id="country" name="country" required
                        value={formData.country} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none pr-10"
                      >
                        <option value="" disabled className="text-slate-400">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country} className="bg-white text-slate-900">
                            {country}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Please tell us a bit about your needs. <span className="text-red-500">*</span></label>
                    <textarea
                      id="message" name="message" required rows={4}
                      value={formData.message} onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </div>
                  )}

                  <div className="pt-4 flex justify-end gap-3 border-t border-slate-200">
                    <Button type="button" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary-600 to-teal-500 hover:from-primary-700 hover:to-teal-600 border-0 text-white shadow-lg shadow-teal-500/20 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
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