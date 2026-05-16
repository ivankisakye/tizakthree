import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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

  const values = [
    { icon: '🎯', title: 'Mission-Driven', desc: 'We build solutions that create real impact for African businesses and communities.' },
    { icon: '💡', title: 'Innovation First', desc: 'We stay ahead of technology trends to deliver future-proof digital products.' },
    { icon: '🤝', title: 'Client-Centered', desc: 'Your success is our success. We partner with you from concept to deployment.' },
    { icon: '🔒', title: 'Reliable & Secure', desc: 'We build robust, secure systems you can trust to run your business.' },
  ];

  const team = [
  { name: 'Andinda Moses', role: 'CEO & Founder', image: '/images/gt2pass.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Ella Namutebi', role: 'CTO', image: '/images/prof_lady.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Mohammad Zulqif', role: 'Lead Developer', image: '/images/moh.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Gabriel Kisakye', role: 'Project Manager', image: '/images/gab.jpg', social: { linkedin: '#', twitter: '#' } },
];

  const milestones = [
    { year: '2021', title: 'Company Founded', desc: 'TIZAK Software Solutions established in Kampala, Uganda.' },
    { year: '2022', title: 'First Major Product', desc: 'Launched Rental Housing System, serving 500+ landlords.' },
    { year: '2023', title: 'Expansion', desc: 'Expanded team and launched School Management System.' },
    { year: '2024', title: 'Pan-African Vision', desc: 'Launched Africa Voting Platform and reached 5+ countries.' },
  ];

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=800&fit=crop" 
            alt="About TIZAK" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Who We Are</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TIZAK</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            We are a Ugandan technology company on a mission to drive digital transformation
            across Africa through innovative software solutions.
          </p>
        </div>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Born in Uganda, <span className="text-blue-600">Built for Africa</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TIZAK Software Solutions was founded with a clear vision: to provide world-class digital
                solutions tailored for the African market. We understand the unique challenges and
                opportunities in our region, and we build accordingly.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From rental housing platforms to e-voting systems, our portfolio reflects our commitment
                to solving real problems using modern technology. We develop, design, license, and deploy
                software products alongside offering full-spectrum IT services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team brings together diverse expertise from software engineering, UI/UX design, 
                cloud infrastructure, and business strategy to deliver solutions that truly make a difference.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Work With Us
                </Link>
                <Link to="/projects" className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center text-white">
                <div className="font-display text-4xl md:text-5xl font-bold">50+</div>
                <div className="text-sm text-blue-100 mt-1">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-center text-white">
                <div className="font-display text-4xl md:text-5xl font-bold">30+</div>
                <div className="text-sm text-indigo-100 mt-1">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-center text-white">
                <div className="font-display text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-sm text-purple-100 mt-1">Products Launched</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-center text-white">
                <div className="font-display text-4xl md:text-5xl font-bold">100%</div>
                <div className="text-sm text-cyan-100 mt-1">Client Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Core Principles</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR TEAM SECTION ========== */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">The People Behind TIZAK</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                Meet Our Leadership
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                A team of dedicated professionals passionate about technology
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={member.name} 
                  className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full aspect-[4/3] sm:aspect-square object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.683-11.777c0-.21-.005-.418-.014-.628A9.97 9.97 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* ========== MILESTONES / TIMELINE SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Company Milestones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Key moments in our growth story
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700`} style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full hidden md:block"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  {/* Empty spacer for layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">Why Partner With Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Your Success Is Our Priority
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                We don't just build software — we build long-term partnerships. Our client-centered approach 
                means we're with you from the initial idea to deployment and beyond.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>100% Ugandan-owned and operated</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Tailored solutions for local challenges</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Modern technology stack & best practices</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 technical support</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-block mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg">
                Start a Conversation
              </Link>
            </div>
            
            <div className="relative reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/join1.jpg" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-blue-200 text-xs">Client Satisfaction</div>
              </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how TIZAK can help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                <span>Contact Us Today</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/services" className="px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg">
                Explore Our Services
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