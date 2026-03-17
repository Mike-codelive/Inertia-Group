import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
// import { Label } from '@/components/ui/label';

type AuthDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-121.5">
        <DialogHeader className="mt-5">
          <DialogTitle className="mb-5 uppercase">Log In</DialogTitle>
          <DialogDescription>
            <Input
              className="h-10 px-3 py-0 rounded-none border dark:border-white/20 border-black/20 outline -outline-offset-1 dark:outline-black/80 focus-visible:dark:border-white focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-xs"
              id="email"
              type="email"
              placeholder="E-MAIL*"
              autoComplete="email"
            />
            <Button
              size={'sm'}
              className="uppercase text-[.75rem] my-7 py-0.5 w-full rounded-none hover:bg-red-600 dark:hover:text-gray-300"
            >
              Log In
            </Button>
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="border-t border-black/20 dark:border-white/20" />
          <p className="text-[.75rem] text-center mt-2">Don’t have an account?</p>
          <Button
            size={'sm'}
            className="uppercase text-[.75rem] my-7 w-full rounded-none bg-red-600 hover:bg-red-700 text-white hover:text-gray-300"
          >
            go to registration
          </Button>
          <div className="px-4">
            <div className="mb-10">
              <h2 className="uppercase font-bold mb-2">
                Sign up to access all features and exclusive benefits
              </h2>
              <p className="text-sm font-light">
                Unlock a better experience tailored to your needs. As a registered user, you'll get:
              </p>
            </div>
            <ul className="text-sm font-light">
              <li className="flex items-center gap-2 mb-4">
                <Check className="text-red-600" /> Save your parts to access them easily on multiple
                devices.
              </li>
              <li className="flex items-center gap-2 mb-4">
                <Check className="text-red-600" /> Use grouping to organize parts by projects, types
                or other criteria.
              </li>
              <li className="flex items-center gap-2 mb-4">
                <Check className="text-red-600" /> Download your personalized pdf with saved
                products.
              </li>
            </ul>
          </div>
          <div className="flex gap-4"></div>
          {/* <Label htmlFor="email">Email</Label> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
