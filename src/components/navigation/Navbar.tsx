import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { navItems } from '@/data/navigation';
import { Menu, MoveRight, SearchIcon } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { AuthDialog } from '@/components/auth/AuthDialog';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navListRef = useRef<HTMLUListElement>(null);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    const parent = navListRef.current;

    if (!bar || !parent) return;

    if (hoveredIndex === null) {
      bar.style.opacity = '0';
      bar.style.width = '0px';
      return;
    }

    const hoveredText = textRefs.current[hoveredIndex];
    if (!hoveredText) return;

    const rect = hoveredText.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const left = rect.left - parentRect.left;
    const width = rect.width;

    bar.style.left = `${left}px`;
    bar.style.width = `${width}px`;
    bar.style.opacity = '1';
  }, [hoveredIndex]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 font-semibold text-lg md:text-xl">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-950 font-bold">
            IG
          </div>
        </a>

        <div className="hidden lg:flex items-center lg:gap-8">
          <NavigationMenu onMouseLeave={() => setHoveredIndex(null)}>
            <NavigationMenuList ref={navListRef} className="relative flex items-center gap-0">
              <div
                ref={barRef}
                className="absolute bottom-0 h-0.5 bg-red-600 rounded-full pointer-events-none transition-all duration-300 ease-out opacity-0"
                style={{ width: 0, left: 0 }}
              />

              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={item.label}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative"
                >
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        {item.label}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                          {item.subItems.map((sub) => (
                            <li key={sub.label}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={sub.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {sub.label}
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-foreground`}
                      >
                        <span
                          ref={(el) => {
                            textRefs.current[index] = el;
                          }}
                          className="inline-block"
                        >
                          {item.label}
                        </span>
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex relative items-center bg-white hover:bg-gray-100 dark:text-black">
            <Input
              type="search"
              placeholder="SEARCH BY PART # OR KEYWORD"
              className="peer h-5 md:h-7 rounded-none border border-black/20 border-r-0 pl-10 placeholder:text-xs lg:min-w-59"
            />

            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Button className="group relative h-5 md:h-7 rounded-none bg-red-600 px-6 hover:bg-red-700 text-white">
              <MoveRight className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Button>
          </div>

          <Button variant="outline" onClick={() => setLoginOpen(true)}>
            LOG IN / SIGN UP
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-75 sm:w-100">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Main navigation for mobile devices</SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-6 mt-15 h-full">
              {navItems.map((item) => (
                <div key={item.label} className="pl-10">
                  <a
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>

                  {item.subItems && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-center mt-auto">
                <Button
                  className="py-5 mb-5"
                  variant="ghost"
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => setLoginOpen(true), 150);
                  }}
                >
                  LOG IN / SIGN UP
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <AuthDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </header>
  );
}
