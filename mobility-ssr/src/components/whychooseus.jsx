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
  // Updated benefits list
  const benefits = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Pan-India Operations",
      desc:
        "Our operations cover metros and tier-2 cities with consistent service quality and reliability.",
      tone: "sky",
    },
    {
      icon: <FaCar />,
      title: "Instant Bookings",
      desc:
        "Book your ride anytime with instant confirmation through our platform, ensuring smooth travel every time.",
      tone: "rose",
    },
    {
      icon: <FaShield />,
      title: "Safety & Security Focus",
      desc:
        "Real-time GPS tracking, SOS buttons, and vetted drivers ensure your safety is our top priority.",
      tone: "orange",
    },
    {
      icon: <FaClock />,
      title: "24×7 Corporate Support Desk",
      desc:
        "Our dedicated support team is available round the clock to assist with bookings, delays, and urgent issues.",
      tone: "green",
    },
    {
      icon: <FaWallet />,
      title: "Custom and Transparent Billing & MIS Reports",
      desc:
        "Get detailed, accurate, and clear invoices with custom billing options and easy-to-understand MIS reports.",
      tone: "yellow",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Women Safety Top Priority",
      desc:
        "We prioritize women's safety with dedicated measures like verified drivers and emergency response systems.",
      tone: "blue",
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
            Taxi Tribe
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Why choose <span className="text-amber-500">Taxi ? </span>
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            "Here’s what you get when you book with us."
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
      </div>
    </section>
  );
}
