import colors from './colors';
import { FONTS, SIZES } from './fonts';

export default {
  container: {
    background: colors.white,
  },

  logo: {
    fontFamily: FONTS.GREAT_VIBES_REGULAR,
  },

  card: {
    background: {
      primary: colors.greys.very_light,
      secondary: colors.pink_red,
      active: colors.green_cyan,
    },

    text: {
      fontFamily: {
        regular: FONTS.MANROPE_REGULAR,
        semi_bold: FONTS.MANROPE_SEMI_BOLD,
        bold: FONTS.MANROPE_BOLD,
        extra_bold: FONTS.MANROPE_EXTRA_BOLD,
      },

      color: {
        white: colors.white,
        pink_red: colors.pink_red,
        grey_medium: colors.greys.regular,
        grey_dark: colors.greys.dark,
      },

      fontSize: {
        bigTitle: SIZES.VERY_LARGE,
        title: SIZES.MEDIUM,
        subtitle: SIZES.SMALL,
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
      fontFamily: FONTS.MANROPE_MEDIUM,
      color: colors.greys.medium,
      fontSize: SIZES.MEDIUM,
    },

    text: {
      fontFamily: FONTS.MANROPE_SEMI_BOLD,
      color: colors.greys.dark,
      fontSize: SIZES.MEDIUM,
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
      fontFamily: FONTS.MANROPE_BOLD,
      color: {
        primary: colors.white,
        secondary: colors.pink_red,
        terciary: colors.greys.medium,
      },
      fontSize: SIZES.MEDIUM,
    },
  },

  alert: {
    background: {
      success: colors.green_cyan,
      warning: colors.light_brown,
      error: colors.pink_red,
    },

    text: {
      fontWeight: FONTS.MANROPE_SEMI_BOLD,
      color: colors.white,
      fontSize: SIZES.MEDIUM,
    },
  },

  icon: {
    size: SIZES.VERY_LARGE,

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
};
