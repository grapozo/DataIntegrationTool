import { getUpdatedSelectedContactsLabel, generateListOfContacts } from '../';

describe('getUpdatedSelectedContactsLabel', () => {
  it('should return "No contacts" if the number of selected contacts is equal to 0', () => {
    expect(getUpdatedSelectedContactsLabel(10, 0)).toBe('No contacts');
    expect(getUpdatedSelectedContactsLabel(0, 0)).toBe('No contacts');
    // Edge case where the selected contacts are less than zero.
    expect(getUpdatedSelectedContactsLabel(0, -5)).toBe('No contacts');
  });
  it('should return "All contacts" if the number of selected contacts is equal to the totalContacts', () => {
    expect(getUpdatedSelectedContactsLabel(10, 10)).toBe('All contacts');
    expect(getUpdatedSelectedContactsLabel(15, 15)).toBe('All contacts');
    expect(getUpdatedSelectedContactsLabel(120, 120)).toBe('All contacts');
    // Edge case where the selected contacts are more than the number of current contacts.
    expect(getUpdatedSelectedContactsLabel(1, 5)).toBe('All contacts');
  });
  it('should return "+99 contacts" if the number of selected contacts is more than 99', () => {
    expect(getUpdatedSelectedContactsLabel(120, 99)).toBe('99 contacts');
    expect(getUpdatedSelectedContactsLabel(120, 100)).toBe('+99 contacts');
    expect(getUpdatedSelectedContactsLabel(510, 500)).toBe('+99 contacts');
  });
  it('should return "1 contact" if the number of selected contacts is equal to 1', () => {
    expect(getUpdatedSelectedContactsLabel(10, 1)).toBe('1 contact');
  });
  it('should return "n contacts" if the number of selected contacts does not match any other criteria', () => {
    expect(getUpdatedSelectedContactsLabel(10, 8)).toBe('8 contacts');
    expect(getUpdatedSelectedContactsLabel(10, 3)).toBe('3 contacts');
  });
});

describe('generateListOfContacts', () => {
  it('should generate an array with the size of the passed parameter', () => {
    expect(generateListOfContacts(10).length).toBe(10);
    expect(generateListOfContacts(5).length).toBe(5);
  });
  it('should have all the contacts to contain ids and names (they shoud not be null or empty)', () => {
    const randomListOfContacts = generateListOfContacts(10);
    randomListOfContacts.map((contact) => {
      expect(!contact.id).toBe(false);
      expect(!contact.name).toBe(false);
    });
  });
});
