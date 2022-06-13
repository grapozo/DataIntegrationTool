import styles from './SyncContactsButton.scss';
import SyncButton from './assets/SyncButton.svg';
import { useEffect, useState } from 'react';

type SyncContactsButtonProps = {
  /** onClick handler */
  onClick: () => void;
};

export const SyncContactsButton = ({ onClick }: SyncContactsButtonProps): JSX.Element => {
  // True if the data is actually in sync/synched.
  const [isSync, setIsSync] = useState<boolean>(false);

  /**
   * Notifies parent of sync trigger.
   */
  useEffect(() => {
    isSync && onClick();
  }, [isSync]);

  return (
    <div className={`${styles.syncContactsButton}`}>
      <div className={`${styles.content}`}>
        <SyncButton
          className={`${isSync ? styles.isSync : ''}`}
          onClick={() => setIsSync(!isSync)}
        />
        <div className={`${styles.syncLabel}`}>{!isSync ? 'Sync Contacts' : 'All done!'}</div>
      </div>
    </div>
  );
};
