import { renderHook } from '@testing-library/react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { AllProviders } from 'test/test-utils';
import { useAppSafeArea } from '@hooks';
import { theme } from '@theme';

jest.mock('react-native-safe-area-context');

const mockedSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('should return the minimum value if safe area is less than minimum requirement', () => {
    mockedSafeAreaInsets.mockImplementationOnce(
      () => ({ top: 4, bottom: 4 } as EdgeInsets)
    );

    const { result } = renderHook(() => useAppSafeArea(), {
      wrapper: AllProviders
    });

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('should return the inset value if safe area is greater than minimum requirement', () => {
    mockedSafeAreaInsets.mockImplementationOnce(
      () => ({ top: 40, bottom: 40 } as EdgeInsets)
    );

    const { result } = renderHook(() => useAppSafeArea(), {
      wrapper: AllProviders
    });

    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
