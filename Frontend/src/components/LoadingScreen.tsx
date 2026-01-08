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
        <div className="relative mb-6 sm:mb-8 flex flex-col items-center justify-center space-y-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F58220]/10 via-brand-blue/10 to-[#F58220]/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10 text-center space-y-2 animate-in fade-in zoom-in duration-500">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground uppercase">
              MEENAKSHI <span className="text-[#F58220]">CHSL</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-medium max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
              Plot 38, Sector 16, New Panvel East<br />
              <span className="text-xs opacity-75 mt-1 block font-mono">Regn. No. Rgd/Pw/Hsg/(TC)/585/92-93</span>
            </p>
          </div>
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
