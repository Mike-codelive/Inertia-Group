type Section = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type BlogPost = {
  type: string;
  image: string;
  title: string;
  description: string;
  dateTime: string;
};

type ContentsSectionProps = {
  variant?: 'default' | 'blog';
  sections?: Section[];
  image?: string;
  posts?: BlogPost[];
};

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export function ContentsSection({
  variant = 'default',
  sections = [],
  image,
  posts = [],
}: ContentsSectionProps) {
  const [active, setActive] = useState<string>(sections[0]?.id);

  useEffect(() => {
    if (variant !== 'default') return;

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        { rootMargin: '-64px 0px -50% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections, variant]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={`w-full ${variant === 'blog' ? 'md:py-16 py-6' : 'py-16 md:py-24'}`}>
      <div
        className={`container mx-auto px-6 grid gap-10 ${
          variant === 'default'
            ? 'grid-cols-1 lg:grid-cols-[250px_1fr]'
            : 'grid-cols-1 lg:grid-cols-2'
        }`}
      >
        {variant === 'default' && (
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">Contents</h3>

              <nav className="flex flex-col gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-sm transition-colors ${
                      active === section.id
                        ? 'text-black dark:text-white font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {variant === 'blog' && image && (
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="group relative w-full h-153.25">
                <img src={image} alt="Blog section" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/70" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="group-hover:text-red-600 text-white mb-5.25 uppercase text-[1.75rem]">
                    High Current Product Family
                  </p>
                  <p className="opacity-60 text-white">
                    Published <time dateTime="21 March 2026">21 March 2026</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {variant === 'default' && (
          <div className="flex flex-col gap-24">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                {section.content}
              </div>
            ))}
          </div>
        )}

        {variant === 'blog' && (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="group flex flex-col rounded-none border pt-0 border-black/20 dark:border-white/20"
              >
                <div
                  className="h-38 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader className="relative">
                  <p className="uppercase text-[8px] mb-3">{post.type}</p>
                  <CardTitle className="group-hover:text-red-600 text-base uppercase font-semibold mb-1">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-[9.6px] text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                  <p className="text-[8px] pt-3 mt-auto">
                    published <time dateTime={post.dateTime}>{post.dateTime}</time>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
