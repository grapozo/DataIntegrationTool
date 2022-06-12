import { Contact } from 'shared/interfaces/contact.interface';

/**
 * Returns a label which depends on the total number of
 * selected contacts
 * @param totalContacts Number of initial contacts
 * @param numberOfSelectedContacts The number of currently selected contacts
 * @returns These are the currently possible cases:
 * 'No Contacts' if there are no selected contacts,
 * 'All Contacts' if all contacts are selected,
 * '+99 Contacts' if there are more than 99 selected contacts,
 * '1 Contact' if there are only one contact.
 * 'n Contacts' if no other case is satistfied.
 */
export const getUpdatedSelectedContactsLabel = (
  totalContacts: number,
  numberOfSelectedContacts: number
): string => {
  // In the future, this could be refactored to a i18n file with the labels.
  if (numberOfSelectedContacts <= 0) {
    return 'No contacts';
  }
  if (numberOfSelectedContacts >= totalContacts) {
    return 'All contacts';
  }
  if (numberOfSelectedContacts > 99) {
    return '+99 contacts';
  }
  if (numberOfSelectedContacts === 1) {
    return '1 contact';
  }
  return `${numberOfSelectedContacts} contacts`;
};

/**
 * Generates a random list of contacts. The contacts id's and name's
 * will be based on the Math.random function.
 * This is used for testing purposes only.
 * @param numberOfContacts number of contacts that will be generated
 * @returns a list of random contacts
 */
export const generateListOfContacts = (numberOfContacts: number): Contact[] => {
  const contactList: Contact[] = [];
  for (let index = 0; index < numberOfContacts; index++) {
    contactList.push({
      id: Math.random().toString(36).substring(2, 20),
      name: Math.random().toString(36).substring(2, 20)
    });
  }
  return contactList;
};
