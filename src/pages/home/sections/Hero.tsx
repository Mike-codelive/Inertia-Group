import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { masterTimeline } from '@/animations/masterTimeline';
import { IntroText } from '@/components/intro/IntroText';
import heroBg from '@/assets/images/Hero_Conectors.webp';

export function HeroSection() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('path');

      const tl = gsap.timeline({ id: 'hero' });

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.02,
        ease: 'power3.out',
      });

      tl.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
        },
        0.8
      );

      masterTimeline.add(tl, 'introEnd-=1.5');

      masterTimeline.addLabel('heroEnd');
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center text-white px-6">
      <div
        ref={bgRef}
        className="absolute inset-0  bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[rgb(29_66_138/0.4)]" />
      <IntroText ref={svgRef} />
    </section>
  );
}
