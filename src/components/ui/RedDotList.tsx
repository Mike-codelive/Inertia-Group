type RedDotListProps = {
  items: string[];
  className?: string;
};

export function RedDotList({ items, className }: RedDotListProps) {
  return (
    <ul className={`flex flex-col gap-4 ${className || ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
          <span className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
