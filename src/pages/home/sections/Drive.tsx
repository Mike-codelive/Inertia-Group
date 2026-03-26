import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Drive() {
  return (
    <section
      className="container flex w-full flex-col items-center justify-center py-40 lg:px-40 mx-auto"
      role="region"
      aria-label="Drive section"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Drive the future of mobility
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
          We’re shaping tomorrow’s vehicles with smarter seating, advanced electrical systems, and
          connected solutions that make every journey safer, more comfortable, and more sustainable.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link to="/about">
          <Button className="px-8 py-4 font-semibold" variant={'ghost'}>
            Learn About Our Solutions
          </Button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 text-center sm:grid-cols-4 lg:mt-20">
        <div>
          <p className="text-4xl font-bold text-primary">190+</p>
          <p className="mt-2 text-sm text-muted-foreground">Manufacturing facilities</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary">36</p>
          <p className="mt-2 text-sm text-muted-foreground">Countries</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary">168,000+</p>
          <p className="mt-2 text-sm text-muted-foreground">Team members</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-primary">66</p>
          <p className="mt-2 text-sm text-muted-foreground">Years of innovation</p>
        </div>
      </div>
    </section>
  );
}
