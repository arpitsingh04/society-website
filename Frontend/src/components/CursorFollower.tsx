
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorFollower = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Main dot spring - fast and responsive
    const springConfigDot = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfigDot);
    const cursorYSpring = useSpring(cursorY, springConfigDot);

    // Outer ring spring - slower, creating a "lag" effect
    const springConfigRing = { damping: 40, stiffness: 200, mass: 0.8 };
    const ringXSpring = useSpring(cursorX, springConfigRing);
    const ringYSpring = useSpring(cursorY, springConfigRing);

    useEffect(() => {
        // Check if device is touch-enabled
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible || isTouchDevice) return null;

    return (
        <div className="hidden lg:block"> {/* Utility class based double-check for screen size */}
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-[hsl(var(--brand-orange))] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(245,130,32,0.5)]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Follower Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border-2 border-[hsl(var(--brand-orange))] rounded-full pointer-events-none z-[9998] opacity-50"
                style={{
                    x: ringXSpring,
                    y: ringYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            />
        </div>
    );
};

export default CursorFollower;
