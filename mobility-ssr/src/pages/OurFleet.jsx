import React, { useMemo, useState, useEffect } from "react";
import { Car, Search, Sparkles } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";
import { Helmet } from "react-helmet";

// -----------------------------------------------------------------------------
// FLEET PAGE — LIGHT / WHITE THEME
// -----------------------------------------------------------------------------

const safeSrc = (src) => (typeof src === "string" ? src.split(" ").join("%20") : src);
const FALLBACK = "/cars/placeholder.jpg";

const categoriesData = [
  {
    key: "swift-dzire",
    title: "Maruti Suzuki Swift Dzire",
    brand: "Sedan",
    image: "/cars/dezire.jpg",
    description: "Compact sedan for city and family use.",
    note: "All variants available",
  },
  {
    key: "crysta",
    title: "Toyota Crysta",
    brand: "SUV",
    image: "/cars/innova.jpg",
    description: "Spacious MPV offering comfort and versatility.",
    note: "All variants available",
  },
  {
    key: "hycross",
    title: "Innova Hycross",
    brand: "SUV",
    image: "/cars/hycross.avif",
    description: "Hybrid MPV for efficiency and comfort.",
    note: "All variants available",
  },
  {
    key: "fortuner",
    title: "Toyota Fortuner",
    brand: "SUV",
    image: "/cars/Fortuner.avif",
    description: "High-seating SUV presence with rugged capability.",
    note: "All variants available",
  },
  {
    key: "e450",
    title: "Mercedes-Benz E-Class E 450",
    brand: "Luxury",
    tag: "Top",
    specs: "2999 cc • AT • Petrol • 12 kmpl",
    image: "/cars/E-450.jpg",
    description: "High-performance petrol E-Class variant.",
    note: "All variants available",
  },
  {
    key: "s350d",
    title: "Mercedes-Benz S-Class S 350d",
    brand: "Luxury",
    tag: "Base",
    specs: "2925 cc • AT • Diesel • 18 kmpl",
    image: "/cars/S-350.jpg",
    description: "Luxury diesel offering in the flagship S-Class.",
    note: "All variants available",
  },
];

const BRANDS = ["All", "Sedan", "SUV", "Luxury"];

export default function FleetPage() {
  const [brand, setBrand] = useState("All");
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 200);
    return () => clearTimeout(t);
  }, [query]);

  const list = useMemo(() => {
    const base = brand === "All" ? categoriesData : categoriesData.filter((c) => c.brand === brand);
    if (!debounced) return base;

    const tokens = debounced.split(/\s+/).filter(Boolean);
    const matchesTokens = (text) => tokens.every((tk) => text.includes(tk));

    return base.filter((c) => {
      const hay = [c.title, c.description, c.note].filter(Boolean).join(" ").toLowerCase();
      return matchesTokens(hay);
    });
  }, [brand, debounced]);

  const openFor = (modelName) => {
    setSelectedModel(modelName || "Vehicle");
    setDialogOpen(true);
  };

  return (
    <div style={{ backgroundColor: "#FFFAFA" }} className="min-h-screen text-gray-900">
      <Helmet>
        <title>Luxury & Budget Car Rental Fleet | Sedans, SUVs & More</title>
        <meta
          name="description"
          content="Choose from our premium fleet—sedans, SUVs, tempo travellers & hatchbacks for every trip. Comfort and class await. Explore our cars now!"
        />
        <link rel="canonical" href="https://taxitribe.in/our-fleet" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-50">
              <Car className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Premium Fleet</h1>
              <p className="text-sm text-gray-600">Curated corporate & executive vehicles for every need</p>
            </div>
          </div>

          {/* small logo on hero right */}
          <div className="hidden sm:block">
            <img src="/mnt/data/logo.png" alt="Taxi Tribe" className="h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* Sticky controls */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          {/* Brand chips */}
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={
                  "px-3 py-1.5 rounded-full text-sm border transition " +
                  (brand === b
                    ? "bg-amber-500 text-black border-amber-500"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50")
                }
              >
                {b}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 w-full md:w-96">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search models, brands, notes..."
              className="flex-1 bg-transparent outline-none placeholder:text-gray-400 text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {list.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <Sparkles className="h-8 w-8 mx-auto mb-3 text-amber-500" />
            No results. Try clearing filters or searching a simpler term.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {list.map((cat) => (
              <article
                key={cat.key}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative">
                  <img
                    src={safeSrc(cat.image)}
                    onError={(e) => (e.currentTarget.src = FALLBACK)}
                    alt={cat.title}
                    className="h-56 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-4 text-sm">
                    <span className="inline-block px-2 py-1 rounded-md bg-white/80 border border-gray-200 text-gray-700 text-xs">
                      {cat.brand}
                    </span>
                    {cat.tag ? (
                      <span className="ml-2 inline-block px-2 py-1 rounded-md bg-amber-100 text-amber-700 text-xs border border-amber-200">
                        {cat.tag}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{cat.title}</h3>
                      {cat.description ? <p className="mt-1 text-sm text-gray-600">{cat.description}</p> : null}
                    </div>
                    <button
                      onClick={() => openFor(cat.title)}
                      className="shrink-0 inline-flex items-center justify-center rounded-xl bg-amber-500 text-black font-semibold px-4 py-2 hover:bg-amber-600 active:translate-y-px transition"
                    >
                      Get Quote
                    </button>
                  </div>

                  {cat.note ? <p className="mt-4 text-sm text-gray-600">{cat.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SOPs & Best Practices (light) */}
      <div className="max-w-7xl mx-auto px-4">
        <SOPsSection />
        <BestPracticesSection />
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 mt-10 mb-16">
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to elevate your corporate travel?</h2>
              <p className="text-gray-700 mb-6">Guaranteed 10% savings on your current annual spends</p>
              <button
                onClick={() => setDialogOpen(true)}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
              >
                Get Quote
              </button>
            </div>
            <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center" />
          </div>
        </div>
      </div>

      {/* Booking dialog (external) */}
      <BookingDialog
        open={dialogOpen}
        model={selectedModel}
        onOpenChange={setDialogOpen}
        onSubmit={(payload) => {
          console.log("Booking payload", payload);
          setDialogOpen(false);
        }}
      />
    </div>
  );
}
