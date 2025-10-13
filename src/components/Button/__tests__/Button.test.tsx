import { StyleSheet } from 'react-native';
import { fireEvent, render, screen } from 'test-utils';

import { theme } from '@theme';
import { Button } from '../Button';
import { ButtonProps } from '../props';

function renderComponent(props: ButtonProps) {
  render(<Button {...props} />);

  const titleElement = screen.queryByText(props.title);
  // const titleElement = screen.getByText(/title/i);

  const loadingElement = screen.queryByTestId('button-activity-indicator');
  const containerElement = screen.getByTestId('button-container');

  return {
    titleElement,
    loadingElement,
    containerElement
  };
}

describe('<Button />', () => {
  it('should call onPress function when component is pressed', () => {
    const mockedOnPress = jest.fn();
    const { titleElement } = renderComponent({
      onPress: mockedOnPress,
      title: 'Title'
    });

    if (!titleElement) {
      fail('Prop title is required for this test.');
    }

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should not call onPress function when component is disabled and pressed', () => {
    const mockedOnPress = jest.fn();
    const { titleElement } = renderComponent({
      onPress: mockedOnPress,
      title: 'Title',
      disabled: true
    });

    if (!titleElement) {
      fail('Prop title is required for this test.');
    }

    fireEvent.press(titleElement);

    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  // Não é muito recomendado testar estilos, mas tem um exemplo
  it('should have title with gray color if component is disabled', () => {
    const { titleElement } = renderComponent({
      title: 'Title',
      disabled: true
    });

    if (!titleElement) {
      fail('Prop title is required for this test.');
    }

    const titleStyles = StyleSheet.flatten(titleElement.props.style);

    expect(titleStyles.color).toEqual(theme.colors.gray2);
  });

  describe('loading behavior', () => {
    it('should show activity indicator', () => {
      const { loadingElement } = renderComponent({ loading: true, title: '' });

      expect(loadingElement).toBeTruthy();
    });

    it('should hide title if component', () => {
      const { titleElement } = renderComponent({ loading: true, title: '' });

      expect(titleElement).toBeFalsy();
    });

    it('should not call onPress if component', () => {
      const mockedOnPress = jest.fn();
      const { containerElement } = renderComponent({
        loading: true,
        title: '',
        onPress: mockedOnPress
      });

      fireEvent.press(containerElement);

      expect(mockedOnPress).not.toHaveBeenCalled();
    });
  });
});
