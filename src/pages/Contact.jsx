import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'info@tizaksoftware.com', link: 'mailto:info@tizaksoftware.com' },
    { icon: '📞', label: 'Phone', value: '+256 705 495 970', link: 'tel:+256705495970' },
    { icon: '📍', label: 'Location', value: 'Chain Of liberty | Spn : CB40 Kampala, Uganda', link: null },
    { icon: '⏰', label: 'Hours', value: 'Mon – Fri, 8:00am – 6:00pm EAT', link: null },
  ];

  const faqs = [
    { q: 'How quickly do you respond to inquiries?', a: 'We typically respond within 24 hours during business days.' },
    { q: 'Do you offer free consultations?', a: 'Yes, we offer a free initial consultation to discuss your project needs.' },
    { q: 'What is your typical project timeline?', a: 'Timelines vary based on complexity. Simple websites take 2-4 weeks, complex software 3-6 months.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance and support packages for all our solutions.' },
  ];

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=800&fit=crop" 
            alt="Contact Hero" 
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
            <span className="text-white/90 text-sm font-medium tracking-wide">Let's Connect</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            Get in <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            We'd love to hear about your project. Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info Column */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">Contact Details</h2>
                <p className="text-gray-500 mb-8">Reach out to us anytime — we're here to help.</p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={item.label} className="flex items-start gap-4 group reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</div>
                        {item.link ? (
                          <a href={item.link} className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-gray-800 font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com' },
                      { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
                      { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
                      { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300"
                      >
                        <i className={`${social.icon} text-sm`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message Sent! 🎉</h3>
                    <p className="text-gray-500 mb-6">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
                    <p className="text-gray-500 mb-6">Fill out the form and we'll respond shortly.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Newton"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                            ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span> {errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="neuton@gmail.com"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                            ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span> {errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your project..."
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none
                            ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠️</span> {errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2 group"
                      >
                        <span>Send Message</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="py-0 bg-white">
        <div className="w-full h-[400px] relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.746817544755!2d32.580611!3d0.313611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba1ad70dbbd9%3A0x5e5e5e5e5e5e5e5e!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TIZAK Location Map"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+256700000000" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2">
                <span>Call Us Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="mailto:info@tizaksoftware.com" className="px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg">
                Email Us
              </a>
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