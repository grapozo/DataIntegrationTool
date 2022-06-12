import { generateListOfContacts } from '../components/ContactsDropdown/helpers';
import { ContactSyncCard } from '../components/ContactSyncCard';
import { SyncContactsButton } from '../components/SyncContactsButton';
import GoogleIcon from './assets/GoogleIcon.svg';
import MailchimpIcon from './assets/MailchimpIcon.svg';
import styles from './App.scss';

export const App = (): JSX.Element => {
  return (
    <div className={`${styles.App}`}>
      <div className={`${styles.cardContainer} ${styles.gmailCard}`}>
        <ContactSyncCard
          ServiceIcon={GoogleIcon}
          serviceName={'Gmail'}
          serviceDescription={'These Gmail contacts will sync to MailChimp'}
          contacts={generateListOfContacts(10)}
        />
      </div>
      <div className={`${styles.syncContactsButton}`}>
        <SyncContactsButton />
      </div>
      <div className={`${styles.cardContainer}  ${styles.mailchimpCard}`}>
        <ContactSyncCard
          ServiceIcon={MailchimpIcon}
          serviceName={'Mailchimp'}
          serviceDescription={'These Mailchimp contacts will sync to Gmail'}
          contacts={generateListOfContacts(10)}
        />
      </div>
    </div>
  );
};
