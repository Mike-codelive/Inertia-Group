type Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return <h1 className={`text-[clamp(1.75rem,4vw,3.5rem)] ${className || ''}`}>{children}</h1>;
}

export function H3({ children, className }: Props) {
  return (
    <h3 className={`text-[clamp(1.125rem,2.2vw,1.75rem)] font-semibold ${className || ''}`}>
      {children}
    </h3>
  );
}

export function P({ children, className }: Props) {
  return (
    <p className={`text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed ${className || ''}`}>
      {children}
    </p>
  );
}
