import React from 'react';
import { FaCar, FaCogs, FaNetworkWired, FaChartPie, FaPuzzlePiece, FaCalendarAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaCogs className="text-sky-500 text-3xl mb-3" />,
    title: 'First class service',
    desc: 'We guarantee first class services using our API thanks to our premium fleet of cars.',
  },
  {
    icon: <FaCalendarAlt className="text-rose-500 text-3xl mb-3" />,
    title: 'Flexible business terms',
    desc: 'Book, amend and cancel bookings 24x7, 365 days year online.',
  },
  {
    icon: <FaCar className="text-orange-500 text-3xl mb-3" />,
    title: 'Our fleet',
    desc: 'We have got a range of extensive fleet, from economy to latest, high-spec luxury vehicles.',
  },
  {
    icon: <FaNetworkWired className="text-green-500 text-3xl mb-3" />,
    title: 'Our network',
    desc: '2,500 locations in over 100 countries around the globe allow you to enjoy all the benefits of renting the cars no matter where you are located.',
  },
  {
    icon: <FaPuzzlePiece className="text-yellow-500 text-3xl mb-3" />,
    title: 'Customized solutions',
    desc: 'We provide custom-design solutions as per your requirements which in turn maximize website efficiency.',
  },
  {
    icon: <FaChartPie className="text-blue-600 text-3xl mb-3" />,
    title: 'Own inventory CRS',
    desc: 'Our CRS will help you to sell your inventory through all of your sales channels like B2B/B2C/B2E etc.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12 px-6 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Benefits of using Taxi Tribe Cars</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {benefits.map((item, idx) => (
          <div key={idx} className="p-4 rounded shadow hover:shadow-md transition-all">
            <div className="flex flex-col items-center">
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
