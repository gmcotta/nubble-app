import { fireEvent, render, screen } from 'test-utils';
import { IconProps, PasswordInputProps } from '@components';
import { PasswordInput } from '../PasswordInput';

function renderComponent(props: PasswordInputProps) {
  render(<PasswordInput {...props} />);

  const inputElement = screen.getByPlaceholderText(
    props.placeholder ?? /password/i
  );

  const eyeOnIcon: IconProps['name'] = 'eyeOn';
  const eyeOnIconElement = screen.getByTestId(eyeOnIcon);

  return { inputElement, eyeOnIconElement };
}

describe('<PasswordInput />', () => {
  it('should start with hidden password', () => {
    const mockedOnChange = jest.fn();

    const { inputElement } = renderComponent({
      label: 'Password',
      placeholder: 'Password',
      value: '12345678',
      onChange: mockedOnChange
    });

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });

  it('should the password be visible and change to eye-off icon when right icon is pressed', () => {
    const mockedOnChange = jest.fn();

    const { inputElement, eyeOnIconElement } = renderComponent({
      label: 'Password',
      placeholder: 'Password',
      value: '12345678',
      onChange: mockedOnChange
    });

    fireEvent.press(eyeOnIconElement);
    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.queryByTestId(eyeOffIcon);

    expect(eyeOffIconElement).toBeTruthy();
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
