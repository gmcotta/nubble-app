import { UseResetNavigationSuccessProps } from '@hooks';

export const resetNavigationValues: UseResetNavigationSuccessProps = {
  originRoute: 'LoginScreen',
  successScreenParams: {
    title: `Enviamos as\ninstruções para seu\ne-mail`,
    description:
      'Clique no link enviado no seu e-mail para recuperar sua senha.',
    icon: {
      name: 'messageRound',
      color: 'primary'
    }
  }
};

export const screenValues = {
  title: 'Esqueci minha senha',
  description:
    'Digite seu e-mail e enviaremos as instruções para redefinição de senha.',
  emailInput: {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail'
  },
  submitButton: {
    title: 'Recuperar senha'
  }
};
