import { UseResetNavigationSuccessProps } from '@hooks';

export const RESET_PROPS: UseResetNavigationSuccessProps = {
  originRoute: 'LoginScreen',
  successScreenParams: {
    title: 'Sua conta foi criada com sucesso!',
    description: 'Agora é só fazer login na nossa plataforma.',
    icon: {
      name: 'checkRound',
      color: 'primary'
    }
  }
};

export const SCREEN_VALUES = {
  TITLE: 'Criar uma conta',
  USERNAME_INPUT: {
    label: 'Seu username',
    placeholder: '@'
  },
  FIRST_NAME_INPUT: {
    label: 'Nome',
    placeholder: 'Digite seu nome'
  },
  LAST_NAME_INPUT: {
    label: 'Sobrenome',
    placeholder: 'Digite seu sobrenome'
  },
  EMAIL_INPUT: {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail'
  },
  PASSWORD_INPUT: {
    label: 'Senha',
    placeholder: 'Digite sua senha'
  },
  SUBMIT_BUTTON: {
    TITLE: 'Criar uma conta'
  }
};
