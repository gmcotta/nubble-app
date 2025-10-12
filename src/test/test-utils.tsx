import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig
} from '@tanstack/react-query';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions
} from '@testing-library/react-native';
import { PropsWithChildren, ReactElement } from 'react';

import { Toast } from '@components';
import { AuthCredentialsProvider } from '@services';
import { theme } from '@theme';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity
    },
    mutations: {
      retry: false,
      gcTime: Infinity
    }
  }
};

const AllProvidersWrapper = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const ScreenProvidersWrapper = () => {
  const queryClient = new QueryClient(queryClientConfig);

  return ({ children }: PropsWithChildren) => (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Toast />
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

function customRender<T>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: AllProvidersWrapper(), ...options });
}

function customRenderScreen<T>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: ScreenProvidersWrapper(), ...options });
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook(renderCallback, {
    wrapper: AllProvidersWrapper(),
    ...options
  });
}

export * from '@testing-library/react-native';
export {
  customRender as render,
  customRenderHook as renderHook,
  customRenderScreen as renderScreen
};
