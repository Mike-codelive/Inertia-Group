import { fireEvent, render, screen } from '@testing-library/react';
import { ContentsSection } from './ContentsSection';
import { ContactSection } from './ContactSection';
import { HeroSection } from './HeroSection';

describe('shared page sections', () => {
  it('renders a hero section with content', () => {
    render(<HeroSection title="Hero title" description="Hero body" image="/hero.webp" />);

    expect(screen.getByRole('heading', { name: 'Hero title' })).toBeInTheDocument();
    expect(screen.getByText('Hero body')).toBeInTheDocument();
  });

  it('renders contents navigation and section content', () => {
    render(
      <ContentsSection
        sections={[
          { id: 'one', label: 'One', content: <p>First section</p> },
          { id: 'two', label: 'Two', content: <p>Second section</p> },
        ]}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Two' }));

    expect(screen.getByText('First section')).toBeInTheDocument();
    expect(screen.getByText('Second section')).toBeInTheDocument();
  });

  it('renders blog content cards', () => {
    render(
      <ContentsSection
        variant="blog"
        image="/blog.webp"
        posts={[
          {
            image: '/post.webp',
            type: 'connectors',
            title: 'Connector Story',
            description: 'A resource about connectors.',
            dateTime: '21 October 2024',
          },
        ]}
      />
    );

    expect(screen.getByText('Connector Story')).toBeInTheDocument();
  });

  it('renders contact form fields', () => {
    render(<ContactSection />);

    expect(screen.getByRole('heading', { name: 'Get in Touch' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'GET IN TOUCH WITH US' })).toBeInTheDocument();
  });
});
