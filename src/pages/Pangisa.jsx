import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ============ DATA ============

const userTypes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Tenants',
    color: 'bg-blue-100 text-blue-600',
    description: 'Search, filter, and view available rental houses near you — all from your phone.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Landlords',
    color: 'bg-indigo-100 text-indigo-600',
    description: 'List your properties, upload photos, and connect directly with verified tenants.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Brokers & Agents',
    color: 'bg-purple-100 text-purple-600',
    description: 'Promote properties, manage listings, and grow your client base on one platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Estate Managers',
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Manage multiple properties on behalf of landlords from a single dashboard.',
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Smart Property Search',
    description: 'Find rental houses by location, price range, and property type — instantly.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
      </svg>
    ),
    title: 'Advanced Filters',
    description: 'Narrow your search by neighbourhood, price, bedrooms, and amenities.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Real Property Photos',
    description: 'Every listing includes verified images so you know exactly what you\'re viewing.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location-Based Discovery',
    description: 'Browse properties on a map and discover rentals close to where you need to be.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Direct Contact',
    description: 'Message landlords and agents directly — no middlemen, no delays.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Verified Listings',
    description: 'Listings are reviewed for accuracy — no fake properties, no outdated ads.',
    color: 'from-rose-500 to-rose-600',
  },
];

const problems = [
  { label: 'Scattered listings', sub: 'across brokers, signposts & social media' },
  { label: 'Physical searching', sub: 'walking neighbourhoods to find houses' },
  { label: 'Outdated info', sub: 'houses already taken still advertised' },
  { label: 'No direct contact', sub: 'multiple middlemen slow everything down' },
];

const solutions = [
  { label: 'Centralized marketplace', sub: 'all properties in one trusted place' },
  { label: 'Search from anywhere', sub: 'browse on your phone in seconds' },
  { label: 'Accurate & verified', sub: 'listings reviewed for honesty' },
  { label: 'Contact owners directly', sub: 'chat with landlords instantly' },
];

const legalLinks = [
  {
    to: '/policies',
    label: 'Privacy Policy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    description: 'How we collect, use, and protect your personal data.',
  },
  {
    to: '/policies',
    label: 'Terms & Conditions',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: 'The rules and terms that govern your use of Pangisa.',
  },
  {
    to: '/policies',
    label: 'Community Guidelines',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: 'Standards for respectful and safe use of our platform.',
  },
];

// ============ MAIN COMPONENT ============

export default function Pangisa() {

  // Scroll reveal — same pattern as homepage
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">



     {/* ========== HERO ========== */}
<section className="relative bg-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

  {/* Background Decorations */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 hidden lg:block rounded-bl-[80px] -z-10" />
  <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl -z-10" />

  {/* Navbar Contrast Band */}
  <div className="absolute top-0 left-0 right-0 h-28 md:h-36 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent z-10 pointer-events-none" />

  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          By TIZAK Software Solutions · Uganda
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Find Your
          <span className="text-blue-600"> Perfect Rental </span>
          Anywhere in Uganda
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
          Pangisa connects tenants, landlords, brokers, and estate managers
          on one modern platform — making house hunting easier, faster,
          and smarter.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">

          <a
            href="#features"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Explore Features
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-7 py-4 rounded-xl font-semibold transition duration-300"
          >
            Contact Us
          </Link>

        </div>

        {/* Reviews */}
        <div className="flex items-center gap-4">

          <div className="flex -space-x-3">
            {[
              'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80',
              'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=80&q=80',
              'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=80&q=80',
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div>
            <div className="flex text-yellow-400 text-sm">
              ★★★★★
            </div>

            <p className="text-sm text-gray-500">
              Trusted by tenants & landlords across Uganda
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="relative hidden lg:block">

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
            alt="Rental House"
            className="w-full h-[550px] object-cover"
          />
        </div>

        {/* Floating Card 1 */}
        <div className="absolute top-10 -left-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">
            Properties Listed
          </p>

          <h3 className="text-3xl font-bold text-gray-900">
            120+
          </h3>

          <p className="text-sm text-blue-600 font-medium">
            New this week
          </p>
        </div>

        {/* Floating Card 2 */}
        <div className="absolute bottom-10 -right-8 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 w-60">

          <div className="flex items-center gap-3 mb-3">

            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              🏠
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">
                House Found
              </h4>

              <p className="text-xs text-gray-500">
                Ntinda, Kampala
              </p>
            </div>

          </div>

          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Move-in ready · 2 bedrooms
          </p>

        </div>

      </div>

    </div>
  </div>
</section>





      {/* ========== WHAT IS PANGISA ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Text */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
                What Is Pangisa?
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Rental Discovery,{' '}
                <span className="text-blue-600">Simplified</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                In Uganda, finding a rental house still means walking streets, calling brokers, and checking scattered WhatsApp groups. It's slow, unreliable, and frustrating.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-gray-900">Pangisa changes that.</strong> Just like ride-hailing apps replaced street taxis, Pangisa centralizes Uganda's rental market into one clean, digital platform — where tenants search, landlords list, and everyone connects in seconds.
              </p>

              {/* Analogy callout */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-1">The Pangisa Idea</p>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    Transportation moved from street taxis to apps. Rentals in Uganda are making the same leap — and Pangisa is leading it.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem → Solution visual */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="grid grid-cols-1 gap-4">

                {/* Before */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Before Pangisa</span>
                  </div>
                  <div className="space-y-2.5">
                    {problems.map((p) => (
                      <div key={p.label} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-gray-800">{p.label}</span>
                          <span className="text-xs text-gray-500 ml-2">— {p.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="bg-blue-600 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">With Pangisa</span>
                  </div>
                  <div className="space-y-2.5">
                    {solutions.map((s) => (
                      <div key={s.label} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="text-sm font-semibold text-white">{s.label}</span>
                          <span className="text-xs text-blue-200 ml-2">— {s.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO IT'S FOR ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14 reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Who It's For</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Built for Everyone in the Rental Chain
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Whether you're searching for a house, listing a property, or managing dozens of units — Pangisa has a place for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {userTypes.map((user, index) => (
              <div
                key={user.title}
                className="reveal opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md p-6 transition-all"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${user.color} flex items-center justify-center mb-4`}>
                  {user.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{user.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section id="features" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14 reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Platform Features</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Everything You Need to Find Home
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              Pangisa packs the tools tenants, landlords, and agents need into one clean, fast mobile experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="reveal opacity-0 translate-y-10 transition-all duration-700 group bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md p-6 transition-all"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Dot background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14 reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">How It Works</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
              Get a Rental in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-14 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-white/20" />

            {[
              {
                step: '01',
                title: 'Create Your Account',
                desc: 'Sign up as a tenant, landlord, or agent in under a minute.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Search or List',
                desc: 'Tenants search by location and filters. Landlords post listings with photos and pricing.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Connect & Move In',
                desc: 'Contact the landlord or agent directly and arrange your visit — no broker fees needed.',
                icon: (
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div
                key={step.step}
                className="reveal opacity-0 translate-y-10 transition-all duration-700 text-center"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-5">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-400 text-white text-xs font-bold flex items-center justify-center">
                    {step.step.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LEGAL DOCUMENTS ========== */}
      <section className="py-14 sm:py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Legal & Policies</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Transparency You Can Trust
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm sm:text-base">
              We believe in being fully open about how Pangisa works. Read our legal documents below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {legalLinks.map((doc, index) => (
              <Link
                key={doc.label}
                to={doc.to}
                className="reveal opacity-0 translate-y-10 transition-all duration-700 group bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-md p-6 transition-all flex flex-col"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-4 text-blue-600 group-hover:text-white transition-all duration-300">
                  {doc.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors">{doc.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{doc.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read document
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Find Your Next Home?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
              Pangisa makes rental discovery fast, reliable, and stress-free. Join Uganda's growing rental marketplace today.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-base md:text-lg"
              >
                Contact TIZAK
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base md:text-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}