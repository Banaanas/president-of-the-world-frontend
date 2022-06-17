import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-darker: hsl(60, 1%, 75%);
  --color-primary-dark: hsl(60, 100%, 100%);
  --color-primary-default: hsl(60, 100%, 100%);
  --color-primary-light: hsl(60, 100%, 100%);
  --color-primary-lighter: hsl(0, 0%, 100%);
  --color-primary-lightest-1: hsl(0, 0%, 100%);
  --color-primary-lightest-2: hsl(0, 0%, 100%);

  /* Secondary Color */
  --color-secondary-darker: hsl(252, 26%, 4%);
  --color-secondary-dark: hsl(249, 26%, 5%);
  --color-secondary-default: hsl(247, 24%, 7%);
  --color-secondary-light: hsl(252, 2%, 54%);
  --color-secondary-lighter: hsl(240, 2%, 77%);
  --color-secondary-lightest-1: hsl(0, 0%, 95%);
  --color-secondary-lightest-2: hsl(0, 0%, 95%);

  /* Tertiary Color */
  --color-tertiary-darker: hsl(339, 65%, 41%);
  --color-tertiary-dark: hsl(339, 78%, 55%);
  --color-tertiary-default: hsl(339, 78%, 55%);
  --color-tertiary-light: hsl(339, 78%, 77%);
  --color-tertiary-lighter: hsl(339, 76%, 89%);
  --color-tertiary-lightest-1: hsl(340, 75%, 95%);
  --color-tertiary-lightest-2: hsl(336, 84%, 98%);

  /* Gray */
  --color-gray-darker: hsl(210, 4%, 40%);
  --color-gray-dark: hsl(210, 6%, 59%);
  --color-gray-default: hsl(212, 14%, 79%);
  --color-gray-light: hsl(210, 15%, 89%);
  --color-gray-lighter: hsl(220, 11%, 95%);
  --color-gray-lightest-1: hsl(240, 9%, 98%);
  --color-gray-lightest-2: hsl(240, 20%, 99%);

  /* Success Color */
  --color-success-darker: hsl(120, 53%, 25%);
  --color-success-dark: hsl(120, 53%, 49%);
  --color-success-default: hsl(120, 53%, 49%);
  --color-success-light: hsl(120, 53%, 49%);
  --color-success-lighter: hsl(120, 52%, 75%);
  --color-success-lightest-1: hsl(120, 51%, 87%);
  --color-success-lightest-2: hsl(120, 54%, 98%);

  /* Warning Color */
  --color-warning-darker: hsl(44, 80%, 27%);
  --color-warning-dark: hsl(44, 79%, 40%);
  --color-warning-default: hsl(44, 90%, 53%);
  --color-warning-light: hsl(44, 90%, 76%);
  --color-warning-lighter: hsl(44, 90%, 76%);
  --color-warning-lightest-1: hsl(44, 92%, 95%);
  --color-warning-lightest-2: hsl(49, 85%, 98%);

  /* Error Color */
  --color-error-darker: hsl(0, 62%, 29%);
  --color-error-dark: hsl(360, 63%, 44%);
  --color-error-default: hsl(360, 86%, 58%);
  --color-error-light: hsl(0, 85%, 79%);
  --color-error-lighter: hsl(0, 85%, 89%);
  --color-error-lightest-1: hsl(0, 82%, 96%);
  --color-error-lightest-2: hsl(0, 82%, 98%);

  /* Black */
  --color-black-default: hsl(216, 18%, 16%);

  /* White */
  --color-white-default: hsl(0, 0%, 100%);

  /* Text Color */
  --color-text-default: var(--color-primary-default);

  /* Selection */
  --color-selection: var(--color-secondary-darker);
  --color-selection-background: var(--color-tertiary-default);

  /* Scrollbar */
  --color-scrollbar: var(--color-tertiary-default);
  --color-scrollbar-background: var(--color-secondary-light);
`;

export default colors;
