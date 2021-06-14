import styled from "@emotion/styled";
import appTheme from "../styles/appTheme";

const StyledHR = styled.hr`
  all: unset;
  width: ${({ width }) => (width ? width : "80%")};
  height: 4px;
  background: ${appTheme.colors.primary.default};
  background: linear-gradient(
    to right,
    transparent 0%,
    ${appTheme.colors.primary.default} 50%,
    transparent 100%
  );
  border-radius: 4px;
`;

export default StyledHR;