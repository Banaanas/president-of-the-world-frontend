/* - AppTheme -
 * This Theme is a JavaScript Object, in order to get the typing autocomplete/type
 * safety :
 * 1 - It contains the references to the CSS Variables ;
 * 2 - The theme also contains, among other values, the Media
 * Queries, because CSS Variables can NOT be used with Media Queries.
 * because CSS Variables can NOT be used with Media Queries;
 * 3 - It can be used as Emotion Theme also.
 *  */

// Breakpoints
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Queries
const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};

const appTheme = {
  /* CSS VARIABLES */
  colors: {
    primary: {
      darker: "var(--color-primary-darker)",
      dark: "var(--color-primary-dark)",
      default: "var(--color-primary-default)",
      light: "var(--color-primary-light)",
      lighter: "var(--color-primary-lighter)",
      lightest1: "var(--color-primary-lightest-1)",
      lightest2: "var(--color-primary-lightest-2)",
    },

    secondary: {
      darker: "var(--color-secondary-darker)",
      dark: "var(--color-secondary-dark)",
      default: "var(--color-secondary-default)",
      light: "var(--color-secondary-light)",
      lighter: "var(--color-secondary-lighter)",
      lightest1: "var(--color-secondary-lightest-1)",
      lightest2: "var(--color-secondary-lightest-2)",
    },

    tertiary: {
      darker: "var(--color-tertiary-darker)",
      dark: "var(--color-tertiary-dark)",
      default: "var(--color-tertiary-default)",
      light: "var(--color-tertiary-light)",
      lighter: "var(--color-tertiary-lighter)",
      lightest1: "var(--color-tertiary-lightest-1)",
      lightest2: "var(--color-tertiary-lightest-2)",
    },

    gray: {
      darker: "var(--color-gray-darker)",
      dark: "var(--color-gray-dark)",
      default: "var(--color-gray-default)",
      light: "var(--color-gray-light)",
      lighter: "var(--color-gray-lighter)",
      lightest1: "var(--color-gray-lightest-1)",
      lightest2: "var(--color-gray-lightest-2)",
    },

    success: {
      darker: "var(--color-success-darker)",
      dark: "var(--color-success-dark)",
      default: "var(--color-success-default)",
      light: "var(--color-success-light)",
      lighter: "var(--color-success-lighter)",
      lightest1: "var(--color-success-lightest-1)",
      lightest2: "var(--color-success-lightest-2)",
    },

    warning: {
      darker: "var(--color-warning-darker)",
      dark: "var(--color-warning-dark)",
      default: "var(--color-warning-default)",
      light: "var(--color-warning-light)",
      lighter: "var(--color-warning-lighter)",
      lightest1: "var(--color-warning-lightest-1)",
      lightest2: "var(--color-warning-lightest-2)",
    },

    error: {
      darker: "var(--color-error-darker)",
      dark: "var(--color-error-dark)",
      default: "var(--color-error-default)",
      light: "var(--color-error-light)",
      lighter: "var(--color-error-lighter)",
      lightest1: "var(--color-error-lightest-1)",
      lightest2: "var(--color-error-lightest-2)",
    },

    black: "var(--color-black-default)",
    white: "var(--color-white-default)",
    textDefault: "var(--color-text-default)",
    selection: "var(--color-selection)",
    selectionBackground: "var(--color-selection-background)",
    scrollbar: "var(--color-scrollbar)",
    scrollbarBackground: "var(--color-scrollbar-background)",
  },

  elevation: {
    sm: "var(--elevation-1)",
    md: "var(--elevation-2)",
    lg: "var(--elevation-3)",
    xl: "var(--elevation-4)",
  },

  fontWeight: {
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
    bold: "var(--font-weight-bold)",
  },

  fontSize: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    xl2: "var(--font-size-xl2)",
    xl3: "var(--font-size-xl3)",
    xl4: "var(--font-size-xl4)",
    xl5: "var(--font-size-xl5)",
    xl6: "var(--font-size-xl6)",
    xl7: "var(--font-size-xl7)",
    xl8: "var(--font-size-xl8)",
    xl9: "var(--font-size-xl9)",
  },

  fontFamily: {
    roboto: "var(--font-family-1)",
    openSans: "var(--font-family-2)",
    alternativeFonts: "var(--alternative-fonts)",
  },

  /* OTHERS */
  globalMinWidth: "320px",
  globalMaxWidth: "1100px",
  headerHeight: "72px",
  queries: QUERIES,
};

export default appTheme;
