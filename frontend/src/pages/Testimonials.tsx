import { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";

type Filter = "all" | "mentoring" | "music";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  // { id: "mentoring", label: "Mentoring" },
  // { id: "music", label: "Music" },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.context === filter);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="text-center">
        <p className="axis-label text-xs uppercase tracking-widest text-graphite">
          Recommendations
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
          Testimonials
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper-dim">
          Notes from mentoring clients and people who listen to the music.
          Sourced from{" "}
          <a
            href="https://www.linkedin.com/in/azadibogolubov/details/recommendations/"
            className="text-sky-400 decoration-graphite/60 hover:decoration-paper-dim transition-colors"
          >
            LinkedIn recommendations
          </a>{" "}
          and direct feedback.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`axis-label rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
              filter === f.id
                ? "border-brass bg-brass text-ink"
                : "border-graphite/40 text-paper-dim hover:border-paper-dim hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-sm text-paper-dim">
          No testimonials in this category yet.
        </p>
      )}

      {/*<div className="mx-auto mt-16 max-w-xl rounded-2xl border border-dashed border-brass/30 bg-ink-raised/40 p-6 text-center">
        <p className="axis-label text-xs uppercase tracking-widest text-brass">
          Adding real recommendations
        </p>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">
          LinkedIn doesn't offer a public API for recommendations. Copy the text
          from your profile's Recommendations section (with the person's OK to
          re-publish it here), then add it to{" "}
          <code className="rounded bg-ink px-1.5 py-0.5 text-xs text-paper">
            src/data/testimonials.ts
          </code>{" "}
          — every entry on this page comes from that one file.
        </p>
      </div>*/}
    </section>
  );
}
