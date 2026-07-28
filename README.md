# Degrees of Freedom

Website for the Degrees of Freedom business: technical mentoring + meditation music.

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Node + Express + TypeScript
- **Pages:** Home, Mentoring, Music, Testimonials, and a standalone Career page (resume + cover letter)

## Design concept

The visual and structural motif is a **Lissajous curve** — two independent oscillators
(literally, two "degrees of freedom") traced together to form one figure. It shows up as
the animated signature graphic on each page, and loosely as the site's structure: two
practices (mentoring / music), one underlying discipline.

Palette: ink (`#10161F`), paper (`#EAE3D3`), brass (`#C9A24B`, mentoring accent), sage
(`#7C9885`, music accent), graphite (`#545F6B`, neutral). Type: Space Grotesk (display),
Fraunces (serif, used for quotes/testimonials), JetBrains Mono (labels).

## Running it locally

You'll need Node 18+ and npm.

```bash
# Frontend
cd frontend
npm install
npm run dev        # http://localhost:5173

# Backend (separate terminal)
cd backend
npm install
npm run dev         # http://localhost:4000
```

The Vite dev server proxies `/api/*` to the backend on port 4000 (see
`frontend/vite.config.ts`), so once both are running the frontend can call
`fetch('/api/testimonials')` etc. without a CORS dance.

## Wiring up the three things you asked to expand later

### 1. Calendly

`frontend/src/components/CalendlyEmbed.tsx` is a ready-to-go inline widget.
Copy `frontend/.env.example` to `frontend/.env` and set:

```
VITE_CALENDLY_URL=https://calendly.com/your-handle/30min
```

Restart `npm run dev` and the "Book time" sections on Home and Mentoring turn into a
live scheduler automatically — no other code changes needed.

### 2. LinkedIn testimonials

LinkedIn doesn't provide a public API for recommendations, so the practical path is:

1. Go to your LinkedIn profile → Recommendations, and copy the text of each one you
   want to feature (and check with the person that you can re-publish it here).
2. Paste them into `frontend/src/data/testimonials.ts`, following the existing shape
   (`name`, `role`, `context`, `quote`, optional `linkedinUrl`).

They show up in three places: a 3-item preview on Home, a filtered preview on
Mentoring/Music, and the full list (with an All/Mentoring/Music filter) on the
standalone `/testimonials` page (`frontend/src/pages/Testimonials.tsx`). All of them
read from the same `testimonials.ts` file, so you only ever edit it once.

If you'd rather update testimonials without redeploying the frontend, the backend
already has a matching `GET /api/testimonials` route in
`backend/src/routes/testimonials.ts` — swap its in-memory array for a database call,
then change the frontend to `fetch('/api/testimonials')` instead of importing the
static file.

### 3. Resume & cover letter

`frontend/src/pages/Career.tsx` is a standalone route at `/career`, deliberately
**not** wrapped in the main site nav/footer, so it can be linked on its own (e.g. in a
job application) without pulling recruiters into the mentoring/music marketing site.

- Replace the placeholder name, experience, skills, and cover letter paragraphs with
  the real content.
- If you'd rather host finished PDFs, set `resumePdfUrl` / `coverLetterPdfUrl` at the
  top of the file — the download buttons activate automatically once those are set.

## Project structure

```
degrees-of-freedom/
├── frontend/
│   └── src/
│       ├── components/   Nav, Footer, SignatureOscillator, PathCard, TestimonialCard, CalendlyEmbed
│       ├── pages/         Home, Mentoring, Music, Testimonials, Career
│       └── data/          testimonials.ts, tracks.ts  ← edit these for real content
└── backend/
    └── src/
        ├── routes/        testimonials.ts, contact.ts
        └── index.ts       Express entry point
```
