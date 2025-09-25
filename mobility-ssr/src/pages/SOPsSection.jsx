import React from "react";
import {
  FaClipboardCheck,
  FaSatelliteDish,
  FaTools,
  FaShieldAlt,
  FaHeartbeat,
  FaCarSide,
} from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * <SOPsSection />
 * - Reusable trust/compliance block for Corporate & Services pages
 * - Props:
 *    title?: string
 *    subtitle?: string
 *    items?: Array<{icon: JSX.Element, heading: string, bullets: string[]}>
 *    variant?: "full" | "compact"   // compact = 3 cards, shorter height
 *    className?: string
 *
 * Tailwind + framer-motion
 */

const DEFAULT_ITEMS = [
  {
    icon: <FaClipboardCheck className="w-6 h-6 text-amber-500" />,
    heading: "Process-based Operations",
    bullets: [
      "Reservation TAT 10 min, instant confirmation",
      "Dispatch QC check 2 hrs before reporting; driver grooming standard",
      "Billing as per customer: weekly, fortnightly, or monthly",
    ],
  },
  {
    icon: <FaSatelliteDish className="w-6 h-6 text-amber-500" />,
    heading: "Live Tracking",
    bullets: [
      "All GPS-enabled cars; mobile app driver tracking",
      "Female traveller tracking end-to-end with call recording",
      "Panic button in every car; speed governor enabled",
    ],
  },
  {
    icon: <FaCarSide className="w-6 h-6 text-amber-500" />,
    heading: "Ageing Focus",
    bullets: [
      "Cars used max 3 years or 1 lakh km, whichever earlier",
      "Tyre change every 50k km or 18 months, whichever earlier",
    ],
  },
  {
    icon: <FaTools className="w-6 h-6 text-amber-500" />,
    heading: "Safety Measures & Daily Amenities",
    bullets: [
      "Daily checks: tyres, seat belts, fuel, inspections, servicing",
      "Water bottles, sanitisers, tissue, newspaper, medical kit, tool box",
      "Glass hammer, fire extinguisher, extra tyre",
    ],
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-amber-500" />,
    heading: "Contingency Plan",
    bullets: [
      "Two reservation teams operating in parallel",
      "Dedicated KAMs and an Operations Manager per location",
    ],
  },
  {
    icon: <FaHeartbeat className="w-6 h-6 text-amber-500" />,
    heading: "Extensive Focus on Health",
    bullets: [
      "COVID compliance first; hypo-chloride washed interiors",
      "Hand sanitisers in all cars; periodic driver testing",
    ],
  },
];

export default function SOPsSection({
  title = "SOPs — Safety, Security, Health & Environment",
  subtitle = "Protecting People, Places and the Planet - Every Mile",
  items = DEFAULT_ITEMS,
  variant = "full",
  className = "",
}) {
  const showItems =
    variant === "compact" ? items.slice(0, 3) : items;

  return (
    <section className={`bg-black text-white ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl py-14">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
              "{subtitle}"
            </p>
          )}
        </motion.div>

        {/* Grid */}
        <div
          className={`grid gap-6 ${
            variant === "compact"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {showItems.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-lg">{card.heading}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                {card.bullets.map((b, idx) => (
                  <li key={idx} className="leading-relaxed">• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA for compact */}
        {variant === "compact" && items.length > 3 && (
          <div className="text-center mt-8">
            <a
              href="#sops-full"
              className="inline-block px-5 py-2 rounded-xl font-semibold border border-white/15 bg-white/0 hover:bg-white/10 transition"
            >
              View full SOPs
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
