import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium rounded-full mb-6">
            🚀 Uganda's Digital Transformation Partner
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            We Build Software <br />
            <span className="text-blue-300">That Moves Africa</span>
            <br />Forward
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-xl">
            TIZAK Software Solutions designs, develops, and deploys cutting-edge digital platforms,
            mobile apps, and IT systems tailored for African businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects"
              className="px-8 py-3.5 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
              View Our Work
            </Link>
            <Link to="/contact"
              className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}