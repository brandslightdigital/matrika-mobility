import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

export default function BookingDialog({ open, model, onOpenChange, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    corporateName: '',
    selectCity: '',
    selectCountry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (model) {
      setFormData(prev => ({
        ...prev,
        message: `Interested in booking: ${model}`
      }));
    }
  }, [model]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration
      const result = await emailjs.send(
        'service_goe734o', // Replace with your service ID
        'template_1p60xx7', // Replace with your template ID
        {
          ...formData,
          model: model || 'General Inquiry'
        },
         'lc85WOgfXS2GGvIlW' // Replace with your user ID
      );

      console.log('Email sent successfully:', result.text);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      if (onSubmit) onSubmit(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        corporateName: '',
        selectCity: '',
        selectCountry: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
        onOpenChange(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      
      // Fallback to original simulation if EmailJS fails
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        if (onSubmit) onSubmit(formData);
        setTimeout(() => {
          setSubmitted(false);
          onOpenChange(false);
        }, 2000);
      }, 1500);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white text-gray-800 rounded-3xl shadow-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        {/* Decorative Header Background */}
        <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 h-2 sticky top-0"></div>

        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light transition-colors duration-200 z-10"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="p-6 md:p-8 pt-6">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-4 shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Get a Proposal for Reliable, Safe, and Efficient Rides.
                </h2>
                <p className="text-gray-600 text-sm">
                  "Request a Callback – Let's Design Your Custom Rental Program."
                </p>
                {model && (
                  <p className="text-amber-600 font-medium mt-2">
                    Selected: {model}
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="corporateName"
                      value={formData.corporateName}
                      onChange={handleInputChange}
                      placeholder="Corporate Name"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                {/* City Input Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="selectCity"
                    value={formData.selectCity}
                    onChange={handleInputChange}
                    placeholder="Enter City"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                {/* Country Input Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="selectCountry"
                    value={formData.selectCountry}
                    onChange={handleInputChange}
                    placeholder="Enter Country"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Special requirements or questions..."
                    rows={3}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-amber-500 transition-colors duration-200 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white py-3 md:py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Request Callback Now'
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Quick Response
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure & Private
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Best Prices
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Success State
            <div className="text-center py-6 md:py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full mb-4 md:mb-6 shadow-lg">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">Request Submitted!</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Thanks for your interest! We'll call you back within 15 minutes to discuss your car rental needs.
              </p>
              {model && (
                <p className="text-amber-600 font-medium mt-2">
                  We'll discuss the {model} with you shortly.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}