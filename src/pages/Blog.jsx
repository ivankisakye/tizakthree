import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const posts = [
  { 
    id: 1,
    date: 'April 10, 2025', 
    category: 'Tech', 
    title: 'The Rise of Mobile-First Development in Africa', 
    excerpt: 'Why building for mobile is no longer optional for African businesses targeting mass adoption. With over 500 million mobile users across the continent, the shift to mobile-first is inevitable.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
    author: 'John Muwanga',
    authorAvatar: '/images/sds1.jpg',
    featured: true,
  },
  { 
    id: 2,
    date: 'March 28, 2025', 
    category: 'Business', 
    title: 'How Digital Platforms Are Transforming Uganda\'s Rental Market', 
    excerpt: 'Exploring how tech is solving the opacity and inefficiency in Uganda\'s real estate rental space, making property management easier for landlords and tenants alike.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    author: 'Sarah Namutebi',
    authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    featured: false,
  },
  { 
    id: 3,
    date: 'March 15, 2025', 
    category: 'IoT', 
    title: 'Smart Irrigation: Feeding Africa with Data', 
    excerpt: 'How IoT-powered irrigation systems are helping smallholder farmers improve yields sustainably while conserving water resources.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1535463731090-e34f4b509a7a?w=800&h=500&fit=crop',
    author: 'Michael Okello',
    authorAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    featured: false,
  },
  { 
    id: 4,
    date: 'February 20, 2025', 
    category: 'EdTech', 
    title: 'Why Schools Need Digital Management Systems Now', 
    excerpt: 'Manual administration is holding African schools back. Here\'s what modern ERP systems can do for educational institutions.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    author: 'Grace Nambi',
    authorAvatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    featured: false,
  },
  { 
    id: 5,
    date: 'February 5, 2025', 
    category: 'Civic Tech', 
    title: 'E-Voting: Can Technology Fix Africa\'s Election Integrity Problem?', 
    excerpt: 'A look at how secure online voting platforms can bring transparency and trust to democratic processes across the continent.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522547902296-6699d56c7c0d?w=800&h=500&fit=crop',
    author: 'John Muwanga',
    authorAvatar: '/images/sds1.jpg',
    featured: false,
  },
  { 
    id: 6,
    date: 'January 18, 2025', 
    category: 'Business', 
    title: 'POS Systems vs Cash Registers: Why Your Business Needs an Upgrade', 
    excerpt: 'The case for digital POS systems and how they give retailers data-driven control over their operations and inventory.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    author: 'Sarah Namutebi',
    authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    featured: false,
  },
  {
    id: 7,
    date: 'December 10, 2024',
    category: 'AI',
    title: 'Artificial Intelligence in African Agriculture',
    excerpt: 'How AI-powered solutions are helping farmers predict weather patterns, detect crop diseases, and optimize yields.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&h=500&fit=crop',
    author: 'Michael Okello',
    authorAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    featured: false,
  },
  {
    id: 8,
    date: 'November 22, 2024',
    category: 'Security',
    title: 'Cybersecurity Best Practices for African SMEs',
    excerpt: 'Essential security measures every small and medium business should implement to protect their digital assets.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    author: 'Grace Nambi',
    authorAvatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    featured: false,
  },
  {
    id: 9,
    date: 'November 5, 2024',
    category: 'Cloud',
    title: 'Why African Businesses Are Moving to the Cloud',
    excerpt: 'Exploring the benefits of cloud migration for African enterprises, from cost savings to scalability.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    author: 'John Muwanga',
    authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    featured: false,
  },
];

const categories = ['All', 'Tech', 'Business', 'IoT', 'EdTech', 'Civic Tech', 'AI', 'Security', 'Cloud'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedPost, setSelectedPost] = useState(null);
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

  // Filter posts
  useEffect(() => {
    let filtered = posts;
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  const openPostModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=800&fit=crop" 
            alt="Blog Hero" 
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
            <span className="text-white/90 text-sm font-medium tracking-wide">Our Blog</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.2] mb-5 animate-fade-in-up">
            Blog & <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Thoughts on technology, business, and digital transformation across Africa.
          </p>
        </div>
      </section>

      {/* ========== FEATURED POST SECTION ========== */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">Featured Article</span>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Featured</span>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={featuredPost.authorAvatar} alt={featuredPost.author} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{featuredPost.author}</p>
                        <p className="text-xs text-gray-500">Author</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => openPostModal(featuredPost)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-1"
                    >
                      Read Full Article 
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== BLOG GRID SECTION ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="cursor-pointer reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => openPostModal(post)}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found matching your criteria.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========== NEWSLETTER SECTION ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get the latest tech insights and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-5 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ========== POPULAR TOPICS SECTION ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">Explore Topics</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Popular Topics
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            {['Software Development', 'Digital Transformation', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Mobile Apps', 'IoT', 'Fintech'].map((topic) => (
              <button
                key={topic}
                onClick={() => setSearchQuery(topic)}
                className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                {topic}
              </button>
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
              Have a Topic You'd Like Us to Cover?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let us know what you're interested in, and we might feature it in our next post.
            </p>
            <Link to="/contact" className="group px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg flex items-center gap-2 justify-center mx-auto w-fit">
              <span>Suggest a Topic</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BLOG POST MODAL ========== */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-72 object-cover rounded-t-2xl"
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
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">{selectedPost.category}</span>
                <span className="text-sm text-gray-500">{selectedPost.date}</span>
                <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                <img src={selectedPost.authorAvatar} alt={selectedPost.author} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">{selectedPost.author}</p>
                  <p className="text-sm text-gray-500">Technology Writer</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">{selectedPost.excerpt}</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Key Takeaways</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Understanding the importance of digital transformation</li>
                  <li>How technology is reshaping African industries</li>
                  <li>Practical steps to implement modern solutions</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link 
                  to="/contact" 
                  className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Have Questions? Contact Us
                </Link>
              </div>
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