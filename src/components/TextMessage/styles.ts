import { RestyleBoxProps } from '@components';
import { textInputStyles } from '@styles';

export const inputContainerStyles: RestyleBoxProps = {
  paddingHorizontal: 's16',
  paddingVertical: 's14',
  backgroundColor: 'gray5',
  borderRadius: 's12',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export function inputContentStyles(color: string) {
  return [textInputStyles, { color }];
}
