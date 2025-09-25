import React from "react";
import {
  FaCheckCircle,
  FaTools,
  FaShieldAlt,
  FaBook,
  FaBalanceScale,
  FaCalendarCheck,
  FaHeadset,
  FaBroom,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * <BestPracticesSection />
 * Props:
 *  - title?: string
 *  - subtitle?: string
 *  - items?: Array<{ title: string, icon?: JSX.Element, desc?: string }>
 *  - variant?: "grid" | "list"   // grid = cards, list = simple checklist
 *  - className?: string
 */

const DEFAULT_ITEMS = [
  { title: "Daily Vehicle Maintenance and Safety Checks", icon: <FaTools className="w-5 h-5" /> },
  { title: "Regular Maintenance", icon: <FaTools className="w-5 h-5" /> },
  { title: "Safety Inspections", icon: <FaShieldAlt className="w-5 h-5" /> },
  { title: "Documented Safety Procedures", icon: <FaBook className="w-5 h-5" /> },
  { title: "Transparent Pricing and Policies", icon: <FaBalanceScale className="w-5 h-5" /> },
  { title: "Efficient Reservation System", icon: <FaCalendarCheck className="w-5 h-5" /> },
  { title: "Customer Service Excellence", icon: <FaHeadset className="w-5 h-5" /> },
  { title: "Cleanliness and Hygiene", icon: <FaBroom className="w-5 h-5" /> },
  { title: "Continuous Improvement and Feedback", icon: <FaChartLine className="w-5 h-5" /> },
];

export default function BestPracticesSection({
  title = "Best Practices",
  subtitle = "Operational standards that keep every ride consistent, safe, and customer-friendly.",
  items = DEFAULT_ITEMS,
  variant = "grid",
  className = "",
}) {
  if (variant === "list") {
    return (
      <section className={`bg-black text-white ${className}`}>
        <div className="container mx-auto px-6 max-w-7xl py-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                {title}
              </span>
            </h2>
            {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
          </div>
          <ul className="space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-200">
                <FaCheckCircle className="mt-0.5 text-amber-500 shrink-0" />
                <span className="leading-relaxed">{it.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // Grid (card) variant
  return (
    <section className={`bg-black text-white ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl py-14">
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
            <p className="text-gray-400 mt-3 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500">
                  {it.icon ?? <FaCheckCircle className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              {/* Optional description support */}
              {it.desc && <p className="text-sm text-gray-400">{it.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
