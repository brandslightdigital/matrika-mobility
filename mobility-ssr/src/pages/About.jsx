import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Award, Car, Clock, Star, ArrowRight, TrendingUp, Globe, Phone } from 'lucide-react';
import { usePopup } from '../components/PopupContext';
export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
   const { setShowPopup } = usePopup();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: TrendingUp },
    { label: 'Premium Vehicles', value: '50+', icon: Car },
    { label: 'Satisfied Clients', value: '10K+', icon: Users },
    { label: 'Cities Served', value: '25+', icon: Globe }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Safety',
      description: 'Advanced safety protocols, regular vehicle inspections, and certified professional chauffeurs ensure your complete peace of mind.'
    },
    {
      icon: Star,
      title: 'Luxury Redefined',
      description: 'Every journey is crafted to exceed expectations with attention to the finest details and personalized service excellence.'
    },
    {
      icon: Clock,
      title: 'Punctuality Promise',
      description: 'Time is precious. Our commitment to punctuality and reliability makes us your trusted mobility partner.'
    }
  ];

  const fleet = [
    {
      category: 'Executive Sedans',
      description: 'Mercedes-Benz S-Class, BMW 7 Series, Audi A8',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&h=800',
      features: ['Premium Leather', 'Climate Control', 'Privacy Glass', 'Wi-Fi Enabled']
    },
    {
      category: 'Luxury SUVs',
      description: 'Range Rover, Cadillac Escalade, Mercedes GLS',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=800',
      features: ['Spacious Interior', '7-Seater Options', 'Advanced Safety', 'Premium Sound']
    },
    {
      category: 'Sports Collection',
      description: 'Porsche 911, Ferrari Portofino, Lamborghini',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&h=800',
      features: ['High Performance', 'Exotic Experience', 'Special Events', 'VIP Treatment']
    }
  ];

  const team = [
    { 
      name: "Rajiv Sharma", 
      role: "Founder & CEO", 
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "20+ years in luxury transportation",
      expertise: "Strategic Leadership"
    },
    { 
      name: "Priya Patel", 
      role: "Operations Director", 
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "15+ years operations excellence",
      expertise: "Fleet Management"
    },
    { 
      name: "Amit Desai", 
      role: "Head Chauffeur", 
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      experience: "Certified professional driver",
      expertise: "Safety & Protocol"
    },
    { 
      name: "Neha Gupta", 
      role: "Client Experience", 
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      experience: "Premium hospitality background",
      expertise: "Customer Relations"
    }
  ];

   const handleBookNowClick = () => {
    setShowPopup(true);
    setOpen(false); // Close mobile menu if open
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&h=1200')",
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        ></div>
        
        <div className={`relative z-20 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium backdrop-blur-sm">
              Premium Mobility Since 2010
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
              MATRIKA
            </span>
            <br />
            <span className="text-white/90">MOBILITY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Redefining luxury transportation with unparalleled elegance, cutting-edge technology, and an unwavering commitment to excellence.
          </p>


        </div>

        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex gap-8 bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Core Values' },
              { id: 'fleet', label: 'Premium Fleet' },
              { id: 'team', label: 'Leadership' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-amber-500 text-amber-400' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        
        {/* Our Story */}
        {activeTab === 'story' && (
          <div className="animate-fadeIn">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      Our Legacy
                    </span>
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mb-8"></div>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Founded in 2010 with a singular vision to revolutionize luxury transportation, Matrika Mobility began as a boutique service with one premium sedan and an unwavering commitment to excellence.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  Today, we stand as the region's most prestigious mobility provider, trusted by Fortune 500 executives, celebrities, and discerning travelers who demand nothing less than perfection in their journey experience.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/20">
                    <div className="text-3xl font-bold text-amber-400 mb-2">2010</div>
                    <div className="text-gray-300">Founded</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/20">
                    <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                    <div className="text-gray-300">Premium Fleet</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&h=800" 
                  alt="Our Legacy" 
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Core Values */}
        {activeTab === 'values' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that drive our commitment to exceptional service and luxury experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Premium Fleet */}
        {activeTab === 'fleet' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Premium Fleet
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meticulously curated collection of the world's finest vehicles for every occasion.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {fleet.map((vehicle, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.category}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                        {vehicle.category}
                      </h3>
                      <p className="text-gray-400 mb-6">{vehicle.description}</p>
                      <div className="space-y-2">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leadership Team */}
        {activeTab === 'team' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Leadership Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet the visionaries behind Matrika Mobility's success and commitment to excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-amber-500 font-semibold mb-3">{member.role}</p>
                      <p className="text-sm text-gray-400 mb-2">{member.experience}</p>
                      <div className="text-xs text-gray-500 px-3 py-1 bg-gray-700/50 rounded-full inline-block">
                        {member.expertise}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience 
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Luxury?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Matrika Mobility for their premium transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
            onClick={handleBookNowClick}
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-amber-500/50 hover:border-amber-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-500/10">
              View Fleet
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}