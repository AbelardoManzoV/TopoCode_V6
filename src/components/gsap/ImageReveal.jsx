import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ImageReveal({
  src,
  alt,
  className,
  direction = "left",
  children,
}) {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const clipStart =
        direction === "left"
          ? "inset(0 100% 0 0)"
          : direction === "right"
          ? "inset(0 0 0 100%)"
          : direction === "top"
          ? "inset(100% 0 0 0)"
          : "inset(0 0 100% 0)";

      const origin =
        direction === "left"
          ? "right"
          : direction === "right"
          ? "left"
          : direction === "top"
          ? "bottom"
          : "top";

      gsap.set(imageRef.current, { clipPath: clipStart, scale: 1.2 });

      gsap.to(imageRef.current, {
        clipPath: "inset(0 0 0 0)",
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 0.8,
        },
      });

      gsap.fromTo(
        overlayRef.current,
        { scaleX: direction === "top" || direction === "bottom" ? 1 : 1, scaleY: direction === "top" || direction === "bottom" ? 1 : 1 },
        {
          scaleX: direction === "top" || direction === "bottom" ? 1 : 0,
          scaleY: direction === "top" || direction === "bottom" ? 0 : 1,
          transformOrigin: origin,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className || ""}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-topo-blue"
      />
      {children}
    </div>
  );
}
