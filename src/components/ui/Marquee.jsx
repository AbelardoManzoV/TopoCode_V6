import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Marquee({
  children,
  className,
  speed = 30,
  direction = "left",
  pauseOnHover = false,
}) {
  const reduce = useReducedMotion();
  const containerRef = useRef(null);

  if (reduce) {
    return (
      <div ref={containerRef} className={cn("overflow-hidden", className)}>
        <div className="flex items-center gap-8">{children}</div>
      </div>
    );
  }

  const animationX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden group",
        className
      )}
    >
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: animationX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        {...(pauseOnHover && { whileHover: { animationPlayState: "paused" } })}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
