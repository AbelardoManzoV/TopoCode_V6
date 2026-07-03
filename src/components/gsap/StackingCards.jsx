import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StackingCards({ children, className }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stack-card");

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;

        gsap.set(card, { zIndex: cards.length - i });

        if (!isLast) {
          gsap.to(card, {
            scale: 0.92,
            filter: "brightness(0.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 15%",
              end: "bottom 15%",
              scrub: 0.8,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      {children}
    </div>
  );
}

export function StackCard({ children, className }) {
  return (
    <div
      className={`stack-card sticky top-[10vh] h-[80vh] w-full ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
