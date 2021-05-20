import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import HomeIllustration from "../Illustrations/HomeIllustration";
import LinkButton from "../LinkButton";

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

const HeroBannerSection = () => (
  <StyledSection>
    <StyledH1>President of the World</StyledH1>
    <HomeIllustration />
    <LinkButton>Vote for your Favorite Candidate</LinkButton>
  </StyledSection>
);

export default HeroBannerSection;
