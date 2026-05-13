import { MoveRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type HeroSectionVariant = 'default' | 'full';

type HeroSectionProps = {
  minititle?: string;
  title: string;
  description: string;
  image: string;
  overlay?: boolean;
  variant?: HeroSectionVariant;
  children?: ReactNode;
  linkTo?: string;
};

export function HeroSection({
  minititle,
  title,
  description,
  image,
  overlay = true,
  variant = 'default',
  children,
  linkTo,
}: HeroSectionProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={`relative w-full ${
        isFull ? 'h-[80vh] max-h-325' : 'flex h-[60vh] min-h-100 items-center'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {isFull && <div className="absolute inset-0 bg-[rgb(29_66_138/0.4)]" />}

      {overlay && <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/50" />}

      {isFull ? (
        <div className="container relative z-10 mx-auto h-full w-full">
          {linkTo ? (
            <Link
              to={linkTo}
              className="group absolute bottom-0 left-0 cursor-pointer bg-blue-900 pb-10.5 pl-14 pr-15.5 pt-6.75 text-white md:w-116"
            >
              {minititle && (
                <p className="mb-[19.2px] text-[0.625rem] transition-colors group-hover:text-white/50">
                  {minititle}
                </p>
              )}

              <h1 className="mb-4 text-[2rem] transition-colors group-hover:text-white/50">
                {title}
              </h1>

              <hr className="mb-7 border-white/50" />

              <div className="flex justify-between">
                <p className="mr-16 text-sm leading-relaxed transition-colors group-hover:text-white/70">
                  {description}
                </p>

                <MoveRight className="h-5 w-5 shrink-0 transition-colors group-hover:text-white/50" />
              </div>
            </Link>
          ) : (
            <div className="absolute bottom-0 left-0 bg-blue-900 pb-10.5 pl-14 pr-15.5 pt-6.75 text-white md:w-116">
              {minititle && <p className="mb-[19.2px] text-[0.625rem]">{minititle}</p>}

              <h1 className="mb-4 text-[2rem]">{title}</h1>

              <hr className="mb-7 border-white/50" />

              <div className="flex justify-between">
                <p className="mr-16 text-sm leading-relaxed">{description}</p>

                <MoveRight className="h-5 w-5 shrink-0" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-xl space-y-4 text-white">
            <h1 className="text-3xl font-semibold md:text-5xl">{title}</h1>

            <p className="text-sm leading-relaxed md:text-base">{description}</p>

            {children}
          </div>
        </div>
      )}
    </section>
  );
}
