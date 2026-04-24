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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    category: 'Web Application'
  },
  { 
    title: 'School Management System', 
    description: 'Comprehensive system for managing students, staff, and academic records.', 
    tags: ['SaaS', 'Education', 'Dashboard'], 
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    category: 'Enterprise'
  },
  { 
    title: 'Africa Voting Platform', 
    description: 'Secure online voting platform for organizations across Africa (africavoting.com).', 
    tags: ['Civic Tech', 'Security', 'Africa'], 
    image: 'https://images.unsplash.com/photo-1522547902296-6699d56c7c0d?w=800&h=600&fit=crop',
    category: 'Platform'
  },
  { 
    title: 'Smart Irrigation System', 
    description: 'IoT-based automated irrigation system for efficient water management.', 
    tags: ['IoT', 'Agriculture', 'Smart Tech'], 
    image: 'https://images.unsplash.com/photo-1535463731090-e34f4b509a7a?w=800&h=600&fit=crop',
    category: 'IoT Solution'
  },
  { 
    title: 'POS System', 
    description: 'Complete point-of-sale system for retail businesses with inventory management.', 
    tags: ['Retail', 'POS', 'Analytics'], 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: 'Business'
  },
  { 
    title: 'Digital Transformation Suite', 
    description: 'Complete digital transformation toolkit for modern enterprises.', 
    tags: ['Digital', 'Enterprise', 'AI'], 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    category: 'Enterprise'
  },
];

const teamMembers = [
  { name: 'John Muwanga', role: 'CEO & Founder', image: 'https://randomuser.me/api/portraits/men/32.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Sarah Namutebi', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/68.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Michael Okello', role: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/45.jpg', social: { linkedin: '#', twitter: '#' } },
  { name: 'Grace Nambi', role: 'Project Manager', image: 'https://randomuser.me/api/portraits/women/23.jpg', social: { linkedin: '#', twitter: '#' } },
];

const testimonials = [
  { name: 'James Mubiru', role: 'CEO, Prime Properties', text: 'TIZAK transformed our rental management with their amazing system. Our operations are now 10x more efficient!', rating: 5, image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Alice Nankya', role: 'Director, GreenFarm', text: 'The smart irrigation system has revolutionized our farming. Water usage reduced by 40% while crop yield increased!', rating: 5, image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Robert Ssekandi', role: 'COO, EduTech Uganda', text: 'Their school management system is incredible. We\'ve saved countless hours on administrative tasks.', rating: 5, image: 'https://randomuser.me/api/portraits/men/3.jpg' },
];

const blogPosts = [
  { title: 'The Future of AI in African Agriculture', date: 'March 15, 2024', excerpt: 'How artificial intelligence is transforming farming across the continent...', image: 'https://images.unsplash.com/photo-1535463731090-e34f4b509a7a?w=600&h=400&fit=crop' },
  { title: 'Digital Transformation Trends for 2024', date: 'March 10, 2024', excerpt: 'Key trends shaping the digital landscape for businesses this year...', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop' },
  { title: 'Why Your Business Needs a Custom POS', date: 'March 5, 2024', excerpt: 'Benefits of custom point-of-sale systems for retail businesses...', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' },
];

const brandLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e8/Meta_Platforms_Inc._logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6f/Uber_Logo_2018.svg',
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
            <span className="text-gray-700 font-semibold text-lg">{item}</span>
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
    <span ref={counterRef} className="text-4xl md:text-5xl font-bold text-blue-600">
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
    <>



      {/* ========== HERO SECTION with Particles & Tech Background ========== */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background Tech Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
      alt="Tech Background" 
      className="w-full h-full object-cover"
    />
    {/* Dark Overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
    {/* Tech pattern overlay */}
    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
  </div>
  
  {/* Particle Field */}
  <ParticleField />
  
  {/* Animated gradient orbs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-500"></div>
  <div className="absolute top-40 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-700"></div>
  
  {/* Grid overlay for tech feel */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>

        </div>
        
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up break-words">
          Comprehensive
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            IT Solutions For A
          </span>
          <br />
          Digital World
        </h1>
        
        <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
          We deliver cutting-edge technology solutions that drive business growth, 
          streamline operations, and create lasting digital impact across Africa.
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-300">
          <Link
            to="/contact"
            className="group px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base"
          >
            <span>Discover More</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 md:px-8 md:py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 text-sm md:text-base"
          >
            Our Services
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 animate-fade-in-up animation-delay-400">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">50+</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">30+</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">5+</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">24/7</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Support Available</div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Image with Wobbly/Blob Shapes */}
      <div className="hidden lg:block relative animate-fade-in-up animation-delay-300">
        {/* Main blob container */}
        <div className="relative flex items-center justify-center">
          
          {/* Blob shape 1 - Large background blob (blue) */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
          
          {/* Blob shape 2 - Medium blob (purple) */}
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          
          {/* Blob shape 3 - Small blob (cyan) */}
          <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Wobbly shape outline around image */}
          <svg className="absolute w-[520px] h-[520px] -z-10 animate-spin-slow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M250 30 C350 30 450 100 470 220 C490 340 420 450 310 470 C200 490 80 450 40 340 C0 230 50 100 150 50 C200 20 230 30 250 30Z" 
              fill="none" 
              stroke="url(#gradientBlob)" 
              strokeWidth="3"
              className="opacity-60"
            />
            <defs>
              <linearGradient id="gradientBlob" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Second wobbly shape - dashed */}
          <svg className="absolute w-[560px] h-[560px] -z-10 animate-spin-reverse-slow" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M250 20 C370 20 480 110 490 250 C500 390 380 480 250 480 C120 480 10 390 20 250 C30 110 130 20 250 20Z" 
              fill="none" 
              stroke="url(#gradientBlob2)" 
              strokeWidth="2"
              strokeDasharray="8 8"
              className="opacity-40"
            />
            <defs>
              <linearGradient id="gradientBlob2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating geometric shapes around the image */}
          <div className="absolute -top-10 -right-10 w-16 h-16 bg-blue-500/30 rounded-2xl backdrop-blur-sm border border-blue-400/30 rotate-12"></div>
          <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-purple-500/30 rounded-full backdrop-blur-sm border border-purple-400/30"></div>
          <div className="absolute top-20 -right-6 w-8 h-8 bg-cyan-500/30 rounded-lg backdrop-blur-sm border border-cyan-400/30 rotate-45"></div>
          <div className="absolute bottom-20 -left-6 w-10 h-10 bg-indigo-500/30 rounded-xl backdrop-blur-sm border border-indigo-400/30 -rotate-12"></div>
          <div className="absolute top-1/2 -right-12 w-6 h-6 bg-green-500/30 rounded-full backdrop-blur-sm border border-green-400/30"></div>
          <div className="absolute top-1/3 -left-10 w-7 h-7 bg-yellow-500/30 rounded-lg backdrop-blur-sm border border-yellow-400/30 rotate-12"></div>
          
          {/* The actual image container with rounded corners */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 z-10">
            {/* REPLACE THIS URL WITH YOUR UNSPLASH IMAGE */}
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=500&fit=crop" 
              alt="IT Team working together" 
              className="w-full h-auto object-cover"
            />
            {/* Subtle gradient overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
          </div>
          
          {/* Small decorative dots around */}
          <div className="absolute -top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 -left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scroll indicator */}
  
</section>





      

      {/* ========== MARQUEE SLIDER ========== */}
      <MarqueeSlider items={marqueeItems} />

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
                  alt="About TIZAK" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl shadow-xl p-6 text-center">
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-blue-200 text-sm">Years of Excellence</div>
              </div>
            </div>
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Empowering Businesses Through Smart IT Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TIZAK Software Solutions is a technology company focused on developing, designing, producing, 
                licensing, and selling software applications and digital platforms. We provide comprehensive 
                IT services including software development, website development, mobile applications, 
                system integration, IT consulting, and digital marketing.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation at our core</h4>
                    <p className="text-sm text-gray-500">Cutting-edge solutions for modern challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Technical Support</h4>
                    <p className="text-sm text-gray-500">Round-the-clock assistance for your business</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">What We Offer</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Explore Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              We offer end-to-end technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg">
              Explore All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Work Showcase</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Discover some of our successful projects that have made an impact
            </p>
          </div>
          
          {/* Project Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            {['all', 'web application', 'enterprise', 'platform', 'iot solution', 'business'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
              Why TIZAK Is Your Perfect Partner
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mt-4">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise You Can Trust</h3>
              <p className="text-blue-100">With years of experience in the IT industry, our certified professionals bring deep knowledge and proven solutions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-blue-100">We tailor every solution to your specific business needs, ensuring maximum ROI and efficiency.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-blue-100">From initial consultation to deployment and maintenance, we're with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Our team of dedicated professionals is ready to bring your vision to life
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
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

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Real feedback from real clients who trust us with their digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Pricing Plan</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Flexible pricing options tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="p-8 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$35<span className="text-base font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500">Perfect for startups</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Community Support</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Dedicated Tech Experts</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Unlimited Storage</span></li>
                  <li className="flex items-center gap-2 opacity-50"><svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg><span>Custom Domains</span></li>
                </ul>
                <Link to="/contact" className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all">Get Started</Link>
              </div>
            </div>
            
            {/* Standard Plan - Featured */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform scale-105 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 border-2 border-blue-600">
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">MOST POPULAR</div>
              <div className="p-8 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$55<span className="text-base font-normal text-gray-500">/month</span></div>
                <p className="text-gray-500">Best for growing businesses</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Priority Support</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Dedicated Account Manager</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Unlimited Storage</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Custom Domains</span></li>
                </ul>
                <Link to="/contact" className="block w-full text-center py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md">Get Started</Link>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="p-8 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Package</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$99<span className="text-base font-normal text-gray-500">/year</span></div>
                <p className="text-gray-500">For enterprises</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>24/7 Premium Support</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Enterprise Security</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>Custom Development</span></li>
                  <li className="flex items-center gap-2"><svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span>SLA Guarantee</span></li>
                </ul>
                <Link to="/contact" className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
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
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-48 p-6' : 'max-h-0'}`}>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOG SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">Blog & Articles</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Latest News & Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Stay updated with the latest trends in technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden shadow-lg reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 150}ms` }}>
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BRANDS / PARTNERS SECTION ========== */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-2xl font-semibold text-gray-400">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            {brandLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-8 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how TIZAK Software Solutions can help you achieve your technology goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                <span>Start a Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/about" className="px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg">
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
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
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
}