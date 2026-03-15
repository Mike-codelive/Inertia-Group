type BrandLogoProps = {
  textRef: React.Ref<HTMLDivElement>;
  iconRef: React.Ref<HTMLDivElement>;
};

export function BrandLogo({ textRef, iconRef }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-[clamp(0.75rem,2vw,1.5rem)] text-foreground">
      <div ref={iconRef} className="w-[clamp(2rem,2.5vw,5rem)] aspect-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-full h-full"
        >
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>
      <div
        ref={textRef}
        className="font-medium tracking-wide text-[clamp(1.25rem,3vw,2rem)] whitespace-nowrap"
      >
        INERTIA GROUP
      </div>
    </div>
  );
}
