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
          <div className="w-full flex justify-center mt-5">
            <Link className="w-full" to="/catalog">
              <Button className="group w-full flex justify-around items-center gap-25 text-sm font-medium rounded-none bg-red-600 hover:bg-red-700 py-6 text-white transition-colors select-none ">
                Browse Catalog
                <MoveRight className="group-hover:translate-x-1 transition-transform duration-200 size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
