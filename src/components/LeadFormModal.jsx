import { useRef, useEffect, useState } from 'react'
import { useLeadForm } from '../context/LeadFormContext'
import '../../public/styles/components/lead-form-modal.css'

const EMPTY_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

// ─── CRM Integration ──────────────────────────────────────────────────────────
// Replace this function body with your actual CRM API call.
//
// HubSpot example:
//   POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}
//
// Pipedrive example:
//   POST https://api.pipedrive.com/v1/persons?api_token=YOUR_TOKEN
//
// Generic backend:
//   POST /api/leads
// ─────────────────────────────────────────────────────────────────────────────
async function submitLead(data) {
  // TODO: replace with real CRM endpoint
  console.log('[LeadForm] Submitting lead:', data)

  // Simulated network delay — remove when wiring up real API
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Uncomment and adapt for your CRM:
  // const res = await fetch('/api/leads', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // if (!res.ok) throw new Error('CRM submit failed')
}

export default function LeadFormModal() {
  const { isOpen, source, closeLeadForm } = useLeadForm()
  const dialogRef = useRef(null)
  const firstInputRef = useRef(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  // Open / close the native dialog
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      dialog.showModal()
      // Delay focus so CSS animation doesn't jank
      requestAnimationFrame(() => firstInputRef.current?.focus())
    } else {
      dialog.close()
      // Reset form after closing animation finishes
      setTimeout(() => {
        setForm(EMPTY_FORM)
        setStatus('idle')
      }, 250)
    }
  }, [isOpen])

  // Close on backdrop click (click lands on <dialog> itself, not its children)
  function handleDialogClick(e) {
    if (e.target === dialogRef.current) closeLeadForm()
  }

  // Allow native ESC key but go through our state
  function handleCancel(e) {
    e.preventDefault()
    closeLeadForm()
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitLead({ ...form, source })
      setStatus('success')
      setTimeout(closeLeadForm, 2800)
    } catch {
      setStatus('error')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="lead-modal"
      onClick={handleDialogClick}
      onCancel={handleCancel}
      aria-labelledby="lead-modal-title"
    >
      <div className="lead-modal__box">

        {/* Header */}
        <div className="lead-modal__header">
          <div>
            <span className="lead-modal__tag">/ Get in touch /</span>
            <h2 className="lead-modal__title" id="lead-modal-title">
              Let's talk about your project
            </h2>
          </div>
          <button
            className="lead-modal__close"
            aria-label="Close"
            onClick={closeLeadForm}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="lead-modal__success">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <circle cx="24" cy="24" r="23" stroke="#2786EF" strokeWidth="1.5" />
              <path d="M13 24l8 8 14-16" stroke="#2786EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>Your request has been sent.<br />We'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="lead-modal__form" onSubmit={handleSubmit} noValidate>

            <div className="lead-modal__row">
              <label className="lead-modal__field">
                <span>Full name <span aria-hidden="true">*</span></span>
                <input
                  ref={firstInputRef}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="John Smith"
                />
              </label>
              <label className="lead-modal__field">
                <span>Company <span aria-hidden="true">*</span></span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  autoComplete="organization"
                  placeholder="Acme Corp"
                />
              </label>
            </div>

            <div className="lead-modal__row">
              <label className="lead-modal__field">
                <span>Email <span aria-hidden="true">*</span></span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="john@acme.com"
                />
              </label>
              <label className="lead-modal__field">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                />
              </label>
            </div>

            <label className="lead-modal__field">
              <span>I'm interested in</span>
              <div className="lead-modal__select-wrap">
                <select name="interest" value={form.interest} onChange={handleChange}>
                  <option value="">Select a product</option>
                  <option value="dist">DIST</option>
                  <option value="analytics">Analytics</option>
                  <option value="video-intelligence">Video Intelligence</option>
                  <option value="full-platform">Full Platform</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </label>

            <label className="lead-modal__field">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your use case or any questions you have…"
              />
            </label>

            {status === 'error' && (
              <p className="lead-modal__error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              className="lead-modal__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send request →'}
            </button>

          </form>
        )}
      </div>
    </dialog>
  )
}