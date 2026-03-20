import { H3, P } from '@/components/ui/typography';

type FeatureItemProps = {
  title: string;
  description: string;
};

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <li className="flex flex-col gap-2">
      <H3>{title}</H3>
      <P>{description}</P>
    </li>
  );
}
