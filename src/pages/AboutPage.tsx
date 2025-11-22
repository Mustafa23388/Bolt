import { useEffect, useState, useRef } from 'react';
import { Users, Target, Globe, Zap, Award, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    bio: 'Visionary leader with 15+ years in digital transformation',
    icon: Users,
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Development',
    bio: 'Full-stack expert building scalable solutions',
    icon: Zap,
  },
  {
    name: 'Marcus Johnson',
    role: 'Marketing & Strategy Lead',
    bio: 'Data-driven marketer driving growth and brand awareness',
    icon: Target,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Director',
    bio: 'Award-winning designer creating memorable experiences',
    icon: Award,
  },
];

const values = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize your goals and work tirelessly to exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of trends and leverage cutting-edge technology to deliver competitive advantages.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand diverse markets and cultural nuances to help you reach audiences worldwide.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every project is measured by real, tangible outcomes that impact your bottom line.',
  },
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const Icon = member.icon;
  return (
    <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
      <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
      <p className="text-blue-200/70">{member.bio}</p>
    </div>
  );
}

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
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
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
          <value.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
          <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
          <p className="text-blue-200/70">{value.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
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
    <div className="min-h-screen bg-gray-900 overflow-x-hidden pt-24">
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Magmar
            </span>
          </h1>
          <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
            Building businesses that scale through creativity, technology, and intelligence
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={sectionRef}
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-blue-500/20 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-blue-100/80 mb-6 leading-relaxed">
                Magmar Enterprises was founded with a simple belief: businesses deserve partners who understand their
                challenges and deliver real solutions. We started as a small team of passionate creators and problem
                solvers, and have grown into a full-scale global agency serving startups, small businesses, and
                enterprises across multiple industries.
              </p>
              <p className="text-lg text-blue-100/80 mb-6 leading-relaxed">
                Our journey has been defined by countless success stories — businesses that trusted us to help them
                build, grow, and automate. From web redesigns that doubled conversion rates to apps that reached millions
                of users, we've seen firsthand the impact of strategic thinking combined with excellent execution.
              </p>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Today, Magmar Enterprises is more than just an agency. We're a trusted partner in your growth journey,
                bringing together expertise in design, development, marketing, automation, and branding to deliver
                comprehensive solutions that move the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Team</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-gray-800 to-blue-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">By The Numbers</h2>
          <p className="text-xl text-blue-200/70 mb-12 max-w-2xl mx-auto">
            Our impact speaks for itself
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '200+', label: 'Happy Clients' },
              { value: '15M+', label: 'Users Impacted' },
              { value: '8', label: 'Years of Excellence' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-200/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
