import { useEffect, useState } from 'react';
import { Contact } from 'shared/interfaces/contact.interface';
import styles from './ContactsDropdownList.scss';
import { ContactDropdownListItem } from './ContactsDropdownListItem';

type ContactsDropdownListProps = {
  /** True if the DropdownList should be visible. */
  isVisible: boolean;
  /** The contacts list */
  contacts: Contact[];
  /** Callback that runs when the selected contact list is changed */
  selectedContactListChangedCallback: (selectedContacts: Contact[]) => void;
};

export const ContactsDropdownList = ({
  isVisible,
  contacts,
  selectedContactListChangedCallback
}: ContactsDropdownListProps): JSX.Element => {
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);

  /**
   * Add/Removes a selected contact from the selectedContacts array.
   * @param contact The selected contact
   * @param contactIsSelected Will be true if contact is selected
   */
  const handleContactSelect = (contact: Contact, contactIsSelected: boolean): void => {
    if (contactIsSelected) {
      // Add contact to the selected list.
      setSelectedContacts((contacts) => [...contacts, contact]);
    } else {
      // ... Removes the contact from the list.
      setSelectedContacts((contacts) =>
        contacts.filter((contactItr) => contactItr.id !== contact.id)
      );
    }
  };

  // Notifies parent of a Selected Contact change.
  useEffect(() => {
    selectedContactListChangedCallback(selectedContacts);
  }, [selectedContacts]);

  return (
    <div
      className={`
      ${styles.contactsDropdownList} 
      ${isVisible ? styles.isVisible : ''}`}
    >
      {contacts.map(function (contact) {
        return (
          <div key={contact.id}>
            <ContactDropdownListItem
              contact={contact}
              onContactSelectCallback={handleContactSelect}
            />
          </div>
        );
      })}
    </div>
  );
};
