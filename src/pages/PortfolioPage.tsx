import { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Design & Development',
    description: 'Modern e-commerce solution with seamless user experience and high conversion rates.',
    image: '/src/images/1a46346a-4a6c-4b8d-a3d7-65fead8a849d.jpg',
    stats: { users: '50K+', growth: '45%', roi: '3.2x' },
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'App Development',
    description: 'Cross-platform fitness app with real-time tracking and AI-powered recommendations.',
    image: '/src/images/2975d223-1ef5-4665-827c-084bf9fd1f75.jpg',
    stats: { downloads: '100K+', rating: '4.8/5', active: '25K' },
    tags: ['React Native', 'Firebase', 'Machine Learning'],
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Multi-channel marketing campaign that generated massive impressions and brand awareness.',
    image: '/src/images/WhatsApp Image 2025-11-22 at 10.15.19 AM.jpeg',
    stats: { impressions: '2.5M', leads: '5K+', roi: '4.1x' },
    tags: ['SEO', 'Social Media', 'Content Marketing'],
  },
  {
    title: 'Brand Identity Design',
    category: 'Branding & Design',
    description: 'Complete brand overhaul including logo, color system, and brand guidelines.',
    image: '/src/images/ac1cf41e-676c-4f4a-8f63-3fd712eba503.jpg',
    stats: { recognition: '92%', consistency: '100%', usage: '50+' },
    tags: ['Branding', 'Logo Design', 'UI/UX'],
  },
  {
    title: 'Product Animation Series',
    category: 'Animation & Motion Design',
    description: 'High-impact product animations and explainer videos that increased engagement.',
    image: '/src/images/bd6297dd-a754-4401-aa70-4048bed716b7.jpg',
    stats: { views: '5M+', engagement: '320%', shares: '15K+' },
    tags: ['3D Animation', 'Motion Graphics', 'Video Production'],
  },
  {
    title: 'Financial Dashboard',
    category: 'Automation & Financial Services',
    description: 'Real-time financial dashboard with automated reporting and business intelligence.',
    image: '/src/images/d627e284-b669-4e50-b58d-044c3b0e0b5f.jpg',
    stats: { users: '200+', automation: '85%', timesaved: '40h/mo' },
    tags: ['React', 'Node.js', 'Data Visualization'],
  },
  {
    title: 'Creative Campaign',
    category: 'Creative Design',
    description: 'Innovative creative campaign that captured audience attention and drove engagement.',
    image: '/src/images/df3e2833-97db-4ea7-a620-a5aacd6a5666.jpg',
    stats: { reach: '1M+', engagement: '250%', shares: '10K+' },
    tags: ['Design', 'Social Media', 'Branding'],
  },
  {
    title: 'Enterprise Solution',
    category: 'Web Development',
    description: 'Scalable enterprise platform with advanced features and robust architecture.',
    image: '/src/images/eb6f71dc-8560-4206-ac60-148545e1c81a.jpg',
    stats: { users: '10K+', uptime: '99.9%', performance: 'A+' },
    tags: ['Enterprise', 'Cloud', 'Microservices'],
  },
];

function PortfolioCard({
  item,
  index,
}: {
  item: typeof portfolioItems[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300 flex items-end p-6">
            <p className="text-red-300 font-medium text-lg">{item.category}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-bold text-white flex-1">{item.title}</h3>
            <ExternalLink className="w-5 h-5 text-red-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
          </div>

          <p className="text-red-100/70 mb-6">{item.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-red-500/20">
            {Object.entries(item.stats).map(([key, value]) => (
              <div key={key}>
                <p className="text-red-400 font-bold text-lg">{value}</p>
                <p className="text-red-200/50 text-sm capitalize">{key}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-24">
      <section className="relative py-16 bg-gradient-to-br from-black via-red-950 to-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-red-200/70 max-w-2xl mx-auto">
            Showcase of our best work and successful client projects
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
