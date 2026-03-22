import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company is required'),
  country: z.string().min(2, 'Country is required'),
  region: z.string().min(1, 'Region is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      region: '',
      subject: '',
      message: '',
    },
  });

  const { register, handleSubmit, setValue, formState } = form;
  const { errors } = formState;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-[356px_1fr]">
        <aside className="flex max-w-2xl flex-col gap-6">
          <h2 className="text-[clamp(1.375rem,3vw,2.25rem)] font-semibold">Get in Touch</h2>

          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-muted-foreground leading-relaxed">
            Our team is ready to support your project with industry-leading connection systems and
            engineering expertise. Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-muted-foreground leading-relaxed">
            Whether you're working on electrification, high-speed data, or power distribution, Lear
            delivers scalable and reliable solutions tailored to your needs.
          </p>
        </aside>

        <div className="h-fit lg:sticky lg:top-24">
          <div className="mx-auto flex max-w-2xl flex-col gap-6 bg-background p-6">
            <h3 className="text-[clamp(1.125rem,2.2vw,1.75rem)] font-semibold">Contact Us</h3>

            <form
              onSubmit={handleSubmit((data) => {
                console.log('Demo submit', data);
              })}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    {...register('name')}
                    className={`border ${
                      errors.name ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600">{errors.name.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label>
                    Email <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    type="email"
                    {...register('email')}
                    className={`border ${
                      errors.email ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                    }`}
                    placeholder="E-MAIL"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600">{errors.email.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Phone</Label>
                  <Input {...register('phone')} placeholder="Phone" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>
                    Company <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    {...register('company')}
                    className={`border ${
                      errors.company ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                    }`}
                    placeholder="Company"
                  />
                  {errors.company && (
                    <span className="text-xs text-red-600">{errors.company.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label>
                    Country <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    {...register('country')}
                    className={`border ${
                      errors.country ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                    }`}
                    placeholder="Ex. Mexico"
                  />
                  {errors.country && (
                    <span className="text-xs text-red-600">{errors.country.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label>
                    Region <span className="text-red-600">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue('region', value)}>
                    <SelectTrigger
                      className={`w-full h-10 rounded-none border text-sm ${
                        errors.region ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                      }`}
                    >
                      <SelectValue placeholder="Select one from the list" />
                    </SelectTrigger>

                    <SelectContent className="rounded-none border border-black/20 dark:border-white/20">
                      <SelectItem
                        value="ASIA_PACIFIC"
                        className="data-highlighted:bg-red-600 data-highlighted:text-white"
                      >
                        ASIA PACIFIC
                      </SelectItem>
                      <SelectItem
                        value="NORTH_AMERICA"
                        className="data-highlighted:bg-red-600 data-highlighted:text-white"
                      >
                        NORTH AMERICA
                      </SelectItem>
                      <SelectItem
                        value="SOUTH_AMERICA"
                        className="data-highlighted:bg-red-600 data-highlighted:text-white"
                      >
                        SOUTH AMERICA
                      </SelectItem>
                      <SelectItem
                        value="EUROPE_&_AFRICA"
                        className="data-highlighted:bg-red-600 data-highlighted:text-white"
                      >
                        EUROPE & AFRICA
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.region && (
                    <span className="text-xs text-red-600">{errors.region.message}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  Subject <span className="text-red-600">*</span>
                </Label>

                <Select onValueChange={(value) => setValue('subject', value)}>
                  <SelectTrigger
                    className={`w-full h-10 rounded-none border text-sm ${
                      errors.subject ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                    }`}
                  >
                    <SelectValue placeholder="SELECT ONE FROM THE LIST" />
                  </SelectTrigger>

                  <SelectContent className="rounded-none border border-black/20 dark:border-white/20">
                    <SelectItem
                      value="QUOTATION"
                      className="data-highlighted:bg-red-600 data-highlighted:text-white"
                    >
                      QUOTATION
                    </SelectItem>
                    <SelectItem
                      value="SPECIFICATIONS"
                      className="data-highlighted:bg-red-600 data-highlighted:text-white"
                    >
                      SPECIFICATIONS
                    </SelectItem>
                    <SelectItem
                      value="SAMPLE_REQUEST"
                      className="data-highlighted:bg-red-600 data-highlighted:text-white"
                    >
                      SAMPLE REQUEST
                    </SelectItem>
                    <SelectItem
                      value="CONTACT"
                      className="data-highlighted:bg-red-600 data-highlighted:text-white"
                    >
                      CONTACT
                    </SelectItem>
                    <SelectItem
                      value="OTHER"
                      className="data-highlighted:bg-red-600 data-highlighted:text-white"
                    >
                      OTHER
                    </SelectItem>
                  </SelectContent>
                </Select>

                {errors.subject && (
                  <span className="text-xs text-red-600">{errors.subject.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label>
                  Message <span className="text-red-600">*</span>
                </Label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`border px-3 py-2 text-sm outline-none ${
                    errors.message ? 'border-red-600' : 'border-black/20 dark:border-white/20'
                  }`}
                  placeholder="Please share more specific information..."
                />
                {errors.message && (
                  <span className="text-xs text-red-600">{errors.message.message}</span>
                )}
              </div>

              <Button type="submit" className="mt-2 bg-red-600 text-white hover:bg-red-700">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
