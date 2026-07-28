export interface Testimonial {
  id: string;
  name: string;
  role: string;
  /** 'mentoring' | 'music' — lets the same pool feed either page */
  context: "mentoring" | "music";
  quote: string;
  /** Populate once you export recommendations from LinkedIn */
  linkedinUrl?: string;
  avatarUrl?: string;
}

/**
 * PLACEHOLDER DATA.
 * Replace with your real LinkedIn recommendations. LinkedIn doesn't offer a public
 * API for recommendations, so the practical path is:
 *   1. Go to your profile → Recommendations → copy the text you want to feature.
 *   2. Ask the person if you may quote them publicly (LinkedIn recs are meant to be
 *      visible on your profile, but re-publishing elsewhere is a courtesy check).
 *   3. Paste the text + their name/role/photo below, or wire this file up to a CMS
 *      (Contentful, Sanity, or the backend /api/testimonials route already scaffolded)
 *      if you'd rather edit content without redeploying.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Christian L",
    role: "Backend Engineer",
    context: "mentoring",
    quote:
      "I made contact with Azadi to aid in my job search and was immediately impressed by his interpersonal skills and frank attitude to the complexities of navigating the job market. He kept me motivated, giving me practical tasks to grew my network and develop as a software engineer. I can tell he is very experienced with mentorship and would make serve as a valuable source of knowledge. I strongly recommend Azadi to anyone who wishes to receive personal 1-on-1 coaching for developing themselves as communicators and as software engineers.",
  },
  {
    id: "t2",
    name: "Yones A",
    role: "Resource Manager",
    context: "mentoring",
    quote:
      "When I first met Azadi, it was through LinkedIn from a mutual connection. I had just finished a coding bootcamp, and while I learned a lot, there was still some things lacking. We worked together through Javascript and Java, and helped solidify some of the skills I learned in code school, and now I am interviewing for positions both as a programmer and a technical recruiter.",
  },
  {
    id: "t3",
    name: "Keith S",
    role: "Senior Software Engineer",
    context: "mentoring",
    quote:
      "After working with Azadi, I can confidently say that his ability to architect backend systems, saved us time and money. From a printing solution that reduced print times by upwards of 70%, web hooks that saved on Dev Opp's time and redundant backup systems. He also opened my eyes to the wider profound world of programing, he's overall knowledge with computer systems connected dots in the abstract and more vague theories. Being able to break down theories into equations then methods was impressive to watch. I would strongly recommend Azadi for Engineering and Architecting Systems.   ",
  },
];
