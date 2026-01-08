import { useEffect, useState } from 'react';
import sejalLogo from '@/assets/sejalcolor.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="text-center max-w-sm mx-auto">
        {/* Logo Animation */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-blue/20 to-brand-purple/20 rounded-full blur-xl animate-pulse"></div>
          <img
            src={sejalLogo}
            alt="Sejal Industrial Solutions Private Limited"
            className="relative w-32 h-16 sm:w-48 sm:h-24 md:w-56 md:h-28 mx-auto object-contain"
          />
        </div>

        {/* Loading Text */}
        {/* <div className="space-y-2 sm:space-y-3">
          <p className="text-muted-foreground text-sm sm:text-base animate-[fade-in_1s_ease-out_0.5s_both] px-2">
            BG Group of Companies - Industrial Excellence
          </p>
        </div> */}

        {/* Loading Bar */}
        {/* <div className="w-48 sm:w-64 h-1 bg-muted rounded-full mx-auto mt-6 sm:mt-8 overflow-hidden animate-[fade-in_1s_ease-out_0.5s_both]">
          <div className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full animate-[loading-bar_2.5s_ease-out_forwards]"></div>
        </div> */}

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-4 sm:mt-6 animate-[fade-in_1s_ease-out_1.5s_both]">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-cyan rounded-full animate-[bounce_1s_infinite_0s]"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-blue rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-purple rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
