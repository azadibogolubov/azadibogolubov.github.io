"use client";

import { useState } from "react";
import MusicSignature from "../components/MusicSignature";
import TestimonialCard from "../components/TestimonialCard";
import { tracks } from "../data/tracks";
import { testimonials } from "../data/testimonials";

/**
 * Lazy-loaded YouTube embed.
 *
 * Shows the video's thumbnail (no iframe, no network request to YouTube)
 * until the user clicks play — then swaps in the real embed. Keeps the
 * page light when there are many tracks, and gives visitors a real
 * preview image instead of a blank audio bar.
 *
 * Expects each track to optionally carry a `youtubeId` field
 * (the 11-character ID from a youtube.com/watch?v=<id> URL).
 */
function YouTubeEmbed({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-graphite/30">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative mt-4 block aspect-video w-full overflow-hidden rounded-lg border border-graphite/30"
      aria-label={`Play ${title} on YouTube`}
    >
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors group-hover:bg-ink/30">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 shadow-lg transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-ink">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function Music() {
  const musicTestimonials = testimonials.filter((t) => t.context === "music");

  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-16 pt-16 md:flex-row md:pt-20">
        <div className="max-w-xl text-center md:text-left">
          <p className="axis-label text-xs uppercase tracking-widest text-sage">
            Practice 02 · y(t)
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
            Music
          </h1>
          <p className="mt-6 text-base leading-relaxed text-paper-dim">
            Long-form, low-tempo pieces meant to sit in the background of focus,
            rest, or sleep without asking for attention. Each track holds to one
            or two slowly shifting ideas — nothing that pulls you out of what
            you're doing.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs md:mx-0">
          <MusicSignature size={340} />
        </div>
      </section>

      <section className="border-t border-graphite/30 px-6 py-16">
        <div className="mx-auto max-w-3xl space-y-5">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="rounded-2xl border border-graphite/30 bg-ink-raised/40 p-6 transition-colors hover:border-sage/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-paper">
                  {track.title}
                </h3>
                <span className="axis-label text-xs text-graphite">
                  {track.duration}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                {track.description}
              </p>

              {track.youtubeId && (
                <YouTubeEmbed youtubeId={track.youtubeId} title={track.title} />
              )}

              {track.audioSrc ? (
                <audio controls className="mt-4 w-full" src={track.audioSrc}>
                  Your browser doesn't support inline audio.
                </audio>
              ) : !track.youtubeId ? (
                <div className="mt-4 flex items-center gap-3 rounded-lg border border-dashed border-sage/30 px-4 py-3">
                  <span className="axis-label text-[11px] uppercase tracking-widest text-sage">
                    Audio not yet linked
                  </span>
                  <span className="text-xs text-graphite">
                    — set{" "}
                    <code className="rounded bg-ink px-1 py-0.5">audioSrc</code>{" "}
                    or{" "}
                    <code className="rounded bg-ink px-1 py-0.5">
                      youtubeId
                    </code>{" "}
                    in{" "}
                    <code className="rounded bg-ink px-1 py-0.5">
                      src/data/tracks.ts
                    </code>
                  </span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {musicTestimonials.length > 0 && (
        <section className="border-t border-graphite/30 bg-ink-raised/30 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="axis-label text-center text-xs uppercase tracking-widest text-graphite">
              What listeners say
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {musicTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="/testimonials"
                className="axis-label text-xs uppercase tracking-widest text-paper-dim hover:text-sage"
              >
                See all testimonials →
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
