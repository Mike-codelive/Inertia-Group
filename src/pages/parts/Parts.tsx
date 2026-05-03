import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PartsPage() {
  return (
    <>
      <section className="flex justify-center items-center min-h-[calc(100dvh-65px)]">
        <div className="flex flex-col items-center max-w-86">
          <h1 className="font-bold mb-2 text-[1.5rem]">THERE ARE NO SAVED PARTS</h1>
          <p className="text-center">
            Go to the catalog and find the parts <br /> you're interested in
          </p>
          <div className="w-full flex justify-center mt-5 md:h-13.5">
            <Button
              variant="cta"
              className="group cursor-pointer w-full h-full text-sm font-medium p-0 rounded-none transition-colors select-none"
            >
              <Link className="w-full h-full" to="/search">
                <div className="h-full py-3 flex justify-between items-center text-sm md:text-lg px-6">
                  <span>Browse Catalog</span>
                  <MoveRight className="group-hover:translate-x-1 transition-transform duration-200 size-5 md:size-7" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
