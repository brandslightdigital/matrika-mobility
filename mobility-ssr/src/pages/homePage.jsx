import React, { useState } from 'react';
import Hero from '../components/hero';
import FleetSection from '../components/fleetsection';
import BenefitsAndWhy from '../components/whychooseus';
import { SafetySection } from '../components/safetySection';
import BenefitsSection from '../components/benefitSection';
import FaqSection from '../components/faqs';
import MapAndFormSection from '../components/MapadnFormSection';
import BookingDialog from '../components/BookingCar'; // Importing the BookingDialog component
import TaxiTestimonials from '../components/Testimonial';
import { Helmet } from "react-helmet";

const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false); // state to control BookingDialog visibility
  return (

    <div className='bg-black text-white'>
      <Helmet>
        <title>Book 24x7 Car Rental & Taxi Services | Corporate Cabs Services</title>
        <meta name="description" content="Book your ride online with TaxiTribe. 24x7 taxi booking, airport transfers & corporate travel—safe, quick, and affordable. Book now!" />
         <link rel="canonical" href="https://taxitribe.in/" />
      </Helmet>
      <Hero />
      <FleetSection />
      <BenefitsAndWhy />
      <SafetySection />
      <TaxiTestimonials />
      {/* <FaqSection/> */}
      {/* <MapAndFormSection /> */}
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
            <p className="text-lg mb-8">
              “Guaranteed 10% savings on your current annual spends”
            </p>
            <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
              Get Quote
            </button>
          </div>
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
        </div>
      </div>
      {/* Booking Dialog for Corporate Service */}
      <BookingDialog
        open={dialogOpen}
        model="Corporate Service Inquiry"
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log('Corporate Service Booking Payload:', payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
};

export default Home;
