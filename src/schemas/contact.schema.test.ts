import { contactSchema } from './contact.schema';

const validContact = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '',
  company: 'Inertia',
  country: 'Mexico',
  region: 'North America',
  subject: 'Catalog request',
  message: 'Please send product details.',
};

describe('contactSchema', () => {
  it('accepts a complete valid contact payload', () => {
    expect(contactSchema.safeParse(validContact).success).toBe(true);
  });

  it('allows phone to be omitted', () => {
    expect(
      contactSchema.safeParse({
        name: validContact.name,
        email: validContact.email,
        company: validContact.company,
        country: validContact.country,
        region: validContact.region,
        subject: validContact.subject,
        message: validContact.message,
      }).success
    ).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    const result = contactSchema.safeParse({
      ...validContact,
      email: 'not-an-email',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toBe('Invalid email address');
  });

  it('requires short text fields and a message with at least 10 characters', () => {
    const result = contactSchema.safeParse({
      ...validContact,
      name: 'J',
      company: 'I',
      country: 'M',
      region: '',
      subject: '',
      message: 'Too short',
    });

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.path.join('.'))).toEqual(
      expect.arrayContaining(['name', 'company', 'country', 'region', 'subject', 'message'])
    );
  });
});
