import aboutHero from '@/assets/images/about/About_us_hero.webp';
import { FeatureItem } from '@/components/content/FeatureItem';
import { ContentsSection } from '@/components/sections/ContentsSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { RedDotList } from '@/components/ui/RedDotList';
import { H1, P } from '@/components/ui/typography';
import map from '@/assets/images/about/map.png';

const portfolioItems = [
  'Terminals & Connectors for Low Voltage and High Voltage Applications',
  'High Voltage Battery Connection Systems',
  'High Speed Data Solutions',
  'Power Distribution Boxes',
  'Engineered Metal & Plastic Components',
];
const customerItems = [
  'Terminals & Connectors for Low Voltage and High Voltage ApplicationsProduction-proven products and development processes with global customers and manufacturing capabilities',
  'Engineering expertise for highly efficient solutions',
];
const manufacturingItem0 = [
  'High-capacity tools',
  'Moldflow',
  'Multi-cavity Molds',
  'Overmolding Tools',
  'Bi-component molding',
  'LSR Molding',
  'Mucell',
  'Foaming',
  'Multi-cavity injection',
  '2K molding',
];
const manufacturingItem1 = [
  '2K process capabilities',
  'Toxing',
  'Stitching',
  'Overmolding',
  'Full- and Semi-automation',
];
const manufacturingItem2 = [
  'Standard stamping',
  'Laser welding',
  'Busbar stamping',
  'Fuse stamping',
  'Press-in nuts',
  'Deburring',
];

export function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        description="A global automotive technology leader in Seating and E-Systems, enables superior in-vehicle experiences for consumers around the world."
        image={aboutHero}
      />
      <ContentsSection
        sections={[
          {
            id: 'connection-systems',
            label: 'Connection Systems',
            content: (
              <div>
                <H1>Connection Systems</H1>

                <P className="my-4">
                  A global automotive technology leader in Seating and E-Systems, enables superior
                  in-vehicle experiences for consumers around the world. Making every drive better™
                  by providing the technology for safer, smarter, and more comfortable journeys.
                </P>

                <P>
                  Connection Systems delivers solutions to transfer & protect signal and power
                  distribution throughout the vehicle. Autonomous driving, connectivity and
                  electrification are only possible with connected systems.
                </P>

                <ul className="md:px-30 my-8 flex flex-col gap-10">
                  <FeatureItem
                    title="Connection Systems Portfolio"
                    description="Wide range of Low Voltage, High Voltage, and High-Speed Data terminals and connectors, as well as an extensive eyelet and engineered components portfolio."
                  />

                  <FeatureItem
                    title="Systems Integration Expertise"
                    description="Our Connection Systems portfolio offers comprehensive solutions for vehicle architectures, ensuring reliable power for in-vehicle connectivity and electric vehicle applications. It enables faster charging, weight reduction, and increased vehicle range."
                  />

                  <FeatureItem
                    title="Complex Assemblies & Automation"
                    description="Uniquely positioned to offer specific Battery System solutions such as Intercell Connections and Battery Interface Systems with superior modularity, scalability, configurability, quality, and efficiency."
                  />

                  <FeatureItem
                    title="Engineered Components"
                    description="The long experience with plastic and metal parts in all systems developed by IG gives the advantage on design and manufacturing of Channels and Brackets."
                  />

                  <FeatureItem
                    title="High Speed Data Solutions"
                    description="leverages all the EDS experience to produce high speed data sub-assemblies with the most optimized manufacturing, saving project timing and giving flexibility to customers."
                  />
                </ul>
              </div>
            ),
          },
          {
            id: 'product-portfolio',
            label: 'Product Portfolio',
            content: (
              <div>
                <H1>Product Portfolio</H1>
                <P className="my-4">
                  Connection Systems portfolio provides a holistic suite of solutions for the entire
                  vehicle architecture:
                </P>
                <RedDotList items={portfolioItems} className="my-6 ml-3" />
                <ul className="md:px-30 my-8 flex flex-col gap-10">
                  <FeatureItem
                    title="Battery Plugboard"
                    description="Fully configurable solution for a common electric vehicle battery interface. A single assembly that combines all connections to flow power in and out of the high voltage battery, designed for automated pack assembly."
                  />

                  <FeatureItem
                    title="Busbar Technology"
                    description="High-quality engineering stamped, overmolded, bent and extruded components from IG Connection Systems. Providing a high-electrical performance with extended mechanical advantage. IG’s creative tooling and designs allow the manufacturing of complex shapes  for various applications. "
                  />

                  <FeatureItem
                    title="Intercell Connect Board"
                    description="A highly advanced technology that electrically and mechanically integrates battery cells into modules that enables High Voltage power to the electric vehicle. Inhouse capabilities to support all cell types and battery architectures. "
                  />

                  <FeatureItem
                    title="Power Distribution Boxes"
                    description="Offers a wide range of Low-voltage PDB/JB/FB solutions to fulfil the varying customer requirements. Sealed and unsealed boxes and fuses, with pluggable or bolt-down interface. Over 30 years of experience in providing passive power distribution boxes to manage power distribution within a vehicle while providing performance, safety and reliability."
                  />

                  <FeatureItem
                    title="High current Terminals & Connectors"
                    description="High Current Connection Systems are developed to meet the demanding conditions of high-power automotive applications and enhance their performance. Mainly used in Electric Vehicles and 48volt systems. Our terminal and connector innovations combined with IG’s system-level expertise results in an uncompromised solution for high-power systems, delivered in the smallest packaged environment."
                  />
                </ul>
              </div>
            ),
          },
          {
            id: 'customer-benefits',
            label: 'Customer Benefits',
            content: (
              <div>
                <H1>Customer Benefits</H1>
                <P className="my-4">
                  Connection Systems are integrated throughout the vehicle’s electrical distribution
                  system, reliably powering everything from in-vehicle connectivity to electric
                  vehicle applications, allowing for faster charging, reduced weight and extended
                  vehicle range.
                </P>
                <RedDotList items={customerItems} className="my-6 ml-3" />
              </div>
            ),
          },
          {
            id: 'manufacturing',
            label: 'Manufacturing Capabilities',
            content: (
              <div>
                <H1 className="mb-10">Manufacturing Capabilities</H1>
                <div className="flex flex-col w-full justify-between md:flex-row">
                  <div>
                    <P className="font-bold mb-5">Connection Systems</P>
                    <RedDotList items={manufacturingItem0} className="my-6 ml-3" />
                  </div>
                  <div>
                    <P className="font-bold mb-5">Assembly</P>
                    <RedDotList items={manufacturingItem1} className="my-6 ml-3" />
                  </div>
                  <div>
                    <P className="font-bold mb-5">Stamping</P>
                    <RedDotList items={manufacturingItem2} className="my-6 ml-3" />
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 'global-footprint',
            label: 'CS Global Footprint',
            content: (
              <div>
                <H1 className="mb-10">
                  <span className="text-red-600">9</span> Manufacturing Facilities /{' '}
                  <span className="text-red-600">6</span> Countries Worldwide
                </H1>
                <img src={map} alt="countries worldwide" />
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
