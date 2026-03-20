import type { ReactNode } from 'react';

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
  overlay?: boolean;
  children?: ReactNode;
};

export function HeroSection({
  title,
  description,
  image,
  overlay = true,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-100 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {overlay && <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/50" />}

      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>

          <p className="text-sm md:text-base leading-relaxed">{description}</p>

          {children}
        </div>
      </div>
    </section>
  );
}
