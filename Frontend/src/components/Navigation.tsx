import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSettings } from '@/hooks/useSettings';
import TopBar from './TopBar';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { data: settings } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Members', href: '/members' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div
        className={cn(
          "bg-zinc-900 transition-all duration-300 ease-in-out overflow-hidden",
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <TopBar />
      </div>
      <nav
        className={cn(
          "w-full transition-all duration-500",
          "h-20 bg-white/80 dark:bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
        )}
      >
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight transition-colors text-gray-900">
                  MEENAKSHI <span className="text-[#F58220]">CHSL</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#F58220]",
                    location.pathname === item.href
                      ? "text-[#F58220]"
                      : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a href={`tel:${settings?.contactNumber || '+918928237775'}`}>
                <Button className="bg-[#F58220] hover:bg-[#d66e15] text-white rounded-full px-6">
                  <Phone className="w-4 h-4 mr-2" />
                  {settings?.contactNumber || '+91 8928237775'}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors text-gray-900 hover:bg-muted"
              )}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-card border-t border-border shadow-2xl z-[9998] overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block py-3 px-3 font-semibold transition-colors duration-200 hover:text-brand-orange hover:bg-muted/50 rounded-md",
                      location.pathname === item.href
                        ? "text-brand-orange bg-brand-orange/10"
                        : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <a href={`tel:${settings?.contactNumber || '+918928237775'}`} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    className="text-white w-full mt-4 shadow-lg font-bold"
                    style={{
                      background: 'hsl(var(--brand-orange))',
                      backgroundImage: 'none'
                    }}
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
