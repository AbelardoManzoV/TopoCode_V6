import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTextReveal({
  children,
  as: Component = "p",
  className,
  start = "top 80%",
  end = "top 40%",
  scrub = 0.8,
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.15, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [start, end, scrub]);

  const words = String(children).split(" ");

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </Component>
  );
}
