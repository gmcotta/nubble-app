import { ButtonVariants, ButtonModifiers } from './props';

export const buttonVariants: Record<ButtonVariants, ButtonModifiers> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary'
      },
      content: {
        color: 'primaryContrast'
      }
    },
    disabled: {
      container: {
        backgroundColor: 'gray4'
      },
      content: {
        color: 'gray2'
      }
    }
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary'
      },
      content: {
        color: 'primary'
      }
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4'
      },
      content: {
        color: 'gray2'
      }
    }
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'white70',
        height: 40
      },
      content: {
        color: 'grayBlack',
        textProps: {
          preset: 'paragraphSmall',
          bold: false
        }
      }
    },
    disabled: {
      container: {
        backgroundColor: 'grayWhite',
        height: 40
      },
      content: { color: 'grayBlack' }
    }
  }
};
