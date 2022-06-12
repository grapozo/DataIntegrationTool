import { generateListOfContacts } from '../components/ContactsDropdown/helpers';
import { ContactSyncCard } from '../components/ContactSyncCard';
import GoogleIcon from './assets/GoogleIcon.svg';
import MailchimpIcon from './assets/MailchimpIcon.svg';

export const App = (): JSX.Element => {
  return (
    <div>
      <ContactSyncCard
        ServiceIcon={GoogleIcon}
        serviceName={'Gmail'}
        serviceDescription={'These Gmail contacts will sync to MailChimp'}
        contacts={generateListOfContacts(10)}
      />
      <ContactSyncCard
        ServiceIcon={MailchimpIcon}
        serviceName={'Mailchimp'}
        serviceDescription={'These Mailchimp contacts will sync to Gmail'}
        contacts={generateListOfContacts(10)}
      />
    </div>
  );
};
