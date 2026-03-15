import { useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { IntroCircle } from './IntroCircle';
import { useIntroAnimation } from '@/hooks/useIntroAnimation';

type IntroOverlayProps = {
  onComplete?: () => void;
};

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useIntroAnimation({
    containerRef,
    circleRef,
    logoRef,
    textRef,
    onComplete,
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="relative flex items-center justify-center">
        <IntroCircle ref={circleRef} />
        <div className="absolute flex items-center gap-6">
          <BrandLogo iconRef={logoRef} textRef={textRef} />
        </div>
      </div>
    </div>
  );
}
