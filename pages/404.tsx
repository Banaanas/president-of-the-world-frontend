import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import Page404Illustration from "../Components/Illustrations/Page404Illustration";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import LinkButton from "../Components/LinkButton";
import StyledErrorPagesContainer from "../Components/StyledComponents/StyledErrorPagesContainer";

const Custom404 = () => (
  <StyledPageMain>
    <StyledErrorPagesContainer>
      <StyledH1>Error</StyledH1>
      <Page404Illustration />
      <LinkButton href="/">Home</LinkButton>
    </StyledErrorPagesContainer>
  </StyledPageMain>
);

export default Custom404;
