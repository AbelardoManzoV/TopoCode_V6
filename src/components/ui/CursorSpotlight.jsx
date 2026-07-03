import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export function CursorSpotlight() {
  const reduce = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const background = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(110,135,183,0.06), transparent 40%)`;

  useEffect(() => {
    if (reduce) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const leave = () => setIsVisible(false);

    window.addEventListener("pointermove", move);
    document.body.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.body.removeEventListener("pointerleave", leave);
    };
  }, [reduce, x, y, isVisible]);

  if (reduce) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
        style={{ background }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block h-4 w-4 rounded-full border border-topo-blue/50 bg-topo-blue/30 mix-blend-screen"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
