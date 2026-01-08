import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

const CLIENT_LOGOS = [
  { name: "TechFlow Solutions", logo: "https://brandlogos.net/wp-content/uploads/2025/09/dolmio-logo_brandlogos.net_ugxux-768x449.png", color: "#6C2EE4" },
  { name: "DataCore Analytics", logo: "https://brandlogos.net/wp-content/uploads/2025/09/anaheim_ducks-logo_brandlogos.net_uksev-768x684.png", color: "#080A52" },
  { name: "AutomateNow Inc.", logo: "https://brandlogos.net/wp-content/uploads/2025/09/buffalo_bills_wordmark-logo_brandlogos.net_za1qb-768x202.png", color: "#6C2EE4" },
  { name: "SmartBiz Systems", logo: "https://brandlogos.net/wp-content/uploads/2025/09/amd_ryzen-logo_brandlogos.net_k5bsc-768x485.png", color: "#080A52" },
  { name: "AI Innovations Ltd", logo: "https://brandlogos.net/wp-content/uploads/2025/09/utah_grizzlies-logo_brandlogos.net_x1hvv-768x546.png", color: "#6C2EE4" },
  { name: "ProcessPro", logo: "https://brandlogos.net/wp-content/uploads/2025/09/usc_upstate_spartans-logo_brandlogos.net_i7p67-768x531.png", color: "#080A52" },
  { name: "IntelliOps", logo: "https://brandlogos.net/wp-content/uploads/2025/09/psg_eiffel_tower_star-logo_brandlogos.net_xcjdi-768x986.png", color: "#6C2EE4" },
  { name: "CloudMind", logo: "https://brandlogos.net/wp-content/uploads/2025/09/ac_carpi-logo_brandlogos.net_t1kdb-768x902.png" },
];

export const Clients = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);

  const row1Logos = useMemo(() => [...CLIENT_LOGOS, ...CLIENT_LOGOS], []);
  const row2Logos = useMemo(() => [...CLIENT_LOGOS, ...CLIENT_LOGOS], []);
  const row3Logos = useMemo(() => [...CLIENT_LOGOS, ...CLIENT_LOGOS], []);

  useEffect(() => {
    const rows = [row1Ref.current, row2Ref.current, row3Ref.current] as const;

    const x: number[] = [0, 0, 0];
    const halfWidths: number[] = [0, 0, 0];
    const velocitiesPF: number[] = [0, 0, 0];
    const targetVelocitiesPF: number[] = [0, 0, 0];

    const baseSpeeds = [350, 150, 250];
    const pxPerFrame = baseSpeeds.map((s) => s / 60);

    const observers: ResizeObserver[] = [];
    rows.forEach((row, i) => {
      if (!row) return;
      const ro = new ResizeObserver(() => {
        halfWidths[i] = row.scrollWidth / 2;
      });
      ro.observe(row);
      observers.push(ro);
      halfWidths[i] = row.scrollWidth / 2;
    });

    let idleTimeout: number | undefined;

    const setVelocitiesForDirection = (isScrollDown: boolean) => {
      targetVelocitiesPF[0] = (isScrollDown ? -1 : 1) * pxPerFrame[0];
      targetVelocitiesPF[1] = (isScrollDown ? 1 : -1) * pxPerFrame[1];
      targetVelocitiesPF[2] = (isScrollDown ? -1 : 1) * pxPerFrame[2];
    };

    const stopVelocities = () => {
      targetVelocitiesPF[0] = 0;
      targetVelocitiesPF[1] = 0;
      targetVelocitiesPF[2] = 0;
    };

    const tick = () => {
      const dr = gsap.ticker.deltaRatio();

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (!row) continue;

        const half = halfWidths[i];
        if (half === 0) continue;

        const targetV = targetVelocitiesPF[i];
        const currentV = velocitiesPF[i];
        const lerpFactor = 0.08;

        velocitiesPF[i] = currentV + (targetV - currentV) * lerpFactor;

        if (Math.abs(velocitiesPF[i]) < 0.005) {
          velocitiesPF[i] = 0;
        }

        if (velocitiesPF[i] === 0) continue;

        x[i] += velocitiesPF[i] * dr;

        if (x[i] <= -half) x[i] += half;
        if (x[i] >= 0) x[i] -= half;

        gsap.set(row, { x: x[i] });
      }
    };

    gsap.ticker.add(tick);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current || undefined,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const isDown = self.direction === 1;
        setVelocitiesForDirection(isDown);

        if (idleTimeout) window.clearTimeout(idleTimeout);
        idleTimeout = window.setTimeout(() => {
          stopVelocities();
        }, 120);
      },
    });

    stopVelocities();

    return () => {
      st.kill();
      gsap.ticker.remove(tick);
      observers.forEach((o) => o.disconnect());
      if (idleTimeout) window.clearTimeout(idleTimeout);
    };
  }, []);

  const renderRow = (
    ref: React.RefObject<HTMLDivElement | null>,
    logos: typeof CLIENT_LOGOS,
    rowIndex: number
  ) => (
    <div className="mb-8 overflow-hidden ">
      <div
        ref={ref}
        className="flex w-[200%] items-center gap-8 md:gap-12 will-change-transform"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {logos.map((client, index) => (
          <div
            key={`${rowIndex}-${index}-${client.name}`}
            className="flex-shrink-0 "
          >
            <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-white/90 p-4 backdrop-blur-sm md:h-24 md:w-40 shadow-lg border border-gray-200/50 premium-card">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="font-semibold text-sm text-center flex items-center justify-center h-full w-full" style="color: ${client.color}">${client.name}</div>`;
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/30 py-20"
    >
      <div className="container-custom">
        <div className="mb-12 sm:mb-16 text-center fade-in-section">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase text-foreground">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Leading businesses choose Oxnard Trading & Contracting for premium fire protection solutions that ensure safety and compliance.
          </p>
        </div>
      </div>
      
      {renderRow(row1Ref, row1Logos, 1)}
      {renderRow(row2Ref, row2Logos, 2)}
      {/* {renderRow(row3Ref, row3Logos, 3)} */}
    </section>
  );
};