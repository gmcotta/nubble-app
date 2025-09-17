import { UseResetNavigationSuccessProps } from '../../../hooks/useResetNavigationSuccess/props';

export const resetNavigationValues: UseResetNavigationSuccessProps = {
  originRoute: 'LoginScreen',
  successScreenParams: {
    title: `Sua conta foi criada com sucesso!`,
    description: 'Agora é só fazer login na nossa plataforma.',
    icon: {
      name: 'messageRound',
      color: 'primary'
    }
  }
};

export const screenValues = {
  title: 'Criar uma conta',
  usernameInput: {
    label: 'Seu username',
    placeholder: '@'
  },
  nameInput: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome completo'
  },
  emailInput: {
    label: 'E-mail',
    placeholder: 'Digite seu e-mail'
  },
  passwordInput: {
    label: 'Senha',
    placeholder: 'Digite sua senha'
  },
  submitButton: {
    title: 'Criar uma conta'
  }
};
