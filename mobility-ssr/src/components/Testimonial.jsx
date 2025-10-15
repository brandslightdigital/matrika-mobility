import { useEffect, useMemo, useRef, useState } from "react";

/**
 * TaxiTestimonials (Continuous Carousel)
 * - Seamless, slow, continuous auto-scroll (no stop-start)
 * - Dark theme to match your site
 * - Pause on hover/focus
 * - Optional manual controls (commented below)
 * - No external deps
 */
export default function TaxiTestimonials({
  testimonials,
  heading = "What our clients say",
  subheading = "We deliver Safe, Reliable, On‑time mobility. Our customers noticed.",
  // pixels per second; tweak for speed
  speed = 24,
}) {
const fallback = useMemo(
  () => [
    {
      quote:
        "Booking with Taxi Tribe was seamless. The driver arrived early, the car was spotless, and my team reached the airport stress-free.",
      name: "Ananya Mehta",
      role: "Executive Assistant",
      company: "FutureTech Pvt Ltd",
      avatar: "",
    },
    {
      quote:
        "We needed daily office transfers for our staff. The rides were punctual every morning, and communication was excellent.",
      name: "Karan Sharma",
      role: "HR Manager",
      company: "BrightCore Solutions",
      avatar: "",
    },
    {
      quote:
        "Taxi Tribe handled our client delegation from abroad. Professional drivers and luxury cars created a great first impression.",
      name: "Ritu Kapoor",
      role: "Events Lead",
      company: "Summit Global",
      avatar: "",
    },
    {
      quote:
        "During our 3-day conference, the entire transport logistics ran without a hitch. Really reliable service.",
      name: "Mohit Verma",
      role: "Operations Head",
      company: "NextWave Conferences",
      avatar: "",
    },
    {
      quote:
        "Safe, courteous, and consistent. Our employees felt secure even in late-night drops, which matters a lot.",
      name: "Sonal Agarwal",
      role: "Admin",
      company: "Innova Consulting",
      avatar: "",
    },
  ],
  []
);

  const items = testimonials?.length ? testimonials : fallback;

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0); // current pixel offset
  const lastTsRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);
  const [slideW, setSlideW] = useState(0);

  // measure slide width on mount and resize
  useEffect(() => {
    const measure = () => {
      const el = wrapRef.current;
      if (!el) return;
      setSlideW(el.clientWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // continuous animation using RAF
  useEffect(() => {
    const total = slideW * items.length; // width of one set of slides
    if (!total) return;

    const step = (ts) => {
      if (pausedRef.current) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;
      // advance by speed px/s
      offsetRef.current += speed * dt;
      // wrap around smoothly when one full set has scrolled
      if (offsetRef.current >= total) offsetRef.current -= total;
      // apply transform
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [slideW, items.length, speed]);

  // pause on hover/focus
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resume);
    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
    };
  }, []);

  // duplicate items to enable seamless wrap (ABAB pattern)
  const doubled = useMemo(() => items.concat(items), [items]);

  return (
    <section
      aria-label="Client testimonials"
      className="relative mx-auto container px-4 py-16 sm:px-6 lg:px-8 bg-black"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        {subheading ? (
          <p className="mt-3 text-base text-neutral-400">"{subheading}"</p>
        ) : null}
      </div>

      <div
        ref={wrapRef}
        className="relative mt-10 overflow-hidden rounded-2xl bg-neutral-900/80 p-6 shadow-lg ring-1 ring-white/10 sm:p-10"
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ transform: "translateX(0)" }}
        >
          {doubled.map((t, i) => (
            <article
              key={i}
              className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 px-4"
              aria-roledescription="slide"
            >
              <figure className="h-full rounded-xl bg-neutral-900/60 px-6 py-8 text-center text-white ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-auto h-7 w-7 text-neutral-500"
                >
                  <path d="M7.17 6A5.001 5.001 0 0 1 12 2v3a2 2 0 0 0-2 2v2h4v9H5V9a3 3 0 0 1 2.17-2.87zM17.17 6A5.001 5.001 0 0 1 22 2v3a2 2 0 0 0-2 2v2h4v9h-9V9a3 3 0 0 1 2.17-2.87z" />
                </svg>
                <blockquote className="mt-4 text-lg leading-8">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center justify-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-black/10"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-neutral-700 ring-1 ring-black/10" />
                  )}
                  <div className="text-left">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-neutral-400">
                      {[t.role, t.company].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        {/* If you want arrows, uncomment below
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between p-2">
          <button
            type="button"
            onClick={() => (offsetRef.current = Math.max(0, offsetRef.current - (slideW * 0.8)))}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow ring-1 ring-black/10 backdrop-blur hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => (offsetRef.current = (offsetRef.current + slideW * 0.8))}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow ring-1 ring-black/10 backdrop-blur hover:bg-white"
          >
            ›
          </button>
        </div>
        */}
      </div>

      {/* tiny hint dots purely decorative; continuous scroll doesn't "snap" */}
      {/* <div className="mt-6 flex justify-center gap-1">
        {items.map((_, i) => (
          <span key={i} className="h-1.5 w-6 rounded-full bg-amber-400/60" />
        ))}
      </div> */}
    </section>
  );
}
