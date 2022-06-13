import styles from './ContactSyncCard.scss';
import { ContactsDropdown } from '../ContactsDropdown';
import { Contact } from 'shared/interfaces/contact.interface';

type ContactsDropdownProps = {
  /** The icon of the service. This should be in svg format. */
  ServiceIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  /** The service name, such as Gmail or Mailchimp */
  serviceName: string;
  /** Label that describes what the sync should do. */
  serviceDescription: string;
  /** The contacts list. */
  contacts: Contact[];
  /** Callback that runs when the selected contact list is changed */
  selectedContactListChangedCallback: (serviceName: string, selectedContacts: Contact[]) => void;
};

/**
 * A card component which allows the user to select contacts to sync
 * with other services.
 */
export const ContactSyncCard = ({
  ServiceIcon,
  serviceName,
  serviceDescription,
  contacts,
  selectedContactListChangedCallback
}: ContactsDropdownProps): JSX.Element => {
  return (
    <div className={`${styles.contactSyncCard}`}>
      <ServiceIcon />
      <div className={`${styles.serviceName}`}>{serviceName}</div>
      <div className={`${styles.serviceDescription}`}>{serviceDescription}</div>
      <ContactsDropdown
        selectedContactListChangedCallback={(contactList) => {
          selectedContactListChangedCallback(serviceName, contactList);
        }}
        contacts={contacts}
      />
    </div>
  );
};
