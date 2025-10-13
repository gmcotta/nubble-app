import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

export function useAnimation() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const runFadeInAnimation = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, [fadeAnimation]);

  const runFadeOutAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      }).start(callback);
    },
    [fadeAnimation]
  );

  return {
    fadeAnimation: {
      value: fadeAnimation,
      startIn: runFadeInAnimation,
      startOut: runFadeOutAnimation
    }
  };
}
