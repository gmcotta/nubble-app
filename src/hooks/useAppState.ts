import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

export function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const eventListener = AppState.addEventListener('change', state => {
      setAppState(state);
    });

    return () => {
      eventListener.remove();
    };
  }, []);

  return appState;
}
