import React, { useState, useEffect } from "react";

export default function BookingDialog({ open, model, onOpenChange, onSubmit }) {
  const [form, setForm] = useState({
    model: model || "",
    name: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    pickup: "",
    drop: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, model: model || "" }));
  }, [model]);

  if (!open) return null;

  const close = () => onOpenChange && onOpenChange(false);
  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      close();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

      <div className="relative w-full max-w-xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <h3 className="text-lg font-semibold">Book {form.model || "Vehicle"}</h3>
          <button
            onClick={close}
            className="p-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-6">
          {submitted ? (
            <div className="text-center">
              <p className="text-amber-400 font-medium">Request received.</p>
              <p className="text-zinc-300 mt-2 text-sm">
                We’ll reach out to confirm availability and details.
              </p>
              <button
                onClick={close}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-500 text-black font-semibold px-5 py-2.5 hover:bg-amber-600"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm text-zinc-300">Vehicle</label>
                <input
                  value={form.model}
                  onChange={(e) => update("model", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  placeholder="e.g., E-Class E 220d"
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Your name</label>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  inputMode="tel"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Pickup date</label>
                <input
                  type="date"
                  value={form.pickupDate}
                  onChange={(e) => update("pickupDate", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Pickup time</label>
                <input
                  type="time"
                  value={form.pickupTime}
                  onChange={(e) => update("pickupTime", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Pickup location</label>
                <input
                  value={form.pickup}
                  onChange={(e) => update("pickup", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  placeholder="e.g., Airport T3"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-zinc-300">Drop location</label>
                <input
                  value={form.drop}
                  onChange={(e) => update("drop", e.target.value)}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  placeholder="e.g., Connaught Place"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-zinc-300">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/40"
                  placeholder="Variant, color, or chauffeur requirement"
                />
              </div>

              <div className="md:col-span-2 flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-zinc-700 px-4 py-2 hover:bg-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-500 text-black font-semibold px-5 py-2.5 hover:bg-amber-600"
                >
                  Submit request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
