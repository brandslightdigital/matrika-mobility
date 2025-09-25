import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Thank you for your message. We will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#ffb900]">
            Contact Our Team
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
"Experience the Finest in Mobility. Our team is at your service round-the-clock to handle every Ground transport travel requirement.”
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#ffb900] to-amber-600 p-4 sm:p-6">
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Send Us a Message</h2>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ffb900] focus:ring-2 focus:ring-[#ffb900]/50 transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ffb900] focus:ring-2 focus:ring-[#ffb900]/50 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ffb900] focus:ring-2 focus:ring-[#ffb900]/50 transition-all"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#ffb900] focus:ring-2 focus:ring-[#ffb900]/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate Services 200+ Cities</option>
                    <option value="airport">Airport Transportation</option>
                    <option value="outstation">Outstation Services</option>
                    <option value="city">Cities Drive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ffb900] focus:ring-2 focus:ring-[#ffb900]/50 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#ffb900] to-amber-600 text-white py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-[#ffb900]/20"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-2 border-white border-t-transparent"></div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#ffb900] to-amber-600 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h2>
              </div>
              <div className="p-4 sm:p-6 md:p-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-[#ffb900] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Phone Support</h3>
                    <p className="text-base sm:text-lg text-amber-400 font-medium mb-1 sm:mb-2">+91 7011438890</p>
                    <p className="text-sm sm:text-base text-gray-400">24x7 emergency support available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-[#ffb900] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-base sm:text-lg text-amber-400 font-medium mb-1 sm:mb-2">Sales@matrikamobilities.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-[#ffb900] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Corporate Office</h3>
                    <p className="text-base sm:text-lg text-amber-400 font-medium mb-1">F 61, Jawahar Park, Khanpur Deoli Road</p>
                    <p className="text-sm sm:text-base text-gray-400 mb-1">New Delhi, India 110062.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb900] mb-1">200+</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfied Clients</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb900] mb-1">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Premium Vehicles</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb900] mb-1">24x7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffb900] mb-1">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}