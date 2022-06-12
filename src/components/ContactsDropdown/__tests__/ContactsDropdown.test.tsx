import { create } from 'react-test-renderer';
import { ContactsDropdown } from '../ContactsDropdown';
import '@testing-library/jest-dom';

/**
 * For now, we only keep the snapshot test, since we already have
 * the tests for the most specific functionality of the component
 * down the tree.
 */
describe('ContactsDropdown', () => {
  it('should correctly render', () => {
    // Since this is a snap test, we keep a static list.
    const tree = create(
      <ContactsDropdown
        contacts={[
          {
            id: 'ef1934cc85aec5ef909f74c7778529ea',
            name: 'Mocked Contact'
          }
        ]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
