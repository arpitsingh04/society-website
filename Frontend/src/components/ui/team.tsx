const members = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=460&h=460&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=460&h=460&fit=crop',
  },
  {
    name: 'Amit Patel',
    role: 'Technical Head',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=460&h=460&fit=crop',
  },
  {
    name: 'Neha Gupta',
    role: 'HR Manager',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=460&h=460&fit=crop',
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Meet Our <span className="text-[#F58220]">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated professionals committed to delivering excellence in industrial services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {members.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-4 mx-auto w-28 h-28 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F58220] to-[#0D4F5C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-background rounded-full border-2 border-border p-0.5 shadow-lg group-hover:border-[#F58220] transition-all duration-300 overflow-hidden">
                  <img
                    className="aspect-square rounded-full object-cover w-full h-full md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-sm md:text-lg mb-1 group-hover:text-[#F58220] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-xs md:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
