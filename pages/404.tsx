import Page404Illustration from "../Components/Illustrations/Page404Illustration";
import LinkButton from "../Components/LinkButton";
import StyledErrorPagesContainer from "../Components/StyledComponents/StyledErrorPagesContainer";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import navLinks from "../data/navLinks";

const Custom404Page = () => (
  <StyledPageMain>
    <StyledErrorPagesContainer>
      <StyledH1>Error</StyledH1>
      <Page404Illustration />
      <LinkButton href={navLinks.home.href}>Home</LinkButton>
    </StyledErrorPagesContainer>
  </StyledPageMain>
);

export default Custom404Page;
