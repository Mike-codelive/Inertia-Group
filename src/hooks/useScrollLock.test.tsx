import { render } from '@testing-library/react';
import { useScrollLock } from './useScrollLock';

function ScrollLockHarness({ locked }: { locked: boolean }) {
  useScrollLock(locked);
  return null;
}

describe('useScrollLock', () => {
  afterEach(() => {
    document.documentElement.className = '';
    document.body.className = '';
  });

  it('adds scroll lock classes when locked', () => {
    render(<ScrollLockHarness locked />);

    expect(document.documentElement).toHaveClass('scroll-locked');
    expect(document.body).toHaveClass('scroll-locked');
  });

  it('removes scroll lock classes when unlocked', () => {
    const { rerender } = render(<ScrollLockHarness locked />);

    rerender(<ScrollLockHarness locked={false} />);

    expect(document.documentElement).not.toHaveClass('scroll-locked');
    expect(document.body).not.toHaveClass('scroll-locked');
  });
});
