import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectCountry: "",
    selectCity: "",
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
        selectCountry: "",
        selectCity: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen text-gray-900"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      {/* Hero / Banner Top */}
      <div className="py-16 md:py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contact <span className="text-amber-600">Our Team</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            "Experience the finest in mobility. Our team is at your service
            round-the-clock to handle every ground transport requirement."
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-linear-to-r from-amber-400 to-amber-600 p-4 sm:p-6">
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Send Us a Message
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-800 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all"
                      placeholder="+91 7011438890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Select City
                  </label>
                  <select
                    name="selectCity"
                    value={formData.selectCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all"
                  >
                    <option value="">Select City</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="lucknow">Lucknow</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Select Country
                  </label>
                  <select
                    name="selectCountry"
                    value={formData.selectCountry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all"
                  >
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="japan">Japan</option>
                    <option value="brazil">Brazil</option>
                    <option value="southafrica">South Africa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-white py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-amber-500/30"
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
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-linear-to-r from-amber-500 to-amber-600 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Contact Information
                </h2>
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      Phone Support
                    </h3>
                    <p className="text-base sm:text-lg text-amber-600 font-medium mb-1 sm:mb-2">
                      +91 7011438890
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      24x7 emergency support available
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-base sm:text-lg text-amber-600 font-medium mb-1 sm:mb-2">
                      sales@taxitribe.com
                    </p>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    Our Locations
                  </h3>

                  {/* Head Office */}
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-amber-600 font-medium mb-1">
                        Head Office
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        E-169, East of Kailash
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        New Delhi, India 110065
                      </p>
                    </div>
                  </div>

                  {/* Gurgaon Hub */}
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-amber-600 font-medium mb-1">
                        Gurgaon Hub
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        FF-7, Vyapar Kendra, Shushant Lok - I
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Gurugram 122002
                      </p>
                    </div>
                  </div>

                  {/* Noida Hub */}
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-amber-600 font-medium mb-1">
                        Noida Hub
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        Sector 143, Opposite Metro Station
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Noida 201303
                      </p>
                    </div>
                  </div>
                  {/* Banglore */}
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-amber-600 font-medium mb-1">
                        Mumbai
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        F-18 A Wing Express Zone Mall
                       
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                       Opp Western Highway Malad East ,  MUMBAI - 400097 INDIA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-500 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg text-amber-600 font-medium mb-1">
                        Banglore Hub
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-1">
                        10 kashinagara Amruthahalli, 
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        1st main Near Prakruthi Meadows Apartment, Byatarayanapura Bangalore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                  10k+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Satisfied Users
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Premium Vehicles
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                  24x7
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Support
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
