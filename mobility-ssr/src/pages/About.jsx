import React, { useEffect, useState } from "react";
import { ShieldCheck, Clock, Star, Users, TrendingUp, Globe, ArrowRight, Phone } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";
import { Helmet } from "react-helmet";

// Single-page About (white theme)
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
    "TaxiTribe is a global network of professionals passionate about transforming corporate car rental services into a safe, seamless, and human experience. Born from the need for more reliable and transparent business travel, we provide chauffeur-driven corporate mobility, airport transfers, and employee transportation solutions across India and beyond.",
    "Every member of the TaxiTribe family — from trained chauffeurs to corporate coordinators — is united by one purpose: to deliver trust, transparency, and reliability in every ride. With GPS-enabled vehicles, digital MIS reports, and strict HSSE (Health, Safety, Security, and Environment) compliance, we ensure every journey meets the highest standards of safety and accountability.",
    "With a pan-India presence, advanced technology, and a deep focus on women’s safety and corporate travel compliance, TaxiTribe is redefining the way organizations move their people — with care, precision, and purpose.",
  ];

  const mission = "To redefine corporate mobility in India with Technology, Sustainability, and Unmatched Services.";

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      meaning: "Every vehicle, driver, and route is chosen with passenger safety as the highest priority — especially for women executives.",
    },
    {
      icon: Star,
      title: "Customer-Centric Service",
      meaning: "We act like a trusted partner, not just a vendor — understanding your needs and tailoring our services accordingly.",
    },
    {
      icon: Clock,
      title: "Reliability & Accountability",
      meaning: "Delivering on our promises with consistent quality and measurable service levels.",
    },
    {
      icon: TrendingUp,
      title: "Technology-Driven Efficiency",
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
    <div style={{ backgroundColor: "#FFFAFA" }} className="min-h-screen text-gray-900">
      <Helmet>
        <title>About TaxiTribe | India’s Trusted Car Rental & Taxi Service</title>
        <meta name="description" content="We redefine travel with safe, affordable taxi and rental services across India. Trusted by thousands—discover why TaxiTribe leads the ride." />
        <link rel="canonical" href="https://taxitribe.in/about-us" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* optional light background image or gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,250,240,1) 0%, rgba(255,249,245,1) 50%, rgba(255,250,240,1) 100%)",
          }}
        />

        <div className="absolute top-6 left-6 z-30">
          {/* Use uploaded logo local path; tool will convert /mnt/data/logo.png to a URL */}
          <img src="/mnt/data/logo.png" alt="Taxi Tribe" className="h-12" />
        </div>

        <div
          className={`relative z-20 text-center max-w-5xl mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
            <span className="text-gray-900">Taxi</span>{" "}
            <span className="text-amber-600">Tribe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {mission}
          </p>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-bold text-amber-600 mb-1">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
              <span className="text-amber-600">About Us — Our Story</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 mb-8 rounded" />

            <div className="space-y-6 text-base text-gray-700 leading-relaxed">
              {story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
              <p className="text-gray-800 text-lg">“TaxiTribe — One Tribe. One Journey. Endless Destinations.”</p>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <img
                  src="/cars/740i.jpg"
                  onError={(e) => (e.currentTarget.src = FALLBACK)}
                  alt="Executive transfer on open road"
                  className="w-full h-[360px] object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-6 bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3 shadow">
                <span className="inline-block w-2.5 h-2.5 bg-amber-600 rounded-full" />
                <span className="text-sm text-gray-700">HSSE-trained chauffeurs • Digital MIS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
            <span className="text-amber-600">Our Growth Vision</span>
          </h2>
          <p className="text-gray-700 mb-8">
            "At Taxi Tribe, our vision is to become India’s most trusted and technology-driven corporate mobility partner, setting new benchmarks in Safety, Transparency, and Customer experience."
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 mt-4">
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
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md transition h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-600 font-bold">{item.n}</span>
                <span className="text-xs text-gray-500">Strategic pillar</span>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-8 text-base max-w-5xl">
          Our growth journey is guided by a simple principle: corporate mobility should be as reliable and nurturing as a trusted partner — organized, efficient, and safe. As we scale, we will continue to uphold the values that inspired our beginning, while embracing innovation and sustainability to shape the future of business travel.
        </p>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            <span className="text-amber-600">Our Core Values</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">"Where Integrity Meets Execution"</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {coreValues.map((v, i) => (
            <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 bg-amber-50">
                <v.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{v.title}</h3>
              <p className="text-gray-700 text-sm">{v.meaning}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Value</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">What It Means for You</th>
              </tr>
            </thead>
            <tbody>
              {coreValues.map((v, i) => (
                <tr key={`row-${i}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800">{v.title}</td>
                  <td className="px-6 py-4 text-gray-600">{v.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SOPs (kept as-is) */}
      <SOPsSection theme="light" />

      {/* CTA */}
      <section className="border-t border-amber-100/40">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Partner With <span className="text-amber-600">Us</span></h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">“Safe, transparent, and seamless travel solutions designed to simplify your operations.”</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setDialogOpen(true)}
              className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              <Phone className="w-4 h-4" />
              Get Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

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
