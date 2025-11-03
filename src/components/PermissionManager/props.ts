import { ReactElement } from 'react';

import { PermissionName } from '@services';

export interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: ReactElement;
}
