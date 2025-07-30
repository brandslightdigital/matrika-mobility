// src/components/WhyChooseMobility.jsx
import { FaHandshake, FaClock, FaMapMarkerAlt, FaWallet, FaWifi, FaSnowflake, FaCar } from "react-icons/fa";

export const WhyChooseMobility = () => {
    const features = [
        {
            icon: <FaHandshake />,
            title: "Trusted by Corporates",
            desc: "Over 500+ businesses rely on us for daily transport needs.",
        },
        {
            icon: <FaClock />,
            title: "24/7 Booking Support",
            desc: "Book anytime with round-the-clock customer assistance.",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Pan India Coverage",
            desc: "Serving metro cities & tier-2 towns across India.",
        },
        {
            icon: <FaWallet />,
            title: "Transparent Pricing",
            desc: "No hidden charges. Pay what you see. Simple & clear.",
        },
        { icon: <FaWifi/>, title: 'Free WiFi', desc: 'Stay connected during your journey' },
        { icon: <FaSnowflake/>, title: 'Climate Control', desc: 'Perfect temperature all year round' },
        { icon: <FaCar/>, title: 'GPS Navigation', desc: 'Never lose your way with built-in GPS' },
        { icon: <FaCar/>, title: 'GPS Navigation', desc: 'Never lose your way with built-in GPS' },
    ];

    return (
        <section className="bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a1a1a] py-6 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-12">
                    Why <span className="text-amber-400">Choose Mobility?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]"
                        >
                            <div className="text-3xl text-amber-400 mb-4">{feature.icon}</div>
                            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                            <p className="text-gray-300 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
