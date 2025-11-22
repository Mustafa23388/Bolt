import { useEffect, useState, useRef } from 'react';
import { Globe, Rocket, TrendingUp } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Us
              </span>
            </h2>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-8">
              Magmar Enterprises is a full-scale global agency built to help startups and small
              businesses grow through creativity, technology, and intelligent systems. We design
              experiences, automate operations, and deliver strategies that make real impact. Every
              project starts with one goal — to make your brand stand out, perform better, and grow
              beyond limits.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Globe, text: 'Global Reach' },
                { icon: Rocket, text: 'Fast Growth' },
                { icon: TrendingUp, text: 'Real Impact' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm"
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl backdrop-blur-xl border border-blue-500/30 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-2xl animate-float-delayed"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping-slow"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '3s',
                        }}
                      ></div>
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl shadow-blue-500/50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
