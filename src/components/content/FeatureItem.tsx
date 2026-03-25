import { P } from '@/components/ui/typography';

type FeatureItemProps = {
  title: string;
  description: string;
};

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <li className="flex flex-col gap-2">
      <p className="text-[clamp(1.125rem,2.2vw,1.75rem)] font-semibold">{title}</p>
      <P>{description}</P>
    </li>
  );
}
