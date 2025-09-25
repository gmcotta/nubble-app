import { useState } from 'react';

import { MutationOptions } from './props';

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(false);

      const data = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options.errorMessage ?? '');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    mutate
  };
}
