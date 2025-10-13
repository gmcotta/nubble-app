import { ScrollViewProps, ViewProps } from 'react-native';

export const scrollViewStyles = (
  backgroundColor: string
): ScrollViewProps['style'] => {
  return {
    backgroundColor,
    flex: 1
  };
};

export const viewStyles = (backgroundColor: string): ViewProps['style'] => {
  return {
    backgroundColor,
    flex: 1
  };
};
