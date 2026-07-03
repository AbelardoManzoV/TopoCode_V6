import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function Button({
  children,
  variant = "primary",
  className,
  as: Component = motion.button,
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-topo-blue focus-visible:ring-offset-2 focus-visible:ring-offset-topo-bg overflow-hidden";

  const variants = {
    primary:
      "bg-topo-blue text-white rounded-full px-8 py-3.5 hover:shadow-[0_10px_30px_rgba(110,135,183,0.28)] hover:bg-topo-blue-dark",
    secondary:
      "border border-topo-blue/60 text-topo-light rounded-full px-8 py-3.5 hover:bg-topo-blue/12 hover:text-topo-text dark:hover:text-white hover:border-topo-blue/90",
    dark: "bg-topo-text text-topo-white rounded-full px-8 py-4 text-lg hover:bg-topo-black dark:hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_32px_rgba(213,222,235,0.22)]",
    form: "bg-topo-blue text-white w-full py-3.5 rounded-xl hover:bg-topo-blue-dark hover:shadow-[0_8px_24px_rgba(110,135,183,0.25)]",
    ghost:
      "text-topo-light hover:text-topo-text dark:hover:text-white rounded-full px-6 py-2.5 hover:bg-black/5 dark:hover:bg-white/5",
  };

  return (
    <Component
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
