import { useCallback, useEffect, useState } from 'react';
import { userService } from '../userService';
import { User } from '../userTypes';

export function useGetUserById(userId: number) {
  const [user, setUser] = useState<User>();
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
    getUserById();
  }, [getUserById]);

  return { user, loading, error };
}
