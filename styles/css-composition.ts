import { css } from "@emotion/react";

import appTheme from "./appTheme";

const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  padding: 24px;
  color: ${appTheme.colors.secondary.default};
  background-color: ${appTheme.colors.primary.default};
  border-radius: 10px;
  box-shadow: ${appTheme.elevation.xl};

  @media ${appTheme.queries.tabletAndUp} {
    min-width: 350px;
  }
`;

const formHeadingStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px; /* Fix width to break Heading when too long */
  margin-bottom: 16px;
  font-weight: ${appTheme.fontWeight.bold};
  font-size: ${appTheme.fontSize.xl};
  text-align: center;
  text-transform: uppercase;
  border: ${appTheme.colors.primary.default};

  &::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    display: inline-flex;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      ${appTheme.colors.secondary.default},
      transparent
    );
    border-radius: 5px;
    content: "";
  }
`;

const submitButtonStyle = css`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  font-weight: ${appTheme.fontWeight.bold};
  text-align: center;
  text-transform: uppercase;
  background-color ${appTheme.colors.warning.default};
  border-radius: 8px;
  cursor: pointer;
  transition: filter 500ms ease;

  &:hover {
    filter: drop-shadow(0 0 2px ${appTheme.colors.secondary.default});
  }
`;

export { formHeadingStyle, formStyle, submitButtonStyle };
