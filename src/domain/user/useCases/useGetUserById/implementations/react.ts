import { useCallback, useEffect, useState } from 'react';

import { userService, User } from '@domain';

export function useReactImpl(userId: number) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUserById = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const serviceResponse = await userService.getById(userId);
      setUser(serviceResponse);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    setUser(undefined);
    getUserById();
  }, [getUserById]);

  return { user, isLoading, isError };
}
