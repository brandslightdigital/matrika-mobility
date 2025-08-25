import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Clock, Star, Car, TrendingUp, Globe, ArrowRight, Phone } from 'lucide-react';
import BookingDialog from '../components/BookingCar';

// ABOUT PAGE — Polished content + same BookingDialog as Fleet
// - Replaced dummy copy with your real "Legacy" + "Values" content
// - Clean layout, subtle motion, image fallbacks
// - CTA uses the same BookingDialog component (no PopupContext needed here)

const FALLBACK = '/cars/placeholder.jpg';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [model, setModel] = useState('About Page Enquiry');

  useEffect(() => { setIsVisible(true); }, []);

  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: TrendingUp },
    { label: 'Premium Vehicles', value: '50+', icon: Car },
    // { label: 'Satisfied Clients', value: '10K+', icon: Users },
    { label: 'Cities Served', value: '25+', icon: Globe }
  ];

const fleet = [
  {
    category: 'Mercedes-Benz S-Class',
    description: 'Flagship luxury sedan with unmatched comfort.',
    image: '/cars/mercedes.avif',
    features: ['Executive seating', 'Advanced safety', 'Ambient lighting', 'Premium sound']
  },
  {
    category: 'BMW 7 Series',
    description: 'Full-size luxury sedan with lounge-like rear seats.',
    image: '/cars/7i.webp',
    features: ['Massage seats', 'Panoramic sunroof', 'Rear entertainment', 'Driver assistance tech']
  },
  {
    category: 'Toyota Fortuner',
    description: 'High-seating SUV with a commanding road presence.',
    image: '/cars/Fortuner.avif',
    features: ['7-seater options', '4x4 capability', 'Durable build', 'Spacious cabin']
  }
];


  // Real content you provided — edited for clarity/flow
  const legacy = [
    "Matrika Mobilities was born from a simple idea between few friends with over 20 years of experience each in car rentals, customer service, and banking, luxury transportation needed  honesty and transparency.",
    "In 2024, we launched with a single premium sedan and a relentless, hands-on work ethic. We weren't just founders; we were the chauffeurs, the detailers, and the service line, obsessed with perfecting every detail from the ground up.Our commitment to engineering flawless experiences, not just offering rides, quickly built our reputation.",
    "Today, we are one of the most trusted mobility provider for top-tier corporations, celebrities, and discerning travelers who demand perfection.",
    "Our elite fleet grew from that one sedan, but our core mission remains unchanged. To prove that the ultimate luxury isn't just the vehicle, but the perfection of the journey itself."
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Uncompromising Excellence',
      description: 'True luxury is flawless execution — from immaculate vehicles to intelligent route planning, we sweat the details.'
    },
    {
      icon: Clock,
      title: 'Relentless Reliability',
      description: 'Your peace of mind matters. Absolute punctuality and consistency are non‑negotiable.'
    },
    {
      icon: Star,
      title: 'Personalized Service',
      description: 'We anticipate needs and tailor every journey. Discreet, attentive, and quietly exacting.'
    },
    {
      icon: Users,
      title: 'Foundation of Trust',
      description: 'Built on integrity and discretion. We earn confidence trip after trip.'
    },
    {
      icon: TrendingUp,
      title: 'A Legacy of Hard Work',
      description: 'Our standards were forged in the grind. That discipline keeps our bar high.'
    }
  ];

  const team = [
    { name: 'Rajiv Sharma', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/32.jpg', experience: '20+ years in luxury transportation', expertise: 'Strategic Leadership' },
    { name: 'Priya Patel', role: 'Operations Director', img: 'https://randomuser.me/api/portraits/women/44.jpg', experience: '15+ years operations excellence', expertise: 'Fleet Management' },
  ];

  const handleBookNowClick = () => {
    setModel('General Booking');
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&h=1200')",
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />

        <div className={`relative z-20 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium backdrop-blur-sm">Premium Mobility Since 2024</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">MATRIXA</span>
            <br />
            <span className="text-white/90">MOBILITY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Redefining luxury transportation with elegance, technology, and a ruthless respect for your time.
          </p>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-8 bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">{s.value}</div>
                <div className="text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'values', label: 'Core Values' },
              { id: 'fleet', label: 'Premium Fleet' },
              { id: 'team', label: 'Leadership' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`py-4 px-2 font-semibold transition-all duration-300 border-b-2 ${activeTab === t.id ? 'border-amber-500 text-amber-400' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Story with real content */}
        {activeTab === 'story' && (
          <div className="animate-fadeIn">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
              <div className="space-y-6">
                <h2 className="text-xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">From a Shared Dream to the Pinnacle of Luxury</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-600 mb-6" />
                {legacy.map((p, i) => (
                  <p key={i} className="text-lg text-gray-300 leading-relaxed">{p}</p>
                ))}
                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/20">
                    <div className="text-3xl font-bold text-amber-400 mb-2">2024</div>
                    <div className="text-gray-300">Founded</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-6 rounded-xl border border-amber-500/20">
                    <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                    <div className="text-gray-300">Premium Fleet</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-3xl rotate-6" />
                <img
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&h=800"
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  alt="Our Legacy"
                  className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Values with your list */}
        {activeTab === 'values' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Our Values</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">What shapes every journey we deliver.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <v.icon className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{v.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fleet */}
        {activeTab === 'fleet' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Premium Fleet</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">Meticulously curated vehicles for every occasion.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {fleet.map((vehicle, i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative overflow-hidden">
                      <img
                        src={vehicle.image}
                        onError={(e) => (e.currentTarget.src = FALLBACK)}
                        alt={vehicle.category}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{vehicle.category}</h3>
                      <p className="text-gray-400 mb-6">{vehicle.description}</p>
                      <div className="space-y-2">
                        {vehicle.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                            {f}
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

        {/* Team */}
        {activeTab === 'team' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Leadership Team</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">The people who keep the standards high.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((m, i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative overflow-hidden">
                      <img
                        src={m.img}
                        onError={(e) => (e.currentTarget.src = FALLBACK)}
                        alt={m.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{m.name}</h3>
                      <p className="text-amber-500 font-semibold mb-2">{m.role}</p>
                      <p className="text-sm text-gray-400 mb-2">{m.experience}</p>
                      <div className="text-xs text-gray-500 px-3 py-1 bg-gray-700/50 rounded-full inline-block">{m.expertise}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> Luxury?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">Join thousands of clients who trust us for precision, privacy, and comfort.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookNowClick}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-2xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a href="/fleet" className="text-center border-2 border-amber-500/50 hover:border-amber-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-500/10">
              View Fleet
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
      `}</style>

      <BookingDialog
        open={dialogOpen}
        model={model}
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log('About booking payload', payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}