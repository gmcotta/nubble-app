import { useEffect, useState } from 'react';

/**
 * @description https://usehooks-ts.com/react-hook/use-debounce
 * @param value valor a ter o efeito de debounce
 * @param delay  valor do delay `default: 500ms`
 * @returns valor com o efeito de debounce
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
