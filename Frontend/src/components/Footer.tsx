import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import logoImage from '@/assets/sejalcolor.png';
import { useSettings } from '@/hooks/useSettings';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: settings } = useSettings();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-black tracking-tight text-white">
                MEENAKSHI <span className="text-[#F58220]">CHSL</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              A premier cooperative housing society in New Panvel, committed to providing a safe, green, and vibrant community for all residents.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F58220] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F58220] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F58220] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F58220] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Events', path: '/events' },
                { name: 'Members', path: '/members' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#F58220] transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="group">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">Email</p>
                  <a href={`mailto:${settings?.email || 'info@meenakshichsl.com'}`} className="flex items-center gap-3 text-gray-400 group-hover:text-[#F58220] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F58220]/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium break-all">{settings?.email || 'info@meenakshichsl.com'}</span>
                  </a>
                </div>

                <div className="group">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">Phone</p>
                  <a href={`tel:${settings?.contactNumber || ''}`} className="flex items-center gap-3 text-gray-400 group-hover:text-[#F58220] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F58220]/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">{settings?.contactNumber || '+91 98765 43210'}</span>
                  </a>
                </div>
                <div className="group">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 group-hover:text-[#F58220] transition-colors">WhatsApp</p>
                  <a href={`https://wa.me/${settings?.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 group-hover:text-[#F58220] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F58220]/20 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium">{settings?.whatsappNumber || '+91 98765 43210'}</span>
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
                    {settings?.address || <>Meenakshi CHS, Plot 38, Sector 16,<br />New Panvel East, Maharashtra</>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        < div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" >
          <p className="text-sm text-gray-500">
            © {currentYear} Meenakshi CHSL. All rights reserved.
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
        </div >
      </div >
    </footer >
  );
};

export default Footer;