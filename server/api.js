import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(express.json())

// ─── Bitrix24 webhook (server-side only, never shipped to the browser) ───────
const BITRIX_WEBHOOK =
  'https://portal.propeople.kz/rest/522/4pxwu3whlt208lt4/crm.lead.add.json'

// ─── POST /api/leads.php (matches the URL used by the client) ───────────────
app.post('/api/leads.php', async (req, res) => {
  const { firstName, lastName, email, phone, country, companyName, request, source } = req.body

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'firstName, lastName and email are required' })
  }

  const payload = {
    fields: {
      TITLE: `New request from ${firstName} ${lastName}`,
      STATUS_ID: 'NEW',
      NAME: firstName,
      LAST_NAME: lastName,
      EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
      PHONE: phone ? [{ VALUE: phone, VALUE_TYPE: 'WORK' }] : [],
      COMMENTS: [
        country     && `<b>Country:</b> ${country}`,
        companyName && `<b>Company:</b> ${companyName}`,
        request     && `<b>Interest:</b> ${request}`,
        source      && `<b>Source:</b> ${source}`,
      ].filter(Boolean).join('<br>'),
    },
    params: { REGISTER_SONET_EVENT: 'Y' },
  }

  try {
    const response = await fetch(BITRIX_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (data.error) {
      console.error('[CRM] Bitrix24 error:', data.error_description)
      return res.status(502).json({ error: data.error_description || 'CRM error' })
    }

    return res.json({ ok: true, leadId: data.result })
  } catch (err) {
    console.error('[CRM] Network error:', err.message)
    return res.status(502).json({ error: 'Failed to reach CRM' })
  }
})

// ─── Production: serve Vite build ────────────────────────────────────────────
const dist = resolve(__dirname, '..', 'dist')
app.use(express.static(dist))
app.get('{*path}', (_req, res) => res.sendFile(resolve(dist, 'index.html')))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`API server listening on :${PORT}`))
