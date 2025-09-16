import { useState } from 'react';

import { Icon } from '../icon';
import { TextInput } from '../text-input';
import { PasswordInputProps } from './props';

export function PasswordInput(props: PasswordInputProps) {
  const [hasSecureTextEntry, setHasSecureTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setHasSecureTextEntry(old => !old);
  }

  return (
    <TextInput
      {...props}
      secureTextEntry={hasSecureTextEntry}
      rightComponent={
        <Icon
          name={hasSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
