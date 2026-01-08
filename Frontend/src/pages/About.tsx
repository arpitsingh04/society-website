import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Target, Eye, Award, Users,
  Globe, Shield, Zap, TrendingUp, Handshake,
  Settings, Truck, Briefcase, Anchor, ArrowRight,
  ShieldCheck, Lightbulb, HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CountUp from '@/components/CountUp';
import heroBg from '@/assets/heroimg/hr5.webp';
import aboutImg1 from '@/assets/about-office.jpg';
import aboutImg2 from '@/assets/ele/ele2.webp';
import { cn } from '@/lib/utils';


const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };


  const capabilities = [
    {
      icon: Globe,
      title: 'Global Support',
      description: 'Logistics and sourcing across multiple regions.'
    },
    {
      icon: Settings,
      title: 'Integrated Supply',
      description: 'Engineering, manufacturing, and procurement.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance',
      description: 'International quality and safety alignment.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Flexible systems for projects of all sizes.'
    },
    {
      icon: Briefcase,
      title: 'Multisector',
      description: 'Expertise in Energy, Infrastructure, and Renewables.'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Centric',
      description: 'Tailored solutions meeting regional regulations.'
    }
  ];

  const values = [
    { icon: Handshake, title: 'Integrity', desc: 'Conducting business with transparency, ethics and accountability.', color: 'border-orange-200 bg-orange-50/30' },
    { icon: Award, title: 'Quality', desc: 'Consistently delivering reliable and compliant solutions.', color: 'border-blue-200 bg-blue-50/30' },
    { icon: Shield, title: 'Safety', desc: 'Prioritizing the health and safety of people and projects.', color: 'border-cyan-200 bg-cyan-50/30' },
    { icon: Users, title: 'Focus', desc: 'Building long-term partnerships through value-driven solutions.', color: 'border-teal-200 bg-teal-50/30' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Embracing innovation while minimizing environmental impact.', color: 'border-orange-200 bg-orange-50/30' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Matching Services.tsx */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          {/* Gradient removed as per user request to keep image clear */}
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl inline-block mx-4"
            >
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 text-white drop-shadow-sm">
                About <span className="text-[#F58220]">Us</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-100 leading-relaxed font-bold tracking-wide drop-shadow-sm">
                Complete Industrial Solutions. <br className="md:hidden" />
                <span className="text-[#F58220]">One Trusted Partner.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Intro - Overlapping & Dynamic */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Cluster */}
            <div className="lg:col-span-6 relative">
              <motion.div
                className="relative z-20 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white dark:border-gray-800 w-full md:w-[85%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={aboutImg1} alt="Project Execution" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
              </motion.div>
              <motion.div
                className="absolute -bottom-10 -right-4 z-30 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 w-[60%] hidden md:block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <img src={aboutImg2} alt="Innovation" className="w-full h-64 object-cover" />
              </motion.div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 space-y-10">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-black leading-tight">
                  One Mission. <br />
                  <span className="text-brand-orange">Infinite Impact.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are a multidisciplinary engineering and project execution company delivering design, engineering and procurement (EP) solutions across power, industrial infrastructure, water, oil and gas, and solar sectors.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: 'Safe Execution', detail: 'International HSE Standards' },
                  { icon: TrendingUp, title: 'Global Reach', detail: 'Logistics in 10+ Regions' },
                  { icon: Settings, title: 'Turnkey EP', detail: 'Full Lifecycle Directing' },
                  { icon: Truck, title: 'Equipment Supply', detail: 'Modern Access Fleet' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-brand-orange/40 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech-Informed Capabilities - Bento Style */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-orange/5 to-transparent pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">Global <span className="text-brand-orange">Capabilities</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Integrated engineering and supply chain coordination for complex industrial projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-background border border-border/60 p-8 rounded-[2rem] hover:shadow-intense transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700">
                  <cap.icon size={150} />
                </div>
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                  <cap.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Responsive Layout */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/5 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Lead Column */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-orange">Core Purpose</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                  Driving the <br className="hidden sm:block" />
                  <span className="text-brand-orange ">Next Era</span> <br className="hidden sm:block" />
                  of Engineering.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                  We don't just execute projects; we anchor them with a commitment to technical mastery and sustainable growth.
                </p>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-10 md:space-y-12">
              {/* Vision block */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-reliable-dark flex items-center justify-center text-white shadow-lg group-hover:bg-brand-orange transition-colors duration-500">
                    <Target size={28} className="md:w-8 md:h-8" />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-reliable-dark dark:text-white">Our Vision</h3>
                    <div className="w-10 h-1 bg-brand-orange rounded-full group-hover:w-20 transition-all duration-500"></div>
                    <p className="text-lg md:text-2xl font-medium leading-relaxed text-muted-foreground dark:text-gray-300 italic pr-4 md:pr-8 border-l-4 border-muted/30 pl-4 md:pl-6 italic">
                      "To be a trusted and leading engineering solutions partner, recognized for excellence in project execution, innovation and sustainable growth across industrial and infrastructure sectors."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission block */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-reliable-dark flex items-center justify-center text-white shadow-lg group-hover:bg-brand-orange transition-colors duration-500">
                    <Eye size={28} className="md:w-8 md:h-8" />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-reliable-dark dark:text-white">Our Mission</h3>
                    <div className="w-10 h-1 bg-brand-orange rounded-full group-hover:w-20 transition-all duration-500"></div>
                    <p className="text-lg md:text-2xl font-medium leading-relaxed text-muted-foreground dark:text-gray-300 italic pr-4 md:pr-8 border-l-4 border-muted/30 pl-4 md:pl-6">
                      "To deliver high-quality engineering and procurement solutions through technical expertise, efficient processes and customer-focused execution, while maintaining the highest standards of safety, quality and environmental responsibility."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Redesigned for Impact */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/30 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black">Our Core <span className="text-brand-orange">Values</span></h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">The principles that guide our work and define our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-[2.5rem] border ${v.color} text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 dark:bg-gray-900/40`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <v.icon className="w-10 h-10 text-brand-orange" />
                </div>
                <h4 className="font-black text-xl mb-4 tracking-tight group-hover:text-brand-orange transition-colors uppercase">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Stats - More Cohesive */}
      <section className="py-24 bg-white dark:bg-gray-900 border-y border-border/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Briefcase, label: 'Projects Executed', value: 150, suffix: '+' },
              { icon: Globe, label: 'Supply Regions', value: 10, suffix: '+' },
              { icon: Users, label: 'Team Experts', value: 50, suffix: '+' },
              { icon: Handshake, label: 'Satisfaction', value: 100, suffix: '%' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-7xl font-black text-brand-orange flex items-center justify-center gap-1">
                  <CountUp end={stat.value} duration={3} />
                  <span className="text-3xl md:text-4xl text-brand-cyan">{stat.suffix}</span>
                </div>
                <p className="text-sm font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA - Balanced & Integrated */}
      <section className="py-20 md:py-24 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            className="relative bg-reliable-dark rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-20 text-center overflow-hidden shadow-intense"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background Texture and Glow */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 md:opacity-20 filter grayscale"
                style={{ backgroundImage: `url(${heroBg})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-reliable-dark via-reliable-dark/95 to-brand-cyan/40"></div>
              <div className="absolute -bottom-1/2 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-orange/10 rounded-full blur-[80px] md:blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-tight md:leading-[1.05]">
                  Partner With <br />
                  <span className="text-brand-orange uppercase  block mt-1 md:mt-2">Excellence</span>
                </h2>
                <p className="text-base md:text-xl text-gray-300 font-medium max-w-xl mx-auto opacity-80 decoration-brand-orange/30 decoration-2">
                  Ready to elevate your industrial operations with globally recognized engineering standards?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-14 rounded-full text-base md:text-xl bg-[#F58220] hover:bg-[#e67619] border-none transition-all text-white font-black shadow-glow hover:scale-105 active:scale-95 group">
                    Get Started Now
                    <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-8 md:px-14 rounded-full text-base md:text-xl border-white/30 text-black hover:bg-white/10 backdrop-blur-md font-bold transition-colors">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
