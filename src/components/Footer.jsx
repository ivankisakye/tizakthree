import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Software Development', path: '/services' },
    { name: 'Website Development', path: '/services' },
    { name: 'Mobile App Development', path: '/services' },
    { name: 'IT Consulting', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-slate-900 text-gray-300 overflow-hidden">
      
      {/* Sleek Globe Background - Right Side */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer rotating ring */}
          <circle cx="200" cy="200" r="180" stroke="url(#globeGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 8">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="30s" repeatCount="indefinite" />
          </circle>
          
          {/* Second ring - counter rotating */}
          <circle cx="200" cy="200" r="150" stroke="url(#globeGrad2)" strokeWidth="1" fill="none" strokeDasharray="4 12">
            <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="25s" repeatCount="indefinite" />
          </circle>
          
          {/* Horizontal latitude lines */}
          <ellipse cx="200" cy="200" rx="160" ry="50" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="200" cy="200" rx="120" ry="35" stroke="#8b5cf6" strokeWidth="0.8" fill="none" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="22s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="200" cy="200" rx="80" ry="20" stroke="#06b6d4" strokeWidth="0.6" fill="none" opacity="0.3">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="18s" repeatCount="indefinite" />
          </ellipse>
          
          {/* Vertical longitude lines */}
          <ellipse cx="200" cy="200" rx="50" ry="160" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4" transform="rotate(30, 200, 200)">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="200" cy="200" rx="35" ry="120" stroke="#8b5cf6" strokeWidth="0.8" fill="none" opacity="0.3" transform="rotate(-45, 200, 200)">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
          </ellipse>
          
          {/* Continent silhouettes - simplified shapes */}
          <g opacity="0.3">
            {/* Africa shape */}
            <path d="M160 120 L170 115 L185 118 L190 125 L188 135 L195 140 L200 145 L198 155 L190 160 L185 165 L180 170 L175 168 L170 160 L165 155 L160 150 L155 145 L152 135 L155 125 L160 120Z" fill="#3b82f6" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
            </path>
            
            {/* North America shape */}
            <path d="M80 100 L95 90 L110 92 L115 100 L112 110 L118 115 L120 125 L115 130 L105 128 L95 125 L88 118 L82 110 L80 100Z" fill="#8b5cf6" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="7s" repeatCount="indefinite" />
            </path>
            
            {/* South America shape */}
            <path d="M110 180 L120 175 L128 180 L132 190 L130 200 L125 210 L118 215 L112 210 L108 200 L110 190 L110 180Z" fill="#06b6d4" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
            </path>
            
            {/* Europe/Asia shape */}
            <path d="M210 90 L225 85 L240 88 L250 95 L255 105 L250 115 L240 118 L230 115 L220 110 L215 105 L210 100 L210 90Z" fill="#10b981" opacity="0.3">
              <animate attributeName="opacity" values="0.25;0.55;0.25" dur="6.5s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Pulsing center dot */}
          <circle cx="200" cy="200" r="6" fill="#3b82f6" opacity="0.6">
            <animate attributeName="r" values="3;10;3" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Small orbiting dots */}
          <circle cx="200" cy="20" r="2.5" fill="#60a5fa" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="380" r="2" fill="#c084fc" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="14s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="200" r="2" fill="#22d3ee" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="-360 200 200" dur="16s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <defs>
            <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="globeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Sleek Globe Background - Left Side (smaller) */}
      <div className="absolute top-20 left-0 w-64 h-64 md:w-80 md:h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="130" stroke="#3b82f6" strokeWidth="1" fill="none" strokeDasharray="6 6">
            <animateTransform attributeName="transform" type="rotate" from="360 150 150" to="0 150 150" dur="25s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="150" cy="150" rx="110" ry="35" stroke="#8b5cf6" strokeWidth="0.8" fill="none" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="18s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="150" cy="150" r="4" fill="#3b82f6" opacity="0.4">
            <animate attributeName="r" values="2;8;2" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          
          {/* Brand Column - Matching Navbar logo style */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src="/logo1.png"
                  alt="Logo"
                  className="w-14 h-12 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-[11px] tracking-[0.25em] font-semibold uppercase text-blue-400">
                    SOFTWARE
                  </span>
                  <span className="text-[9px] tracking-[0.35em] font-light uppercase text-gray-400">
                    SOLUTIONS
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Building digital solutions that power businesses across Africa and beyond. 
              We transform ideas into impactful software products.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 group"
                >
                  <i className={`${social.icon} text-base group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-gray-400 group">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@tizaksoftware.com" className="hover:text-blue-400 transition-colors break-all">info@tizaksoftware.com</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400 group">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+256772168241" className="hover:text-blue-400 transition-colors">+256 772 168 241</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400 group">
                <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Chain Of liberty | Spn : CB40 <br /> P.O. BOX 201946 Kampala GPO, <br />Uganda</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-4">Subscribe to Newsletter</h5>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm whitespace-nowrap"
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-green-400 mt-3 animate-fade-in">
                  Thanks for subscribing! Check your inbox.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <span className="text-gray-700">•</span>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} TIZAK Software Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}