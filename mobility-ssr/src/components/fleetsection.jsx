import React, { useState } from 'react';
import { FaCar, FaUsers, FaGasPump, FaCog, FaStar, FaArrowRight, FaPlay, FaWifi, FaSnowflake } from 'react-icons/fa';

export default function FleetSection()   {
  const [activeCategory, setActiveCategory] = useState('luxury');

  const categories = [
    {
      id: 'luxury',
      name: 'Luxury',
      icon: FaStar,
      description: 'Premium vehicles for executive travel',
      color: 'amber'
    },
    {
      id: 'business',
      name: 'Business',
      icon: FaCar,
      description: 'Professional cars for corporate needs',
      color: 'blue'
    },
    {
      id: 'family',
      name: 'Family',
      icon: FaUsers,
      description: 'Spacious vehicles for family trips',
      color: 'green'
    },
    {
      id: 'economy',
      name: 'Economy',
      icon: FaGasPump,
      description: 'Fuel-efficient cars for budget travel',
      color: 'purple'
    }
  ];

  const cars = {
    luxury: [
      {
        id: 1,
        name: 'Mercedes S-Class',
        type: 'Executive Sedan',
        price: '₹299/day',
        originalPrice: '₹399/day',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Premium Leather', 'Massage Seats', 'Panoramic Roof', 'Advanced Safety'],
        specs: { seats: 5, fuel: 'Premium', transmission: 'Automatic' },
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: 'BMW 7 Series',
        type: 'Luxury Sedan',
        price: '₹279/day',
        originalPrice: '₹349/day',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Executive Lounge', 'Night Vision', 'Gesture Control', 'Wireless Charging'],
        specs: { seats: 5, fuel: 'Premium', transmission: 'Automatic' },
        rating: 4.8
      },
      {
        id: 3,
        name: 'Audi A8',
        type: 'Premium Sedan',
        price: '₹259/day',
        originalPrice: '₹329/day',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Matrix LED', 'Air Suspension', 'Bang & Olufsen', 'Driver Assistance'],
        specs: { seats: 5, fuel: 'Premium', transmission: 'Automatic' },
        rating: 4.7
      }
    ],
    business: [
      {
        id: 4,
        name: 'Toyota Camry',
        type: 'Business Sedan',
        price: '₹89/day',
        originalPrice: '₹119/day',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Hybrid Engine', 'Safety Sense', 'Wireless CarPlay', 'LED Headlights'],
        specs: { seats: 5, fuel: 'Hybrid', transmission: 'Automatic' },
        rating: 4.6,
        popular: true
      },
      {
        id: 5,
        name: 'Honda Accord',
        type: 'Executive Sedan',
        price: '₹79/day',
        originalPrice: '₹99/day',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Honda Sensing', 'Turbo Engine', 'Premium Audio', 'Heated Seats'],
        specs: { seats: 5, fuel: 'Regular', transmission: 'Automatic' },
        rating: 4.5
      },
      {
        id: 6,
        name: 'Nissan Altima',
        type: 'Business Sedan',
        price: '₹69/day',
        originalPrice: '₹89/day',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['ProPILOT Assist', 'Zero Gravity Seats', 'Intelligent AWD', 'Remote Start'],
        specs: { seats: 5, fuel: 'Regular', transmission: 'CVT' },
        rating: 4.4
      }
    ],
    family: [
      {
        id: 7,
        name: 'Honda Pilot',
        type: 'Family SUV',
        price: '₹129/day',
        originalPrice: '₹159/day',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['8-Seater', 'All-Wheel Drive', 'Entertainment System', 'Cargo Space'],
        specs: { seats: 8, fuel: 'Regular', transmission: 'Automatic' },
        rating: 4.7,
        popular: true
      },
      {
        id: 8,
        name: 'Toyota Highlander',
        type: 'Family SUV',
        price: '₹119/day',
        originalPrice: '₹149/day',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Hybrid Available', 'Safety 2.0', 'Panoramic View', 'Wireless Charging'],
        specs: { seats: 7, fuel: 'Hybrid', transmission: 'Automatic' },
        rating: 4.6
      },
      {
        id: 9,
        name: 'Chevrolet Tahoe',
        type: 'Large SUV',
        price: '₹149/day',
        originalPrice: '₹189/day',
        image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['9-Seater', 'Towing Capacity', 'Premium Audio', 'Leather Interior'],
        specs: { seats: 9, fuel: 'Regular', transmission: 'Automatic' },
        rating: 4.5
      }
    ],
    economy: [
      {
        id: 10,
        name: 'Toyota Corolla',
        type: 'Compact Car',
        price: '₹39/day',
        originalPrice: '₹49/day',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Fuel Efficient', 'Toyota Safety', 'Bluetooth', 'Backup Camera'],
        specs: { seats: 5, fuel: 'Regular', transmission: 'Automatic' },
        rating: 4.3,
        popular: true
      },
      {
        id: 11,
        name: 'Nissan Sentra',
        type: 'Compact Sedan',
        price: '₹35/day',
        originalPrice: '₹45/day',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['Intelligent Safety', 'Apple CarPlay', 'Comfortable Seats', 'Good MPG'],
        specs: { seats: 5, fuel: 'Regular', transmission: 'CVT' },
        rating: 4.2
      },
      {
        id: 12,
        name: 'Hyundai Elantra',
        type: 'Compact Sedan',
        price: '₹37/day',
        originalPrice: '₹47/day',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        features: ['SmartSense', 'Wireless Android Auto', 'Heated Seats', 'LED Lights'],
        specs: { seats: 5, fuel: 'Regular', transmission: 'Automatic' },
        rating: 4.1
      }
    ]
  };

  const getColorClasses = (color) => {
    const colors = {
      amber: 'bg-amber-400 text-black',
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      purple: 'bg-purple-500 text-white'
    };
    return colors[color] || colors.amber;
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-6">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 text-amber-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            {/* <FaCar className="mr-2" /> */}
            Premium Fleet Collection
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Popular Car </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Categories</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose from our extensive fleet of premium vehicles, each maintained to the highest standards for your comfort and safety.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? getColorClasses(category.color) + ' shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <category.icon className={`text-xl ${
                  activeCategory === category.id ? '' : 'text-amber-400'
                }`} />
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-xs opacity-80">{category.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars[activeCategory].map((car) => (
            <div key={car.id} className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Popular Badge */}
                {car.popular && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    🔥 Popular
                  </div>
                )}
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <FaStar className="text-amber-400" />
                  <span>{car.rating}</span>
                </div>

                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 cursor-pointer">
                    <FaPlay className="text-white text-xl" />
                  </div>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{car.name}</h3>
                    <p className="text-gray-400 text-sm">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-400">{car.price}</div>
                    <div className="text-sm text-gray-500 line-through">{car.originalPrice}</div>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <FaUsers className="text-amber-400 mx-auto mb-1" />
                    <div className="text-white text-sm font-bold">{car.specs.seats}</div>
                    <div className="text-gray-400 text-xs">Seats</div>
                  </div>
                  <div className="text-center">
                    <FaGasPump className="text-amber-400 mx-auto mb-1" />
                    <div className="text-white text-sm font-bold">{car.specs.fuel}</div>
                    <div className="text-gray-400 text-xs">Fuel</div>
                  </div>
                  <div className="text-center">
                    <FaCog className="text-amber-400 mx-auto mb-1" />
                    <div className="text-white text-sm font-bold">{car.specs.transmission}</div>
                    <div className="text-gray-400 text-xs">Trans</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="text-xs bg-amber-400/20 text-amber-400 px-3 py-1 rounded-full">
                        +{car.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 rounded-xl font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                  <button className="px-4 py-3 border-2 border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-2">
          <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
            <span>View All Cars</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Indicators
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            // { icon: FaShield, title: 'Fully Insured', desc: 'Complete coverage on all vehicles' },
            { icon: FaWifi, title: 'Free WiFi', desc: 'Stay connected during your journey' },
            { icon: FaSnowflake, title: 'Climate Control', desc: 'Perfect temperature all year round' },
            { icon: FaCar, title: 'GPS Navigation', desc: 'Never lose your way with built-in GPS' },
            { icon: FaCar, title: 'GPS Navigation', desc: 'Never lose your way with built-in GPS' },
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <item.icon className="text-3xl text-amber-400 mb-4 mx-auto group-hover:animate-bounce" />
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}