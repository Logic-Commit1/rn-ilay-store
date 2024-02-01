import { useState } from 'react';

const useOffline = () => {
  const [isOffline, setIsOffline] = useState<boolean>(true);

  const goOnline = () => {
    setIsOffline(false);
  };

  const goOffline = () => {
    setIsOffline(true);
  };

  return { isOffline, goOnline, goOffline };
};

export default useOffline;
