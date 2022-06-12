import { useState } from 'react';
import styles from './ContactsDropdown.scss';
import { ContactsDropdownList } from './ContactsDropdownList';
import { ContactsDropdownPlaceholder } from './ContactsDropdownPlaceholder';

export const ContactsDropdown = (): JSX.Element => {
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false);

  return (
    <div className={`${styles.contactsDropdown} ${dropdownExpanded ? styles.expanded : ''}`}>
      <ContactsDropdownPlaceholder
        onClick={() => setDropdownExpanded(!dropdownExpanded)}
        selectedContactsLabel={'All Contacts'}
        isDropdownExpanded={dropdownExpanded}
      />
      <ContactsDropdownList isVisible={dropdownExpanded} />
    </div>
  );
};
