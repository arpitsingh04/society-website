import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const SmoothScroll = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Prevent browser from trying to maintain scroll position
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        // Instant scroll to top on path change
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

export default SmoothScroll;
