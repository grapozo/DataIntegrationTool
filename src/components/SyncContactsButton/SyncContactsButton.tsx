import styles from './SyncContactsButton.scss';
import SyncButton from './assets/SyncButton.svg';
import { useState } from 'react';
export const SyncContactsButton = () => {
  const [isSync, setIsSync] = useState<boolean>(false);

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
