import express from 'express'
import cors from 'cors'
import testimonialsRouter from './routes/testimonials.js'
import contactRouter from './routes/contact.js'

const app = express()
const PORT = process.env.PORT ?? 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/testimonials', testimonialsRouter)
app.use('/api/contact', contactRouter)

// PLACEHOLDER: Calendly's booking UI is normally embedded directly on the
// frontend (see frontend/src/components/CalendlyEmbed.tsx) via their widget
// script, so no backend route is required for basic scheduling. If you later
// want booking confirmations to trigger something server-side (e.g. logging
// a new mentee, sending a welcome email), add a route here that receives
// Calendly webhooks — https://developer.calendly.com/api-docs/webhooks.

app.listen(PORT, () => {
  console.log(`Degrees of Freedom API listening on http://localhost:${PORT}`)
})
