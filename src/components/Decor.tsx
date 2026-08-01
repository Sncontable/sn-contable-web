type DecorProps = {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
};

export function Sparkle({ className = "", color = "var(--color-primary)", size = 28, delay = 0 }: DecorProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`animate-float pointer-events-none select-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <path
        d="M12 0c.6 4.6 1.9 7.5 4 9.9 2.1 2.1 5 3.4 8 4.1-3 .7-5.9 2-8 4.1-2.1 2.4-3.4 5.3-4 9.9-.6-4.6-1.9-7.5-4-9.9-2.1-2.1-5-3.4-8-4.1 3-.7 5.9-2 8-4.1 2.1-2.4 3.4-5.3 4-9.9Z"
        fill={color}
      />
    </svg>
  );
}

export function Dot({ className = "", color = "var(--color-pink)", size = 14, delay = 0 }: DecorProps) {
  return (
    <span
      className={`animate-float pointer-events-none absolute select-none rounded-full ${className}`}
      style={{ width: size, height: size, backgroundColor: color, animationDelay: `${delay}s` }}
      aria-hidden="true"
    />
  );
}

export function FloatingBadge({
  className = "",
  color = "var(--color-primary)",
  delay = 0,
  children,
}: DecorProps & { children: React.ReactNode }) {
  return (
    <div
      className={`animate-float pointer-events-none absolute flex h-14 w-14 select-none items-center justify-center rounded-2xl shadow-md ${className}`}
      style={{ backgroundColor: color, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
