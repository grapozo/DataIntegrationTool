import { create } from 'react-test-renderer';
import { ContactsDropdownPlaceholder } from '../ContactsDropdownPlaceholder';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockOnClick = jest.fn();
const MockContactsDropdownPlaceholder = (): JSX.Element => {
  return (
    <ContactsDropdownPlaceholder
      isDropdownExpanded={true}
      onClick={mockOnClick}
      selectedContactsLabel={'No Contacts'}
    />
  );
};
/**
 * In this component, testing some edge cases may be difficult, because
 * some functionality is relying on classNames.
 */
describe('ContactsDropdownPlaceholder', () => {
  it('should correctly render', () => {
    const tree = create(<MockContactsDropdownPlaceholder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have the correct selectedContactsLabel', async () => {
    render(<MockContactsDropdownPlaceholder />);
    const contactsLabel = await screen.findByText('No Contacts');
    expect(contactsLabel).toBeInTheDocument();
  });
  it('should call onClick when the element is clicked', async () => {
    render(<MockContactsDropdownPlaceholder />);
    const contactsLabel = await screen.findByText('No Contacts');
    fireEvent.click(contactsLabel);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
