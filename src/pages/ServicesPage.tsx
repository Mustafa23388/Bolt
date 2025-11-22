import { useEffect, useState, useRef } from 'react';
import {
  Monitor,
  Smartphone,
  TrendingUp,
  Film,
  DollarSign,
  Palette,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const servicesData = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    shortDesc: 'High-performing, visually stunning websites',
    fullDesc:
      'Your website is your first impression — we make sure it\'s unforgettable. Our team builds high-performing, visually stunning websites that are responsive, secure, and built to convert. We focus on user experience, speed, and clear storytelling to turn visitors into loyal customers.',
    features: [
      'Responsive design for all devices',
      'SEO optimized structure',
      'Fast loading speeds',
      'Secure and scalable',
      'Clear call-to-action design',
      'Analytics integration',
    ],
    color: 'from-red-600 to-red-600',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    shortDesc: 'Mobile apps that users love',
    fullDesc:
      'We build mobile applications that connect people with purpose. Whether it\'s Android or iOS, we design intuitive apps that look modern, run fast, and help businesses stay ahead in a mobile-first world. Our apps are tailored to user behavior, ensuring smooth experiences that users love to keep using.',
    features: [
      'iOS & Android development',
      'Native performance',
      'Intuitive user interface',
      'Real-time features',
      'Offline functionality',
      'App store optimization',
    ],
    color: 'from-red-600 to-red-600',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Growth Strategy',
    shortDesc: 'Drive visibility and revenue',
    fullDesc:
      'We don\'t just market your brand — we make people fall in love with it. Our campaigns are designed to increase reach, build relationships, and drive revenue. We combine creative storytelling with data-driven insights to turn visibility into conversions.',
    features: [
      'Social media marketing',
      'Content strategy',
      'Email campaigns',
      'SEO & SEM',
      'Analytics & reporting',
      'Growth hacking',
    ],
    color: 'from-red-600 to-indigo-600',
  },
  {
    icon: Film,
    title: 'Animation & Creative Design',
    shortDesc: 'Visuals that move hearts and minds',
    fullDesc:
      'We bring brands to life with visuals that move hearts and minds. From animations to brand storytelling videos, we make every design a living experience. Our animations make your brand stand out — dynamic, emotional, and unforgettable.',
    features: [
      '2D & 3D animations',
      'Brand storytelling videos',
      'Motion graphics',
      'Cinematic effects',
      'Social media content',
      'Presentation videos',
    ],
    color: 'from-red-600 to-red-600',
  },
  {
    icon: DollarSign,
    title: 'Financial & Automation Services',
    shortDesc: 'Stay on top of your numbers',
    fullDesc:
      'We help you stay on top of your business numbers with clarity and confidence. Our financial solutions simplify reporting, automate repetitive work, and help you make smarter decisions. We ensure your systems run efficiently, so you can focus on growth, not paperwork.',
    features: [
      'Financial reporting',
      'Workflow automation',
      'Invoice management',
      'Expense tracking',
      'Business intelligence',
      'Process optimization',
    ],
    color: 'from-red-600 to-red-600',
  },
  {
    icon: Palette,
    title: 'Branding, Graphics & Marketing Collateral',
    shortDesc: 'Make your brand unforgettable',
    fullDesc:
      'We make your brand unforgettable through stunning design and strong identity. From logos and packaging to full brand systems, we design visuals that make people trust and remember you. Your brand deserves to speak with confidence and look timeless.',
    features: [
      'Logo design',
      'Brand guidelines',
      'Color palette creation',
      'Typography system',
      'Marketing materials',
      'Packaging design',
    ],
    color: 'from-red-600 to-red-600',
  },
];

function ServiceDetail({ service, index }: { service: typeof servicesData[0]; index: number }) {
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

  const isEvenIndex = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEvenIndex && 'md:grid-flow-dense'}`}>
        <div>
          <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
            <service.icon className="w-12 h-12 text-white" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h3>

          <p className="text-lg text-red-100/80 mb-8 leading-relaxed">{service.fullDesc}</p>

          <div className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-200">{feature}</span>
              </div>
            ))}
          </div>

          <button className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-600/20 rounded-2xl backdrop-blur-xl border border-red-500/30 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-red-500/30 rounded-full blur-2xl animate-float-delayed"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border-2 border-red-400/30 rounded-full animate-ping-slow"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                    }}
                  ></div>
                ))}
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-full shadow-2xl`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden pt-24">
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-400">
              Services
            </span>
          </h1>
          <p className="text-xl text-red-200/70 max-w-2xl mx-auto">
            Comprehensive solutions to build, grow, and scale your business
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {servicesData.map((service, index) => (
            <ServiceDetail key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
