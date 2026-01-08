import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Calendar, Eye, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '@/config/api';
import heroBg from '@/assets/heroimg/hr6.webp';

interface GalleryImage {
  _id: string;
  filename: string;
  originalName: string;
  title: string;
  description?: string;
  filePath: string;
  createdAt: string;
  category?: string;
}

const Projects = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Equipment Rental', 'Electrical & Instrumentation', 'Industrial Projects'];

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    // Immediately make hero and CTA sections visible
    setTimeout(() => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        section.classList.add('visible');
      });
    }, 100);

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

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        const processed = data.map((img: any) => ({
          ...img,
          // Use stored category if available, otherwise fallback to title detection
          category: img.category || (img.title.toLowerCase().includes('crane') || img.title.toLowerCase().includes('lift')
            ? 'Equipment Rental'
            : img.title.toLowerCase().includes('ele') || img.title.toLowerCase().includes('instrument')
              ? 'Electrical & Instrumentation'
              : 'Industrial Projects')
        }));
        setImages(processed);
      } else {
        throw new Error('Failed to fetch images');
      }
    } catch (error) {
      setError('Failed to load project images');
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F58220] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchImages}>Try Again</Button>
        </div>
      </div>
    );
  }

  const filteredImages = images.filter(img =>
    activeFilter === 'All' || img.category === activeFilter
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-100"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

          {/* Gradient removed as per user request to keep image clear */}
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-black/60 backdrop-blur-md p-5 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl inline-block w-full max-w-full"
              >
                <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-3 sm:mb-6 text-white drop-shadow-sm">
                  Our <span className="text-[#F58220]">Projects</span>
                </h1>
                <p className="text-sm xs:text-base sm:text-2xl text-gray-100 leading-relaxed mb-6 md:mb-8 font-bold tracking-wide drop-shadow-sm px-1">
                  Explore our portfolio of successful projects and industrial solutions across India.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-3 py-1.5 xs:px-4 xs:py-2 md:px-6 md:py-2 rounded-full text-[10px] xs:text-xs md:text-sm font-bold transition-all duration-300 ${activeFilter === cat
                        ? 'bg-[#F58220] text-white shadow-lg shadow-brand-orange/20 scale-105'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/20'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <Eye className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No projects match the selected filter.</p>
              <Button
                variant="link"
                onClick={() => setActiveFilter('All')}
                className="text-[#F58220] font-bold mt-2"
              >
                Show all projects
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image._id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={`${API_BASE_URL}/uploads/${image.filePath}`}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Hover Overlay with Eye Icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F58220] rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                          <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content - Always Visible */}
                    <CardContent className="p-3 sm:p-4 flex flex-col flex-grow">
                      {/* Category Badge */}
                      <Badge className="w-fit mb-2 bg-[#0D4F5C] hover:bg-[#0D4F5C] text-white text-[9px] sm:text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-0">
                        {image.category || 'Industrial Project'}
                      </Badge>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-gray-900 dark:text-white mb-1.5 leading-snug line-clamp-2">
                        {image.title}
                      </h3>

                      {/* Description */}
                      {image.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-2 flex-grow">
                          {image.description}
                        </p>
                      )}

                      {/* Date */}
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                        <Calendar className="h-3 w-3 mr-1.5 text-[#F58220]" />
                        <span className="font-medium">{formatDate(image.createdAt)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-2xl w-[90vw] max-h-[85vh] p-0 overflow-y-auto bg-white dark:bg-gray-900 border-none rounded-3xl custom-scrollbar shadow-2xl">
          {selectedImage && (
            <div className="flex flex-col">
              <div className="relative bg-black/5 flex items-center justify-center min-h-[300px]">
                <img
                  src={`${API_BASE_URL}/uploads/${selectedImage.filePath}`}
                  alt={selectedImage.title}
                  className="max-w-full h-auto max-h-[60vh] object-contain shadow-sm"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all z-20 hover:scale-110 shadow-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-10">
                <Badge className="mb-4 bg-[#F58220] hover:bg-[#F58220] text-white border-none font-bold px-4 py-1 text-xs">
                  {selectedImage.category}
                </Badge>
                <DialogTitle className="text-2xl sm:text-4xl font-black mb-5 leading-tight text-gray-900 dark:text-white">
                  {selectedImage.title}
                </DialogTitle>
                {selectedImage.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 leading-relaxed font-medium">
                    {selectedImage.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-500 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-[#F58220]" />
                    </div>
                    <span>{formatDate(selectedImage.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#F58220]" />
                    </div>
                    <span className="font-semibold text-[#F58220]">Project Verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0D4F5C] via-[#0a3d47] to-[#062830] rounded-[3rem] p-10 lg:p-16 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGNTgyMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                Inspired by Our <span className="text-[#F58220]">Portfolio?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how Sejal Industrial Solutions can deliver similar high-quality engineering and access results for your next project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-[#F58220] hover:bg-[#e67619] text-white font-bold text-lg shadow-xl transition-all hover:scale-105">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-2xl border-white/20 text-black hover:bg-white/10 font-bold text-lg backdrop-blur-sm transition-all hover:scale-105">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
