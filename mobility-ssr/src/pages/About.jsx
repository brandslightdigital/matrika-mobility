import React, { useEffect, useState } from "react";
import { ShieldCheck, Clock, Star, Users, TrendingUp, Globe, ArrowRight, Phone } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";

// Single-page About (no tabs). Uses existing BookingDialog.

const FALLBACK = "/cars/placeholder.jpg";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Premium Vehicles", value: "500+" },
    { label: "Global Cities Served", value: "200+" },
  ];

  const story = [
    "The corporate world moves fast — but for years, business travel lagged behind. Companies were forced to deal with endless paperwork, inaccurate billing, exaggerated kilometre reports, delayed arrivals, rash driving, untrained drivers, and a worrying lack of safety measures for women executives.",
    "Seeing this growing chaos, we knew there had to be a better way. That’s how Matrika Mobilities was born. The name “Matrika” is inspired by the nurturing spirit of a mother — a symbol of care, safety, and reliability. We set out to create a corporate mobility partner that brings order, transparency, and peace of mind to an industry that desperately needs it.",
    "At Matrika Mobilities, we blend cutting-edge technology with human-centric service. From GPS-enabled vehicles and digital MIS reports to meticulously trained drivers and strict HSSE compliance, every detail is designed to ensure our clients travel comfortably, safely, and on time.",
    "We believe corporate mobility should feel effortless. Our commitment is to deliver a service experience that reflects the values of a trusted partner — organized, transparent, and caring — just like a mother looking after her family.",
    "Today, Matrika Mobilities continues to expand across India, serving leading corporates, events, and VIP travellers. But our mission remains the same: to redefine corporate car rentals with reliability, safety, and unmatched customer care.",
  ];

  const mission = "To redefine corporate mobility in India with Technology, Sustainability, and Unmatched Services.";

  const growthBullets = [
    "Expand our footprint across every major corporate hub and emerging city in India, creating a seamless nationwide network for business travellers.",
    "Lead the shift to sustainable mobility by steadily increasing the share of electric and hybrid vehicles in our fleet.",
    "Leverage advanced technology — from AI-powered route optimization to real-time analytics — to give corporates complete visibility and control over their travel spend.",
    "Build long-term partnerships with companies by offering customized solutions, dedicated account managers, and measurable service level commitments.",
    "Invest in people and training, ensuring our drivers, staff, and support teams embody professionalism, safety, and care.",
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      meaning: "Every vehicle, driver, and route is chosen with passenger safety as the highest priority — especially for women executives.",
    },
    {
      icon: Star,
      title: "Customer‑Centric Service",
      meaning: "We act like a trusted partner, not just a vendor — understanding your needs and tailoring our services accordingly.",
    },
    {
      icon: Clock,
      title: "Reliability & Accountability",
      meaning: "Delivering on our promises with consistent quality and measurable service levels.",
    },
    {
      icon: TrendingUp,
      title: "Technology‑Driven Efficiency",
      meaning: "Booking, tracking, reporting, and analytics that give corporates total control over travel spend.",
    },
    {
      icon: Users,
      title: "Professionalism & Training",
      meaning: "Continuous driver and staff training to ensure punctuality, courtesy, and responsible driving.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      meaning: "Gradual transition to electric and hybrid vehicles to reduce environmental impact and align with responsible business practices.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency & Integrity",
      meaning: "Clear billing, accurate kilometre tracking, and honest communication — no surprises, no hidden costs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&h=1200')",
            filter: "brightness(0.4) contrast(1.2)",
          }}
        />

        <div
          className={`relative z-20 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">Matrika</span>
            <br />
            <span className="text-white/90">Mobilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {mission}
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
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">About Us — Our Story</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 mb-10 rounded" />

            {/* Lead removed to ensure exact provided content is shown */}

            {/* Body from `story` array (exact content) */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              {story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Quote strip */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg text-gray-200">“Corporate mobility should feel like a trusted partner- Organised, Transparent, Reliable and Caring.”</p>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/cars/740i.jpg"
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  alt="Executive transfer on open road"
                  className="w-full h-[360px] object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 left-6 bg-black/2  0 backdrop-blur rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3 shadow-lg">
                <span className="inline-block w-2.5 h-2.5 bg-amber-500 rounded-full" />
                <span className="text-sm text-gray-200">HSSE‑trained chauffeurs • Digital MIS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Title + description stacked tightly */}
          <div className="text-left max-w-4xl mx-0">
            <h2 className="text-5xl font-extrabold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Our Growth Vision</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              At Matrika Mobilities, our vision is to become India’s most trusted and technology-driven corporate mobility partner, setting new benchmarks in Safety, Transparency, and Customer experience.
            </p>
          </div>

          {/* Cards grid comes immediately under the text. No giant gap. */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                n: '01',
                text: 'Expand our footprint across every major corporate hub and emerging city in India, creating a seamless nationwide network for business travellers.'
              },
              {
                n: '02',
                text: 'Lead the shift to sustainable mobility by steadily increasing the share of electric and hybrid vehicles in our fleet.'
              },
              {
                n: '03',
                text: 'Leverage advanced technology — from AI-powered route optimization to real-time analytics — to give corporates complete visibility and control over their travel spend.'
              },
              {
                n: '04',
                text: 'Build long-term partnerships with companies by offering customized solutions, dedicated account managers, and measurable service level commitments.'
              },
              {
                n: '05',
                text: 'Invest in people and training, ensuring our drivers, staff, and support teams embody professionalism, safety, and care.'
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 hover:bg-white/10 transition h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-400 font-bold">{item.n}</span>
                  <span className="text-xs text-gray-400">Strategic pillar</span>
                </div>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing line kept exactly, tight spacing */}
          <p className="text-gray-400 mt-8 text-base max-w-5xl">
            Our growth journey is guided by a simple principle: corporate mobility should be as reliable and nurturing as a trusted partner — organized, efficient, and safe. As we scale, we will continue to uphold the values that inspired our beginning, while embracing innovation and sustainability to shape the future of business travel.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Our Core Values</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">"Where Integrity Meets Execution"</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coreValues.map((v, i) => (
            <div key={i} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <v.icon className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{v.title}</h3>
              <p className="text-gray-400 leading-relaxed text-base">{v.meaning}</p>
            </div>
          ))}
        </div>

        {/* Table view for quick scanning */}
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">Value</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">What It Means for You</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {coreValues.map((v, i) => (
                <tr key={`row-${i}`} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-gray-100">{v.title}</td>
                  <td className="px-6 py-4 text-gray-300">{v.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SOPs (kept as-is) */}
      <SOPsSection />

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Partner With <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Safe, transparent, and technology-enabled transportation that actually makes your travel management easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setDialogOpen(true)}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-2xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
Request a Corporate Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            {/* <a
              href="/our-fleet"
              className="text-center border-2 border-amber-500/50 hover:border-amber-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-amber-500/10"
            >
              View Fleet
            </a> */}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
      `}</style>

      <BookingDialog
        open={dialogOpen}
        model="About Page Enquiry"
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log("About booking payload", payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
