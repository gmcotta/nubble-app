import { UseResetNavigationSuccessProps } from '@hooks';

export const RESET_PARAMS: UseResetNavigationSuccessProps = {
  originRoute: 'LoginScreen',
  successScreenParams: {
    title: 'Enviamos as\ninstruções para seu\ne-mail',
    description:
      'Clique no link enviado no seu e-mail para recuperar sua senha.',
    icon: {
      name: 'messageRound',
      color: 'primary'
    }
  }
};

export const SCREEN_VALUES = {
  TITLE: 'Esqueci minha senha',
  DESCRIPTION:
    'Digite seu e-mail e enviaremos as instruções para redefinição de senha.',
  EMAIL_INPUT: {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail'
  },
  SUBMIT_BUTTON: {
    TITLE: 'Recuperar senha'
  }
};
