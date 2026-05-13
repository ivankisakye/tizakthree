import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Rental Housing System',
    description: 'A comprehensive platform for landlords and tenants to list, search, and secure rental properties across Uganda with verified listings and map integration.',
    tags: ['Web App', 'Real Estate', 'Uganda', 'React'],
    color: 'bg-blue-500',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    year: '2023',
    client: 'Prime Properties Uganda',
  },
  {
    title: 'School Management System',
    description: 'Full-featured school ERP covering student enrollment, fee management, academic records, staff payroll, and parent communication portals.',
    tags: ['SaaS', 'Education', 'ERP', 'Dashboard'],
    color: 'bg-indigo-500',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    year: '2023',
    client: 'EduTech Uganda',
  },
  {
    title: 'Online Voting Platform',
    description: 'africavoting.com — a secure, transparent e-voting platform for organizations, institutions, and governments across Africa with audit trails.',
    tags: ['Civic Tech', 'Security', 'Africa', 'Blockchain'],
    color: 'bg-green-500',
    category: 'Platform',
    image: 'https://images.unsplash.com/photo-1522547902296-6699d56c7c0d?w=800&h=600&fit=crop',
    year: '2024',
    client: 'Pan-African Alliance',
  },
  {
    title: 'Smart Irrigation System',
    description: 'IoT-powered smart irrigation management system that monitors soil moisture, weather, and crop data to optimize water usage for farmers.',
    tags: ['IoT', 'AgriTech', 'Hardware', 'Mobile'],
    color: 'bg-emerald-500',
    category: 'IoT Solution',
    image: 'https://images.unsplash.com/photo-1535463731090-e34f4b509a7a?w=800&h=600&fit=crop',
    year: '2024',
    client: 'GreenFarm Cooperative',
  },
  {
    title: 'POS System',
    description: 'Point-of-sale software for retail businesses with inventory management, sales tracking, receipts, and multi-branch reporting capabilities.',
    tags: ['Desktop App', 'Retail', 'Finance', 'Offline-First'],
    color: 'bg-orange-500',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    year: '2023',
    client: 'Retail Plus Uganda',
  },
  {
    title: 'Digital Transformation Suite',
    description: 'Complete digital transformation toolkit for modern enterprises including workflow automation, analytics, and integration capabilities.',
    tags: ['Digital', 'Enterprise', 'AI', 'Analytics'],
    color: 'bg-purple-500',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    year: '2024',
    client: 'Enterprise Solutions Ltd',
  },
  {
    title: 'Telemedicine Platform',
    description: 'Remote healthcare platform connecting patients with doctors via video calls, prescription management, and electronic health records.',
    tags: ['Healthcare', 'Telemedicine', 'Mobile', 'Secure'],
    color: 'bg-cyan-500',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    year: '2024',
    client: 'HealthNet Uganda',
  },
  {
    title: 'Logistics Management System',
    description: 'End-to-end logistics platform for tracking shipments, managing fleets, optimizing routes, and real-time delivery updates.',
    tags: ['Logistics', 'Tracking', 'Real-time', 'Analytics'],
    color: 'bg-amber-500',
    category: 'Platform',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    year: '2024',
    client: 'SwiftLogix',
  },
  {
    title: 'E-Learning Platform',
    description: 'Interactive online learning platform with video courses, quizzes, certificates, and instructor dashboards for educational institutions.',
    tags: ['EdTech', 'E-learning', 'Video', 'Mobile'],
    color: 'bg-rose-500',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    year: '2024',
    client: 'LearnAfrica',
  },
];

const categories = ['all', 'web application', 'enterprise', 'platform', 'iot solution', 'business'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  // Filter projects
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase() === activeCategory));
    }
  }, [activeCategory]);

  // Stats
  const stats = [
    { label: 'Total Projects', value: projects.length },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Countries Served', value: '5+' },
    { label: 'Success Rate', value: '100%' },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop" 
            alt="Projects Hero" 
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
            <span className="text-white/90 text-sm font-medium tracking-wide">Our Portfolio</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Real solutions we've built for real problems — transforming ideas into impactful digital products.
          </p>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS GRID SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openProjectModal(project)}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ========== CASE STUDIES SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Success Stories</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Featured Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Deep dives into some of our most impactful projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <img 
                src="/images/rnt.jpg" 
                alt="Rental Housing System" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">Case Study</span>
                  <span className="text-xs text-gray-500">2023</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rental Housing System</h3>
                <p className="text-gray-600 mb-4">How we helped landlords and tenants connect seamlessly across Uganda with a modern rental platform.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">R</div>
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs">P</div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">U</div>
                  </div>
                  <button 
                    onClick={() => openProjectModal(projects.find(p => p.title === 'Rental Housing System'))}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Story →
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <img 
                src="/images/vot.jpg" 
                alt="Online Voting Platform" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded-full">Case Study</span>
                  <span className="text-xs text-gray-500">2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Africa Voting Platform</h3>
                <p className="text-gray-600 mb-4">Building a secure, transparent e-voting platform trusted by organizations across the continent.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">A</div>
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">V</div>
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">P</div>
                  </div>
                  <button 
                    onClick={() => openProjectModal(projects.find(p => p.title === 'Online Voting Platform'))}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Story →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Client Love</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The Rental Housing System transformed our property management. We've increased occupancy by 40%!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">James Mubiru</h4>
                  <p className="text-sm text-gray-500">CEO, Prime Properties</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The School Management System saved us countless hours. Administration is now effortless."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Robert Ssekandi</h4>
                  <p className="text-sm text-gray-500">COO, EduTech Uganda</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"The voting platform was a game-changer for our organization. Secure, transparent, and easy to use."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">AN</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alice Nankya</h4>
                  <p className="text-sm text-gray-500">Director, GreenFarm</p>
                </div>
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
              Ready to Build Your Project?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how TIZAK can bring your vision to life — just like we've done for these amazing clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                <span>Start Your Project</span>
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

      {/* ========== PROJECT DETAIL MODAL ========== */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 ${selectedProject.color} text-white text-xs font-semibold rounded-full`}>{selectedProject.category}</span>
                <span className="text-sm text-gray-500">{selectedProject.year}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                <p className="text-gray-600">{selectedProject.client}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Interested? Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}

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