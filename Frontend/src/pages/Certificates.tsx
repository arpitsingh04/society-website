import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle, ArrowRight, Download, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import cert1 from '@/assets/certificates/iso-9001.webp';
import cert2 from '@/assets/certificates/iso-14001.webp';
import cert3 from '@/assets/certificates/iso-45001.webp';
import heroBg from '@/assets/heroimg/hr4.webp';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    const certificates = [
        {
            id: 1,
            title: "Quality Management System",
            issuer: "ISO 9001:2015",
            description: "Standard for consistent product quality and customer satisfaction.",
            image: cert1,
            accent: "border-orange-500/50"
        },
        {
            id: 2,
            title: "Environmental Management",
            issuer: "ISO 14001:2015",
            description: "Commitment to environmental responsibility and sustainable practices.",
            image: cert2,
            accent: "border-cyan-500/50"
        },
        {
            id: 3,
            title: "Occupational Health & Safety",
            issuer: "ISO 45001:2018",
            description: "International standard for workplace safety and health management.",
            image: cert3,
            accent: "border-blue-500/50"
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-background text-foreground overflow-x-hidden">
            {/* Hero Section - Matching Services/Gallery Theme */}
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
                    <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-black/60 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl inline-block w-full max-w-full"
                        >
                            <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-6 text-white drop-shadow-sm">
                                Our <span className="text-[#F58220]">Certifications</span>
                            </h1>
                            <p className="text-sm xs:text-base sm:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto font-bold tracking-wide drop-shadow-sm px-1">
                                Validating our commitment to global standards of quality, safety, and environmental excellence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certificates Grid */}
            <section className="py-24 relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {certificates.map((cert, idx) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <Card className={`h-full bg-card/40 backdrop-blur-sm border-2 ${cert.accent} hover:border-brand-orange transition-all duration-500 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl `}>
                                    <CardContent className="p-0 flex flex-col h-full">
                                        {/* Image Preview */}
                                        <div className="relative aspect-[3/4] overflow-hidden cursor-pointer" onClick={() => setSelectedCert(cert.image)}>
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500">
                                                    <Eye className="w-7 h-7" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange">
                                                    <ShieldCheck className="w-6 h-6" />
                                                </div>
                                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded-full">
                                                    {cert.issuer}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-black mb-3 group-hover:text-brand-orange transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium">
                                                {cert.description}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 hover:bg-transparent text-brand-orange font-bold flex items-center gap-2 group/btn"
                                                    onClick={() => setSelectedCert(cert.image)}
                                                >
                                                    View Details <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Button>
                                                <a href={cert.image} download={`Sejal-${cert.title}.webp`} className="text-muted-foreground hover:text-brand-orange transition-colors">
                                                    <Download className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-24 p-12 rounded-[3rem] bg-muted/30 border border-border/50 text-center">
                        <h2 className="text-3xl font-black mb-12">Verified Compliance</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "ISO Certified", icon: CheckCircle },
                                { label: "Global Standards", icon: CheckCircle },
                                { label: "Safe Execution", icon: CheckCircle },
                                { label: "Quality Assured", icon: CheckCircle }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wide">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    onClick={() => setSelectedCert(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-16 right-0 md:-right-20 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-orange text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md group shadow-2xl border border-white/20"
                            onClick={() => setSelectedCert(null)}
                            title="Close"
                        >
                            <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                        <img
                            src={selectedCert}
                            alt="Certificate Detail"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border-4 border-white/10"
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
