import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledH1 = styled.h1`
  color: ${appTheme.colors.primary.default};
  font-weight: bolder;
  font-size: clamp(2rem, 12vw, 2.5rem);
  line-height: 1;
  letter-spacing: 0.4rem;
  text-align: center;
  text-transform: uppercase;
  box-shadow: ${appTheme.elevation["4"]};
`;

export default StyledH1;
