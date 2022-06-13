import { generateListOfContacts } from '../components/ContactsDropdown/helpers';
import { ContactSyncCard } from '../components/ContactSyncCard';
import { SyncContactsButton } from '../components/SyncContactsButton';
import GoogleIcon from './assets/GoogleIcon.svg';
import MailchimpIcon from './assets/MailchimpIcon.svg';
import styles from './App.scss';
import { useState } from 'react';
import { Contact } from 'shared/interfaces/contact.interface';
import { ServiceContacts } from 'shared/interfaces/service-contacts.interface';

export const App = (): JSX.Element => {
  const [serviceContacts, setServiceContacts] = useState<ServiceContacts>({});

  /**
   * Keeps the serviceContacts array in sync with the currently selected contacts.
   * @param serviceName The service name. Used as key on the serviceContacts object
   * @param selectedContacts The updated selectedContacts list
   */
  const contactListHasChanged = (serviceName: string, selectedContacts: Contact[]) => {
    setServiceContacts((serviceContacts) => {
      // Overrides the list. Since this is a shallow object, we can just copy it.
      serviceContacts[serviceName] = [...selectedContacts];
      return serviceContacts;
    });
  };

  /**
   * Placeholder function that would run when the sync
   * is triggered.
   */
  const runSync = (): void => {
    console.log('Here we would call a REST API with the following info:');
    console.log(serviceContacts);
    console.log('Or, JSON Parsed:');
    console.log(JSON.stringify(serviceContacts));
  };

  return (
    <div className={`${styles.App}`}>
      <div className={`${styles.cardContainer} ${styles.gmailCard}`}>
        <ContactSyncCard
          ServiceIcon={GoogleIcon}
          serviceName={'Gmail'}
          serviceDescription={'These Gmail contacts will sync to MailChimp'}
          contacts={generateListOfContacts(10)}
          selectedContactListChangedCallback={contactListHasChanged}
        />
      </div>
      <div className={`${styles.syncContactsButton}`}>
        <SyncContactsButton onClick={runSync} />
      </div>
      <div className={`${styles.cardContainer}  ${styles.mailchimpCard}`}>
        <ContactSyncCard
          ServiceIcon={MailchimpIcon}
          serviceName={'Mailchimp'}
          serviceDescription={'These Mailchimp contacts will sync to Gmail'}
          contacts={generateListOfContacts(10)}
          selectedContactListChangedCallback={contactListHasChanged}
        />
      </div>
    </div>
  );
};
