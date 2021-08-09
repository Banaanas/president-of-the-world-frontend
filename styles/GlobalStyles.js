import { css, Global } from "@emotion/react";
import colors from "./CSS-variables/colors";
import fontProperties from "./CSS-variables/font-properties";
import elevations from "./CSS-variables/elevations";
import appTheme from "./appTheme";

// Emotion Global Styles
const GlobalStyles = () => (
  <Global
    styles={css`
      /* CSS RESET - Next.js authorizes Materialize.css (Global CSS) to be imported ONLY
        from _app.js */

      /* GLOBAL STYLES */
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        line-height: 1.45;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
      }

      html {
        box-sizing: border-box;
        height: 100%;
      }

      body {
        min-width: ${appTheme.globalMinWidth};
        height: 100%;
        color: ${appTheme.colors.textDefault};
        font-family: ${appTheme.fontFamily.openSans},
          ${appTheme.fontFamily.alternativeFonts};
        background-color: ${appTheme.colors.secondary.default};
      }

      #__next {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 100%;
        isolation: isolate; /* Create a stacking context without a z-index. This ensures that all portal content
          (modals and tooltips) will float above the Next app */
      }

      body,
      button,
      input,
      select,
      option {
        font-weight: ${appTheme.fontWeight.light};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong {
        font-weight: ${appTheme.fontWeight.bold};
        font-family: ${appTheme.fontFamily.roboto},
          ${appTheme.fontFamily.alternativeFonts};
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        text-rendering: optimizeLegibility;
      }

      p {
        margin-bottom: 1.5em;
        font-size: 1.125rem;
      }

      em {
        font-style: italic;
      }

      strong {
        font-weight: ${appTheme.fontWeight.bold};
      }

      /* Images - Alt Attribute Text */
      img {
        color: white;
        text-align: center;
      }

      a:focus {
        outline: 5px auto ${appTheme.colors.primary.default};
      }

      /* Selection and Scrollbar styles */
      ::selection {
        color: ${appTheme.colors.selection};
        background-color: ${appTheme.colors.selectionBackground};
      }

      @media (orientation: portrait) {
        ::-webkit-scrollbar {
          background-color: ${appTheme.colors.secondary.darker};
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${appTheme.colors.tertiary.default};
          border: 2px solid ${appTheme.colors.tertiary.default};
          border-radius: 10px;
        }
      }

      @media (orientation: landscape) {
        ::-webkit-scrollbar {
          width: 8px;
          height: 16px;
          background-color: ${appTheme.colors.secondary.darker};
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${appTheme.colors.tertiary.default};
          border-radius: 10px;
        }
      }

      /* Fonts */
      @font-face {
        font-family: "Roboto";
        src: url("./fonts/Roboto-Regular.ttf");
      }
      @font-face {
        font-family: "Open Sans";
        src: url("./fonts/OpenSans-Regular.ttf");
      }

      /* CSS Variables */

      /* Default Variables */
      :root {
        ${fontProperties}
        ${colors}
        ${elevations}
      }
    `}
  />
);

export default GlobalStyles;
