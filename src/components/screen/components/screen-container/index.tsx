import { ScrollView, View } from 'react-native';
import { BaseViewProps } from './props';

export function ScrollViewContainer({
  children,
  backgroundColor
}: BaseViewProps) {
  return (
    <ScrollView style={{ backgroundColor, flex: 1 }}>{children}</ScrollView>
  );
}

export function ViewContainer({ children, backgroundColor }: BaseViewProps) {
  return <View style={{ backgroundColor }}>{children}</View>;
}
