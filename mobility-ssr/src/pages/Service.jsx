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
import BookingDialog from '../components/BookingCar';
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";
import GlobalAvailabilitySection from "../components/Map";
import { Helmet } from "react-helmet";

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
    icon: <FaCar className="w-7 h-7 text-amber-600" />,
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
    icon: <FaClock className="w-7 h-7 text-amber-600" />,
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
    icon: <FaPlaneDeparture className="w-7 h-7 text-amber-600" />,
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
    icon: <FaUsers className="w-7 h-7 text-amber-600" />,
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
    icon: <FaUsers className="w-7 h-7 text-amber-600" />,
    image:
      "/corporate/wsoc.jpg",
  }
];

const commitments = [
  {
    icon: <FaVirus className="w-6 h-6 text-amber-600" />,
    title: "Stringent Hygiene Measures",
    text: "Regular sanitization and strict hygiene protocols across all vehicles.",
  },
  {
    icon: <FaUserCheck className="w-6 h-6 text-amber-600" />,
    title: "Trust & Safety",
    text: "Thorough driver verification and background checks for your peace of mind.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-amber-600" />,
    title: "Comprehensive Insurance",
    text: "Coverage for drivers, cars, passengers, and third parties.",
  },
  {
    icon: <FaHeadset className="w-6 h-6 text-amber-600" />,
    title: "24×7 Support",
    text: "Round-the-clock customer assistance and centralized tracking team.",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-amber-600" />,
    title: "Seamless Technology",
    text: "Simplified booking, transparent billing, and client-friendly interfaces.",
  },
];

export default function TaxiServicesWithImages() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section style={{ backgroundColor: "#FFFAFA" }} className="text-gray-900 min-h-screen">
      <Helmet>
        <title>Car Rental Services in India | Local, Outstation & Airport Cabs</title>
        <meta name="description" content="From corporate trips to airport transfers—book reliable car rentals across India. Flexible packages for every journey. Reserve now!" />
        <link rel="canonical" href="https://taxitribe.in/services" />
      </Helmet>

      {/* HERO (light) */}
      <div className="relative h-[48vh] min-h-[360px] flex items-center justify-center overflow-hidden border-b border-gray-200">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=70"
          alt="Premium car on highway at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-20 text-center px-6 max-w-3xl">


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            <span className="text-amber-600">Taxi Tribe</span>
            <span className="block text-xl md:text-2xl font-medium text-gray-100 mt-2">Services</span>
          </h1>
          <p className="text-white mt-4 text-base md:text-lg">
            "Local Business Travel, Out Station Trips, Long Term Rentals, Expat Services, Airport Transfers, Weddings, Events and Conferences — Delivered with Reliability and Precision."
          </p>
        </div>
      </div>

      {/* SERVICES GRID (light cards) */}
      <div className="container mx-auto px-6 py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((s, idx) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{s.blurb}</p>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-amber-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setDialogOpen(true)}
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition"
                  >
                    Enquire
                  </button>
                  <span className="text-xs text-gray-500">ID: {s.id}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* GLOBAL AVAILABILITY (keep component - should be light-theme ready) */}
      <div className="container mx-auto px-6 max-w-7xl">
        <GlobalAvailabilitySection theme="light" />
      </div>

      {/* COMMITMENTS (light cards) */}
      <div className="py-16 border-t border-b border-gray-100 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Commitment to Safety & Compliance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-xl border border-gray-100 bg-white p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{c.title}</h3>
                    <p className="text-gray-700 text-sm mt-2">{c.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SOPs & Best Practices (light) */}
      <div>
        <SOPsSection variant="full" />
        <BestPracticesSection />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto mt-12 px-6">
        <div className="bg-amber-600/10 border border-amber-100/20 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Ready to elevate your corporate travel?</h2>
              <p className="text-gray-700 mb-6">"Guaranteed 10% savings on your current annual spends."</p>
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
              >
                Get Quote
              </button>
            </div>
            <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center" />
          </div>
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
