import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, CheckCircle, Award, Shield, Wrench, Clock, TrendingUp, Users, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Card, CardContent } from '@/components/ui/card';
import ImageCarousel from '@/components/ImageCarousel';
import rentHero from '@/assets/services/rent.webp';
// import heroBg from '@/assets/heroimg/hr1.webp';
import rent1 from '@/assets/rent/rent1.webp';
import rent2 from '@/assets/rent/rent2.webp';
import rent3 from '@/assets/rent/rent3.webp';
import rent4 from '@/assets/rent/rent4.webp';
import rent5 from '@/assets/rent/rent5.webp';
import rent6 from '@/assets/rent/rent6.webp';
import rent7 from '@/assets/rent/rent7.webp';
import rent8 from '@/assets/rent/rent8.webp';

const EquipmentRental = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${rentHero})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          <div className="absolute inset-0 "></div>
          {/* Gradient removed as per user request to keep image clear */}
        </div>

        <div className="container-custom relative z-10 text-center px-2 sm:px-4">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl inline-block w-full max-w-full"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95 text-[10px] xs:text-xs sm:text-sm"
                >
                  <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:-translate-x-1" />
                  <span>Back to Services</span>
                </Link>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#F58220]/10 backdrop-blur-sm border border-[#F58220]/30 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 mb-4 md:mb-6">
                <Truck className="h-3 w-3 sm:h-5 sm:w-5 text-[#F58220]" />
                <span className="text-white font-semibold text-[10px] xs:text-xs sm:text-sm">Global Solutions & Rental Services</span>
              </div>
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-6 text-white drop-shadow-sm break-words">
                Access & Construction <br className="hidden sm:block" />
                <span className="text-[#F58220]">Equipment Solutions</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 font-bold tracking-wide drop-shadow-sm px-1">
                Your one-stop partner for importing world-class machinery and renting high-performance equipment across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full">
                <button
                  onClick={() => document.getElementById('importer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl font-bold text-white transition-all hover:scale-105 text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                >
                  Access Equipment Importer
                </button>
                <button
                  onClick={() => document.getElementById('rental')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-3 sm:px-8 sm:py-4 bg-[#F58220] hover:bg-[#e67619] rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xs xs:text-sm sm:text-base w-full sm:w-auto"
                >
                  Equipment Rental Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 1: ACCESS EQUIPMENT IMPORTER ==================== */}
      <section id="importer" className="py-24 bg-white dark:bg-gray-950 relative">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-16 md:mb-24">
            <span className="block text-[#F58220] font-black tracking-widest uppercase text-sm mb-2">Global Sourcing Expert</span>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Access Equipment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D4F5C] to-[#157a8c]">Importer</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F58220] rounded-full mb-8"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-4">Reliable Global Access Solutions for Indian Industry</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  SEJAL INDUSTRIAL SOLUTIONS PVT LTD is a professional access equipment importer in India, supplying world-class aerial work platforms (AWPs) and mobile elevating work platforms (MEWPs) to meet the growing access needs of infrastructure, industrial, and commercial projects across the country.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  We import high-quality, certified access equipment from globally recognized manufacturers, ensuring superior performance, enhanced safety, and long-term operational reliability for Indian job sites.
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <TrendingUp className="text-[#F58220]" />
                  Global Import & Supply
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  At SEJAL, we specialize in the import, supply, and support of advanced access equipment. Our machines comply with international quality standards and Indian statutory requirements.
                </p>
                <ul className="space-y-3">
                  {['Equipment Selection Guidance', 'Technical Commissioning', 'After-Sales Assistance', 'Seamless Project Integration'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-[#F58220]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Imported Range */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-black mb-10 text-center">Imported Access Equipment Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Scissor Lifts",
                  icon: Truck,
                  specs: ["Working Height: 6m - 16+ meters", "Capacity: Up to 450 kg"],
                  desc: "Stable vertical access, compact design, low operating cost.",
                  use: "Installation, maintenance, finishing, warehouse access"
                },
                {
                  title: "Boom Lifts (AWP)",
                  icon: Truck, // Replace with more specific icon if available
                  specs: ["Height: 12m - 45+ meters", "Type: Articulated & Telescopic"],
                  desc: "Extended vertical and horizontal reach, flexible positioning.",
                  use: "Façade work, power plants, complex access areas"
                },
                {
                  title: "MEWPs",
                  icon: Wrench,
                  specs: ["Config: Electric & Diesel", "Type: Mobile Platforms"],
                  desc: "Safe access at height with high productivity and maneuverability.",
                  use: "Indoor facilities, outdoor construction, infrastructure"
                }
              ].map((item, idx) => (
                <div key={idx} className="group bg-gray-50 dark:bg-gray-900 rounded-[2rem] p-8 hover:bg-[#F58220] transition-colors duration-500">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white/20 group-hover:text-white transition-all">
                    <item.icon className="w-8 h-8 text-[#0D4F5C] group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                  <div className="space-y-2 mb-6 border-l-2 border-[#F58220] group-hover:border-white/50 pl-4 py-1">
                    {item.specs.map((s, i) => (
                      <p key={i} className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-white/90">{s}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-white/80">
                    {item.desc}
                  </p>
                  <div className="text-xs font-medium text-gray-500 group-hover:text-white/70 italic">
                    App: {item.use}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Industries */}
          <div className="flex flex-col gap-12 mb-20">
            {/* Compliance Section */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#F58220]" />
                    Quality, Safety & Compliance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our focus is to deliver safe, durable, and efficient access solutions that minimize risk and maximize productivity.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Manufactured in compliance with international safety standards',
                      'Inspected and certified before dispatch and delivery',
                      'Aligned with Indian regulatory and safety norms',
                      'Supported with technical documentation and training'
                    ].map((li, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm">
                  <h4 className="font-bold mb-6 text-xl">Why Choose SEJAL?</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <div className="w-12 h-12 bg-[#F58220]/10 rounded-full flex items-center justify-center text-[#F58220]">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">Global Sourcing</p>
                        <p className="text-sm text-gray-500">Trusted capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <div className="w-12 h-12 bg-[#0D4F5C]/10 rounded-full flex items-center justify-center text-[#0D4F5C]">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">End-to-End Support</p>
                        <p className="text-sm text-gray-500">Import to Commissioning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Section */}
            {/* Industries Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Infrastructure & Civil Construction',
                  'Industrial & Manufacturing Facilities',
                  'Warehousing & Logistics',
                  'Power, Energy & EPC Projects',
                  'Commercial Buildings & FM'
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold hover:border-[#F58220] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-4">Why Choose SEJAL as Importer?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <p className="font-bold text-[#F58220]">Global Sourcing</p>
                    <p className="text-xs text-gray-500">Trusted capabilities</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                    <p className="font-bold text-[#F58220]">End-to-End Support</p>
                    <p className="text-xs text-gray-500">Import to Commissioning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-10 bg-[#0D4F5C] rounded-[2rem] text-white">
            <h3 className="text-2xl font-bold mb-4">Partner for Global Access Solutions in India</h3>
            <p className="max-w-3xl mx-auto mb-8 text-white/80">
              At SEJAL INDUSTRIAL SOLUTIONS PVT LTD, we combine global-quality access equipment with local expertise and support, helping our clients achieve safer, faster, and more efficient work at height.
            </p>
            <Link to="/contact">
              <button className="bg-[#F58220] hover:bg-[#e67619] text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-xl">
                Inquire for Import
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: RENTAL SERVICES ==================== */}
      <section id="rental" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm">One-Stop Equipment Partner</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
              Construction & Access <span className="text-[#F58220]">Rental</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              We deliver reliable, high-performance equipment solutions that support infrastructure, industrial, commercial, and heavy engineering projects.
            </p>
          </div>

          {/* Introduction Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-white dark:bg-gray-800 border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-[#F58220]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Your Trusted Equipment Partner</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  SEJAL INDUSTRIAL SOLUTIONS PVT LTD deliver reliable, high-performance equipment solutions supporting infrastructure, industrial, commercial, and heavy engineering projects with efficiency and safety.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our objective is to operate as a one-stop equipment solutions partner, offering advanced machinery, technical expertise, and flexible rental options aligned with dynamic project requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 border-none shadow-xl overflow-hidden">
              <div className="h-2 bg-[#0D4F5C]"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide a complete range of construction, lifting, material handling, and access equipment on rental, engineered to enhance productivity, improve worksite safety, and optimize project costs. Our fleet is continuously upgraded with latest-technology machines to ensure operational reliability and statutory compliance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fleet Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
              <span className="w-2 h-10 bg-[#F58220] rounded-full"></span>
              Advanced Equipment Fleet
            </h3>

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16 px-4"
            >
              {[
                {
                  name: "Farana / Pick & Carry",
                  cap: "5 MT - 20 MT",
                  desc: "High maneuverability with efficient lifting performance.",
                  app: "Material handling, confined job sites",
                  img: rent4
                },
                {
                  name: "Crawler Cranes",
                  cap: "50 MT - 500 MT",
                  desc: "Exceptional stability on challenging terrain.",
                  app: "Heavy infrastructure, power plants, refineries",
                  img: rent2
                },
                {
                  name: "All-Terrain Cranes",
                  cap: "20 MT - 300 MT",
                  desc: "Versatility & mobility with boom length up to 60+ m.",
                  app: "Infrastructure, urban construction, heavy lifts",
                  img: rent7
                },
                {
                  name: "Tower Cranes",
                  cap: "Up to 20 MT",
                  desc: "Efficient vertical lifting with minimal footprint. 80m+ Height.",
                  app: "High-rise buildings, commercial complexes",
                  img: rent1
                },
                {
                  name: "Scissor Lifts",
                  cap: "6m - 16m Height",
                  desc: "Stable and safe vertical access solutions (Up to 450kg).",
                  app: "Installation, maintenance, finishing",
                  img: rent5
                },
                {
                  name: "Boom Lifts",
                  cap: "12m - 45m Height",
                  desc: "Extended vertical and horizontal reach (Up to 24m).",
                  app: "Façade works, industrial maintenance",
                  img: rent6
                },
                {
                  name: "Forklifts",
                  cap: "2 MT - 10 MT",
                  desc: "Efficient and precise material handling. Lift up to 6m.",
                  app: "Warehousing, logistics, manufacturing",
                  img: rent3
                }
              ].map((eq, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                    <div className="h-48 overflow-hidden relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <img src={eq.img} alt={eq.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="text-white font-bold text-xl">{eq.name}</h4>
                        <span className="text-[#F58220] font-bold text-sm bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-[#F58220]/50">{eq.cap}</span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm min-h-[40px] flex-grow">{eq.desc}</p>
                      <div className="mt-auto">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Best For:</div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{eq.app}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Value Prop & Advantages */}
          <div className="grid lg:grid-cols-12 gap-12 bg-[#1a1a2e] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            {/* Decor */}
            {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none"></div> */}

            <div className="lg:col-span-12 mb-8 text-center">
              <h3 className="text-3xl font-black mb-6">Our Value Proposition</h3>
              <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
                At SEJAL INDUSTRIAL SOLUTIONS PVT LTD, we go beyond equipment rental. We deliver reliable lifting, access, and material handling solutions that enable safer worksites, faster project execution, and predictable outcomes. Our commitment to quality, responsiveness, and customer satisfaction makes us a trusted equipment partner across industries.
              </p>
            </div>

            <div className="lg:col-span-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { t: "Operational Efficiency", d: "High-capacity, well-maintained equipment minimizing downtime", i: Clock },
                { t: "Safety Compliance", d: "Maintained in accordance with statutory norms and industry standards", i: Shield },
                { t: "Flexible Rental Models", d: "Daily, weekly, monthly, and long-term rental options", i: TrendingUp },
                { t: "Expert Support", d: "Prompt technical assistance and service backup", i: Users },
                { t: "Cost Optimization", d: "Reduced capital expenditure, depreciation, and maintenance costs", i: Award },
              ].map((adv, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">
                  <adv.i className="w-10 h-10 text-[#F58220] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{adv.t}</h4>
                  <p className="text-gray-400 text-sm">{adv.d}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-12 mt-8 pt-8 border-t border-white/10 flex flex-col items-center">
              <p className="text-center text-gray-400 mb-6 font-medium">Industries Served: Infrastructure, Manufacturing, Warehousing, Power & EPC</p>
              <Link to="/contact">
                <button className="bg-[#F58220] hover:bg-[#e67619] text-white px-10 py-4 rounded-xl font-bold shadow-glow hover:scale-105 transition-all">
                  Request Rental Quote
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EquipmentRental;
