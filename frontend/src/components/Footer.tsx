export default function Footer() {
  return (
    <footer className="border-t border-graphite/30 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm text-paper">Degrees of Freedom</p>
          <p className="axis-label mt-1 text-[11px] text-graphite">
            n independent parameters — one system
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper-dim">
          <a href="/mentoring" className="hover:text-brass">Mentoring</a>
          <a href="/music" className="hover:text-sage">Music</a>
          <a href="/testimonials" className="hover:text-paper">Testimonials</a>
          <a href="/career" className="hover:text-paper">Resume &amp; Cover Letter</a>
          <a href="#book" className="hover:text-paper">Book time</a>
        </div>
        <p className="text-xs text-graphite">
          © {new Date().getFullYear()} Degrees of Freedom
        </p>
      </div>
    </footer>
  )
}
