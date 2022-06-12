import { create } from 'react-test-renderer';
import { Contact } from 'shared/interfaces/contact.interface';
import { ContactDropdownListItem } from '../ContactDropdownListItem';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockContact: Contact = {
  id: '9ba3f8f7d420c5fb33d7fbf2704e24fe',
  name: 'Mock contact'
};

const mockOnContactSelectCallback = jest.fn();

const MockDropdownListItem = (): JSX.Element => {
  return (
    <ContactDropdownListItem
      contact={mockContact}
      onContactSelectCallback={mockOnContactSelectCallback}
    />
  );
};

describe('ContactDropdownListItem', () => {
  it('should correctly render', () => {
    const tree = create(<MockDropdownListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should check the checkbox when the contact name is clicked', () => {
    render(<MockDropdownListItem />);
    const checkbox = screen.getByLabelText(mockContact.name) as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('should call onContactSelectCallback when the checkbox is selected', () => {
    render(<MockDropdownListItem />);
    fireEvent.click(screen.getByLabelText(mockContact.name));
    expect(mockOnContactSelectCallback).toHaveBeenCalled();
  });
});
