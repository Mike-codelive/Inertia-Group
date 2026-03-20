import { useEffect, useState } from 'react';

type Section = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type ContentsSectionProps = {
  sections: Section[];
};

export function ContentsSection({ sections }: ContentsSectionProps) {
  const [active, setActive] = useState<string>(sections[0]?.id);

  useEffect(() => {
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
        {
          rootMargin: '-40% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10">
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">Contents</h3>

            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    text-left text-sm cursor-pointer transition-colors
                    ${
                      active === section.id
                        ? 'text-black dark:text-white font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-16">
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
