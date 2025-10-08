import { AllProviders, renderHook, waitFor } from 'test-utils';
import { authService } from '@domain';
import { useAuthSignIn } from '../useAuthSignIn';
import { mockedAuthCredentials } from './mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentialsService: () => ({
      saveCredentials: mockedSaveCredentials
    })
  };
});

describe('useAuthSignIn', () => {
  it('should save credentials if the sign-in succeeds', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);

    const { result } = renderHook(() => useAuthSignIn(), {
      wrapper: AllProviders
    });

    result.current.signIn({
      email: 'mariajulia@coffstack.com',
      password: '123456'
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalled();
  });

  it('should call onError with a message if the sign-in fails', async () => {
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValueOnce(new Error('Invalid user or password'));
    const mockedOnError = jest.fn();

    const { result } = renderHook(
      () => useAuthSignIn({ onError: mockedOnError }),
      {
        wrapper: AllProviders
      }
    );

    result.current.signIn({
      email: 'mariajulia@coffstack.com',
      password: '123456'
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith('Invalid user or password');
  });
});
