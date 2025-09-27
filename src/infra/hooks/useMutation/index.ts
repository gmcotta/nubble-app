import { useState } from 'react';

import { MutationOptions } from './props';

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>
) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true);
      setIsError(false);

      const data = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options.errorMessage ?? '');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isError,
    mutate
  };
}
