import Page500Illustration from "../Components/Illustrations/Page500Illustration";
import LinkButton from "../Components/LinkButton";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import navLinks from "../data/navLinks";

const Custom500Page = () => (
  <StyledPageMain>
    <StyledH1>Error 500</StyledH1>
    <Page500Illustration />
    <LinkButton href={navLinks.home.href}>Home</LinkButton>
  </StyledPageMain>
);

export default Custom500Page;
