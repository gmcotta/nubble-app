import { ReactNode } from 'react';

import { RestyleBoxProps } from '@components';

export interface ScreenProps extends RestyleBoxProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}
