import styles from './ContactsDropdown.scss';
import { useEffect, useState } from 'react';
import { Contact } from 'shared/interfaces/contact.interface';
import { ContactsDropdownList } from './ContactsDropdownList';
import { ContactsDropdownPlaceholder } from './ContactsDropdownPlaceholder';
import { getUpdatedSelectedContactsLabel } from './helpers';

type ContactsDropdownProps = {
  /** The contacts list */
  contacts: Contact[];
};

export const ContactsDropdown = ({ contacts }: ContactsDropdownProps): JSX.Element => {
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false);
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  // Since we start with no selected contacts, we default the label to 'No Contacts'.
  const [selectedContactsLabel, setSelectedContactsLabel] = useState<string>('No Contacts');

  const handleContactListChangedCallback = (selectedContacts: Contact[]) => {
    setSelectedContacts(selectedContacts);
  };

  /**
   * Runs when the selectedContacts array has been updated.
   */
  useEffect(() => {
    const updatedContactsLabel = getUpdatedSelectedContactsLabel(
      contacts.length,
      selectedContacts.length
    );
    setSelectedContactsLabel(updatedContactsLabel);
  }, [selectedContacts]);

  return (
    <div className={`${styles.contactsDropdown} ${dropdownExpanded ? styles.expanded : ''}`}>
      <ContactsDropdownPlaceholder
        onClick={() => setDropdownExpanded(!dropdownExpanded)}
        selectedContactsLabel={selectedContactsLabel}
        isDropdownExpanded={dropdownExpanded}
      />
      <ContactsDropdownList
        isVisible={dropdownExpanded}
        contacts={contacts}
        selectedContactListChangedCallback={handleContactListChangedCallback}
      />
    </div>
  );
};
