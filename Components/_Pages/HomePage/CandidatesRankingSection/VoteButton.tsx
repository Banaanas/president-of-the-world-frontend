import styled from "@emotion/styled";

import appTheme from "../../../../styles/appTheme";
import { submitButtonStyle } from "../../../../styles/css-composition";

const VoteButton = styled.button`
  ${submitButtonStyle};

  width: fit-content;
  margin-top: 0; /* Cancel CSS Composition */
  color: ${appTheme.colors.textDefault};
  text-transform: none;
  background-color: ${appTheme.colors.tertiary.default};
`;

export default VoteButton;
