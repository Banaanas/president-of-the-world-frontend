import styled from "@emotion/styled";
import { submitButtonStyle } from "../../../../styles/css-composition";
import appTheme from "../../../../styles/appTheme";

const VoteButton = styled.button`
  ${submitButtonStyle};

  width: fit-content;
  margin-top: 0; /* Cancel CSS Composition */
  color: ${appTheme.colors.textDefault};
  text-transform: none;
  background: ${appTheme.colors.tertiary.default};
`;

export default VoteButton;
