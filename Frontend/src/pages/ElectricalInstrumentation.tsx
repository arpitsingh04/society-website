import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle, Settings, Shield, Wrench, Award, TrendingUp, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ImageCarousel from '@/components/ImageCarousel';
import eleHero from '@/assets/services/electrical.webp';
// import heroBg from '@/assets/heroimg/hr1.webp';
import ele1 from '@/assets/ele/ele1.webp';
import ele2 from '@/assets/ele/ele2.webp';
import ele3 from '@/assets/ele/ele3.webp';
import ele4 from '@/assets/ele/ele4.webp';
import ele5 from '@/assets/ele/ele5.webp';
import ele6 from '@/assets/ele/ele6.webp';

const ElectricalInstrumentation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${eleHero})` }}
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
                <Zap className="h-3 w-3 sm:h-5 sm:w-5 text-[#F58220]" />
                <span className="text-white font-semibold text-[10px] xs:text-xs sm:text-sm">Turnkey Solutions</span>
              </div>
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-6 text-white drop-shadow-sm break-words">
                Electrical & <span className="text-[#F58220]">Instrumentation</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-2xl text-gray-100 leading-relaxed mb-6 md:mb-8 font-bold tracking-wide drop-shadow-sm px-1">
                Complete turnkey solutions from design to commissioning
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#e67619] text-white font-bold rounded-xl px-4 py-3 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base w-full sm:w-auto">
                  Get Quote
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-black mb-6">
                Complete <span className="text-[#F58220]">Turnkey</span> Solutions
              </h2>
              <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                <strong className="text-[#F58220]">Sejal Industrial Solutions Private Limited</strong> is a premier provider of Electrical & Instrumentation (E&I) turnkey solutions across India. We specialize in the complete lifecycle of industrial electrical systems—from conceptual design and engineering to procurement, installation, and rigorous commissioning.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Addressing the needs of power plants, refineries, and large-scale manufacturing, our solutions integrate advanced automation with power distribution excellence. We ensure your infrastructure is safe, compliant, and engineered for maximum operational efficiency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={ele1} alt="Electrical" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
              <img src={ele2} alt="Instrumentation" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8" />
              <img src={ele3} alt="Solutions" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 -mt-8" />
              <img src={ele4} alt="Projects" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">
                Our <span className="text-[#F58220]">Services</span>
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                Comprehensive electrical and instrumentation solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="group border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-[#F58220]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F58220] transition-colors">
                    <Settings className="h-7 w-7 text-[#F58220] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Electrical</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive electrical solutions including design, installation, testing, and commissioning.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Power distribution systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Lighting systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Control panels and switchgear</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-[#F58220]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F58220] transition-colors">
                    <Wrench className="h-7 w-7 text-[#F58220] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Instrumentation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Advanced instrumentation solutions for process control and automation.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Process instrumentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Control systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>SCADA and automation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-[#F58220]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F58220] transition-colors">
                    <Shield className="h-7 w-7 text-[#F58220] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Metering (EM)</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Energy metering solutions for accurate monitoring and management.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Energy meters installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Power quality monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Data logging and analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-[#F58220]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F58220] transition-colors">
                    <Zap className="h-7 w-7 text-[#F58220] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">Sourcing and Supply</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Reliable sourcing and supply of quality equipment from trusted manufacturers.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Equipment procurement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F58220] mt-0.5 flex-shrink-0" />
                      <span>Timely delivery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-black mb-4">
                Our <span className="text-[#F58220]">Projects</span>
              </h2>
            </div>
            <ImageCarousel images={[ele1, ele2, ele3, ele4, ele5, ele6]} />
          </div>

          {/* Why Choose Us */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 mb-16 border border-gray-200 dark:border-gray-700">
            <h2 className="font-heading text-3xl sm:text-4xl font-black mb-8 text-center">
              Why Choose <span className="text-[#F58220]">Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Complete turnkey solutions',
                'Experienced engineering team',
                'Quality equipment and materials',
                'Timely project completion',
                'Comprehensive testing and commissioning',
                'Post-installation support',
                'Compliance with industry standards',
                'Cost-effective solutions'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 hover:shadow-md transition-all">
                  <CheckCircle className="h-5 w-5 text-[#F58220] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830]"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
                Need Electrical & Instrumentation Solutions?
              </h2>
              <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto">
                Get complete turnkey solutions from design to commissioning
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#e67619] text-white font-bold rounded-xl px-10 py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Request Consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalInstrumentation;
