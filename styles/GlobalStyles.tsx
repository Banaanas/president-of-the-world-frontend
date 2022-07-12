import { css, Global } from "@emotion/react";

import appTheme from "./appTheme";
import colors from "./CSS-variables/colors";
import elevations from "./CSS-variables/elevations";
import fontProperties from "./CSS-variables/font-properties";

// Emotion Global Styles
const GlobalStyles = () => (
  <Global
    styles={css`
      /* CSS RESET - Next.js authorizes Normalize.css (Global CSS) to be imported ONLY
        from _app.js */

      /* GLOBAL STYLES */
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: auto;
      }

      html {
        box-sizing: border-box;
        height: 100%;
        scroll-behavior: smooth;
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

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      figure,
      blockquote,
      ul,
      ol,
      dl,
      dt,
      dd {
        margin: 0;
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
        font-size: ${appTheme.fontSize.lg};
      }

      em {
        font-style: italic;
      }

      strong {
        font-weight: ${appTheme.fontWeight.bold};
      }

      a:focus {
        outline: 5px auto ${appTheme.colors.primary.default};
      }

      img,
      picture {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Selection */
      ::selection {
        color: ${appTheme.colors.selection};
        background-color: ${appTheme.colors.selectionBackground};
      }

      /* Scrollbar */
      @media (orientation: portrait) {
        ::-webkit-scrollbar {
          background-color: ${appTheme.colors.scrollbarBackground};
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${appTheme.colors.scrollbar};
          border: 2px solid ${appTheme.colors.scrollbar};
          border-radius: 10px;
        }
      }
      @media (orientation: landscape) {
        ::-webkit-scrollbar {
          width: 8px;
          height: 16px;
          background-color: ${appTheme.colors.scrollbarBackground};
        }

        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${appTheme.colors.scrollbar};
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
