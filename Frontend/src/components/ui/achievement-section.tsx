"use client";

import { Trophy, Users, Clock, Calendar } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

export default function AchievementSection() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: Trophy,
      description: "Successful deliveries across 12+ states in India",
    },
    {
      value: 15,
      suffix: "+",
      label: "Years Experience",
      icon: Calendar,
      description: "Deep expertise in industrial engineering solutions",
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      icon: Users,
      description: "Trusted by leading power & steel corporations",
    },
    {
      value: 24, // Special case for 24/7
      suffix: "/7",
      label: "Support Available",
      icon: Clock,
      description: "Round-the-clock technical & maintenance support",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-28 px-4 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#F58220] text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F58220] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F58220]"></span>
            </span>
            Our Track Record
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-gray-900 dark:text-white"
          >
            Delivering Excellence Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#d66606]">
              India and Abroad
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            We take pride in our numbers. They reflect our commitment to quality, safety, and client success in every project we undertake.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-[#F58220]/10 p-3.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-[#F58220]" />
                  </div>
                  {/* Decorative faint number */}
                  <span className="text-4xl font-black text-gray-300 dark:text-gray-800 select-none transition-colors group-hover:text-gray-400 dark:group-hover:text-gray-700">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
