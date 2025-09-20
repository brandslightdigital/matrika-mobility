import React from "react";
import {
  FaCar,
  FaCogs,
  FaNetworkWired,
  FaChartPie,
  FaPuzzlePiece,
  FaCalendarAlt,
  FaHandshake,
  FaClock,
  FaMapMarkerAlt,
  FaWallet,
  FaWifi,
  FaSnowflake,
  FaRoute,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

export default function BenefitsAndWhy() {
  // Primary benefits (your first list), cleaned and kept
  const benefits = [
    {
      icon: <FaCogs />,
      title: "First-class service",
      desc:
        "Premium, chauffeur-driven experience powered by our platform and maintained fleet standards.",
      tone: "sky",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Flexible business terms",
      desc:
        "Book, amend, and cancel 24/7 / 365 via web or app. Zero drama, real-time confirmation.",
      tone: "rose",
    },
    {
      icon: <FaCar />,
      title: "Extensive fleet",
      desc:
        "From economy to high-spec luxury vehicles, always clean, comfortable, and ready.",
      tone: "orange",
    },
    {
      icon: <FaNetworkWired />,
      title: "Global network",
      desc:
        "2,500+ locations across 100+ countries so your travel doesn’t fall apart across borders.",
      tone: "green",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Customized solutions",
      desc:
        "Corporate SLAs, invoicing, rider policies, and integrations tailored to your workflows.",
      tone: "yellow",
    },
    {
      icon: <FaShield />,
      title: "HSSE compliance",
      desc: "HSSE compliance means working safely, protecting people, assets, and the environment at all times.",
    },
  ];

  // Why choose (your second list), deduped and expanded
  const reasons = [
    {
      icon: <FaHandshake />,
      title: "Trusted by corporates",
      desc: "500+ businesses rely on Matrika for daily commute, events, and VIP travel.",
    },
    {
      icon: <FaClock />,
      title: "24/7 human support",
      desc: "Round-the-clock assistance for bookings, delays, changes, and urgent dispatch.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Pan-India coverage",
      desc: "Metros to tier-2 cities with consistent service quality and SLAs.",
    },
    {
      icon: <FaWallet />,
      title: "Transparent pricing",
      desc: "All-in prices, clear T&Cs, instant e-invoices. No hidden fees, ever.",
    },
    {
      icon: <FaWifi />,
      title: "In-car connectivity",
      desc: "Wi-Fi available on select routes and vehicle classes to keep you online.",
    },
    {
      icon: <FaSnowflake />,
      title: "Climate control",
      desc: "Cabin comfort dialed in for India’s weather so you don’t bake or freeze.",
    },
  ];

  const toneToClasses = {
    sky: "text-sky-400",
    rose: "text-rose-400",
    orange: "text-orange-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    blue: "text-blue-400",
  };

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-yellow-400/20 text-yellow-400 px-4 py-1 text-sm font-semibold">
           Matrika Mobilities
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Why choose Matrika ?
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Fewer buzzwords, more reliability. Here’s what you get when you book with us.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10 hover:scale-[1.01]"
            >
              <div className="mb-4 text-3xl text-amber-400">
                <span className={`${toneToClasses[b.tone] || "text-amber-400"} inline-flex`}>
                  {b.icon}
                </span>
              </div>
              <h3 className="text-white text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>


        {/* Reasons grid */}
        {/* <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8">
          <h3 className="text-white text-2xl font-bold mb-6">Why teams switch to us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-black/30 border border-white/10 p-5 hover:bg-black/40 transition"
              >
                <div className="text-2xl text-amber-400 mb-3">{r.icon}</div>
                <div className="text-white font-semibold">{r.title}</div>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
