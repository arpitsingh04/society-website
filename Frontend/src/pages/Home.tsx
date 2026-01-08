import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Award, CheckCircle, Star, Users, Building, Clock, Youtube, Play, TrendingUp, Factory, Zap, Truck, Package, Settings, Anchor, Warehouse, Fuel, HardHat, Cog, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialCarousel, type Testimonial } from '@/components/ui/testimonial';
import { ServiceShowcase } from '@/components/ui/carousel-3d';
import { LogoScroll } from '@/components/LogoScroll';
import { OptimizedHero } from '@/components/ui/hero-optimized';
import AchievementSection from '@/components/ui/achievement-section';
import { ImageCarousel } from '@/components/ui/image-carousel';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import Swiper core and required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from "framer-motion";

import heroImage from '@/assets/hero-image.jpg';
import productsImage from '@/assets/fire-products.jpg';
import servicesImage from '@/assets/services-team.jpg';

import ele1 from '@/assets/ele/ele1.webp';
import ele2 from '@/assets/ele/ele2.webp';
import rent1 from '@/assets/rent/rent1.webp';
import rent7 from '@/assets/rent/rent7.webp';
import rent2 from '@/assets/rent/rent2.webp';

import isoImg from '@/assets/qac/ios.webp';
import qualityImg from '@/assets/qac/qs.webp';
import complianceImg from '@/assets/qac/cc.webp';
import infraImg from '@/assets/industries/infrastructure.jpg';
import mfgImg from '@/assets/industries/manufacturing.webp';
import warehouseImg from '@/assets/industries/warehousing.webp';
import powerImg from '@/assets/industries/power.webp';
import maintImg from '@/assets/industries/maintenance.webp';
import heroVideo from '@/assets/video/sejalheroloww.mp4';
import { API_BASE_URL } from '@/config/api';

interface GalleryImage {
  _id: string;
  filePath: string;
  title: string;
  category?: string;
  description?: string;
}

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    fetchProjects();

    return () => observer.disconnect();
  }, []);

  const [dynamicProjects, setDynamicProjects] = useState<GalleryImage[]>([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        // Categorize based on title or common patterns if category is missing in API
        const processed = data.map((img: any) => ({
          ...img,
          category: img.title.toLowerCase().includes('crane') || img.title.toLowerCase().includes('lift') ? 'Equipment Rental' : 'Industrial Projects'
        }));
        setDynamicProjects(processed);
      }
    } catch (error) {
      console.error('Error fetching projects for home:', error);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  const heroImages = [
    ele1,
    rent7,
    ele2,
    rent2,
  ];

  const fallbackProjects = [
    {
      title: "Power Plant Instrumentation",
      category: "Electrical & Instrumentation",
      image: ele1,
      description: "Complete design and commissioning of control systems for a 500MW plant."
    },
    {
      title: "High-Rise Access Solution",
      category: "Equipment Rental",
      image: rent7,
      description: "Supply of multi-stage boom lifts for facade installation on a commercial tower."
    },
    {
      title: "Oil Pipeline Automation",
      category: "EP Solutions",
      image: ele2,
      description: "Precision instrumentation and monitoring systems for cross-country pipelines."
    },
    {
      title: "Industrial Fleet Support",
      category: "Material Handling",
      image: rent2,
      description: "Comprehensive equipment rental and maintenance for major manufacturing hubs."
    }
  ];

  const displayProjects = dynamicProjects.length > 0 ? dynamicProjects : fallbackProjects;
  const projects = [
    {
      title: "Power Plant Instrumentation",
      category: "Electrical & Instrumentation",
      image: ele1,
      description: "Complete design and commissioning of control systems for a 500MW plant."
    },
    {
      title: "High-Rise Access Solution",
      category: "Equipment Rental",
      image: rent7,
      description: "Supply of multi-stage boom lifts for facade installation on a commercial tower."
    },
    {
      title: "Oil Pipeline Automation",
      category: "EP Solutions",
      image: ele2,
      description: "Precision instrumentation and monitoring systems for cross-country pipelines."
    },
    {
      title: "Industrial Fleet Support",
      category: "Material Handling",
      image: rent2,
      description: "Comprehensive equipment rental and maintenance for major manufacturing hubs."
    }
  ];

  return <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900">
    {/* Hero Section */}
    <OptimizedHero
      title={
        <>
          <span className="text-[#F58220]">SEJAL</span>  SOLUTIONS THAT <span className="text-[#F58220]">POWER</span> NATIONS
        </>
      }
      description=""
      ctaText="Get Started"
      images={heroImages}
      videoSrc={heroVideo}
      onCtaClick={() => navigate('/contact')}
      onServicesClick={() => navigate('/services/equipment-rental')}
    />



    {/* Services Section */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-[#F58220]">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete industrial services and process-system solutions under one roof
          </p>
        </div>

        <div className="fade-in-section">
          <ServiceShowcase />
        </div>
      </div>
    </section>

    {/* Equipment Fleet Showcase Section */}
    <section className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Our <span className="text-[#F58220]">Equipment Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive range of world-class access and material handling equipment for every industrial need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
          {[
            {
              icon: Settings,
              title: "Scissor Lifts",
              specs: ["Working Height: 6m - 16+ meters", "Platform Capacity: Up to 450 kg"],
              highlight: "Stable Vertical Access",
              color: "from-blue-500 to-blue-600",
              image: rent1
            },
            {
              icon: Anchor,
              title: "Boom Lifts (AWP)",
              specs: ["Working Height: 12m - 45+ meters", "Horizontal Reach: Up to 24m"],
              highlight: "Extended Reach",
              color: "from-orange-500 to-orange-600",
              image: rent7
            },
            {
              icon: Truck,
              title: "Crawler Cranes",
              specs: ["Lifting Capacity: 50 MT - 500 MT", "Heavy Infrastructure Ready"],
              highlight: "Maximum Stability",
              color: "from-purple-500 to-purple-600",
              image: rent2
            },
            {
              icon: Building,
              title: "Tower Cranes",
              specs: ["Lifting Capacity: Up to 20 MT", "Hook Height: 80+ meters"],
              highlight: "Minimal Footprint",
              color: "from-teal-500 to-teal-600",
              image: ele1
            },
            {
              icon: Package,
              title: "Forklifts",
              specs: ["Lifting Capacity: 2 MT - 10 MT", "Lift Height: Up to 6 meters"],
              highlight: "Efficient Handling",
              color: "from-green-500 to-green-600",
              image: rent1
            },
            {
              icon: Cog,
              title: "All-Terrain Cranes",
              specs: ["Lifting Capacity: 20 MT - 300 MT", "Boom Length: 60+ meters"],
              highlight: "Maximum Mobility",
              color: "from-red-500 to-red-600",
              image: rent7
            }
          ].map((equipment, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${equipment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${equipment.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <equipment.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#F58220] transition-colors">
                {equipment.title}
              </h3>

              <ul className="space-y-2 mb-4">
                {equipment.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>

              {/* Highlight Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#F58220]/10 border border-[#F58220]/20">
                <Star className="h-3 w-3 text-[#F58220] mr-1.5" />
                <span className="text-xs font-bold text-[#F58220]">{equipment.highlight}</span>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                <equipment.icon className="h-32 w-32" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 fade-in-section">
          <Link to="/services/equipment-rental">
            <Button className="bg-[#F58220] hover:bg-[#e67619] text-white font-bold h-14 px-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              View Full Equipment Range
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Achievement Section */}
    <AchievementSection />

    {/* Client Logos Section */}
    <section className="relative overflow-hidden py-20 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="mb-12 text-center fade-in-section">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Trusted by <span className="text-[#F58220]">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Serving reputed customers across oil & gas, power, chemical, steel, and agro industries
          </p>
        </div>
      </div>
      <LogoScroll default_velocity={1} />
    </section>


    {/* Showcase Carousel */}
    <ImageCarousel />

    {/* Industries We Serve Section - Redesigned */}
    <section className="section-padding bg-gray-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F58220]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D4F5C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div> */}

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Industries We <span className="text-[#F58220]">Serve</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering specialized engineering and equipment solutions across key sectors that drive the nation's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 fade-in-section">
          {[
            {
              icon: HardHat,
              title: "Infrastructure",
              sub: "Roads, Bridges & Metro",
              img: infraImg,
              color: "from-blue-500/80 to-blue-900/80"
            },
            {
              icon: Factory,
              title: "Manufacturing",
              sub: "Plants & Heavy Industries",
              img: mfgImg,
              color: "from-amber-500/80 to-amber-900/80"
            },
            {
              icon: Truck,
              title: "Warehousing",
              sub: "Logistics & Storage",
              img: warehouseImg,
              color: "from-emerald-500/80 to-emerald-900/80"
            },
            {
              icon: Zap,
              title: "Power & Energy",
              sub: "EPC & Solar Projects",
              img: powerImg,
              color: "from-orange-500/80 to-red-900/80"
            },
            {
              icon: Wrench,
              title: "Maintenance",
              sub: "Shutdowns & MRO",
              img: maintImg,
              color: "from-purple-500/80 to-purple-900/80"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-12 bg-[#F58220] rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl leading-tight mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm font-medium border-l-2 border-[#F58220] pl-3">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    {/* Testimonials Section */}
    {/* <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              What Our <span className="text-[#F58220]">Clients Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by leading industrial and manufacturing companies
            </p>
          </div>

          <div className="fade-in-section">
            <div className="text-center mb-4 md:hidden">
              <p className="text-sm text-muted-foreground/70 font-medium">
                👆 Drag the card to explore more testimonials
              </p>
            </div>
            <TestimonialCarousel 
              testimonials={testimonials}
              className="w-full"
            />
          </div>
        </div>
      </section> */}

    {/* Featured Projects - Swiper.js */}
    <section className="section-padding bg-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-section">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Our Latest <span className="text-[#F58220]">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Delivering excellence across diverse industrial sectors with precision and reliability.
            </p>
          </div>
          <Link to="/projects" className="mt-6 md:mt-0 group hidden sm:flex items-center text-[#F58220] font-bold text-lg">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="fade-in-section relative">
          {/* Custom Navigation Buttons */}
          <button
            className="swiper-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-[#F58220] bg-transparent flex items-center justify-center hover:bg-[#F58220]/10 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#F58220]" />
          </button>
          <button
            className="swiper-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-[#F58220] bg-transparent flex items-center justify-center hover:bg-[#F58220]/10 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#F58220]" />
          </button>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={displayProjects.length > 2}
            observer={true}
            observeParents={true}
            watchSlidesProgress={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1.2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              prevEl: '.swiper-prev-custom',
              nextEl: '.swiper-next-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-16 px-4"
          >
            {displayProjects.map((project: any, index) => (
              <SwiperSlide key={index} className="w-[280px] sm:w-[450px] md:w-[600px] flex justify-center">
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-800 border border-white/5 aspect-[4/5] sm:aspect-video w-full">
                  <img
                    src={(project as any).image || `${API_BASE_URL}/uploads/${(project as any).filePath}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#F58220] text-white text-xs font-bold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link to="/projects">
            <Button className="w-full bg-[#F58220] hover:bg-[#e67619] text-white font-bold h-14 rounded-xl">
              View All Projects
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>


    {/* CTA Section - Inspired by Portfolio */}
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="relative max-w-5xl mx-auto">
          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#063b46] rounded-[3rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Start Your <span className="text-[#F58220]">Next Project?</span>
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
                Partner with us for comprehensive industrial solutions. Let's discuss your requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <button className="group bg-[#1a6b7e] hover:bg-[#155a6a] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link to="/services">
                  <button className="bg-white hover:bg-gray-100 text-gray-900 text-lg font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg">
                    View Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Background Decor - optional subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>


    {/* CTA Section */}
    {/* <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
            
              <div className="bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] p-10 lg:p-14 flex flex-col justify-center">
                <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-black mb-4 leading-tight text-white">
                  Ready to Start Your
                  <span className="block text-[#F58220]">Next Project?</span>
                </h2>
                <p className="text-white text-lg mb-8">
                  Partner with us for comprehensive industrial solutions. Let's discuss your requirements.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: CheckCircle, text: 'Multi-Business Expertise' },
                    { icon: Award, text: 'Proven Track Record' },
                    { icon: Users, text: 'Dedicated Support Team' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-[#F58220]/10 p-2 rounded-lg">
                        <item.icon className="h-5 w-5 text-[#F58220]" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1">
                    <button className="w-full bg-[#F58220] hover:bg-[#e67619] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:border-[#F58220] text-gray-800 font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 bg-white">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

          
              <div className="bg-gradient-to-br from-[#F58220] to-[#e67619] p-10 lg:p-14 flex flex-col justify-center">
                <div className="space-y-8">
                  {[
                    { number: '500+', label: 'Successful Projects' },
                    { number: '6+', label: 'Years in Industry' },
                    { number: '100%', label: 'Client Commitment' }
                  ].map((stat, index) => (
                    <div key={index} className="border-b border-white/20 pb-6 last:border-0 last:pb-0">
                      <div className="text-5xl lg:text-6xl font-black text-white mb-2">{stat.number}</div>
                      <div className="text-white/90 text-lg font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>;
};
export default Home;