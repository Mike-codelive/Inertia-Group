import { MoveRight } from 'lucide-react';
import type { ReactNode } from 'react';

type HeroSectionVariant = 'default' | 'full';

type HeroSectionProps = {
  minititle?: string;
  title: string;
  description: string;
  image: string;
  overlay?: boolean;
  variant?: HeroSectionVariant;
  children?: ReactNode;
};

export function HeroSection({
  minititle,
  title,
  description,
  image,
  overlay = true,
  variant = 'default',
  children,
}: HeroSectionProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={`relative w-full ${isFull ? 'h-[80vh] max-h-325' : 'flex items-center h-[60vh] min-h-100'}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {isFull && <div className="absolute inset-0 bg-[rgb(29_66_138/0.4)]" />}
      {overlay && <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/50" />}

      {isFull ? (
        <div className="container mx-auto relative z-10 w-full h-full">
          <div className="group cursor-pointer absolute md:w-116 left-0 text-white bg-blue-900 bottom-0 pr-15.5 pl-14 pt-6.75 pb-10.5">
            <p className="text-[0.625rem] mb-[19.2px]">{minititle}</p>
            <h1 className="text-[2rem] mb-4 group-hover:text-white/50">{title}</h1>
            <hr className="border-white/50 mb-7" />
            <div className="flex justify-between">
              <p className="text-sm mr-16 leading-relaxed">{description}</p>
              <MoveRight className="w-5 h-5 shrink-0 group-hover:text-white/50" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative container mx-auto px-6 z-10">
          <div className="max-w-xl text-white space-y-4">
            <h1 className="text-3xl md:text-5xl font-semibold">{title}</h1>
            <p className="text-sm md:text-base leading-relaxed">{description}</p>
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
