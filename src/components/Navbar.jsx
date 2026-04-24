import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' }

  
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>

              <div className="flex flex-col">
                <span
                  className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  TIZAK
                </span>
                <span
                  className={`text-[10px] tracking-wider transition-colors duration-300 ${
                    scrolled ? 'text-gray-500' : 'text-blue-100'
                  }`}
                >
                  SOFTWARE SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? pathname === link.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      : pathname === link.path
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-gray-100' : 'bg-white/10'
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-gray-800' : 'bg-white'
                } ${open ? 'rotate-45 translate-y-2' : ''}`}></span>

                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-gray-800' : 'bg-white'
                } ${open ? 'opacity-0' : ''}`}></span>

                <span className={`w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-gray-800' : 'bg-white'
                } ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-2 bg-white border-t border-gray-100">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-5 py-3 rounded-xl text-base font-medium ${
                  pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="block mt-4 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-semibold rounded-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}