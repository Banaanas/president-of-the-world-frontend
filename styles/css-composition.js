import { css } from "@emotion/react";
import appTheme from "./appTheme";

const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 300px;
  padding: 24px;
  color: ${appTheme.colors.secondary.default};
  background-color: ${appTheme.colors.primary.default};
  border-radius: 10px;
  box-shadow: ${appTheme.elevation.xl};
`;

const formHeadingStyle = css`
  width: 180px;
  margin-bottom: 16px;
  font-weight: ${appTheme.fontWeight.bold};
  font-size: ${appTheme.fontSize.xl2};
  text-align: center;
  text-transform: uppercase;
  border: ${appTheme.colors.primary.default};
`;

const submitButtonStyle = css`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  font-weight: ${appTheme.fontWeight.bold};
  text-transform: uppercase;
  background: ${appTheme.colors.warning.default};
  border-radius: 8px;
  transition: filter 500ms ease;

  &:hover {
    filter: drop-shadow(0 0 2px ${appTheme.colors.secondary.default});
  }
`;

export { formStyle, formHeadingStyle, submitButtonStyle };
