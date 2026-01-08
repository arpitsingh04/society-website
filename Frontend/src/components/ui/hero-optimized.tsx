import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLoading } from "@/App";


interface OptimizedHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  videoSrc?: string;
  className?: string;
  onCtaClick?: () => void;
  onServicesClick?: () => void;
}

export const OptimizedHero: React.FC<OptimizedHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  videoSrc,
  className,
  onCtaClick,
  onServicesClick,
}) => {
  const { setHeroLoaded } = useLoading();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let loadedCount = 0;
    const allImagesToLoad = [...images];
    const totalImages = allImagesToLoad.length;

    // Preload images
    allImagesToLoad.forEach((src) => {
      const img = new Image();
      const handleLoad = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      img.onload = handleLoad;
      img.onerror = handleLoad;
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const allImagesToLoad = [...images];
    const totalImages = allImagesToLoad.length;

    // Check if everything is ready
    const isImagesReady = imagesLoaded >= totalImages;
    const isVideoReady = !videoSrc || videoReady;

    if (isImagesReady && isVideoReady) {
      // Small delay for smooth transition
      const timer = setTimeout(() => {
        setHeroLoaded(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Fallback timer: Show website after 5 seconds regardless (avoid getting stuck)
    const fallbackTimer = setTimeout(() => {
      setHeroLoaded(true);
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [imagesLoaded, videoReady, videoSrc, images, setHeroLoaded]);

  // Fixed grid/transform settings: keep column width constant across devices
  const gridConfig = {
    scale: 1.3,
    rotateX: 25,
    rotateZ: -10,
    // fixed column width (px) so each image has the same visible width on all screens
    gridAutoColumns: '360px'
  };

  // Duplicate images to fill more space
  return (
    <section
      className={cn(
        "relative w-full min-h-[70vh] md:min-h-screen overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Upper Part - Hero with Video/Image Background */}
      <div className="relative w-full min-h-[70vh] md:min-h-screen flex items-end md:items-center justify-center overflow-hidden pt-16 pb-12 md:pt-28 md:pb-0">
        {/* Background Media */}
        {videoSrc ? (
          <div className="absolute inset-0 w-full h-full bg-gray-900">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              onCanPlayThrough={() => setVideoReady(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/60 to-gray-900/80" /> */}
          </div>
        ) : (
          /* Background Image Grid with Perspective */
          <div
            className="absolute w-full h-full -inset-20"
            style={{
              perspective: '1000px',
              perspectiveOrigin: 'center center'
            }}
          >
            <div
              className="absolute w-full h-full grid grid-rows-4 gap-1"
              style={{
                transform: `rotateX(${gridConfig.rotateX}deg) rotateZ(${gridConfig.rotateZ}deg) scale(${gridConfig.scale})`,
                transformOrigin: 'center center',
                opacity: 1,
                gridAutoFlow: 'column',
                gridAutoColumns: gridConfig.gridAutoColumns as any
              }}
            >
              {[...images, ...images, ...images].map((src, index) => (
                <div key={index} className="relative w-full h-full overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%'
                    }}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dark Gradient Overlay */}
        {/* <div className={cn(
          "absolute inset-0",
          videoSrc ? "bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/70" : "bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"
        )}></div> */}

        {/* Content Container - Pushed to bottom on mobile, centered on desktop */}
        <div className="relative z-10 w-full flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 h-full pb-16 md:pb-0">
          <div className="w-full max-w-4xl mx-auto">
            {tagline && (
              <div className="hidden md:inline-flex mb-3 md:mb-6 items-center gap-2 rounded-full border border-[#F58220]/40 bg-[#F58220]/10 px-4 py-1.5 text-sm font-bold text-[#F58220] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F58220] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F58220]"></span>
                </span>
                {tagline}
              </div>
            )}

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-2 md:mb-6 leading-[1.1] uppercase"
              style={{ textShadow: '0 4px 15px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.5)' }}
            >
              {title}
            </h1>

            {description && (
              <p
                className="hidden md:block max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white mb-4 md:mb-8 font-medium leading-relaxed"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
              >
                {description}
              </p>
            )}

            <div className="hidden md:flex flex-row gap-3 justify-center items-center">
              <button
                onClick={onServicesClick}
                className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-[#0D4F5C] text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View Services
              </button>

              <button
                onClick={onCtaClick}
                className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#F58220] to-[#ff9f4d] text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {ctaText}
                <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F58220]/50 to-transparent my-6"></div>

    </section>
  );
};