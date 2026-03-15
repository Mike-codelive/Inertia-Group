import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';
import { masterTimeline } from '@/animations/masterTimeline';

type UseIntroAnimationProps = {
  containerRef: RefObject<HTMLDivElement | null>;
  circleRef: RefObject<SVGCircleElement | null>;
  logoRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLDivElement | null>;
  onComplete?: () => void;
};

export function useIntroAnimation({
  containerRef,
  circleRef,
  logoRef,
  textRef,
  onComplete,
}: UseIntroAnimationProps) {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      if (!circleRef.current || !logoRef.current || !textRef.current) return;

      const radius = 120;
      const circumference = 2 * Math.PI * radius;

      gsap.set(circleRef.current, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
        rotate: -90,
        transformOrigin: '50% 50%',
      });

      gsap.set([logoRef.current, textRef.current], {
        opacity: 1,
        x: 0,
        scale: 1,
      });

      const logoRect = logoRef.current.getBoundingClientRect();
      const circleRect = circleRef.current.getBoundingClientRect();

      const deltaX = circleRect.left + circleRect.width / 2 - (logoRect.left + logoRect.width / 2);

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete,
      });

      tl.to(circleRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power3.in',
      })
        .to(textRef.current, {
          x: -40,
          opacity: 0,
          filter: 'blur(4px)',
          duration: 0.3,
          ease: 'power2.out',
        })
        .to(
          logoRef.current,
          {
            x: deltaX,
            duration: 0.5,
            ease: 'power2.out',
          },
          '<'
        )
        .to(
          logoRef.current,
          {
            scale: 1.7,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(logoRef.current, {
          scale: 0,
          duration: 0.5,
          ease: 'power3.in',
        })
        .to(
          circleRef.current,
          {
            strokeDashoffset: -circumference,
            duration: 1,
            ease: 'power3.in',
          },
          '-=1'
        )
        .to(containerRef.current, {
          opacity: 0,
          duration: 0,
          pointerEvents: 'none',
        });

      masterTimeline.add(tl, 'introStart');

      masterTimeline.addLabel('introEnd');
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, circleRef, logoRef, textRef, onComplete]);
}
