import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import NavBar from "./NavBar";
import SubFooter from "./SubFooter";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  background-color: ${appTheme.colors.secondary.main};
  transition: filter, 300ms ease;
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* <ContactIcons /> */}
      <NavBar />
      <SubFooter />
    </StyledFooter>
  );
};

export default Footer;
