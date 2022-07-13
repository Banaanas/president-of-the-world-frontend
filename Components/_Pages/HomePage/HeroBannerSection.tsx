import Link from "next/link";

import { currentPageLinks } from "../../../data/current-page-links";
import navLinks from "../../../data/navLinks";
import { Candidate } from "../../../types/types";
import HomeIllustration from "../../Illustrations/HomeIllustration";
import LinkButton from "../../LinkButton";
import StyledH1 from "../../StyledComponents/StyledH1";
import StyledSection from "../../StyledComponents/StyledSection";

const HeroBannerSection = ({
  allCandidates,
}: {
  allCandidates: Array<Candidate> | undefined;
}) => (
  <StyledSection>
    <StyledH1>President of the World</StyledH1>
    <HomeIllustration />
    {/* If NO candidates yet, link to MyCandidatePageElse.
      Else smooth scroll to Candidates Table. */}
    {!allCandidates || allCandidates.length === 0 ? (
      <Link href={navLinks.updateCandidate.href} passHref>
        <LinkButton>Change the World</LinkButton>
      </Link>
    ) : (
      <LinkButton href={`#${currentPageLinks.homePage.rankingSection}`}>
        Change the World with your Vote
      </LinkButton>
    )}
  </StyledSection>
);

export default HeroBannerSection;
