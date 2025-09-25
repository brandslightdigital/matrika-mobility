import React, { useMemo, useState, useEffect } from "react";
import { Car, Search, Sparkles } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";

// -----------------------------------------------------------------------------
// FLEET PAGE — POLISHED, ATTRACTIVE, AND CLEAR (JS ONLY, NO PRICES)
// - Clean hero with subtle gradient and icon accents
// - Sticky search + quick filters
// - Robust search (tokenized, matches title/variant/specs/description)
// - Nicer cards with better hierarchy and hover motion
// - Reusable BookingDialog (external component you already have)
// - Image safety: spaces encoded, onError fallback
// -----------------------------------------------------------------------------

const safeSrc = (src) => (typeof src === "string" ? src.split(" ").join("%20") : src);
const FALLBACK = "/cars/placeholder.jpg"; // add a simple placeholder image in your public/cars

const categoriesData = [

  // {
  //   key: "e-class",
  //   title: "Mercedes-Benz E-Class",
  //   brand: "Mercedes",
  //   image: "/cars/Eclass.jpg",
  //   description: "Executive sedan. All E-Class variants available.",
  //   variants: [
  //     { id: "e200", name: "E-Class E 200", tag: "Base", specs: "1999 cc • AT • Petrol • 15 kmpl", image: "/cars/E-200.avif" },
  //     { id: "e220d", name: "E-Class E 220d", specs: "1993 cc • AT • Diesel • 15 kmpl", image: "/cars/E-220d.jpg" },
  //     { id: "e450", name: "E-Class E 450", tag: "Top", specs: "2999 cc • AT • Petrol • 12 kmpl", image: "/cars/E-450.jpg" },
  //   ],
  // },
  // {
  //   key: "s-class",
  //   title: "Mercedes-Benz S-Class",
  //   brand: "Mercedes",
  //   image: "/cars/mercedes.avif",
  //   description: "Flagship luxury. All S-Class variants available.",
  //   variants: [
  //     { id: "s350d", name: "S-Class S 350d", tag: "Base", specs: "2925 cc • AT • Diesel • 18 kmpl", image: "/cars/S-350.jpg" },
  //     { id: "s450", name: "S-Class S450 4Matic", tag: "Top", specs: "2999 cc • AT • Petrol • 12 kmpl", image: "/cars/S450.jpg" },
  //   ],
  // },
  // {
  //   key: "bmw-7",
  //   title: "BMW 7 Series",
  //   brand: "BMW",
  //   image: "/cars/7i.webp",
  //   description: "Full-size luxury with lounge-like rear seats.",
  //   variants: [
  //     { id: "740i-msport", name: "BMW 740i M Sport", specs: "2998 cc • AT • Petrol • 8 kmpl", image: "/cars/740i Sport.webp" },
  //     { id: "740d-msport", name: "BMW 740d M Sport", specs: "2993 cc • AT • Diesel • 12.1 kmpl", image: "/cars/740d.cms" },
  //   ],
  // },
  // {
  //   key: "bmw-5",
  //   title: "BMW 5 Series",
  //   brand: "BMW",
  //   image: "/cars/5s.avif",
  //   description: "Business-class sedan with driver-focused ergonomics.",
  //   variants: [
  //     { id: "530li", name: "BMW 530Li", specs: "1998 cc • AT • Petrol • 10.9 kmpl", image: "/cars/530Li.avif" },
  //   ],
  // },
  { key: "swift", title: "Maruti Suzuki Swift", brand: "Maruti", image: "/cars/swift.png", description: "All variants available.", note: "All variants available" },
  { key: "swift-dzire", title: "Maruti Suzuki Swift Dzire", brand: "Maruti", image: "/cars/dezire.jpg", description: "All variants available.", note: "All variants available" },
  { key: "crysta", title: "Toyota Crysta", brand: "Toyota", image: "/cars/innova.jpg", description: "Spacious MPV. All variants available.", note: "All variants available" },
  { key: "hycross", title: "Innova Hycross", brand: "Toyota", image: "/cars/hycross.avif", description: "Hybrid comfort. All variants available.", note: "All variants available" },
  { key: "fortuner", title: "Toyota Fortuner", brand: "Toyota", image: "/cars/Fortuner.avif", description: "High-seating SUV presence. All variants available.", note: "All variants available" },
];

const BRANDS = ["All", "Toyota", "Maruti"];

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
    let base = brand === "All" ? categoriesData : categoriesData.filter((c) => c.brand === brand);
    if (!debounced) return base;

    const tokens = debounced.split(/\s+/).filter(Boolean);
    const matchesTokens = (text) => tokens.every((tk) => text.includes(tk));

    return base.filter((c) => {
      const hay = [c.title, c.description].filter(Boolean).join(" ").toLowerCase();
      const vHay = (c.variants || [])
        .map((v) => [v.name, v.specs].filter(Boolean).join(" "))
        .join(" ")
        .toLowerCase();
      return matchesTokens(hay) || matchesTokens(vHay);
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
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
          <div className="flex items-center justify-center gap-2 text-amber-400/90 text-sm mb-2">
            <Car className="h-4 w-4" />
            <span>Premium Fleet</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Mercedes E & S as categories, variants included</h1>
          <p className="mt-3 text-center text-zinc-300 max-w-2xl mx-auto">Minimal clutter. Clean visuals. Search and quick filters that actually work.</p>
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
              placeholder="Search variants, specs, models..."
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
                    <span className="inline-block px-2 py-1 rounded-md bg-zinc-950/60 border border-zinc-800">{cat.brand}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{cat.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">{cat.description}</p>
                    </div>
                    <button
                      onClick={() => openFor(cat.title)}
                      className="shrink-0 inline-flex items-center justify-center rounded-xl bg-amber-500 text-black font-semibold px-4 py-2 hover:bg-amber-600 active:translate-y-px transition"
                    >
                      Book now
                    </button>
                  </div>

                  {/* Variants */}
                  {Array.isArray(cat.variants) && cat.variants.length > 0 && (
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cat.variants.map((v) => (
                        <li key={v.id} className="border border-zinc-800 rounded-xl p-4 bg-zinc-950/50 hover:border-amber-500/40 transition">
                          <div className="flex gap-3">
                            <img
                              src={safeSrc(v.image)}
                              onError={(e) => (e.currentTarget.src = FALLBACK)}
                              alt={v.name}
                              className="h-16 w-24 object-cover rounded-lg"
                              loading="lazy"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold leading-tight">{v.name}</h4>
                                {/* {v.tag ? (
                                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                    {v.tag}
                                  </span>
                                ) : null} */}
                              </div>
                              {v.specs ? <p className="text-xs text-zinc-400 mt-1">{v.specs}</p> : null}
                              <div className="mt-3">
                                <button
                                  onClick={() => openFor(v.name)}
                                  className="text-sm inline-flex items-center justify-center rounded-lg bg-amber-500 text-black font-medium px-3 py-1.5 hover:bg-amber-600 active:translate-y-px"
                                >
                                  Book now
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {!cat.variants && cat.note ? (
                    <p className="mt-4 text-sm text-zinc-300">{cat.note}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <SOPsSection/>
      <BestPracticesSection/>
      {/* CTA Section */}

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
              <p className="text-lg mb-8">
                “Guaranteed 10% savings on your current annual spends”
              </p>
              <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                Request a Corporate Proposal
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
