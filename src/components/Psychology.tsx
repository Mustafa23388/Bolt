import { useEffect, useState, useRef } from 'react';
import { Shield, Zap, Target } from 'lucide-react';

export default function Psychology() {
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
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Magmar
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Shield, label: 'Trusted', color: 'from-blue-500 to-cyan-500' },
              { icon: Zap, label: 'Fast Results', color: 'from-cyan-500 to-blue-500' },
              { icon: Target, label: 'Precise', color: 'from-blue-500 to-cyan-500' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-br ${item.color} rounded-xl opacity-10 hover:opacity-20 transition-opacity duration-300`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <item.icon className="w-12 h-12 text-white mx-auto" />
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-2xl">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed text-center">
              At Magmar Enterprises, we understand that time is money — and stress is expensive.
              That's why we've built a company where you don't need to search for multiple vendors
              or chase freelancers. From Website Design & Development, App Development, and Digital
              Marketing, to Animation, Branding, and even Financial & Automation Services,
              everything you need to build, grow, and automate your business is right here under one
              roof. Our team blends creativity with smart strategy, helping you scale faster with
              less risk. The moment you see how easy and professional we make your business look,
              your decision to work with Magmar will feel like the smartest move you ever made —
              because it is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
