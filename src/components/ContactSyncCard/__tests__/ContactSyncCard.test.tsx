import { create } from 'react-test-renderer';
import { ContactSyncCard } from '../ContactSyncCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const IconMock = () => <svg>This is a svg mock</svg>;

const serviceName = 'Testing Card';
const serviceDescription = 'Testing the Sync Card!';

const selectedContactListChangedCallbackMock = jest.fn();

const MockContactSyncCard = () => (
  <ContactSyncCard
    ServiceIcon={IconMock}
    serviceName={serviceName}
    serviceDescription={serviceDescription}
    selectedContactListChangedCallback={selectedContactListChangedCallbackMock}
    contacts={[
      {
        id: 'ef1934cc85aec5ef909f74c7778529ea',
        name: 'Mocked Contact'
      },
      {
        id: 'ef1934cc85axc5ef909f3327178529ea',
        name: 'Mocked Contact 2'
      }
    ]}
  />
);

describe('ContactSyncCard', () => {
  it('should correctly render', () => {
    // This snapshot is mostly for reference, since any changes to
    // the tree will affect in this test.
    // In that case, we should just update the snapshot.
    const tree = create(<MockContactSyncCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have the supplied svg icon on the screen', async () => {
    render(<MockContactSyncCard />);
    const svg = document.querySelector('svg');

    if (!svg) {
      fail('Should have the svg!');
    } else {
      expect(svg.innerHTML).toBe('This is a svg mock');
    }
  });
  it('should have the service name label', async () => {
    render(<MockContactSyncCard />);
    const serviceNameLabel = await screen.findByText(serviceName);
    expect(serviceNameLabel).toBeInTheDocument();
  });
  it('should have the service description label', async () => {
    render(<MockContactSyncCard />);
    const serviceDescriptionLabel = await screen.findByText(serviceDescription);
    expect(serviceDescriptionLabel).toBeInTheDocument();
  });
});
