import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFab from "@/components/WhatsAppFab";
// import CursorFollower from "@/components/CursorFollower";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";


import Certificates from "./pages/Certificates";

const queryClient = new QueryClient();

// Create context for loading state
const LoadingContext = createContext<{
  setHeroLoaded: (loaded: boolean) => void;
}>({ setHeroLoaded: () => { } });

export const useLoading = () => useContext(LoadingContext);

const App = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Fallback timer: Signal ready after 5 seconds regardless (avoid getting stuck)
    const fallbackTimer = setTimeout(() => {
      if (!heroLoaded) {
        setHeroLoaded(true);
      }
    }, 5000);

    if (heroLoaded) {
      clearTimeout(fallbackTimer);
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 600); // Wait for fade out animation
      return () => clearTimeout(timer);
    }

    return () => clearTimeout(fallbackTimer);
  }, [heroLoaded]);

  return (
    <div className="min-h-screen bg-background">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LoadingContext.Provider value={{ setHeroLoaded }}>
            {/* Loading Overlay */}
            {showLoading && (
              <div
                className={`fixed inset-0 z-[9999] transition-opacity duration-700 ease-in-out ${isTransitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <LoadingScreen onComplete={() => { }} />
              </div>
            )}

            <div className={`relative flex flex-col min-h-screen transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Navigation />
                <main className="flex-1 w-full overflow-x-hidden">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/admin" element={<Admin />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <WhatsAppFab />
                {/* <CursorFollower /> */}
                <SmoothScroll />
              </BrowserRouter>
            </div>
          </LoadingContext.Provider>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};


export default App;
