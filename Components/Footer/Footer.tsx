import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import SubFooter from "./SubFooter";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  padding-bottom: 16px;
  background-color: ${appTheme.colors.secondary.main};
  transition: filter, 300ms ease;
`;

const Footer = () => (
  <StyledFooter>
    <SubFooter />
  </StyledFooter>
);

export default Footer;
