import SignatureOscillator from "../components/SignatureOscillator";
import PathCard from "../components/PathCard";
import TestimonialCard from "../components/TestimonialCard";
import CalendlyEmbed from "../components/CalendlyEmbed";
import { testimonials } from "../data/testimonials";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 overflow-hidden px-6 pb-20 pt-16 md:flex-row md:pt-24">
        <div className="max-w-xl animate-fadeUp text-center md:text-left">
          <p className="axis-label text-xs uppercase tracking-widest text-graphite">
            x(t), y(t) — two independent parameters
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl">
            Degrees of <span className="text-brass">Freedom</span>
          </h1>
          <p className="mt-6 font-serif text-lg italic leading-relaxed text-paper-dim">
            Technical mentoring for engineers, and meditation music composed to
            steady the nervous system — two disciplined practices, traced from
            the same underlying idea.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#book"
              className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Book time with me
            </a>
            <a
              href="/music"
              className="rounded-full border border-sage/50 px-6 py-3 text-sm font-medium text-sage transition-colors hover:bg-sage/10"
            >
              Listen to the music
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-drift md:mx-0">
          <SignatureOscillator ratio={[3, 2]} />
        </div>
      </section>
      {/* Duality intro */}
      <section className="border-y border-graphite/30 bg-ink-raised/30 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-xl italic leading-relaxed text-paper sm:text-2xl">
            A system's state is described by its degrees of freedom — the
            independent variables that, moved together, produce everything the
            system can do.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-paper-dim">
            One practice sharpens how you reason about complex systems at work.
            The other slows one variable at a time — breath, attention, sound —
            until stillness is available on purpose. Same underlying discipline,
            pointed in two directions.
          </p>
        </div>
      </section>
      {/* Path cards */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <PathCard
            to="/mentoring"
            eyebrow="Practice 01 · x(t)"
            title="Mentoring"
            description="One-on-one and small-group mentoring for engineers navigating growth, technical decisions, and career inflection points."
            accent="brass"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A24B"
                strokeWidth="1.6"
              >
                <path d="M4 20v-1a6 6 0 0 1 6-6h0" />
                <circle cx="9" cy="7" r="3.2" />
                <path d="M14 20v-1a5 5 0 0 1 3-4.58" />
                <circle cx="17" cy="6.5" r="2.4" />
              </svg>
            }
          />
          <PathCard
            to="/music"
            eyebrow="Practice 02 · y(t)"
            title="Music"
            description="Meditation tracks composed for focus, sleep, and the quiet in between — long-form, low-tempo, built to disappear into."
            accent="sage"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7C9885"
                strokeWidth="1.6"
              >
                <path d="M4 15 Q 8 5, 12 15 T 20 15" />
              </svg>
            }
          />
        </div>
      </section>
      {/* Testimonials
      <section className="border-t border-graphite/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="axis-label text-center text-xs uppercase tracking-widest text-graphite">
            Recommendations
          </p>
          <h2 className="mt-3 text-center font-display text-2xl font-semibold text-paper">
            What people say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/testimonials"
              className="axis-label text-xs uppercase tracking-widest text-paper-dim hover:text-paper"
            >
              See all testimonials →
            </a>
          </div>
        </div>
      </section> */}

      {/* Booking */}
      <section
        id="book"
        className="border-t border-graphite/30 bg-ink-raised/30 px-6 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="axis-label text-xs uppercase tracking-widest text-brass">
            Book time
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-paper">
            Set up a mentoring session
          </h2>
          <p className="mt-3 text-sm text-paper-dim">
            Pick a time that works and we'll take it from there.
          </p>
          <div className="mt-8">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
