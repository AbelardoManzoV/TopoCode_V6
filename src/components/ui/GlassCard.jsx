import { cn } from "../../lib/utils";

export function GlassCard({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-topo-surface/40 backdrop-blur-xl shadow-lg shadow-black/10",
        "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
        "before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent",
        hover && "transition-all duration-300 hover:border-topo-blue/30 hover:bg-topo-surface/50 hover:shadow-[0_20px_50px_rgba(110,135,183,0.12)]",
        className
      )}
      {...props}
    >
      {/* Top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {children}
    </div>
  );
}

export function GlassPanel({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/8 bg-topo-black/50 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </div>
  );
}
