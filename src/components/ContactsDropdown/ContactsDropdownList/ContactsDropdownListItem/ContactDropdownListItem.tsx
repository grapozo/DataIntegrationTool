import styles from './ContactsDropdownListItem.scss';

export const ContactDropdownListItem = (): JSX.Element => {
  return (
    <div className={`${styles.contactDropdownListItem}`}>
      <label>
        <input type="checkbox" />
      </label>
    </div>
  );
};
