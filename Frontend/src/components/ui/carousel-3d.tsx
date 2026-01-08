"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import electrical from '@/assets/services/electrical.webp';
import rent from '@/assets/services/rent.webp';

// --- DATA ---
const SLIDE_DATA = [
  {
    title: "Electrical \n&\n Instrumentation",
    button: "Learn More",
    src: electrical,
    link: '/services/electrical-instrumentation',
  },
  {
    title: "Equipment Rental \n&\n Import",
    button: "Learn More",
    src: rent,
    link: '/services/equipment-rental',
  },
];

interface SlideData {
  title: string;
  button: string;
  src: string;
  link: string;
}

interface ServiceBoxProps {
  service: SlideData;
  index: number;
  onLearnMore: (link: string) => void;
}

// --- ServiceBox Component (Replaces Slide) ---
const ServiceBox = ({ service, index, onLearnMore }: ServiceBoxProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    // Check if device is mobile/tablet (less than 1024px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Animation frame for smooth mouse movement effect
    const animate = () => {
      if (!boxRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      boxRef.current.style.setProperty("--x", `${x}px`);
      boxRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = boxRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    // Calculate mouse position relative to the center of the box
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, link } = service;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d] flex-1 min-w-0" // Added flex-1 and min-w-0 for proper flex behavior
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={() => onLearnMore(link)} // Use box click for navigation
    >
      <div
        ref={boxRef}
        className="flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-full h-[70vmin] mx-auto cursor-pointer p-0"
        style={{
          transform: isMobile
            ? "scale(1) rotateX(0deg)" // Always flat on mobile
            : isHovered
              ? "scale(1) rotateX(0deg)"
              : "scale(0.98) rotateX(8deg)", // Apply hover effect only on desktop
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            // Apply mouse position effect only on hover and desktop
            transform: !isMobile && isHovered
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-all duration-500 ease-in-out"
            style={{
              opacity: isMobile ? 1 : (isHovered ? 1 : 0.5), // Always full opacity on mobile
              filter: isMobile
                ? 'brightness(1) contrast(1)' // Always clear on mobile
                : (isHovered ? 'brightness(1) contrast(1)' : 'brightness(0.7) contrast(0.8)'), // Smooth filter transition on desktop
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: isMobile ? 1 : (isHovered ? 1 : 0), // Always visible on mobile
            }}
          />
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${isMobile
            ? "opacity-100 visible" // Always visible on mobile
            : (isHovered ? "opacity-100 visible" : "opacity-0 invisible") // Content visibility on hover for desktop
            }`}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black relative whitespace-pre-line leading-[1.1] drop-shadow-2xl tracking-tight">
            {title}
          </h2>
          <div className="flex justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Stop propagation to prevent box's onClick from firing twice
                onLearnMore(link);
              }}
              className="mt-4 px-5 py-2 bg-white text-black font-medium text-xs rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md">
              {button}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

// --- Main Exported Component ---
export function ServiceShowcase() {
  const navigate = useNavigate();

  const handleLearnMore = (link: string) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto p-4 md:p-8">
      {SLIDE_DATA.map((service, index) => (
        <ServiceBox
          key={index}
          service={service}
          index={index}
          onLearnMore={handleLearnMore}
        />
      ))}
    </div>
  );
}