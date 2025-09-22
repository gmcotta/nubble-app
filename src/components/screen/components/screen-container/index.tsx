import { ScrollView, View } from 'react-native';

import { BaseViewProps } from './props';
import * as S from './styles';

export function ScrollViewContainer({
  children,
  backgroundColor
}: BaseViewProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={S.scrollViewStyles(backgroundColor)}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: BaseViewProps) {
  return <View style={S.viewStyles(backgroundColor)}>{children}</View>;
}
