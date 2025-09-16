import { ScrollView, View } from 'react-native';

import { BaseViewProps } from './props';
import { $scrollViewStyle, $viewStyle } from './styles';

export function ScrollViewContainer({
  children,
  backgroundColor
}: BaseViewProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={$scrollViewStyle(backgroundColor)}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: BaseViewProps) {
  return <View style={$viewStyle(backgroundColor)}>{children}</View>;
}
