import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImage from '@/assets/sejalcolor.png';
// import veloitLogo from '@/assets/veloit-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F58220] to-transparent opacity-50"></div>
      <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-[#0D4F5C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none"></div> */}

      <div className="container-custom pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src={logoImage} alt="Sejal Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold leading-none">SEJAL</h3>
                <p className="text-[10px] tracking-wider text-[#F58220]">INDUSTRIAL SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Navi Mumbai based multi-business company providing comprehensive industrial services and process-system solutions across key sectors.
            </p>
            <div className="flex gap-4">
              {/* Add Social Links here if available later */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F58220] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/ourproducts' },
                { name: 'Certificates', path: '/certificates' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#F58220] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#F58220]"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F58220] rounded-full"></span>
              Our Expertise
            </h3>
            <ul className="space-y-3">
              {[
                'Electrical & Instrumentation',
                'Heavy Equipment Rental',
                'Industrial Maintenance',
                'Material Handling',
                'Quality & Safety Audits',
                'Turnkey Projects'
              ].map((service, idx) => (
                <li key={idx} className="text-gray-400 text-sm hover:text-white transition-colors cursor-default flex items-center gap-2">
                  • {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F58220] rounded-full"></span>
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="group">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">Call Us</p>
                <a href="tel:+918928237775" className="flex items-center gap-3 text-white hover:text-[#F58220] transition-colors">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F58220]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium">+91 8928237775</span>
                </a>
              </div>

              <div className="group">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">Email Us</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:info@sejalind.com" className="flex items-center gap-3 text-white hover:text-[#F58220] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F58220]/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">info@sejalind.com</span>
                  </a>
                  <a href="mailto:sales@sejalind.com" className="flex items-center gap-3 text-white hover:text-[#F58220] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F58220]/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">sales@sejalind.com</span>
                  </a>
                </div>
              </div>

              <div className="group">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">Location</p>
                <div className="flex gap-3 text-gray-400">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#F58220]/20 transition-colors">
                    <MapPin className="w-4 h-4 group-hover:text-[#F58220] transition-colors" />
                  </span>
                  <p className="text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Office No. 4, Bhoomi Tower, Plot No 35, Sec 36, Kamothe, Navi Mumbai, Maharashtra-410209
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Sejal Industrial Solutions Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-sm text-gray-400 hover:text-[#F58220] transition-colors flex items-center gap-2"
            >
              Back to Top
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;