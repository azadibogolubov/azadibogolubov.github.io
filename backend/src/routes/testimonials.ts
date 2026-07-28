import { Router } from 'express'
import type { Testimonial } from '../types/index.js'

const router = Router()

/**
 * PLACEHOLDER DATA — mirrors frontend/src/data/testimonials.ts.
 * Once you're ready to manage testimonials without redeploying the frontend,
 * point this at a database or CMS and delete the duplicate copy in the
 * frontend, having it fetch from GET /api/testimonials instead.
 */
const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Placeholder Name',
    role: 'Engineering Manager, Example Co.',
    context: 'mentoring',
    quote: 'Replace with a real LinkedIn recommendation.',
  },
]

router.get('/', (_req, res) => {
  res.json(testimonials)
})

export default router
