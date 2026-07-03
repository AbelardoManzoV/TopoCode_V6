import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

export function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.15,
  scale = [1.15, 1],
  overlay,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], scale);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={
          reduce
            ? undefined
            : {
                y: speed !== 0 ? y : undefined,
                scale: imageScale,
                opacity,
              }
        }
      />
      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  );
}
