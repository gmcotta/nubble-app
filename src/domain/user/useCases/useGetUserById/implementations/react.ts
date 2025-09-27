import { useCallback, useEffect, useState } from 'react';

import { userService, User } from '@domain';

export function useReactImpl(userId: number) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const serviceResponse = await userService.getById(userId);
      setUser(serviceResponse);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    setUser(undefined);
    getUserById();
  }, [getUserById]);

  return { user, loading, error };
}
