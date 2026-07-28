import SignatureOscillator from "../components/SignatureOscillator";
import TestimonialCard from "../components/TestimonialCard";
import CalendlyEmbed from "../components/CalendlyEmbed";
import { testimonials } from "../data/testimonials";

const focusAreas = [
  {
    label: "System design",
    detail: "Working through real architecture decisions, not textbook ones.",
  },
  {
    label: "Career inflection points",
    detail:
      "IC vs. management, when to move on, how to negotiate the next step.",
  },
  {
    label: "Technical communication",
    detail:
      "Writing the doc, running the review, saying the hard thing clearly.",
  },
  {
    label: "Unsticking a stuck project",
    detail: "A second pair of eyes on scope, tradeoffs, and what to cut.",
  },
];

export default function Mentoring() {
  const mentoringTestimonials = testimonials.filter(
    (t) => t.context === "mentoring",
  );

  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-16 md:flex-row md:pt-20">
        <div className="max-w-xl text-center md:text-left">
          <p className="axis-label text-xs uppercase tracking-widest text-brass">
            Practice 01 · x(t)
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
            Mentoring
          </h1>
          <p className="mt-6 text-base leading-relaxed text-paper-dim">
            For engineers who want a sounding board that's seen a few systems
            fail and a few careers turn a corner. Sessions are practical: bring
            the actual problem — the design doc, the offer, the team conflict —
            and we work it in real time.
          </p>
          <a
            href="#book"
            className="mt-8 inline-block rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Book a session
          </a>
        </div>
        <div className="mx-auto w-full max-w-xs md:mx-0">
          <SignatureOscillator
            ratio={[3, 2]}
            strokeColor="#C9A24B"
            size={340}
          />
        </div>
      </section>

      <section className="border-t border-graphite/30 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-semibold text-paper">
            What we can work on
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-graphite/30 bg-ink-raised/40 p-6"
              >
                <p className="font-display text-base font-semibold text-brass">
                  {f.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* {mentoringTestimonials.length > 0 && (
        <section className="border-t border-graphite/30 bg-ink-raised/30 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="axis-label text-center text-xs uppercase tracking-widest text-graphite">
              Recommendations
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {mentoringTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="/testimonials"
                className="axis-label text-xs uppercase tracking-widest text-paper-dim hover:text-brass"
              >
                See all testimonials →
              </a>
            </div>
          </div>
        </section>
      )} */}

      <section id="book" className="border-t border-graphite/30 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="axis-label text-xs uppercase tracking-widest text-brass">
            Book time
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-paper">
            Find a time that works
          </h2>
          <div className="mt-8">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
