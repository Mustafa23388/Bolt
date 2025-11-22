import { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden pt-24">
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-400">
              Together
            </span>
          </h1>
          <p className="text-xl text-red-200/70 max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let's bring your vision to life
          </p>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-400">Contact</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-red-200/70">contact@magmar.enterprises</p>
                    <p className="text-red-200/70">support@magmar.enterprises</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-red-200/70">+1 (555) 123-4567</p>
                    <p className="text-red-200/70">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-red-200/70">Global Agency</p>
                    <p className="text-red-200/70">Serving worldwide clients</p>
                  </div>
                </div>
              </div>

              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Facebook, href: '#' },
                  { Icon: Instagram, href: '#' },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Icon className="w-5 h-5 text-red-400" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg text-white placeholder-red-200/50 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg text-white placeholder-red-200/50 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg text-white placeholder-red-200/50 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg text-white placeholder-red-200/50 focus:outline-none focus:border-red-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-red-500/30 rounded-lg text-white placeholder-red-200/50 focus:outline-none focus:border-red-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-center font-medium">
                      Message sent! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-gray-800 to-red-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-12 border border-red-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-red-200/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how Magmar can help you achieve your goals
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
