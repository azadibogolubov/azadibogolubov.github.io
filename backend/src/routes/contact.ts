import { Router } from 'express'
import type { ContactRequest } from '../types/index.js'

const router = Router()

router.post('/', (req, res) => {
  const body = req.body as Partial<ContactRequest>

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }

  // PLACEHOLDER: wire this up to email (e.g. Resend, SendGrid) or a Slack
  // webhook so enquiries actually reach you. For now it just logs and
  // acknowledges receipt.
  console.log('[contact] new enquiry:', body)

  res.status(202).json({ received: true })
})

export default router
