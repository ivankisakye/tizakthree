import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqs = [
    {
      question: 'What services does TIZAK Software Solutions offer?',
      answer: 'We offer software development, website development, mobile app development, system integration, IT consulting, cloud solutions, digital marketing, and technical support services.'
    },
    {
      question: 'How long does it take to build a website or app?',
      answer: 'Timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications or mobile apps can take 2-3 months. We provide a detailed timeline during consultation.'
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes, we offer flexible maintenance and support packages to keep your systems running smoothly, including bug fixes, updates, security patches, and technical assistance.'
    },
    {
      question: 'How much does a typical project cost?',
      answer: 'Project costs vary based on scope, complexity, and features. We provide custom quotes after understanding your requirements. Contact us for a free consultation and estimate.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Node.js, Python, Laravel, Flutter, AWS, Docker, MongoDB, PostgreSQL, and many other modern technologies to build robust solutions.'
    },
    {
      question: 'Do you work with clients outside Uganda?',
      answer: 'Yes, we work with clients across Africa and internationally. Our remote collaboration tools and processes ensure smooth communication regardless of location.'
    },
    {
      question: 'Can you help migrate our existing system to the cloud?',
      answer: 'Absolutely. We provide secure and seamless cloud migration services with minimal downtime, ensuring your data integrity and system availability.'
    },
    {
      question: 'What if I already have an in-house IT team?',
      answer: 'We work collaboratively with your existing team to complement their skills and provide specialized expertise where needed, ensuring seamless integration.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement enterprise-grade security measures including encryption, firewalls, regular security audits, and compliance with industry standards to protect your data.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We respond to support requests within 24 hours for standard issues and faster for critical problems, depending on your support package.'
    }
  ];

  const categories = [
    { name: 'General', icon: '🏠', count: 3 },
    { name: 'Services', icon: '💻', count: 2 },
    { name: 'Pricing', icon: '💰', count: 2 },
    { name: 'Technical', icon: '⚙️', count: 3 },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=600&fit=crop" 
            alt="FAQ Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-indigo-900/95"></div>
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-white/90 text-sm font-medium tracking-wide">Got Questions?</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            {categories.map((cat, idx) => (
              <div key={cat.name} className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-sm text-gray-600">{cat.icon} {cat.name}</span>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 text-sm mb-4">Can't find the answer you're looking for?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-md transition-all text-sm"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Project?</h2>
          <p className="text-gray-500 mb-6">Let's discuss how we can help bring your ideas to life.</p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md"
          >
            Get a Free Consultation
          </Link>
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