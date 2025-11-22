import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const portfolioItems = [
  {
    title: 'E-Commerce Platform Redesign',
    category: 'Web Design & Development',
    description:
      'Complete redesign and rebuild of a major e-commerce platform, resulting in 45% increase in conversion rates.',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    stats: { users: '50K+', growth: '45%', roi: '3.2x' },
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'Fitness Tracking Mobile App',
    category: 'App Development',
    description:
      'Cross-platform fitness app with real-time tracking, social features, and AI-powered recommendations.',
    image: 'bg-gradient-to-br from-cyan-600 to-blue-600',
    stats: { downloads: '100K+', rating: '4.8/5', active: '25K' },
    tags: ['React Native', 'Firebase', 'Machine Learning'],
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description:
      'Multi-channel marketing campaign that generated 2.5M impressions and increased brand awareness by 180%.',
    image: 'bg-gradient-to-br from-blue-600 to-indigo-600',
    stats: { impressions: '2.5M', leads: '5K+', roi: '4.1x' },
    tags: ['SEO', 'Social Media', 'Content Marketing'],
  },
  {
    title: 'Brand Identity & Logo Design',
    category: 'Branding & Design',
    description:
      'Complete brand overhaul including logo, color system, typography, and brand guidelines for a tech startup.',
    image: 'bg-gradient-to-br from-indigo-600 to-purple-600',
    stats: { recognition: '92%', consistency: '100%', usage: '50+' },
    tags: ['Branding', 'Logo Design', 'UI/UX'],
  },
  {
    title: 'Product Animation Series',
    category: 'Animation & Motion Design',
    description:
      'Series of high-impact product animations and explainer videos that increased engagement by 320%.',
    image: 'bg-gradient-to-br from-cyan-600 to-teal-600',
    stats: { views: '5M+', engagement: '320%', shares: '15K+' },
    tags: ['3D Animation', 'Motion Graphics', 'Video Production'],
  },
  {
    title: 'Financial Dashboard System',
    category: 'Automation & Financial Services',
    description:
      'Real-time financial dashboard with automated reporting, billing, and business intelligence features.',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    stats: { users: '200+', automation: '85%', timesaved: '40h/mo' },
    tags: ['React', 'Node.js', 'Data Visualization'],
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
      <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className={`aspect-video ${item.image} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-white/50 mx-auto mb-4" />
              <p className="text-white/70 font-medium">{item.category}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-2xl font-bold text-white flex-1">{item.title}</h3>
            <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
          </div>

          <p className="text-blue-100/70 mb-6">{item.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-blue-500/20">
            {Object.entries(item.stats).map(([key, value]) => (
              <div key={key}>
                <p className="text-cyan-400 font-bold text-lg">{value}</p>
                <p className="text-blue-200/50 text-sm capitalize">{key}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm"
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
    <div className="min-h-screen bg-gray-900 overflow-x-hidden pt-24">
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
            Showcase of our best work and successful client projects
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800">
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
