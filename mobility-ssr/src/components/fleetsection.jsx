import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Corporate Services',
      subtitle: '200+ Cities',
      description:
        'We offer corporate clients seamless travel with our reliable chauffeur services. Enjoy the convenience of door-to-door pickup in a neat and comfortable car, ensuring a smooth, stress-free journey. Our courteous chauffeurs provide affordable luxury, making every ride a premium experience.',
      img: '/services/s1.png',
      alt: 'Chauffeured executive sedan in front of office'
    },
    {
      title: 'City Drive',
      subtitle: '',
      description:
        'Explore your city with unparalleled convenience and comfort with our local rental service. Whether you need a car for a few hours of errands, a full day of sightseeing, or a chauffeur for a special event, we offer flexible packages to suit your every need. Enjoy the freedom of a private car with the added benefit of a professional driver who knows the city inside out.',
      img: '/services/s2.jpg',
      alt: 'Car driving through city streets'
    },
    {
      title: 'Outstation Services',
      subtitle: '',
      description:
        'Planning a trip beyond city limits? Our outstation services offer the perfect solution. Enjoy the open road in a comfortable, well-maintained car with a professional driver at the wheel. We provide seamless door-to-door service, transparent pricing, and the flexibility to customize your journey, turning every long-distance trip into a relaxing and memorable experience.',
      img: '/services/s3.jpg',
      alt: 'Car on highway with mountains in background'
    },
    {
      title: 'Airport Transfer',
      subtitle: '',
      description:
        'Experience stress-free travel to and from the airport in any city. Our professional chauffeurs track your flight, ensuring a timely pickup and comfortable ride, regardless of delays. With a commitment to punctuality and a fleet of pristine cars, we offer a seamless, affordable, and luxurious airport transfer experience.',
      img: '/services/s4.jpg',
      alt: 'Car parked near airport terminal at dusk'
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#FFFAFA" }}>
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            "Premium, Reliable and Comfortable Car services tailored to your needs."
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col md:flex-row items-center bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] border border-gray-100"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-amber-600 mb-1">
                  {service.title}
                </h3>

                {service.subtitle ? (
                  <p className="text-sm text-amber-500 mb-2 font-semibold">
                    {service.subtitle}
                  </p>
                ) : null}

                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
