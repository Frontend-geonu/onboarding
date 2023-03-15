import { useState } from 'react';

const useLoading = (): [boolean, () => void] => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return [isLoading, handleReset];
};
export default useLoading;
