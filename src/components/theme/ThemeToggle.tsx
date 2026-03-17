import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, MonitorCog } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'light') return <Sun className="h-4 w-4" />;
    if (theme === 'dark') return <Moon className="h-4 w-4" />;
    return <MonitorCog className="h-4 w-4" />;
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="border border-black/20 dark:border-white/20">
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-36 border border-black/20 dark:border-white/20">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')}>
          <MonitorCog className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleMobile() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="px-10 mt-4">
      {/* <p className="text-xs text-muted-foreground mb-2">Theme</p> */}

      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'bg-black/5 dark:bg-white/10' : ''}
        >
          <Sun className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'bg-black/5 dark:bg-white/10' : ''}
        >
          <Moon className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme('system')}
          className={theme === 'system' ? 'bg-black/5 dark:bg-white/10' : ''}
        >
          <MonitorCog className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
