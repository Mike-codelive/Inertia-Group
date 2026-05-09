import { cn } from './utils';

describe('cn', () => {
  it('combines conditional class names', () => {
    const isHidden = false;

    expect(cn('base', isHidden && 'hidden', ['px-4', 'text-sm'])).toBe('base px-4 text-sm');
  });

  it('merges conflicting Tailwind classes with the latest value winning', () => {
    expect(cn('px-2 text-sm', 'px-4')).toBe('text-sm px-4');
  });
});
