import { resources } from '@/data/resources';

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function Resources() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20">
      <h1 className="text-5xl mb-10">Resources</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <Card
            key={resource.id}
            className="group relative w-full overflow-hidden pt-0 rounded-none"
          >
            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}

            <img
              src={resource.image}
              alt={resource.title}
              className="relative z-20 aspect-video w-full object-cover"
            />

            <CardHeader>
              <CardAction />
              <CardTitle className="group-hover:text-red-600">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>

            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
}
