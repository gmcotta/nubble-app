import { ButtonVariants, ButtonModifiers } from './props';

export const buttonVariants: Record<ButtonVariants, ButtonModifiers> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary'
      },
      content: 'primaryContrast'
    },
    disabled: {
      container: {
        backgroundColor: 'gray4'
      },
      content: 'gray2'
    }
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary'
      },
      content: 'primary'
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4'
      },
      content: 'gray2'
    }
  }
};
