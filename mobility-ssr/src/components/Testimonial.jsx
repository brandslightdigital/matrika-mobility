import { useEffect, useMemo, useRef, useState } from "react";

export default function TaxiTestimonials({
  testimonials,
  heading = "What our clients say",
  subheading = "We deliver Safe, Reliable, On-time mobility. Our customers noticed.",
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
  const offsetRef = useRef(0);
  const lastTsRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);
  const [slideW, setSlideW] = useState(0);

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

  useEffect(() => {
    const total = slideW * items.length;
    if (!total) return;

    const step = (ts) => {
      if (pausedRef.current) {
        lastTsRef.current = ts;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (!lastTsRef.current) lastTsRef.current = ts;

      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      offsetRef.current += speed * dt;

      if (offsetRef.current >= total) offsetRef.current -= total;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [slideW, items.length, speed]);

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

  const doubled = useMemo(() => items.concat(items), [items]);

  return (
    <section
      aria-label="Client testimonials"
      className="relative mx-auto container px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {heading}
        </h2>

        {subheading ? (
          <p className="mt-3 text-base text-gray-600">
            "{subheading}"
          </p>
        ) : null}
      </div>

      {/* Carousel */}
      <div
        ref={wrapRef}
        className="relative mt-10 overflow-hidden rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 sm:p-10"
      >
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
              <figure className="h-full rounded-xl bg-white px-6 py-8 text-center text-gray-900 shadow-sm ring-1 ring-gray-200">
                {/* Quote Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-auto h-7 w-7 text-amber-500"
                >
                  <path d="M7.17 6A5.001 5.001 0 0 1 12 2v3a2 2 0 0 0-2 2v2h4v9H5V9a3 3 0 0 1 2.17-2.87zM17.17 6A5.001 5.001 0 0 1 22 2v3a2 2 0 0 0-2 2v2h4v9h-9V9a3 3 0 0 1 2.17-2.87z" />
                </svg>

                {/* Quote */}
                <blockquote className="mt-4 text-lg leading-8 text-gray-800">
                  “{t.quote}”
                </blockquote>

                {/* User */}
                <figcaption className="mt-6 flex items-center justify-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-200 ring-1 ring-gray-300" />
                  )}
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {[t.role, t.company].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
