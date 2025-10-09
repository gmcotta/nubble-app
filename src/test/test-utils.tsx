import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions
} from '@testing-library/react-native';
import { PropsWithChildren, ReactElement } from 'react';

import { theme } from '@theme';

const wrapperAllProviders = () => {
  const queryClient = new QueryClient({
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
  });

  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function customRender<T>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, { wrapper: wrapperAllProviders(), ...options });
}

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
) {
  return renderHook(renderCallback, {
    wrapper: wrapperAllProviders(),
    ...options
  });
}

export * from '@testing-library/react-native';
export { customRender as render, customRenderHook as renderHook };
