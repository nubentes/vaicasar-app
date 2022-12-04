import colors from './colors';
import fonts from './fonts';

export default {
  container: {
    background: colors.white,
  },

  logo: {
    fontFamily: fonts.family.GREAT_VIBES_REGULAR,
  },

  card: {
    background: {
      primary: colors.greys.very_light,
      secondary: colors.pink_red,
      active: colors.green_cyan,
    },

    text: {
      fontFamily: {
        regular: fonts.family.MANROPE_REGULAR,
        semi_bold: fonts.family.MANROPE_SEMI_BOLD,
        bold: fonts.family.MANROPE_BOLD,
        extra_bold: fonts.family.MANROPE_EXTRA_BOLD,
      },

      color: {
        white: colors.white,
        pink_red: colors.pink_red,
        grey_medium: colors.greys.regular,
        grey_dark: colors.greys.dark,
      },

      fontSize: {
        bigTitle: fonts.size.VERY_LARGE,
        title: fonts.size.MEDIUM,
        subtitle: fonts.size.SMALL,
      },
    },
  },

  calendar: {
    lineColor: colors.pink_red,
    dotColor: colors.pink_red,
    dayColor: colors.white,
  },

  input: {
    background: colors.greys.very_light,
    borderColor: colors.greys.light,

    placeholder: {
      fontFamily: fonts.family.MANROPE_MEDIUM,
      color: colors.greys.medium,
      fontSize: fonts.size.MEDIUM,
    },

    text: {
      fontFamily: fonts.family.MANROPE_SEMI_BOLD,
      color: colors.greys.dark,
      fontSize: fonts.size.MEDIUM,
    },
  },

  button: {
    background: {
      primary: colors.pink_red,
      secondary: colors.greys.very_light,
    },

    border: {
      primary: colors.greys.light,
    },

    text: {
      fontFamily: fonts.family.MANROPE_BOLD,
      color: {
        primary: colors.white,
        secondary: colors.pink_red,
        terciary: colors.greys.medium,
      },
      fontSize: fonts.size.MEDIUM,
    },
  },

  alert: {
    background: {
      success: colors.green_cyan,
      warning: colors.light_brown,
      error: colors.pink_red,
    },

    text: {
      fontWeight: fonts.family.MANROPE_SEMI_BOLD,
      color: colors.white,
      fontSize: fonts.size.MEDIUM,
    },
  },

  icon: {
    size: fonts.size.VERY_LARGE,

    card: {
      primary: colors.white,
    },

    header: {
      primary: colors.black,
    },

    tabBar: {
      active: colors.pink_red,
      inactive: colors.greys.dark,
    },

    input: {
      primary: colors.pink_red,
    },

    rating: {
      primary: colors.light_brown,
    },

    taskStatus: {
      todo: colors.greys.dark,
      done: colors.white,
    },

    button: {
      primary: colors.pink_red,
    },
  },

  colors: {
    white: '#FFFFFF',
    green: '#376400',
    black: '#000000',
    brown: '#664025',
    red: '#A52A03',
    gray: '#3f3f3f',
    blue: '#124EC2',
    active: '#00FF47',
  },
};
