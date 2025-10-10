import React, { useMemo, useState, useEffect } from "react";
import { Car, Search, Sparkles } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";

// -----------------------------------------------------------------------------
// FLEET PAGE — FLAT LIST (NO SUBCATEGORIES, NO VARIANTS)
// -----------------------------------------------------------------------------

const safeSrc = (src) => (typeof src === "string" ? src.split(" ").join("%20") : src);
const FALLBACK = "/cars/placeholder.jpg"; // keep a simple placeholder in /public/cars

// Flat data, same shape for ALL entries
const categoriesData = [
    { 
    key: "swift-dzire", 
    title: "Maruti Suzuki Swift Dzire", 
    brand: "Sedan", 
    image: "/cars/dezire.jpg", 
    description: "Compact sedan for city and family use.", 
    note: "All variants available" 
  },
  { 
    key: "crysta", 
    title: "Toyota Crysta", 
    brand: "SUV", 
    image: "/cars/innova.jpg", 
    description: "Spacious MPV offering comfort and versatility.", 
    note: "All variants available" 
  },
  { 
    key: "hycross", 
    title: "Innova Hycross", 
    brand: "SUV", 
    image: "/cars/hycross.avif", 
    description: "Hybrid MPV for efficiency and comfort.", 
    note: "All variants available" 
  },
  { 
    key: "fortuner", 
    title: "Toyota Fortuner", 
    brand: "SUV", 
    image: "/cars/Fortuner.avif", 
    description: "High-seating SUV presence with rugged capability.", 
    note: "All variants available" 
  },  
  { 
    key: "e450", 
    title: "Mercedes-Benz E-Class E 450", 
    brand: "Luxury", 
    tag: "Top", 
    specs: "2999 cc • AT • Petrol • 12 kmpl", 
    image: "/cars/E-450.jpg",
    description: "High-performance petrol E-Class variant.", 
    note: "All variants available" 
  },
  { 
    key: "s350d", 
    title: "Mercedes-Benz S-Class S 350d", 
    brand: "Luxury", 
    tag: "Base", 
    specs: "2925 cc • AT • Diesel • 18 kmpl", 
    image: "/cars/S-350.jpg",
    description: "Luxury diesel offering in the flagship S-Class.", 
    note: "All variants available" 
  },
  // { 
  //   key: "s450", 
  //   title: "Mercedes-Benz S-Class S450 4Matic", 
  //   brand: "Mercedes", 
  //   tag: "Top", 
  //   specs: "2999 cc • AT • Petrol • 12 kmpl", 
  //   image: "/cars/S450.jpg",
  //   description: "Petrol flagship with 4Matic all-wheel drive.", 
  //   note: "All variants available" 
  // },
  // { 
  //   key: "740i-msport", 
  //   title: "BMW 740i M Sport", 
  //   brand: "BMW", 
  //   specs: "2998 cc • AT • Petrol • 8 kmpl", 
  //   image: "/cars/740i Sport.webp",
  //   description: "Sporty petrol option in the 7 Series line-up.", 
  //   note: "All variants available" 
  // },
  // { 
  //   key: "740d-msport", 
  //   title: "BMW 740d M Sport", 
  //   brand: "BMW", 
  //   specs: "2993 cc • AT • Diesel • 12.1 kmpl", 
  //   image: "/cars/740d.cms",
  //   description: "Diesel-powered 7 Series with M Sport trim.", 
  //   note: "All variants available" 
  // },
  // { 
  //   key: "530li", 
  //   title: "BMW 530Li", 
  //   brand: "BMW", 
  //   specs: "1998 cc • AT • Petrol • 10.9 kmpl", 
  //   image: "/cars/530Li.avif",
  //   description: "Executive sedan from the BMW 5 Series range.", 
  //   note: "All variants available" 
  // }
];



// Include all brands for chips
const BRANDS = ["All",  "Sedan","SUV","Luxury",];

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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 z-10">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-10%,rgba(245,158,11,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
          <div className="flex items-center justify-center gap-2 text-amber-400/90 text-sm mt-2">
            <Car className="h-12 w-12" />
            <h1 className="text-2xl">Premium Fleet</h1>
          </div>
            {/* <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
              Curated corporate fleet, no subcategories
            </h1>
            <p className="mt-3 text-center text-zinc-300 max-w-2xl mx-auto">
              Minimal clutter. Clean visuals. Search and quick filters that actually work.
            </p> */}
        </div>
      </section>

      {/* Sticky controls */}
      <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-y border-zinc-900">
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
                    : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800")
                }
              >
                {b}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-zinc-900/70 border border-zinc-800 rounded-xl px-3 py-2 w-full md:w-96">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search models, brands, notes..."
              className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {list.length === 0 ? (
          <div className="text-center py-24 text-zinc-400">
            <Sparkles className="h-8 w-8 mx-auto mb-3" />
            No results. Try clearing filters or searching a simpler term.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {list.map((cat) => (
              <article
                key={cat.key}
                className="group bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl shadow-black/20 hover:shadow-amber-500/10 transition-all"
              >
                <div className="relative">
                  <img
                    src={safeSrc(cat.image)}
                    onError={(e) => (e.currentTarget.src = FALLBACK)}
                    alt={cat.title}
                    className="h-56 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-sm text-zinc-200/80">
                    <span className="inline-block px-2 py-1 rounded-md bg-zinc-950/60 border border-zinc-800">
                      {cat.brand}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{cat.title}</h3>
                      {cat.description ? (
                        <p className="mt-1 text-sm text-zinc-300">{cat.description}</p>
                      ) : null}
                    </div>
                    <button
                      onClick={() => openFor(cat.title)}
                      className="shrink-0 inline-flex items-center justify-center rounded-xl bg-amber-500 text-black font-semibold px-4 py-2 hover:bg-amber-600 active:translate-y-px transition"
                    >
                      Get Quote
                    </button>
                  </div>

                  {cat.note ? <p className="mt-4 text-sm text-zinc-300">{cat.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <SOPsSection />
      <BestPracticesSection />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2">
          <div className="p-12">
            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
            <p className="text-lg mb-8">“Guaranteed 10% savings on your current annual spends”</p>
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors"
            >
              Get Quote
            </button>
          </div>
          <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
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
