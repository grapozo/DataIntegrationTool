import { Contact } from './contact.interface';

/**
 * This is an object that should be used in the format
 * [serviceName]: Contact[];
 *
 * For example:
 * {
 *  'Gmail': Contact[];
 *  'Mailchimp': Contact[];
 *   ...
 * }
 */
export interface ServiceContacts {
  /** This is a dynamic object with an array of contacts */
  [key: string]: Contact[];
}
