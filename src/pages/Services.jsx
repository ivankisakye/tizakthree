import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const allServices = [
  { icon: '💻', title: 'Software Development', description: 'End-to-end development of custom software applications tailored to your business needs, from planning to deployment.', color: 'from-blue-500 to-blue-600' },
  { icon: '🌐', title: 'Website Development', description: 'Professional websites and web apps — fast, mobile-friendly, and built for conversions.', color: 'from-indigo-500 to-indigo-600' },
  { icon: '📱', title: 'Mobile App Development', description: 'Android and iOS apps with intuitive UX, high performance, and scalable architecture.', color: 'from-purple-500 to-purple-600' },
  { icon: '🔗', title: 'System Integration', description: 'We connect disparate systems, databases, and APIs so your business runs as one seamless unit.', color: 'from-cyan-500 to-cyan-600' },
  { icon: '📊', title: 'IT Consulting', description: 'Strategic technology advice to guide your digital transformation and technology investments.', color: 'from-emerald-500 to-emerald-600' },
  { icon: '🛠️', title: 'Technical Support', description: 'Reliable, responsive technical support to keep your systems running and your team productive.', color: 'from-amber-500 to-amber-600' },
  { icon: '📣', title: 'Digital Marketing', description: 'SEO, social media, content marketing, and paid advertising strategies that grow your online presence.', color: 'from-rose-500 to-rose-600' },
  { icon: '☁️', title: 'Cloud Solutions', description: 'Cloud infrastructure setup, migration, and management for scalable and resilient operations.', color: 'from-teal-500 to-teal-600' },
];

const processSteps = [
  { number: '01', title: 'Discovery', description: 'We learn about your business, goals, and requirements.' },
  { number: '02', title: 'Planning', description: 'We create a detailed roadmap and architecture plan.' },
  { number: '03', title: 'Development', description: 'Agile development with regular updates and feedback.' },
  { number: '04', title: 'Deployment', description: 'Seamless launch with thorough testing and monitoring.' },
  { number: '05', title: 'Support', description: 'Ongoing maintenance and technical support.' },
];

const industries = [
  { name: 'Real Estate', icon: '🏠', description: 'Property management, rental systems, and real estate portals.' },
  { name: 'Education', icon: '🎓', description: 'School management systems, e-learning platforms.' },
  { name: 'Agriculture', icon: '🌾', description: 'Smart irrigation, farm management, supply chain.' },
  { name: 'Retail', icon: '🛍️', description: 'POS systems, e-commerce, inventory management.' },
  { name: 'Finance', icon: '💰', description: 'Fintech solutions, payment gateways, accounting.' },
  { name: 'Healthcare', icon: '🏥', description: 'Patient management, telemedicine, health records.' },
];

export default function Services() {
  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c2236d4b?w=1920&h=800&fit=crop" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">What We Do</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Everything you need to build, grow, and scale your digital presence — all under one roof.
          </p>
        </div>
      </section>

      {/* ========== SERVICES GRID SECTION ========== */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Comprehensive Solutions</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              We've Got You Covered
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              From concept to deployment, we provide end-to-end technology services
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, index) => (
              <div 
                key={service.title} 
                className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW WE WORK SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A transparent, collaborative approach to building great software
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES WE SERVE SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Industries</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              We Serve Diverse Industries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Tailored solutions for businesses across various sectors
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
                <p className="text-gray-500 text-sm ml-16">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Modern Tech Stack</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Technologies We Master
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We use the latest, most reliable technologies to build your solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Node.js', 'Python', 'Laravel', 'Flutter', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Tailwind', 'TypeScript', 'GraphQL'].map((tech, index) => (
              <div 
                key={tech} 
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-all duration-300 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">Why Choose TIZAK</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
              What Sets Us Apart
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-blue-100">Certified professionals with years of industry experience.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-blue-100">Tailored specifically to your business requirements.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-blue-100">From planning to maintenance, we're with you all the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Got questions? We've got answers
            </p>
          </div>
          
          <div className="space-y-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex software can take 3-6 months. We'll provide a clear timeline during consultation.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer ongoing maintenance?</h3>
              <p className="text-gray-600">Yes! We offer flexible maintenance and support packages to keep your systems running smoothly after launch.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What's your pricing model?</h3>
              <p className="text-gray-600">We offer fixed-price for well-defined projects and hourly rates for ongoing work. Every project gets a custom quote based on requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Tell us what you're building and we'll figure out how to make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                <span>Get a Free Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/projects" className="px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}