import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import Page404Illustration from "../Components/Illustrations/Page404Illustration";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import LinkButton from "../Components/LinkButton";

const Custom404 = () => {
  return (
    <StyledPageMain>
      <StyledH1>Error</StyledH1>
      <Page404Illustration />
      <LinkButton href="/">Home</LinkButton>
    </StyledPageMain>
  );
};

export default Custom404;
