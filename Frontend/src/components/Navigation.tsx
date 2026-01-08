import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Wrench, Zap, Truck, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/sejalcolor.png';
import TopBar from './TopBar';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      subItems: [
        {
          name: 'Equipment Rental',
          href: '/services/equipment-rental',
          icon: Truck,
          description: 'High-quality industrial access & material handling equipment'
        },
        {
          name: 'Electrical & Instrumentation',
          href: '/services/electrical-instrumentation',
          icon: Zap,
          description: 'Complete process automation & instrumentation solutions'
        },
      ]
    },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-current w-5 h-5 text-foreground hover:text-brand-orange transition-colors"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

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
          isScrolled
            ? "h-16 bg-white/80 dark:bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
            : "h-20 bg-white dark:bg-card border-b border-transparent shadow-none"
        )}
      >
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src={logoImage}
                alt="Sejal Industrial Solutions Private Limited"
                className={cn(
                  "transition-all duration-500",
                  isScrolled ? "h-10" : "h-14"
                )}
              />
              <div className="flex flex-col ">
                <span className={cn(
                  "font-bold leading-none tracking-tight text-foreground transition-all duration-500",
                  isScrolled ? "text-xl" : "text-2xl"
                )}>
                  SEJAL
                </span>
                <span className={cn(
                  "font-medium tracking-widest text-[#F58220] transition-all duration-500",
                  isScrolled ? "text-[8px]" : "text-[10px]"
                )}>
                  INDUSTRIAL SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.name === 'Services' && setIsServicesHovered(true)}
                  onMouseLeave={() => item.name === 'Services' && setIsServicesHovered(false)}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={cn(
                        "font-semibold flex items-center transition-colors duration-200 hover:text-brand-orange",
                        (location.pathname === item.href || (item.subItems && item.subItems.some(sub => location.pathname === sub.href)))
                          ? "text-brand-orange"
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={cn(
                        "font-semibold flex items-center transition-colors duration-200 cursor-default",
                        (item.subItems && item.subItems.some(sub => location.pathname === sub.href))
                          ? "text-brand-orange"
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                  {item.subItems && (
                    <ChevronDown className={cn(
                      "ml-1.5 h-4 w-4 transition-transform duration-300",
                      isServicesHovered ? "rotate-180" : ""
                    )} />
                  )}

                  {/* Enhanced Dropdown Menu */}
                  {item.subItems && (
                    <AnimatePresence>
                      {isServicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-[-20px] w-[340px] bg-white/95 dark:bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl py-4 overflow-hidden mt-0"
                        >
                          {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-blue opacity-70"></div> */}

                          {item.subItems.map((subItem, idx) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={cn(
                                "group flex items-start gap-4 px-6 py-4 transition-all duration-300 hover:bg-muted/50 relative",
                                location.pathname === subItem.href ? "bg-muted/30" : ""
                              )}
                            >
                              <div className={cn(
                                "mt-1 p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm",
                                location.pathname === subItem.href
                                  ? "bg-brand-orange text-white"
                                  : "bg-brand-orange/10 text-brand-orange"
                              )}>
                                <subItem.icon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className={cn(
                                  "font-bold text-sm mb-1 transition-colors group-hover:text-brand-orange",
                                  location.pathname === subItem.href ? "text-brand-orange" : "text-foreground"
                                )}>
                                  {subItem.name}
                                </span>
                                <span className="text-[11px] leading-relaxed text-muted-foreground font-medium pr-2">
                                  {subItem.description}
                                </span>
                              </div>

                              {/* Selection Indicator */}
                              {location.pathname === subItem.href && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange rounded-r-full"></div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Follow Us Social Icons */}
              <div className="flex items-center space-x-2 border-l border-border pl-6">
                <a
                  href="https://wa.me/918928237775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 hover:bg-brand-orange/10 rounded-full flex items-center justify-center transition-all group"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>

              <Link to="/contact">
                <Button
                  size={isScrolled ? "sm" : "default"}
                  className="text-white shadow-lg font-bold"
                  style={{
                    background: 'hsl(var(--brand-orange))',
                    backgroundImage: 'none'
                  }}
                >
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
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
                    <div key={item.name}>
                      {item.subItems ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className={cn(
                              "w-full flex items-center justify-between py-3 px-3 font-semibold transition-colors duration-200 hover:bg-muted/50 rounded-md",
                              item.subItems.some(sub => location.pathname === sub.href)
                                ? "text-brand-orange bg-brand-orange/5"
                                : "text-foreground"
                            )}
                          >
                            {item.name}
                            <ChevronDown className={cn(
                              "h-4 w-4 transition-transform duration-300",
                              isMobileServicesOpen ? "rotate-180" : ""
                            )} />
                          </button>

                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                      "flex items-center gap-3 py-3 px-4 text-sm font-medium transition-colors hover:text-brand-orange rounded-md",
                                      location.pathname === subItem.href ? "text-brand-orange bg-brand-orange/5" : "text-muted-foreground"
                                    )}
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
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
                      )}
                    </div>
                  ))}

                  {/* Follow Us Social Icons - Mobile */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://wa.me/918928237775"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted hover:bg-brand-orange/10 border border-border rounded-full flex items-center justify-center transition-all group"
                        title="WhatsApp"
                      >
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>

                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      className="text-white w-full mt-4 shadow-lg font-bold"
                      style={{
                        background: 'hsl(var(--brand-orange))',
                        backgroundImage: 'none'
                      }}
                    >
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
