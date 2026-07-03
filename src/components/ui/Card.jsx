import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Card({ children, className, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -6, boxShadow: "0 20px 44px rgba(110,135,183,0.14)" }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-topo-border border-t-black/5 dark:border-t-white/10 bg-topo-surface p-6 shadow-lg shadow-black/8 dark:shadow-black/15",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
