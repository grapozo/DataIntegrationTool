import styles from './ContactsDropdownList.scss';
import { ContactDropdownListItem } from './ContactsDropdownListItem';

type ContactsDropdownListProps = {
  /** True if the DropdownList should be visible. */
  isVisible: boolean;
};

export const ContactsDropdownList = ({ isVisible }: ContactsDropdownListProps): JSX.Element => {
  return (
    <div
      className={`
      ${styles.contactsDropdownList} 
      ${isVisible ? styles.isVisible : ''}`}
    >
      <ContactDropdownListItem />
    </div>
  );
};
