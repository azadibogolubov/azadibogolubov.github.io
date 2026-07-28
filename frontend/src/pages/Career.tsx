import { useState } from 'react'

/**
 * Resume & cover letter page. Wrapped in the shared site Nav/Footer (see App.tsx)
 * so it has the same top navigation as every other page.
 *
 * Resume content below is real. Cover letter tab is still placeholder text —
 * swap it in once you have one. Point resumePdfUrl / coverLetterPdfUrl at
 * hosted PDFs to enable the download buttons.
 */

const resumePdfUrl = ''
const coverLetterPdfUrl = ''

const name = 'Azadi Bogolubov'
const location = 'Atlanta, GA'
const contact = {
  phone: '(503)-933-3494',
  email: 'AzadiBogolubov@gmail.com',
  linkedin: 'http://www.linkedin.com/in/azadibogolubov',
}

const skillGroups = [
  { label: 'Languages / Frameworks', items: ['Java / Spring Boot', 'C#', 'Node.js / React'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'] },
  {
    label: 'DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'OpenShift', 'ActiveMQ / RabbitMQ / NATS.io'],
  },
  { label: 'Other', items: ['Software Architecture', 'Microservices', 'Management (2 years)'] },
]

const experience = [
  {
    role: 'Software Architect',
    org: 'Fortna',
    location: 'Atlanta, GA (Hybrid)',
    period: '11/23 — 8/24',
    bullets: [
      'Implemented multi-tenant inbound receiving solution for warehouse systems using Java and NATS.io.',
      'Presented proposals to the architecture review board for new offerings and process improvement.',
      'Acted as SME in the space of middleware, data engineering, Java, Android, and mobile technologies.',
      'Responsible for managing deployments with OpenShift Kubernetes to deal with orchestration across teams.',
    ],
  },
  {
    role: 'Full Stack Engineering Manager',
    org: 'Accenture',
    location: 'Atlanta, GA (Hybrid)',
    period: '1/22 — 11/23',
    bullets: [
      'Implemented mainframe transformation for client from COBOL to Java/Spring/Postgres stack hosted on OpenShift Kubernetes.',
      'Designed micro-frontend architecture in Node.js and React with Webpack module federation for dynamic discovery without redeployment.',
      'Taught and implemented reactive event programming to increase performance and capability of apps.',
      'Involved in both the sales and delivery phase of products and offerings.',
      'Created internal GenAI tool using Azure Cognitive Services.',
    ],
  },
  {
    role: 'Career Break',
    org: '',
    location: '',
    period: '6/21 — 12/21',
    bullets: [
      'Worked to develop skills for management transition.',
      'Worked on a personal entrepreneur venture called Degrees of Freedom coaching business.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'NAVEX Global',
    location: 'Lake Oswego, OR (Remote)',
    period: '4/20 — 5/21',
    bullets: [
      'Worked with C#/Node.js/React on Customer Manager system hosted using microservices on AWS ECS.',
      'Worked on the design of global service catalog and microservice interaction patterns with Backstage.io.',
      'Worked with AWS to facilitate microservice communication and architecture with in-house products.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'NWEA',
    location: 'Portland, OR',
    period: '2/18 — 1/20',
    bullets: [
      'Microservice transformation of legacy app in Java/Spring/MongoDB/MySQL/React with AWS ECS.',
      'Introduced TDD, reducing QA phase bug findings and increasing time to release by 50%.',
      'Converted DB code to utilize Reactive Core, resulting in a 20x performance increase over the legacy implementation.',
      'Increased runtime performance by 99.4%, from 5 second average response times to under 30ms.',
    ],
  },
]

const contractExperience = [
  {
    role: 'Java Programmer',
    org: 'Beaverton Toyota',
    location: 'Beaverton, OR',
    period: '5/17 — 2/18',
    bullets: [
      'Member of the founding team focused on AWS based microservice systems to modernize car buying.',
      'Involved in the hiring of new team members, as well as overseeing all aspects of the development.',
      'Developed microservice architecture for production of highly customized PDFs with e-signing.',
      'Utilized Java/Spring, MongoDB, and Angular 4 for a microservice-based online car sales platform.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    org: 'SATO Global Solutions (via Insight Global)',
    location: 'Fort Lauderdale, FL',
    period: '11/16 — 2/17',
    bullets: [
      'Android Engineer responsible for the creation and maintenance of all facets of retail sales software.',
      'Utilized MongoDB and RabbitMQ for handling persistence and beacon communications.',
      'Handled performance analysis and increased runtime performance for multiple apps.',
      'Authored DevOps scripts to deploy across environments and operating systems using Jenkins.',
    ],
  },
  {
    role: 'Senior Android Software Engineer',
    org: 'Cigna (via Randstad)',
    location: 'Portland, OR',
    period: '1/16 — 10/16',
    bullets: [
      'Introduced automated test suite which resulted in a 25% reduction in regression test time.',
      'Created web services in Java/Spring/Node.js/MongoDB for web/mobile apps with RabbitMQ.',
      'Trained QA teams on the process of writing automation test suites.',
    ],
  },
  {
    role: 'Mobile Application Developer',
    org: 'Xerox (via DiSYS)',
    location: 'Wilsonville, OR',
    period: '1/15 — 9/15',
    bullets: [
      'Responsible for UI/integration of Android mobile REST API-based internet printing apps.',
      'Worked with an offshore team of engineers to facilitate the integration of the UI to back-end.',
    ],
  },
]

const certifications = [
  { name: 'AWS Certified Developer Associate', credential: 'BH085JPBMNRQQ6KD' },
  { name: 'Accenture Technical Architect', credential: 'ABMT0000034991' },
]

const education = {
  school: 'Portland State University',
  location: 'Portland, OR',
  detail: 'B.Sc. Computer Science / Minor: Mathematics',
}

export default function Career() {
  const [tab, setTab] = useState<'resume' | 'cover-letter'>('resume')

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className="axis-label mb-8 text-xs uppercase tracking-widest text-graphite">
        Resume &amp; Cover Letter
      </p>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-full border border-graphite/40 p-1">
            <button
              onClick={() => setTab('resume')}
              className={`axis-label rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                tab === 'resume' ? 'bg-brass text-ink' : 'text-paper-dim hover:text-paper'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => setTab('cover-letter')}
              className={`axis-label rounded-full px-5 py-2 text-xs uppercase tracking-widest transition-colors ${
                tab === 'cover-letter' ? 'bg-brass text-ink' : 'text-paper-dim hover:text-paper'
              }`}
            >
              Cover Letter
            </button>
          </div>

          {tab === 'resume' && resumePdfUrl && (
            <a
              href={resumePdfUrl}
              download
              className="axis-label rounded-full border border-brass/60 px-4 py-2 text-xs uppercase tracking-widest text-brass hover:bg-brass hover:text-ink"
            >
              Download PDF
            </a>
          )}
          {tab === 'cover-letter' && coverLetterPdfUrl && (
            <a
              href={coverLetterPdfUrl}
              download
              className="axis-label rounded-full border border-brass/60 px-4 py-2 text-xs uppercase tracking-widest text-brass hover:bg-brass hover:text-ink"
            >
              Download PDF
            </a>
          )}
        </div>

        {tab === 'resume' ? (
          <section className="animate-fadeUp">
            <h1 className="font-display text-3xl font-semibold text-paper">{name}</h1>
            <p className="mt-1 text-sm text-paper-dim">{location}</p>
            <div className="axis-label mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-graphite">
              <span>{contact.phone}</span>
              <a href={`mailto:${contact.email}`} className="hover:text-brass">
                {contact.email}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-brass">
                LinkedIn ↗
              </a>
            </div>

            {!resumePdfUrl && (
              <p className="mt-4 rounded-lg border border-dashed border-brass/30 px-4 py-2 text-xs text-graphite">
                Set <code className="rounded bg-ink-raised px-1 py-0.5">resumePdfUrl</code> in{' '}
                <code className="rounded bg-ink-raised px-1 py-0.5">src/pages/Career.tsx</code> to enable the
                download button.
              </p>
            )}

            <h2 className="mt-10 axis-label text-xs uppercase tracking-widest text-brass">Skills</h2>
            <div className="mt-4 space-y-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <span className="axis-label w-44 shrink-0 text-xs text-graphite">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-graphite/40 px-3 py-1 text-xs text-paper-dim"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 axis-label text-xs uppercase tracking-widest text-brass">
              Professional Experience
            </h2>
            <div className="mt-4 space-y-8">
              {experience.map((job, i) => (
                <div key={i} className="border-l-2 border-graphite/30 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-base font-semibold text-paper">
                      {job.role}
                      {job.org && <> · <span className="text-paper-dim">{job.org}</span></>}
                    </p>
                    <span className="axis-label text-xs text-graphite">{job.period}</span>
                  </div>
                  {job.location && <p className="text-xs text-graphite">{job.location}</p>}
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-paper-dim">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="mt-10 axis-label text-xs uppercase tracking-widest text-brass">
              Contract / Startup Experience
            </h2>
            <div className="mt-4 space-y-8">
              {contractExperience.map((job, i) => (
                <div key={i} className="border-l-2 border-graphite/30 pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-base font-semibold text-paper">
                      {job.role} · <span className="text-paper-dim">{job.org}</span>
                    </p>
                    <span className="axis-label text-xs text-graphite">{job.period}</span>
                  </div>
                  <p className="text-xs text-graphite">{job.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-paper-dim">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="mt-10 axis-label text-xs uppercase tracking-widest text-brass">Certifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-paper-dim">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="text-paper">{c.name}</span>
                  {' — '}
                  <span className="axis-label text-xs text-graphite">Credential ID {c.credential}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 axis-label text-xs uppercase tracking-widest text-brass">Education</h2>
            <div className="mt-4 text-sm text-paper-dim">
              <p className="font-display text-base font-semibold text-paper">
                {education.school} <span className="font-normal text-paper-dim">— {education.location}</span>
              </p>
              <p className="mt-1">{education.detail}</p>
            </div>
          </section>
        ) : (
          <section className="animate-fadeUp font-serif text-base leading-relaxed text-paper-dim">
            <p className="text-xs text-graphite">Date</p>
            <p className="mt-6">Dear Hiring Manager,</p>
            <p className="mt-4">
              Replace this paragraph with your real opening — what the role is, and the one
              sentence version of why you're a fit for it.
            </p>
            <p className="mt-4">
              Second paragraph: a specific story that proves the fit — a project, a decision, a
              result — rather than a list of adjectives.
            </p>
            <p className="mt-4">
              Closing paragraph: what you're looking for next, and a clear, low-friction call to
              action.
            </p>
            <p className="mt-6">Sincerely,<br />{name}</p>
          </section>
        )}
    </main>
  )
}
