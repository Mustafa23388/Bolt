import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

export default function Footer() {
  const services = [
    'Website Design & Development',
    'App Development',
    'Digital Marketing',
    'Animation & Creative Design',
    'Financial Services',
    'Branding & Graphics',
  ];

  const quickLinks = ['About Us', 'Services', 'Portfolio', 'Contact', 'Careers'];

  return (
    <footer className="relative bg-gradient-to-br from-black via-red-950/20 to-black border-t border-red-500/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
              Magmar Enterprises
            </h3>
            <p className="text-red-200/70 mb-6">
              Building businesses that sell, scale, and stand out.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="p-2 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Icon className="w-5 h-5 text-red-400" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-red-200/70 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-red-200/70 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-200/70">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">contact@magmar.enterprises</span>
              </li>
              <li className="flex items-start gap-3 text-red-200/70">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-red-200/70">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Global Agency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-red-200/70 text-sm text-center md:text-left">
              © 2025 Magmar Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-red-200/70 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-red-200/70 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
