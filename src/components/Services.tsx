import { useEffect, useState, useRef } from 'react';
import {
  Monitor,
  Smartphone,
  TrendingUp,
  Film,
  DollarSign,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    description:
      'Your website is your first impression — we make sure it\'s unforgettable. Our team builds high-performing, visually stunning websites that are responsive, secure, and built to convert. We focus on user experience, speed, and clear storytelling to turn visitors into loyal customers.',
    gradient: 'from-blue-600 to-cyan-600',
    animation: 'blueprint',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'We build mobile applications that connect people with purpose. Whether it\'s Android or iOS, we design intuitive apps that look modern, run fast, and help businesses stay ahead in a mobile-first world. Our apps are tailored to user behavior, ensuring smooth experiences that users love to keep using.',
    gradient: 'from-cyan-600 to-blue-600',
    animation: 'phone-mockup',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Growth Strategy',
    description:
      'We don\'t just market your brand — we make people fall in love with it. Our campaigns are designed to increase reach, build relationships, and drive revenue. We combine creative storytelling with data-driven insights to turn visibility into conversions.',
    gradient: 'from-blue-600 to-indigo-600',
    animation: 'charts',
  },
  {
    icon: Film,
    title: 'Animation & Creative Design',
    description:
      'We bring brands to life with visuals that move hearts and minds. From animations to brand storytelling videos, we make every design a living experience. Our animations make your brand stand out — dynamic, emotional, and unforgettable.',
    gradient: 'from-indigo-600 to-purple-600',
    animation: 'reel',
  },
  {
    icon: DollarSign,
    title: 'Financial & Automation Services',
    description:
      'We help you stay on top of your business numbers with clarity and confidence. Our financial solutions simplify reporting, automate repetitive work, and help you make smarter decisions. We ensure your systems run efficiently, so you can focus on growth, not paperwork.',
    gradient: 'from-cyan-600 to-teal-600',
    animation: 'dashboard',
  },
  {
    icon: Palette,
    title: 'Branding, Graphics & Marketing Collateral',
    description:
      'We make your brand unforgettable through stunning design and strong identity. From logos and packaging to full brand systems, we design visuals that make people trust and remember you. Your brand deserves to speak with confidence and look timeless.',
    gradient: 'from-blue-600 to-cyan-600',
    animation: 'brand-reveal',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      className={`group relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}></div>
        </div>

        <div className="relative">
          <div
            className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <service.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
            {service.title}
          </h3>

          <p className="text-blue-100/70 leading-relaxed">{service.description}</p>

          <div className="mt-6 flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all duration-300">
            <span>Learn More</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </h2>
          <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
            Everything you need to build, grow, and automate your business under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
