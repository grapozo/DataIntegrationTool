import styles from './ContactsDropdownPlaceholder.scss';

type ContactsDropdownPlaceholderProps = {
  /** Label which indicates the number of currently selected contacts */
  selectedContactsLabel: string;
  /** onClick handler */
  onClick: () => void;
  /** True if is expanded. Used to sync the rotation animations */
  isDropdownExpanded: boolean;
};

/**
 * Shows the Checkmark icon, the number of contacts and
 * the expand carret for a ContactsDropdown component.
 * Will notify the parent component when clicked.
 */
export const ContactsDropdownPlaceholder = ({
  onClick,
  selectedContactsLabel,
  isDropdownExpanded
}: ContactsDropdownPlaceholderProps): JSX.Element => {
  return (
    <div
      className={`
        ${styles.contactsDropdownPlaceholder} 
        ${isDropdownExpanded ? styles.expanded : ''}
      `}
      onClick={onClick}
    >
      <span className={`${styles.numberOfSelectedContacts}`}>{selectedContactsLabel}</span>
    </div>
  );
};
