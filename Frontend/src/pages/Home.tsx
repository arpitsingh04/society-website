import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Wrench, Award, Star, Users, Building, Clock, Youtube, Play, TrendingUp, Factory, Zap, Truck, Package, Settings, Anchor, Warehouse, Fuel, HardHat, Cog, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialCarousel, type Testimonial } from '@/components/ui/testimonial';
import { ServiceShowcase } from '@/components/ui/carousel-3d';
import { LogoScroll } from '@/components/LogoScroll';
import { OptimizedHero } from '@/components/ui/hero-optimized';
import AchievementSection from '@/components/ui/achievement-section';
import { ImageCarousel } from '@/components/ui/image-carousel';
import TeamSection from '@/components/ui/team';

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
import heroVideo from '@/assets/video/society-video.mp4';
import societyBuildingImg from '@/assets/society/full-building-refined.png';
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
        const processed = data.map((img: any) => {
          let cat = img.category || 'General';
          // Map legacy categories to General
          if (['Industrial Projects', 'Equipment Rental', 'Electrical & Instrumentation', 'EP Solutions', 'Material Handling'].includes(cat)) {
            cat = 'General';
          }
          return {
            ...img,
            category: cat
          };
        });
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

  /* const fallbackProjects = []; */
  const displayProjects = dynamicProjects;



  return <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900">
    {/* Hero Section */}
    <OptimizedHero
      title={
        <>
          <span className="text-[#F58220]">MEENAKSHI</span> <span className="block sm:inline text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">CO. OP. HOUSING SOC. LTD.</span>
        </>
      }
      description="Plot 38, Sector 16, New Panvel East"
      ctaText="Contact Us"
      images={heroImages}
      heroImage={societyBuildingImg}
      onCtaClick={() => navigate('/contact')}
      onServicesClick={() => navigate('/events')}
    />

    {/* Welcome / Info Section */}
    <section className="section-padding">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto fade-in-section">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Welcome to <span className="text-[#F58220]">Meenakshi CHSL</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A vibrant cooperative housing society located in the heart of New Panvel website designed for events management.
          </p>
        </div>
      </div>
    </section>

    {/* About Society Section */}
    <section className="py-20 bg-white dark:bg-gray-800/50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fade-in-section">
            <h2 className="font-heading text-3xl sm:text-4xl font-black mb-2 uppercase">
              MEENAKSHI <span className="text-[#F58220]">CO. OP. HOUSING SOC. LTD.</span>
            </h2>
            <p className="text-sm md:text-base font-bold text-gray-500 dark:text-gray-400 mb-6 font-mono tracking-wide">
              Regn. No. Rgd/Pw/Hsg/(TC)/585/92-93
            </p>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Meenakshi CHSL stands as a beacon of modern community living in New Panvel.
                Our society is designed to provide residents with a safe, inclusive, and vibrant environment where families flourish and neighbors become friends.
              </p>
              <p>
                With well-maintained amenities, lush green surroundings, and a proactive management committee, we ensure that every resident enjoys a high quality of life. From cultural festivals to safety initiatives, we are committed to excellence in every aspect of society management.
              </p>

            </div>
          </div>
          <div className="order-1 lg:order-2 fade-in-section relative group">
            <div className="absolute inset-0 bg-[#F58220] rounded-[2rem] transform rotate-3 scale-105 opacity-20 transition-transform group-hover:rotate-6 duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] transform transition-transform group-hover:-translate-y-2 duration-500">
              <img
                src={societyBuildingImg}
                alt="Meenakshi CHSL Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Plot 38, Sector 16</p>
                <p className="text-sm opacity-90">New Panvel East</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Events - Swiper.js */}
    <section className="section-padding bg-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-in-section">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Upcoming <span className="text-[#F58220]">Events</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Join us in our upcoming community gatherings and celebrations.
            </p>
          </div>
          <Link to="/events" className="mt-6 md:mt-0 group hidden sm:flex items-center text-[#F58220] font-bold text-lg">
            View All Events
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
                    {project.eventDate && (
                      <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#F58220]" />
                        {new Date(project.eventDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link to="/events">
            <Button className="w-full bg-[#F58220] hover:bg-[#e67619] text-white font-bold h-14 rounded-xl">
              View All Events
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Members Section */}
    <TeamSection />

    {/* CTA Section */}
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
                Connect With <span className="text-[#F58220]">Us</span>
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
                Have questions or want to know more about our society events?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <button className="group bg-[#1a6b7e] hover:bg-[#155a6a] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg">
                    Contact Committee
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link to="/events">
                  <button className="bg-white hover:bg-gray-100 text-gray-900 text-lg font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg">
                    View Events
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
  </div>;
};
export default Home;