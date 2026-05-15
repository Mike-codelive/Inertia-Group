type Props = {
  title?: string;
  description?: string;
};

export function ErrorState({
  title = 'Something went wrong',
  description = 'Please try again later.',
}: Props) {
  return (
    <div className="flex min-h-100 items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h2 className="mb-3 text-2xl font-semibold">{title}</h2>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
