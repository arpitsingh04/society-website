import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

import abb from "@/assets/client/abb-seeklogo.png";
import bigbasket from "@/assets/client/bigbasket-seeklogo.png";
import bigbazar from "@/assets/client/bigbazar.png";
import bharatPetroleum from "@/assets/client/bharat-petroleum-seeklogo.png";
import br from "@/assets/client/BR.png";
import dmart from "@/assets/client/dmart-avenue-supermarts-seeklogo.png";
import emerson from "@/assets/client/emerson-electric-seeklogo - Copy.png";
import honeywell from "@/assets/client/honeywell-seeklogo.png";
import hp from "@/assets/client/hindustan-petrolium-seeklogo.png";
import indianoil from "@/assets/client/indian-oil-seeklogo.png";
import jsw from "@/assets/client/jsw-steel-seeklogo.png";
import oil from "@/assets/client/oil.png";
import thermax from "@/assets/client/thermax-seeklogo.png";

interface LogoItem { name: string; logo: string; alt: string }

const wrap = (min: number, max: number, v: number) => {
	const rangeSize = max - min;
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function LogoParallaxText({ logos, baseVelocity = 100 }: { logos: LogoItem[]; baseVelocity: number }) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

	const [repetitions, setRepetitions] = useState(1);
	const containerRef = useRef<HTMLDivElement>(null);
	const logosRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const calculateRepetitions = () => {
			if (containerRef.current && logosRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				const logosWidth = logosRef.current.offsetWidth;
				const newRepetitions = Math.ceil(containerWidth / logosWidth) + 2;
				setRepetitions(newRepetitions);
			}
		};

		calculateRepetitions();
		window.addEventListener("resize", calculateRepetitions);
		return () => window.removeEventListener("resize", calculateRepetitions);
	}, [logos]);

	const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

	const directionFactor = useRef<number>(1);

	useEffect(() => {
		const onWheel = (e: WheelEvent) => {
			directionFactor.current = e.deltaY > 0 ? 1 : -1;
		};
		let lastTouchY = 0;
		const onTouchStart = (e: TouchEvent) => {
			lastTouchY = e.touches[0]?.clientY ?? 0;
		};
		const onTouchMove = (e: TouchEvent) => {
			const currentY = e.touches[0]?.clientY ?? 0;
			directionFactor.current = currentY < lastTouchY ? 1 : -1;
			lastTouchY = currentY;
		};
		window.addEventListener("wheel", onWheel, { passive: true });
		window.addEventListener("touchstart", onTouchStart, { passive: true });
		window.addEventListener("touchmove", onTouchMove, { passive: true });
		return () => {
			window.removeEventListener("wheel", onWheel as any);
			window.removeEventListener("touchstart", onTouchStart as any);
			window.removeEventListener("touchmove", onTouchMove as any);
		};
	}, []);

	useAnimationFrame((_, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();
		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="w-full overflow-hidden whitespace-nowrap" ref={containerRef}>
			<motion.div className="inline-flex items-center gap-8 sm:gap-12 md:gap-16" style={{ x }}>
				{Array.from({ length: repetitions }).map((_, i) => (
					<div key={i} ref={i === 0 ? logosRef : null} className="flex items-center gap-8 sm:gap-12 md:gap-16">
						{logos.map((client, logoIndex) => (
							<div
								key={`${i}-${logoIndex}`}
								className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-40 sm:w-48 md:w-56"
							>
								<img
									src={client.logo}
									alt={client.alt}
									className="max-h-12 sm:max-h-16 md:max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const parent = target.parentElement;
										if (parent) {
											parent.innerHTML = `<span class="text-xs text-gray-600 font-medium text-center px-2">${client.name}</span>`;
										}
									}}
								/>
							</div>
						))}
					</div>
				))}
			</motion.div>
		</div>
	);
}

export function LogoScroll({ default_velocity = 2 }: { default_velocity?: number }) {
	const logos: LogoItem[] = [
		{ name: "ABB", logo: abb, alt: "ABB" },
		{ name: "Big Basket", logo: bigbasket, alt: "Big Basket" },
		{ name: "Big Bazar", logo: bigbazar, alt: "Big Bazar" },
		{ name: "Bharat Petroleum", logo: bharatPetroleum, alt: "Bharat Petroleum" },
		{ name: "BR", logo: br, alt: "BR" },
		{ name: "D-Mart", logo: dmart, alt: "D-Mart" },
		{ name: "Emerson", logo: emerson, alt: "Emerson" },
		{ name: "Honeywell", logo: honeywell, alt: "Honeywell" },
		{ name: "HP", logo: hp, alt: "HP" },
		{ name: "Indian Oil", logo: indianoil, alt: "Indian Oil" },
		{ name: "JSW", logo: jsw, alt: "JSW" },
		{ name: "Oil", logo: oil, alt: "Oil" },
		{ name: "Thermax", logo: thermax, alt: "Thermax" },
	];

	return (
		<section className="relative w-full flex flex-col gap-8 sm:gap-12">
			<LogoParallaxText logos={logos} baseVelocity={default_velocity} />
			<LogoParallaxText logos={logos} baseVelocity={-default_velocity} />
		</section>
	);
}
