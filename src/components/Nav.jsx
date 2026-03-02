import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../../public/styles/components/nav.css'

const navItems = [
  { to: '/', label: 'Home' },
  {
    label: 'Products',
    children: [
      { to: '/dist', label: 'DIST' },
      { to: '/analytics', label: 'Analytics' },
      { to: '/engineering-culture', label: 'Video Intelligence' },
    ],
  },
  { to: '/solutions', label: 'Solutions' },
  {
    label: 'Company',
    children: [
      { to: '/company', label: 'About' },
      { to: '/team', label: 'Team' },
      { to: '/careers', label: 'Why 7G' },
      { to: '/esg', label: 'ESG' },
    ],
  },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  // Close menu on route change
  useState(() => {
    setOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Detect section background — update nav theme
  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-theme]')
    if (!sections.length) {
      setTheme('dark')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTheme(entry.target.dataset.navTheme)
          }
        })
      },
      // Active zone: strip from just below the nav (~80px) to 55% down
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname])

  const toggleDropdown = (label) =>
    setOpenDropdown(prev => (prev === label ? null : label))

  const closeAll = () => {
    setOpen(false)
    setOpenDropdown(null)
  }

  return (
    <>
    {/* SVG filter for lens distortion — referenced by CSS via url(#lens-distort) */}
    {/* SVG glass filter — Refraction 100, Dispersion 100, Frost 10 */}
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        <filter
          id="lens-distort"
          x="-25%" y="-25%"
          width="150%" height="150%"
          colorInterpolationFilters="sRGB"
        >
          {/* Noise map for displacement */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.016"
            numOctaves="2"
            seed="5"
            result="noise"
          />

          {/* Dispersion 100 — extract R, G, B and displace each differently */}
          <feColorMatrix type="matrix" in="SourceGraphic"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="src-r" />
          <feColorMatrix type="matrix" in="SourceGraphic"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="src-g" />
          <feColorMatrix type="matrix" in="SourceGraphic"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="src-b" />

          {/* Refraction 100 — R displaced most, B least (full chromatic spread) */}
          <feDisplacementMap in="src-r" in2="noise" scale="62"
            xChannelSelector="R" yChannelSelector="G" result="disp-r" />
          <feDisplacementMap in="src-g" in2="noise" scale="38"
            xChannelSelector="R" yChannelSelector="G" result="disp-g" />
          <feDisplacementMap in="src-b" in2="noise" scale="14"
            xChannelSelector="R" yChannelSelector="G" result="disp-b" />

          {/* Recombine channels via screen blend */}
          <feBlend in="disp-r" in2="disp-g" mode="screen" result="blend-rg" />
          <feBlend in="blend-rg" in2="disp-b" mode="screen" />
        </filter>
      </defs>
    </svg>

    <nav className={`nav nav--${theme}${open ? ' nav--open' : ''}`}>

      {/* Left — logo */}
      <NavLink to="/" className="nav__logo">
        <img src="/img/7Generation logo 4.svg" alt="7 Generation" />
      </NavLink>

      {/* Center — links */}
      <ul className="nav__links">
        {navItems.map((item) => {
          if (item.children) {
            const isOpen = openDropdown === item.label
            return (
              <li
                key={item.label}
                className={`nav__dropdown${isOpen ? ' nav__dropdown--open' : ''}`}
                onPointerEnter={(e) => { if (e.pointerType === 'mouse') setOpenDropdown(item.label) }}
                onPointerLeave={(e) => { if (e.pointerType === 'mouse') setOpenDropdown(null) }}
              >
                <button
                  className="nav__link nav__dropdown-toggle"
                  onClick={() => {
                    // On touch devices (no native hover), click toggles open/close.
                    // On mouse devices hover already handles it — skip to avoid double-fire.
                    if (!window.matchMedia('(hover: hover)').matches) {
                      toggleDropdown(item.label)
                    }
                  }}
                  aria-expanded={isOpen}
                >
                  {item.label}
                </button>
                <ul className="nav__dropdown-menu">
                  {item.children.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          `nav__link nav__dropdown-item${isActive ? ' active' : ''}`
                        }
                        onClick={closeAll}
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }

          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' active' : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          )
        })}
      </ul>

      {/* Right — login */}
      <button className="nav__login">Login</button>

      {/* Mobile burger */}
      <button
        className="nav__burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

    </nav>
    </>
  )
}
