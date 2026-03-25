import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { sections } from '@/data/catalog';

export function CatalogSections() {
  return (
    <section className="container mx-auto my-6 grid gap-6 px-6 md:grid-cols-2">
      {sections.map((section) => (
        <a key={section.title} href={section.href} className="group h-45.75 md:h-100 xl:h-125">
          <Card className="relative justify-end h-full overflow-hidden rounded-none border transition-colors hover:border-red-600">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${section.image})` }}
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/0 to-black/50" />

            <CardHeader className="relative z-10 text-white">
              <CardTitle className="text-[2rem] flex justify-between items-center">
                {section.title}
                <Button
                  aria-label={`explore ${section.title} section`}
                  type="button"
                  className="relative h-10 md:size-10.75 rounded-none bg-red-600 hover:bg-red-600 px-6 text-white"
                >
                  <MoveRight className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Button>
              </CardTitle>
              {/* <CardDescription className="text-white/80">{section.description}</CardDescription> */}
            </CardHeader>
          </Card>
        </a>
      ))}
    </section>
  );
}
