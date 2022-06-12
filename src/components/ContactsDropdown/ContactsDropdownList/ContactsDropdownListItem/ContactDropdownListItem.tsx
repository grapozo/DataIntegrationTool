import { useState } from 'react';
import { Contact } from 'shared/interfaces/contact.interface';
import styles from './ContactsDropdownListItem.scss';

type ContactsDropdownListItemProps = {
  contact: Contact;
  onContactSelectCallback: (contact: Contact, contactIsSelected: boolean) => void;
};

/**
 * A simple checkbox which renders the Contact information.
 */
export const ContactDropdownListItem = ({
  contact,
  onContactSelectCallback
}: ContactsDropdownListItemProps): JSX.Element => {
  const [checkboxSelected, setCheckboxSelected] = useState<boolean>(false);

  /**
   * Sets the selected state and notifies the parent component.
   */
  const handleContactSelect = (): void => {
    setCheckboxSelected(!checkboxSelected);
    onContactSelectCallback(contact, !checkboxSelected);
  };

  return (
    <div className={`${styles.contactDropdownListItem}`}>
      <label>
        <input type="checkbox" checked={checkboxSelected} onChange={handleContactSelect} />
        {contact.name}
      </label>
    </div>
  );
};
