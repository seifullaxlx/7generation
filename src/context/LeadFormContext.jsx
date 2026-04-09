import { createContext, useContext, useState, useCallback } from 'react'

const LeadFormContext = createContext(null)

export function LeadFormProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState('')

  const openLeadForm = useCallback((src = '') => {
    setSource(src)
    setIsOpen(true)
  }, [])

  const closeLeadForm = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <LeadFormContext.Provider value={{ isOpen, source, openLeadForm, closeLeadForm }}>
      {children}
    </LeadFormContext.Provider>
  )
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext)
  if (!ctx) throw new Error('useLeadForm must be used inside LeadFormProvider')
  return ctx
}