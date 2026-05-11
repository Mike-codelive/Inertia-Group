import { useMemo } from 'react';
import { toast } from 'sonner';
import { useSavedParts } from '@/hooks/useSavedParts';

export function useSavedPart(id: string, name: string) {
  const { savedParts, togglePart } = useSavedParts();

  const saved = useMemo(() => {
    return savedParts.includes(id);
  }, [savedParts, id]);

  const toggleSaved = () => {
    const next = togglePart(id);

    if (next) {
      toast.success(`${name} has been saved`, { position: 'bottom-center', duration: 1500 });
      return;
    }

    toast.info(`${name} has been removed`, { position: 'bottom-center', duration: 1500 });
  };

  return {
    saved,
    toggleSaved,
  };
}
