import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function WordReveal({
  children,
  as: Component = "h1",
  className,
  delay = 0,
  stagger = 0.05,
  duration = 0.6,
  once = true,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const words = String(children).split(" ");

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: -90 }}
            animate={isInView ? { y: 0, rotateX: 0 } : { y: "110%", rotateX: -90 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

export function CharReveal({
  children,
  as: Component = "span",
  className,
  delay = 0,
  stagger = 0.015,
  duration = 0.5,
  once = true,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  const text = String(children);

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "120%", opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: "120%", opacity: 0 }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
