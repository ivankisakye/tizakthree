import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

// ============ DATA ============

const services = [
  { 
    icon: '💻', 
    title: 'Software Development', 
    description: 'Custom enterprise software built to solve real business problems efficiently.',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    icon: '🌐', 
    title: 'Website Development', 
    description: 'Modern, fast, responsive websites and web applications for your business.',
    color: 'from-indigo-500 to-indigo-600'
  },
  { 
    icon: '📱', 
    title: 'Mobile App Development', 
    description: 'Native and cross-platform mobile apps for Android and iOS.',
    color: 'from-purple-500 to-purple-600'
  },
  { 
    icon: '🔗', 
    title: 'System Integration', 
    description: 'Seamlessly connect your existing systems and third-party APIs.',
    color: 'from-cyan-500 to-cyan-600'
  },
  { 
    icon: '📊', 
    title: 'IT Consulting', 
    description: 'Strategic technology guidance to help your business grow and scale.',
    color: 'from-emerald-500 to-emerald-600'
  },
  { 
    icon: '📣', 
    title: 'Digital Marketing', 
    description: 'Online marketing strategies that drive visibility, leads, and growth.',
    color: 'from-rose-500 to-rose-600'
  },
];

const projects = [
  { 
    title: 'Rental Housing System', 
    description: 'A digital platform for finding and listing rental houses across Uganda.', 
    tags: ['Web App', 'Uganda', 'Real Estate'], 
    image: '/images/rnt.jpg',
    category: 'Web Application'
  },
  { 
    title: 'School Management System', 
    description: 'Comprehensive system for managing students, staff, and academic records.', 
    tags: ['SaaS', 'Education', 'Dashboard'], 
    image: '/images/dash.jpg',
    category: 'Enterprise'
  },
  { 
    title: 'Africa Voting Platformd', 
    description: 'Secure online voting platform for organizations across Africa (africavoting.com).', 
    tags: ['Civic Tech', 'Security', 'Africa'], 
    image: '/images/vot.jpg',
    category: 'Platform'
  },
  { 
    title: 'Smart Irrigation System', 
    description: 'IoT-based automated irrigation system for efficient water management.', 
    tags: ['IoT', 'Agriculture', 'Smart Tech'], 
    image: '/images/dash.jpg',
    category: 'IoT Solution'
  },
  { 
    title: 'POS System', 
    description: 'Complete point-of-sale system for retail businesses with inventory management.', 
    tags: ['Retail', 'POS', 'Analytics'], 
    image: '/images/dash.jpg',
    category: 'Business'
  },
  { 
    title: 'Digital Transformation Suite', 
    description: 'Complete digital transformation toolkit for modern enterprises.', 
    tags: ['Digital', 'Enterprise', 'AI'], 
    image: '/images/dash.jpg',
    category: 'Enterprise'
  },
];

const teamMembers = [
  { name: 'Mugisha Victor', role: 'CEO & Founder', image: '/images/gt2pass.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Ella Namutebi', role: 'CTO', image: '/images/prof_lady.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Mohammad Zulqif', role: 'Lead Developer', image: '/images/moh.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Gabriel Kisakye', role: 'Project Manager', image: '/images/gab.jpg', social: { linkedin: '#', twitter: '#' } },
];

const testimonials = [
  { name: 'Shantel Asiimwe', role: 'CEO, Prime Properties', text: 'TIZAK transformed our rental management with their amazing system. Our operations are now 10x more efficient!', rating: 5, image: '/images/ldpass.jpg' },
  { name: 'Alice Nankya', role: 'Director, GreenFarm', text: 'The smart irrigation system has revolutionized our farming. Water usage reduced by 40% while crop yield increased!', rating: 5, image: '/images/prof_lady.jpg' },
  { name: 'Robert Ssekandi', role: 'COO, EduTech Uganda', text: 'Their school management system is incredible. We\'ve saved countless hours on administrative tasks.', rating: 5, image: '/images/sds1.jpg' },
];

const blogPosts = [
  { title: 'The Future of AI in African Agriculture', date: 'March 15, 2024', excerpt: 'How artificial intelligence is transforming farming across the continent...', image: 'https://images.unsplash.com/photo-1535463731090-e34f4b509a7a?w=600&h=400&fit=crop' },
  { title: 'Digital Transformation Trends for 2024', date: 'March 10, 2024', excerpt: 'Key trends shaping the digital landscape for businesses this year...', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop' },
  { title: 'Why Your Business Needs a Custom POS', date: 'March 5, 2024', excerpt: 'Benefits of custom point-of-sale systems for retail businesses...', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' },
];



const counters = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

const marqueeItems = [
  'Managed IT Services',
  'Cloud Computing Solutions',
  'Cybersecurity Services',
  'Data Backup and Recovery',
  'Network Infrastructure Management',
  'IT Consulting & Strategy',
  'Web Application Development',
];

// ============ COMPONENTS ============

// Particle Animation Component
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = 120;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      createParticles();
      animate();
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    init();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
};

// Marquee Slider Component
const MarqueeSlider = ({ items }) => {
  return (
    <div className="overflow-hidden bg-theme/10 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6 mx-8">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
              </svg>
            </div>
            <span className="text-gray-700 font-semibold text-lg whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Counter Component with Animation
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
      {count}{suffix}
    </span>
  );
};

// ============ MAIN HOME COMPONENT ============

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFaq, setActiveFaq] = useState(0);

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

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category.toLowerCase() === activeTab);

  return (
    <div className="overflow-x-hidden">


      {/* ========== HERO SECTION with Particles & Tech Background ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Tech Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Tech Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <ParticleField />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">Reliable IT. Real-Time Results.</span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-4 sm:mb-5 animate-fade-in-up break-words">
                Comprehensive
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
                  IT Solutions For A
                </span>
                <br />
                Digital World
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
                We deliver cutting-edge technology solutions that drive business growth, 
                streamline operations, and create lasting digital impact across Africa.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in-up animation-delay-300">
                <Link
                  to="/contact"
                  className="group px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <span>Discover More</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 text-xs sm:text-sm md:text-base"
                >
                  Our Services
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-10 sm:mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 animate-fade-in-up animation-delay-400">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">50+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">30+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">5+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">24/7</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-blue-200 mt-1">Support Available</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image with Wobbly/Blob Shapes (Hidden on mobile) */}
            <div className="hidden lg:block relative animate-fade-in-up animation-delay-300">
              <div className="relative flex items-center justify-center">
                <svg className="absolute w-[520px] h-[520px] -z-10 animate-spin-slow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M250 30 C350 30 450 100 470 220 C490 340 420 450 310 470 C200 490 80 450 40 340 C0 230 50 100 150 50 C200 20 230 30 250 30Z" fill="none" stroke="url(#gradientBlob)" strokeWidth="3" className="opacity-60"/>
                  <defs>
                    <linearGradient id="gradientBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <svg className="absolute w-[560px] h-[560px] -z-10 animate-spin-reverse-slow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M250 20 C370 20 480 110 490 250 C500 390 380 480 250 480 C120 480 10 390 20 250 C30 110 130 20 250 20Z" fill="none" stroke="url(#gradientBlob2)" strokeWidth="2" strokeDasharray="8 8" className="opacity-40"/>
                  <defs>
                    <linearGradient id="gradientBlob2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 z-10 h-[500px]">
                  <img
                    src="/images/hm1.jpg"
                    alt="IT Team working together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE SLIDER ========== */}
      <MarqueeSlider items={marqueeItems} />

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="relative reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/hm2.jpg" alt="About TIZAK" className="w-full h-auto"/>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 rounded-xl shadow-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-4xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-[10px] sm:text-sm">Years of Excellence</div>
              </div>
            </div>
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full inline-block mb-4">About Us</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 break-words">
                Empowering Businesses Through Smart IT Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                TIZAK Software Solutions is a technology company focused on developing, designing, producing, 
                licensing, and selling software applications and digital platforms. We provide comprehensive 
                IT services including software development, website development, mobile applications, 
                system integration, IT consulting, and digital marketing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Innovation at our core</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Cutting-edge solutions for modern challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">24/7 Technical Support</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Round-the-clock assistance for your business</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                Learn More About Us
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">What We Offer</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
                Explore Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
                We offer end-to-end technology solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
            <div className="text-center mt-10 sm:mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <Link to="/services" className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base">
                Explore All Services
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      {/* ========== PROJECTS SECTION ========== */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">Work Showcase</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
                Featured Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
                Discover some of our successful projects that have made an impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/rnt.jpg" alt="Rental Housing System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rental Housing System</h3>
                  <p className="text-gray-600 text-sm mb-4">A digital platform for finding and listing rental houses across Uganda.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Web App</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Uganda</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Real Estate</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/dash.jpg" alt="School Management System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">School Management System</h3>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive system for managing students, staff, and academic records.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">SaaS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Education</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Dashboard</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/vot.jpg" alt="Africa Voting Platform" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Africa Voting Platform</h3>
                  <p className="text-gray-600 text-sm mb-4">Secure online voting platform for organizations across Africa (africavoting.com).</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Civic Tech</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Security</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Africa</span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/dash.jpg" alt="Smart Irrigation System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Irrigation System</h3>
                  <p className="text-gray-600 text-sm mb-4">IoT-based automated irrigation system for efficient water management.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">IoT</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Agriculture</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Smart Tech</span>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/pos.jpg" alt="POS System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">POS System</h3>
                  <p className="text-gray-600 text-sm mb-4">Complete point-of-sale system for retail businesses with inventory management.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Retail</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">POS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Analytics</span>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
                <img src="/images/dash.jpg" alt="Digital Transformation Suite" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Booking System</h3>
                  <p className="text-gray-600 text-sm mb-4">Complete digital transformation allowing customers to book any service</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Digital</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Enterprise</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">AI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10 sm:mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                View All Projects
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Clean dot pattern background - like an aerial/camera shot texture */}
        <div className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
              backgroundSize: '30px 30px'
            }}>
        </div>
        
        {/* Subtle wave/contour lines overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q200 150 400 200 T800 180 T1200 220" stroke="white" strokeWidth="1" fill="none"/>
            <path d="M0 300 Q200 250 400 300 T800 280 T1200 320" stroke="white" strokeWidth="1" fill="none"/>
            <path d="M0 400 Q200 350 400 400 T800 380 T1200 420" stroke="white" strokeWidth="1" fill="none"/>
            <path d="M0 500 Q200 450 400 500 T800 480 T1200 520" stroke="white" strokeWidth="1" fill="none"/>
            <path d="M0 100 Q200 50 400 100 T800 80 T1200 120" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5"/>
            <path d="M0 600 Q200 550 400 600 T800 580 T1200 620" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-white/10 px-3 sm:px-4 py-1.5 rounded-full">Why Choose Us</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 break-words">
              Why TIZAK Is Your Perfect Partner
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Expertise You Can Trust</h3>
              <p className="text-blue-100 text-sm sm:text-base">With years of experience in the IT industry, our certified professionals bring deep knowledge and proven solutions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Customized Solutions</h3>
              <p className="text-blue-100 text-sm sm:text-base">We tailor every solution to your specific business needs, ensuring maximum ROI and efficiency.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">End-to-End Support</h3>
              <p className="text-blue-100 text-sm sm:text-base">From initial consultation to deployment and maintenance, we're with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">Our Team</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              Our team of dedicated professionals is ready to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[4/3] sm:aspect-square object-cover object-center"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3 text-sm sm:text-base">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.social.linkedin} className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.683-11.777c0-.21-.005-.418-.014-.628A9.97 9.97 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">Testimonials</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              Real feedback from real clients who trust us with their digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-6 sm:p-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION - DukaEye POS ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">Pricing Plan</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
              DukaEye POS Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              Choose the perfect package for your retail business. Save 20% with yearly payment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* BASIC PLAN - 30,000 UGX/month */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="p-6 sm:p-8 text-center border-b bg-gray-50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">30,000<span className="text-sm sm:text-base font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500 text-sm">Perfect for small shops & startups</p>
                <div className="mt-3 text-xs text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                  Save 20% → 288,000/year
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Up to 500 products</strong> in inventory</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Basic sales recording</strong> & receipt printing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Daily sales reports</strong> via email</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>1 user account</strong> (single device)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Email support</strong> (48hr response)</span>
                  </li>
                </ul>
                
                {/* What you miss on Basic */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2">✖ NOT INCLUDED:</p>
                  <ul className="space-y-1.5 text-xs text-gray-400">
                    <li className="flex items-center gap-2">• Inventory stock alerts & low stock notifications</li>
                    <li className="flex items-center gap-2">• Multiple stores/branches management</li>
                    <li className="flex items-center gap-2">• Customer database & loyalty program</li>
                    <li className="flex items-center gap-2">• Advanced analytics & profit reports</li>
                    <li className="flex items-center gap-2">• Phone/WhatsApp priority support</li>
                  </ul>
                </div>
                
                <Link to="/contact" className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base">
                  Start Basic
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">No setup fee. Cancel anytime.</p>
              </div>
            </div>
            
            {/* STANDARD PLAN - 50,000 UGX/month - MOST POPULAR */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform scale-100 md:scale-105 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 border-2 border-blue-600 relative">
              <div className="bg-blue-600 text-white text-center py-2 text-xs sm:text-sm font-semibold">🔥 MOST POPULAR</div>
              <div className="p-6 sm:p-8 text-center border-b bg-gradient-to-b from-white to-blue-50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50,000<span className="text-sm sm:text-base font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500 text-sm">Best for growing retail businesses</p>
                <div className="mt-3 text-xs text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                  Save 20% → 480,000/year
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Unlimited products</strong> in inventory</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Automated stock alerts</strong> & low stock notifications</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Customer database</strong> & purchase history</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Up to 3 user accounts</strong> (multiple devices)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Advanced analytics</strong> (profit margins, best sellers)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Phone & WhatsApp support</strong> (24hr response)</span>
                  </li>
                </ul>
                
                {/* What you miss on Standard */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2">✖ NOT INCLUDED:</p>
                  <ul className="space-y-1.5 text-xs text-gray-400">
                    <li className="flex items-center gap-2">• Multiple branches/stores management</li>
                    <li className="flex items-center gap-2">• Loyalty points & rewards program</li>
                    <li className="flex items-center gap-2">• Supplier purchase orders management</li>
                    <li className="flex items-center gap-2">• Real-time dashboard & custom reports</li>
                    <li className="flex items-center gap-2">• Dedicated account manager</li>
                  </ul>
                </div>
                
                <Link to="/contact" className="block w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md text-sm sm:text-base">
                  Start Standard
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">No setup fee. Cancel anytime.</p>
              </div>
            </div>
            
            {/* PREMIUM PLAN - 100,000 UGX/month */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="p-6 sm:p-8 text-center border-b bg-gray-50">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">100,000<span className="text-sm sm:text-base font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500 text-sm">For enterprises & multi-store chains</p>
                <div className="mt-3 text-xs text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full">
                  Save 20% → 960,000/year
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Unlimited products & categories</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Multi-store/branch management</strong> (unlimited locations)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Loyalty points & rewards program</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Supplier & purchase order management</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Unlimited user accounts</strong> + role-based permissions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Real-time dashboard & custom reports</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span><strong>Priority 24/7 support + dedicated account manager</strong></span>
                  </li>
                </ul>
                
                <Link to="/contact" className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm sm:text-base">
                  Start Premium
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">No setup fee. Cancel anytime.</p>
              </div>
            </div>
          </div>
          
          {/* Yearly discount note */}
          <div className="text-center mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-block bg-green-50 border border-green-200 rounded-xl px-6 py-4">
              <p className="text-sm text-green-700">
                💰 <strong>Save 20%</strong> when you pay annually! 
                Basic: 288,000/year | Standard: 480,000/year | Premium: 960,000/year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">FAQ</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 break-words">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Can You Help Migrate Our Data To The Cloud?", a: "Absolutely. We provide secure and seamless cloud migration services with minimal downtime and full data integrity. Our team conducts a thorough assessment to identify gaps and develop a customized IT solution." },
              { q: "How Do You Ensure Our Data And Systems Are Secure?", a: "We implement enterprise-grade security measures including encryption, firewalls, regular security audits, and compliance with industry standards to ensure your data remains protected at all times." },
              { q: "What If We Already Have An In-House IT Team?", a: "We work collaboratively with your existing team to complement their skills and provide specialized expertise where needed. Our solutions are designed to integrate seamlessly with your current setup." },
              { q: "How Do I Know Which IT Services My Business Needs?", a: "We offer a free consultation to assess your business needs, goals, and current infrastructure. Based on this assessment, we recommend tailored solutions that provide maximum value." },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-4 sm:p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-48 p-4 sm:p-6' : 'max-h-0'}`}>
                  <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOG SECTION ========== */}

      {/*
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">Blog & Articles</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 break-words">
              Latest News & Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
              Stay updated with the latest trends in technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                    Read More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

                    */}


      {/* ========== BRANDS / PARTNERS SECTION ========== */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-gray-400">Trusted by Industry Leaders</h2>
          </div>
        </div>
        
        {/* Sliding Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-slow gap-12 sm:gap-16 md:gap-20 whitespace-nowrap py-4">
            {/* First set of logos - 8 logos */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Uber_Logo_2018.svg" alt="Uber" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter_logo_2012.svg" alt="Twitter" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-12 sm:gap-16 md:gap-20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Uber_Logo_2018.svg" alt="Uber" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter_logo_2012.svg" alt="Twitter" className="h-6 sm:h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes slide-slow {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slide-slow {
            animation: slide-slow 30s linear infinite;
          }
          .animate-slide-slow:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 break-words">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how TIZAK Software Solutions can help you achieve your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg flex items-center gap-2">
                <span>Start a Project</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/about" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base md:text-lg">
                Learn More About Us
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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 25s linear infinite;
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .break-words {
            word-break: break-word;
            overflow-wrap: break-word;
          }
        }
      `}</style>
    </div>
  );
}