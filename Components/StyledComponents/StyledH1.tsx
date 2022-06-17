import styled from "@emotion/styled";

import appTheme from "../../styles/appTheme";

const StyledH1 = styled.h1`
  color: ${appTheme.colors.primary.default};
  font-weight: bolder;
  font-size: clamp(32px, 12vw, 40px);
  line-height: 1;
  letter-spacing: 6px;
  text-align: center;
  text-transform: uppercase;
  box-shadow: ${appTheme.elevation.xl};
`;

export default StyledH1;
