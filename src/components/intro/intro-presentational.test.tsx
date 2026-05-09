import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { BrandLogo } from './BrandLogo';
import { IntroCircle } from './IntroCircle';
import { IntroText } from './IntroText';

describe('intro presentational components', () => {
  it('renders the brand logo text', () => {
    render(<BrandLogo textRef={createRef()} iconRef={createRef()} />);

    expect(screen.getByText('INERTIA GROUP')).toBeInTheDocument();
  });

  it('forwards refs for the circle and text artwork', () => {
    const circleRef = createRef<SVGCircleElement>();
    const textRef = createRef<SVGSVGElement>();

    render(
      <>
        <IntroCircle ref={circleRef} />
        <IntroText ref={textRef} />
      </>
    );

    expect(circleRef.current?.tagName.toLowerCase()).toBe('circle');
    expect(textRef.current?.tagName.toLowerCase()).toBe('svg');
  });
});
