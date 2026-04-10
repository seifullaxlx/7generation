import { useRef, useEffect, useState } from 'react'
import { useLeadForm } from '../context/LeadFormContext'
import '../../public/styles/components/lead-form-modal.css'

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  companyName: '',
  request: '',
}

async function submitLead(data) {
  const res = await fetch('/api/leads.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error || 'Submit failed')
}

export default function LeadFormModal() {
  const { isOpen, source, closeLeadForm } = useLeadForm()
  const dialogRef = useRef(null)
  const firstInputRef = useRef(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      dialog.showModal()
      requestAnimationFrame(() => firstInputRef.current?.focus())
    } else {
      dialog.close()
      setTimeout(() => {
        setForm(EMPTY_FORM)
        setStatus('idle')
      }, 250)
    }
  }, [isOpen])

  function handleDialogClick(e) {
    if (e.target === dialogRef.current) closeLeadForm()
  }

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
                <span>First name <span aria-hidden="true">*</span></span>
                <input
                  ref={firstInputRef}
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                  placeholder="John"
                />
              </label>
              <label className="lead-modal__field">
                <span>Last name <span aria-hidden="true">*</span></span>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                  placeholder="Smith"
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

            <div className="lead-modal__row">
              <label className="lead-modal__field">
                <span>Country</span>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  placeholder="Kazakhstan"
                />
              </label>
              <label className="lead-modal__field">
                <span>Company <span aria-hidden="true">*</span></span>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                  autoComplete="organization"
                  placeholder="Acme Corp"
                />
              </label>
            </div>

            <label className="lead-modal__field">
              <span>I'm interested in</span>
              <div className="lead-modal__select-wrap">
                <select name="request" value={form.request} onChange={handleChange}>
                  <option value="">Select a product</option>
                  <option value="DIST">DIST</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Video Intelligence">Video Intelligence</option>
                  <option value="Full Platform">Full Platform</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
