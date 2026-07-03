import { cn } from "../../lib/utils";

export function Input({ label, className, id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-topo-light"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="w-full px-4 py-3 bg-topo-surface-soft dark:bg-topo-black/80 border border-topo-border rounded-xl text-topo-text placeholder:text-topo-gray/60 focus:outline-none focus:ring-2 focus:ring-topo-blue focus:border-transparent transition-all"
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className, id, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-topo-light"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className="w-full px-4 py-3 bg-topo-surface-soft dark:bg-topo-black/80 border border-topo-border rounded-xl text-topo-text placeholder:text-topo-gray/60 focus:outline-none focus:ring-2 focus:ring-topo-blue focus:border-transparent transition-all resize-none"
        {...props}
      />
    </div>
  );
}

export function Select({ label, className, id, children, ...props }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-topo-light"
      >
        {label}
      </label>
      <select
        id={inputId}
        className="w-full px-4 py-3 bg-topo-surface-soft dark:bg-topo-black/80 border border-topo-border rounded-xl text-topo-text focus:outline-none focus:ring-2 focus:ring-topo-blue focus:border-transparent transition-all appearance-none cursor-pointer"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
