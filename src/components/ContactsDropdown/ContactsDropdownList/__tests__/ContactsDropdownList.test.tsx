import { create } from 'react-test-renderer';
import { Contact } from 'shared/interfaces/contact.interface';
import { ContactsDropdownList } from '../ContactsDropdownList';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockContactList: Contact[] = [
  {
    id: '9ba3f8f7d420c5fb33d7fbf2704e24fe',
    name: 'Mock contact'
  },
  {
    id: '5a87a7431aafb3def979500d332eea05',
    name: 'Mock contact 2'
  }
];

const mockSelectedContactListChangedCallback = jest.fn();

const MockDropdownList = (): JSX.Element => {
  return (
    <ContactsDropdownList
      contacts={mockContactList}
      isVisible={true}
      selectedContactListChangedCallback={mockSelectedContactListChangedCallback}
    />
  );
};
/**
 * In this component, testing some edge cases may be difficult, because
 * some functionality is relying on classNames.
 */
describe('ContactDropdownListItem', () => {
  it('should correctly render', () => {
    const tree = create(<MockDropdownList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call selectedContactListChangedCallback when a contact is selected/unselected', () => {
    render(<MockDropdownList />);
    // Selects the first contact on the list
    fireEvent.click(screen.getByLabelText(mockContactList[0].name));
    expect(mockSelectedContactListChangedCallback).toHaveBeenCalledWith([mockContactList[0]]);
    // Unselect the first contact on the list
    fireEvent.click(screen.getByLabelText(mockContactList[0].name));
    expect(mockSelectedContactListChangedCallback).toHaveBeenCalledWith([]);
  });
  it('should correctly render the contacts list', async () => {
    render(<MockDropdownList />);
    const checkboxes = await screen.findAllByRole('checkbox');
    expect(checkboxes.length).toBe(mockContactList.length);
  });
});
