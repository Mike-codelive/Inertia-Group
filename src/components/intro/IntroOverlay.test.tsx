import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IntroOverlay } from './IntroOverlay';
import { useIntroAnimation } from '@/hooks/useIntroAnimation';

jest.mock('@/hooks/useIntroAnimation', () => ({
  useIntroAnimation: jest.fn(),
}));

describe('IntroOverlay', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders the brand text', () => {
    render(<IntroOverlay />);
    expect(screen.getByText(/INERTIA GROUP/i)).toBeInTheDocument();
  });

  it('calls useIntroAnimation with correct arguments', () => {
    const onComplete = jest.fn();

    render(<IntroOverlay onComplete={onComplete} />);

    expect(useIntroAnimation).toHaveBeenCalledWith(
      expect.objectContaining({
        containerRef: expect.any(Object),
        circleRef: expect.any(Object),
        logoRef: expect.any(Object),
        textRef: expect.any(Object),
        onComplete,
      })
    );
  });

  it('unmounts safely', () => {
    const { unmount } = render(<IntroOverlay />);
    expect(() => unmount()).not.toThrow();
  });
});
