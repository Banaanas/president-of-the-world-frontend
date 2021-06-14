import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import LinkButton from "../Components/LinkButton";
import Page500Illustration from "../Components/Illustrations/Page500Illustration";

const Custom404 = () => {
  return (
    <StyledPageMain>
      <StyledH1>Error 500</StyledH1>
      <Page500Illustration />
      <LinkButton href="/">Home</LinkButton>
    </StyledPageMain>
  );
};

export default Custom404;
