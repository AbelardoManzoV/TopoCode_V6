import { motion } from "framer-motion";

export function AuroraBackground({ className, children }) {
  return (
    <div className={`relative w-full overflow-hidden ${className || ""}`}>
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 opacity-50" aria-hidden="true">
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                #2B303A 10%,
                #3b82f6 18%,
                #6E87B7 22%,
                #5F78A9 26%,
                #2B303A 30%)
            `,
            backgroundSize: "300% 100%",
            filter: "blur(100px)",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(100deg,
                rgba(110, 135, 183, 0.15) 0%,
                rgba(110, 135, 183, 0.15) 7%,
                transparent 10%,
                transparent 12%,
                rgba(110, 135, 183, 0.15) 16%),
              repeating-linear-gradient(100deg,
                #2B303A 10%,
                #3b82f6 18%,
                #6E87B7 22%,
                #5F78A9 26%,
                #2B303A 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            mixBlendMode: "screen",
          }}
          animate={{
            backgroundPosition: [
              "50% 50%, 50% 50%",
              "100% 50%, 150% 50%",
              "50% 50%, 50% 50%",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(34, 39, 49, 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
