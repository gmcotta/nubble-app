import { RestyleBoxProps } from 'components';

export function headerContainerStyles(top: number): RestyleBoxProps {
  return {
    flexDirection: 'row',
    style: { paddingTop: top },
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 's24',
    paddingBottom: 's24'
  };
}

export const iconContainerStyles: RestyleBoxProps = {
  flexDirection: 'row',
  columnGap: 's24'
};
