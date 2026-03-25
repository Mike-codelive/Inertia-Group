import makMas from '@/assets/images/resources/resources_1.webp';
import blogImage from '@/assets/images/blog/blog_main.webp';
import blogImage_0 from '@/assets/images/blog/post_0.webp';
import blogImage_1 from '@/assets/images/blog/post_1.webp';
import blogImage_2 from '@/assets/images/blog/post_2.webp';
import blogImage_3 from '@/assets/images/blog/post_3.webp';
import blogImage_4 from '@/assets/images/blog/post_4.webp';
import blogImage_5 from '@/assets/images/blog/post_5.webp';
import blogImage_6 from '@/assets/images/blog/post_6.webp';
import { ContentsSection } from '@/components/sections/ContentsSection';
import { HeroSection } from '@/components/sections/HeroSection';

export function ResourcesPage() {
  return (
    <>
      <HeroSection
        variant="full"
        minititle="TERMINALS"
        title="MAK / MAS 1.2 Terminals"
        description="Lear’s MAK / MAS 1.2 terminal system features a two-piece design for signal and low-power applications. With options for various wire cross-sections and surface platings, this product series is suitable for a wide range of sealed and unsealed applications. Designed for high electrical performance and long-term reliability, the system ensures robust retention and mechanical strength while remaining compatible with common industry standards."
        image={makMas}
      />

      <div className="container mx-auto px-6 mt-8.5">
        <p className="font-bold text-[2rem]">Resources</p>
      </div>

      <ContentsSection
        variant="blog"
        image={blogImage}
        posts={[
          {
            image: blogImage_0,
            type: 'connectors',
            title: 'MAK 1.2 Series',
            description:
              'MAK / MAS 1.2 portfolio is complemented by connectors engineered to deliver excellent performance across a wide range of applications. Designed for seamless integration into existing architectures, these connectors work together with the MAK / MAS 1.2 terminals to create a high performance system that meets common industry requirements and supports efficient, reliable harness assembly.',
            dateTime: '21 October 2026',
          },
          {
            image: blogImage_1,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
          {
            image: blogImage_2,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
          {
            image: blogImage_3,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
          {
            image: blogImage_4,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
          {
            image: blogImage_5,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
          {
            image: blogImage_6,
            type: 'terminals',
            title: 'MAK/MAS Series Terminals',
            description:
              'The MAK and MAS series terminals with different configuration possibilities.MAK / MAS terminals are available from 0.5 mm terminal size up to 12 mm. Available for crimping and welding for wires or flat foil cable connection. By offering different cable ranges and different surface plating, this product series can be used for many sealed or unsealed applications.',
            dateTime: '21 October 2024',
          },
        ]}
      />
    </>
  );
}
