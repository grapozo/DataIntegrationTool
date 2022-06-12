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
