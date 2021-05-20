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

        /* 16px - Fixed Default Font Size - Because Relative Value (rm / %) would break 
        the layout if User changed Default Font Size in navigator. So layout will
        stay the same, if User changes Default Font Size. But Zoom is still
        possible, whether it's with REM or PX */
        font-size: ${appTheme.fontSize.baseFont};
        scroll-behavior: smooth; /* Warning : Some Browsers still don't support CSS "scroll-behavior: smooth",
        a Library / Polyfill could be used */
      }

      body {
        min-width: ${appTheme.globalMinWidth};
        height: 100%;
        color: ${appTheme.colors.textDefault};
        font-family: ${appTheme.fontFamily.roboto},
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
        font-weight: var(--font-weight-light);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      strong {
        font-weight: var(--font-weight-bold);
        font-family: var(--font-family-2), var(--alternative-fonts);
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
        font-weight: var(--font-weight-medium);
      }

      /* Images - Alt Attribute Text */
      img {
        color: white;
        text-align: center;
      }

      a:focus {
        outline: 5px auto var(--color-primary-default);
      }

      /* Scrollbar and Selection styles */
      ::selection {
        color: white;
        background-color: var(--color-secondary-default);
      }

      @media (orientation: landscape) {
        ::-webkit-scrollbar {
          width: 9px;
          height: 11px;
          background-color: transparent;
        }
        ::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: var(--color-primary-default);
          border: 2px solid var(--color-primary-default);
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