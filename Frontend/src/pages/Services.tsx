import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Zap, CheckCircle, Users, Clock, Award, Shield, Wrench, Building, Factory, Fuel, Zap as Power } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import rent from '@/assets/services/rent.webp';
import electrical from '@/assets/services/electrical.webp';
import heroBg from '@/assets/heroimg/hr6.webp';

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Truck,
      title: 'Equipment Rental & Import Solutions',
      description: 'Your one-stop partner for high-capacity crane rentals, heavy machinery, and importing world-class aerial work platforms for Indian industry.',
      image: rent,
      link: '/services/equipment-rental'
    },
    {
      icon: Zap,
      title: 'Electrical & Instrumentation Turnkey Solution',
      description: 'End-to-end design, engineering, and procurement (EP) solutions for power, solar, and industrial infrastructure sectors.',
      image: electrical,
      link: '/services/electrical-instrumentation'
    },





  ];



  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-orange/10"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-white">
              Our <span className="text-[#F58220]">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Comprehensive industrial solutions tailored to meet your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* <div className="text-center mb-16 fade-in-section">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your business needs
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="group fade-in-section overflow-hidden h-full cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#F58220] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#F58220] font-semibold text-sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-[#F58220]">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to deliver exceptional industrial solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and challenges', icon: Users, color: 'from-blue-500 to-blue-600' },
              { step: '02', title: 'Planning', desc: 'Developing customized solutions and timelines', icon: Clock, color: 'from-green-500 to-green-600' },
              { step: '03', title: 'Execution', desc: 'Professional implementation with quality assurance', icon: Wrench, color: 'from-purple-500 to-purple-600' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and technical support', icon: Shield, color: 'from-red-500 to-red-600' }
            ].map((process, index) => (
              <div key={index} className="fade-in-section group relative" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="relative p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white dark:bg-gray-800 border-2 border-transparent hover:border-[#F58220]/20">
                  <div className="relative mb-6">
                    {/* Main Icon Circle */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <process.icon className="h-10 w-10 text-white" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#F58220] to-[#e67619] text-white rounded-full flex items-center justify-center text-sm font-black shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      {process.step}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#F58220] transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F58220] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>

                {/* Connecting Arrow (except last item) */}
                {index < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#F58220] group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                Why Choose <span className="text-[#F58220]">Sejal Industrial?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With years of experience in industrial solutions, we deliver excellence through innovation and reliability.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Expert Team', desc: 'Highly skilled professionals with industry expertise' },
                  { title: 'Quality Assurance', desc: 'ISO certified processes ensuring top-quality deliverables' },
                  { title: 'Timely Delivery', desc: 'Committed to meeting project deadlines without compromise' },
                  { title: '24/7 Support', desc: 'Round-the-clock technical support and maintenance' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#F58220]/10 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-[#F58220]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-section">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, number: '15+', label: 'Years Experience' },
                  { icon: Users, number: '500+', label: 'Projects Completed' },
                  { icon: Shield, number: '100%', label: 'Quality Guaranteed' },
                  { icon: Clock, number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="bg-[#F58220]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-[#F58220]" />
                    </div>
                    <div className="text-3xl font-black text-[#0D4F5C] mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Industries We <span className="text-[#F58220]">Serve</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Providing specialized solutions across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Fuel, name: 'Oil & Gas', color: 'bg-blue-500' },
              { icon: Power, name: 'Power', color: 'bg-yellow-500' },
              { icon: Factory, name: 'Chemical', color: 'bg-green-500' },
              { icon: Building, name: 'Steel', color: 'bg-gray-500' },
              { icon: Wrench, name: 'Refineries', color: 'bg-purple-500' },
              { icon: Factory, name: 'Cement', color: 'bg-orange-500' }
            ].map((industry, index) => (
              <div key={index} className="fade-in-section text-center group cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-20 h-20 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-[#F58220] transition-colors">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] p-10 lg:p-14 flex flex-col justify-center">
                  <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl font-black mb-4 leading-tight text-white">
                    Need Expert
                    <span className="block text-[#F58220]">Service Solutions?</span>
                  </h2>
                  <p className="text-white text-lg mb-8">
                    Our team is ready to provide customized solutions for your business needs.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Zap, text: 'Comprehensive Service Portfolio' },
                      { icon: Truck, text: 'Experienced Professionals' },
                      { icon: Zap, text: 'Quick Response Time' }
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
                      <button className="w-full bg-[#F58220] hover:bg-[#e67619] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ">
                        Request Quote
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </Link>
                    <Link to="/about">
                      <button className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 hover:border-[#F58220] text-gray-900 font-semibold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 bg-white">
                        About Us
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Side - Stats */}
                <div className="bg-gradient-to-br from-[#F58220] to-[#e67619] p-10 lg:p-14 flex flex-col justify-center">
                  <div className="space-y-8">
                    {[
                      { number: '15+', label: 'Years Experience' },
                      { number: '500+', label: 'Projects Completed' },
                      { number: '24/7', label: 'Customer Support' }
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
      </section>
    </div>
  );
};

export default Services;