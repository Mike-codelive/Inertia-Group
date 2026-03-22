import contact from '@/assets/images/contact/Contact.webp';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';

export function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Speak with our technical team about your next projects that requires Lear’s high-performance connection systems portfolio of products."
        image={contact}
      />

      <ContactSection />
    </>
  );
}
