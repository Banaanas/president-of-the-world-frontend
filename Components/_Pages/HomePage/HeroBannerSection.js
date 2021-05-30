import styled from "@emotion/styled";
import StyledH1 from "../../StyledComponents/StyledH1";
import HomeIllustration from "../../Illustrations/HomeIllustration";
import LinkButton from "../../LinkButton";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* Illustration */
  svg {
    margin: 80px 0;
  }
`;

const HeroBannerSection = () => (
  <StyledSection>
    <StyledH1>President of the World</StyledH1>
    <HomeIllustration />
    <LinkButton>Vote for your Favorite Candidate</LinkButton>
  </StyledSection>
);

export default HeroBannerSection;