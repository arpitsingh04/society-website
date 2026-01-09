import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamSection from '@/components/ui/team';
import heroBg from '@/assets/heroimg/hr5.webp';
import { Link } from 'react-router-dom';


const Members = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section - Matching About.tsx */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
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
                Society <span className="text-[#F58220]">Members</span>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-100 leading-relaxed font-bold tracking-wide drop-shadow-sm">
                Get to know the dedicated individuals who make our society a thriving community. <br className="md:hidden" />
                <span className="text-[#F58220]">From leadership to committees, each member plays a vital role in our success.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Join Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Want to be a part of our <span className="text-[#F58220]">Community?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            Join our vibrant society and enjoy exclusive benefits, community events, and world-class facilities.
            Connect with neighbors and build lasting relationships.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#F58220] px-10 text-base font-bold text-white shadow-lg transition-all hover:bg-[#e0751a] hover:scale-105 active:scale-95"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Members;