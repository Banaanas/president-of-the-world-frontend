import Link from "next/link";
import StyledH1 from "../../StyledComponents/StyledH1";
import HomeIllustration from "../../Illustrations/HomeIllustration";
import LinkButton from "../../LinkButton";
import StyledSection from "../../StyledComponents/StyledSection";
import smoothScrollTo, { rankingSection } from "../../../utils/smoothScrollTo";

const HeroBannerSection = ({ allCandidates }) => (
  <StyledSection>
    <StyledH1>President of the World</StyledH1>
    <HomeIllustration />
    {/* If NO candidates yet, link to MyCandidatePageElse.
      Else smooth scroll to Candidates Table. */}
    {allCandidates.length === 0 ? (
      <Link href="/my-candidate">
        <LinkButton as="a">Change the World</LinkButton>
      </Link>
    ) : (
      <LinkButton onClick={() => smoothScrollTo(rankingSection)}>
        Change the World
      </LinkButton>
    )}
  </StyledSection>
);

export default HeroBannerSection;

/*
 */
