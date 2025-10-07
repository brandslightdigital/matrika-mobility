import React, { useState } from 'react';

export default function MapAndFormSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    startDate: '',
    endDate: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your submit logic (API call etc.)
    console.log('Form submitted:', form);
    alert('Request received. We’ll get back to you shortly.');
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Book Your Ride
            </span>{' '}
            <span>With Ease</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Same vibes, new utility. Pick a location, fill the form, done.
          </p>
        </div>

        {/* Map + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Map */}
          <div className=" overflow-hidden bg-white/5">
            <div className="aspect-[4/3]">
              {/* Swap src with your preferred coordinates/place */}
              <iframe
                title="Taxi Tribe Map"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.116098932!2d72.74109862499999!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f6df4cced%3A0x39c7a5a9a5!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000`}
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-white/10 rounded-xl bg-white/5 p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Pickup Location</label>
                <input
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g., Bandra West"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Dropoff Location</label>
                <input
                  name="dropoff"
                  value={form.dropoff}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Optional"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Any special requests?"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:opacity-90 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
