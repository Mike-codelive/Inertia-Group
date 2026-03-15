import { forwardRef } from 'react';

export const IntroCircle = forwardRef<SVGCircleElement>((_, ref) => {
  return (
    <div className="text-foreground w-[90vw] md:w-150 aspect-square">
      <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <circle
          ref={ref}
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
});

IntroCircle.displayName = 'IntroCircle';
