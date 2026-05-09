import { render } from '@testing-library/react';
import gsapMock from '../../test/mocks/gsap';
import { masterTimeline } from '@/animations/masterTimeline';
import { useIntroAnimation } from './useIntroAnimation';

function IntroAnimationHarness({ onComplete }: { onComplete?: () => void }) {
  const refs = {
    containerRef: { current: document.createElement('div') },
    circleRef: { current: document.createElementNS('http://www.w3.org/2000/svg', 'circle') },
    logoRef: { current: document.createElement('div') },
    textRef: { current: document.createElement('div') },
  };

  useIntroAnimation({ ...refs, onComplete });

  return <div />;
}

describe('useIntroAnimation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('runs the GSAP animation and registers it with the master timeline', () => {
    render(<IntroAnimationHarness />);

    expect(gsapMock.context).toHaveBeenCalled();
    expect(gsapMock.set).toHaveBeenCalled();
    expect(gsapMock.timeline).toHaveBeenCalledWith(
      expect.objectContaining({
        defaults: { ease: 'power2.inOut' },
      })
    );
    expect(masterTimeline.add).toHaveBeenCalledWith(expect.any(Object), 'introStart');
    expect(masterTimeline.addLabel).toHaveBeenCalledWith('introEnd');
  });

  it('completes immediately when reduced motion is preferred', () => {
    const onComplete = jest.fn();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn(() => ({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(<IntroAnimationHarness onComplete={onComplete} />);

    expect(onComplete).toHaveBeenCalled();
    expect(gsapMock.context).not.toHaveBeenCalled();
  });
});
