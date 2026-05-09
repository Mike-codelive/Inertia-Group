import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Spinner } from './spinner';
import { H1, H3, P } from './typography';
import { RedDotList } from './RedDotList';

describe('basic UI components', () => {
  it('renders button, input, label, and spinner primitives', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Email address" />
        <Button>Submit</Button>
        <Spinner />
      </>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('renders card and typography content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>
          <H1>Main heading</H1>
          <H3>Subheading</H3>
          <P>Body copy</P>
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Card title')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Main heading' })).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders red dot list items', () => {
    render(<RedDotList items={['Connectors', 'Terminals']} />);

    expect(screen.getByText('Connectors')).toBeInTheDocument();
    expect(screen.getByText('Terminals')).toBeInTheDocument();
  });
});
