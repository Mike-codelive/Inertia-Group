import { slugify } from './slugify';

describe('slugify', () => {
  it('lowercases text and replaces whitespace with dashes', () => {
    expect(slugify('High Current Connectors')).toBe('high-current-connectors');
  });

  it('collapses consecutive whitespace into a single dash', () => {
    expect(slugify('MAK   MAS\tTerminals')).toBe('mak-mas-terminals');
  });
});
