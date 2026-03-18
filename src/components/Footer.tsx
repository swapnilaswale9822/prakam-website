import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Factory } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Our Clients', path: '/clients' },
  { name: 'Contact', path: '/contact' },
];

const products = [
  'Storage Tanks',
  'Industrial Blenders',
  'Conveyors',
  'Dryers & Evaporators',
  'Material Handling',
  'Pressure Vessels',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Factory size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">PRAKAM</h3>
                <p className="text-xs text-steel-400 tracking-[0.15em] uppercase">Engineering Systems</p>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Leading manufacturer of processing equipment, material handling systems,
              and structural solutions. Precision engineering with unwavering quality commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-steel-400 hover:text-orange-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-steel-400 hover:text-orange-400 text-sm transition-colors duration-200"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-heading">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+918600500725" className="flex items-start gap-3 text-steel-400 hover:text-orange-400 text-sm transition-colors">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p>+91 8600500725</p>
                  <p>+91 7066994575</p>
                </div>
              </a>
              <a href="mailto:prakamsales@gmail.com" className="flex items-start gap-3 text-steel-400 hover:text-orange-400 text-sm transition-colors">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p>prakamsales@gmail.com</p>
                  <p>prakam.marketing@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3 text-steel-400 text-sm">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p>Plot No.273, Sector No.10, PCNTDA MIDC, Bhosari, Pune - 411026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-500 text-sm">
            &copy; {new Date().getFullYear()} Prakam Engineering Systems. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
