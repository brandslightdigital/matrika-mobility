import React, { useState } from "react";
import {
  FaCar,
  FaClock,
  FaPlaneDeparture,
  FaUsers,
  FaCheckCircle,
  FaShieldAlt,
  FaVirus,
  FaUserCheck,
  FaHeadset,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import GlobalAvailabilitySection from "../components/Map";

const services = [
  {
    id: 1,
    title: "Local & Outstation Spot Rentals",
    blurb:
      "On-demand rides for city commutes or outstation getaways. Flexible durations, real-time availability, and clean, well-maintained vehicles.",
    bullets: [
      "Hourly, daily, or weekend plans",
      "Verified chauffeurs on request",
      "Transparent pricing with GST invoices",
    ],
    icon: <FaCar className="w-7 h-7 text-amber-500" />,
    image:
      "/service/LOR.jpg",
  },
  {
    id: 2,
    title: "Long-Term Fixed Rentals",
    blurb:
      "Predictable monthly rentals for individuals and businesses. Zero maintenance stress, consistent SLAs, and priority support.",
    bullets: [
      "Fixed KM bundles with rollover options",
      "Maintenance, service, insurance handled",
      "Custom fleet branding for enterprises",
    ],
    icon: <FaClock className="w-7 h-7 text-amber-500" />,
    image:
      "/service/LT.jpg",
  },
  {
    id: 3,
    title: "Airport Transfers",
    blurb:
      "Reliable pick-ups and drops with live flight tracking, buffer time windows, and meet-and-greet options.",
    bullets: [
      "Flight delay adjustments",
      "Professional chauffeurs",
      "Executive and premium fleets",
    ],
    icon: <FaPlaneDeparture className="w-7 h-7 text-amber-500" />,
    image:
      "/corporate/at.jpg",
  },
  {
    id: 4,
    title: "MICE: Meetings, Incentives, Conferences & Events",
    blurb:
      "End-to-end Tribe for corporate events. Route planning, dispatch coordination, and on-site supervisors for smooth execution.",
    bullets: [
      "Shuttle loops and delegate logistics",
      "Driver rosters and live tracking",
      "VIP protocols and staggered dispersals",
    ],
    icon: <FaUsers className="w-7 h-7 text-amber-500" />,
    image:
      "/service/MICE.png",
  },
  {
    id: 5,
    title: "Wedding & Special Occasion Cars",
    blurb:
      "Luxury and vintage vehicles tailored for your special day.",
    bullets: [
      "Premium luxury & vintage classics",
      "Chauffeured rides for bride, groom & guests",
      "VIP protocols and staggered dispersals",
    ],
    icon: <FaUsers className="w-7 h-7 text-amber-500" />,
    image:
      "/corporate/wsoc.jpg",
  }
];
const worldGeo = feature(world, world.objects.countries); // FeatureCollection
const locations = [
  { name: "USA", coordinates: [-97, 38] },
  { name: "Europe", coordinates: [10, 50] },
  { name: "UK", coordinates: [-1, 54] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Malaysia", coordinates: [101.9758, 4.2105] },
];
// Compliance / Safety commitments
const commitments = [
  {
    icon: <FaVirus className="w-6 h-6 text-amber-500" />,
    title: "Stringent COVID-19 Measures",
    text: "Regular sanitization and strict hygiene protocols across all vehicles.",
  },
  {
    icon: <FaUserCheck className="w-6 h-6 text-amber-500" />,
    title: "Trust & Safety",
    text: "Thorough driver verification and background checks for your peace of mind.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-amber-500" />,
    title: "Comprehensive Insurance",
    text: "Coverage for drivers, cars, passengers, and third parties.",
  },
  {
    icon: <FaHeadset className="w-6 h-6 text-amber-500" />,
    title: "24×7 Support",
    text: "Round-the-clock customer assistance and centralized tracking team.",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-amber-500" />,
    title: "Seamless Technology",
    text: "Simplified booking, transparent billing, and client-friendly interfaces.",
  },
];

export default function TaxiServicesWithImages() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="bg-black text-white">
      {/* HERO */}
      <div className="relative h-[58vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=70"
          alt="Premium car on highway at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-5xl font-black leading-tight">
            <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Taxi Tribe
            </span>{" "}
            <br />
            Services
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            "Local business  travel , out station trips, Long term rentals , Expat services , Airport transfers , weddings , events and conferences — Delivered with Immense Reliability and Great Precision"
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{s.blurb}</p>
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-amber-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      {/* GLOBAL AVAILABILITY SECTION */}
      <GlobalAvailabilitySection />

      {/* COMPLIANCE & SAFETY SECTION */}
      <div className="bg-white/5 border-t border-b border-white/10 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Commitment to Safety & Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-black/30 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{c.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SOPsSection />
      <BestPracticesSection />

      {/* CTA */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
            <p className="text-lg mb-8">
              “Guaranteed 10% savings on your current annual spends”
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Get Quote
            </button>
          </div>
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
        </div>
      </div>

      <BookingDialog
        open={dialogOpen}
        model="Corporate Service Inquiry"
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log("Corporate Service Booking Payload:", payload);
          setDialogOpen(false);
        }}
      />
    </section>
  );
}
