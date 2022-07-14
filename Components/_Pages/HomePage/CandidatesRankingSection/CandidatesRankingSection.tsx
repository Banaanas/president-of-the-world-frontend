import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect } from "react";

import { currentPageLinks } from "../../../../data/current-page-links";
import navLinks from "../../../../data/navLinks";
import { VOTE_CANDIDATE } from "../../../../lib/queries/queries";
import appTheme from "../../../../styles/appTheme";
import { RequiredCandidate } from "../../../../types/types";
import toasts from "../../../../utils/toasts";
import StyledH1 from "../../../StyledComponents/StyledH1";
import StyledSection from "../../../StyledComponents/StyledSection";
import CandidatesRanking from "./CandidatesRanking";
import LeadingCandidate from "./LeadingCandidate";

const Span = styled.span`
  text-align: center;
`;

const StyledH2 = styled(StyledH1)`
  margin-bottom: 32px;
  font-size: ${appTheme.fontSize.xl2};
`;

const StyledLink = styled.a`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-left: 4px;

  /* Hover Effect */
  ::after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${appTheme.colors.tertiary.default};
    border-radius: 4px;
    transform: scaleY(1);
    opacity: 1;
    transition: opacity 250ms ease-out;
    content: "";
  }

  :hover::after {
    opacity: 0;
  }

  ::before {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${appTheme.colors.tertiary.light};
    border-radius: 4px;
    transform: scaleY(1);
    opacity: 1;
    content: "";
  }
`;

const CandidatesRankingSection = ({
  allCandidates,
}: {
  allCandidates: Array<RequiredCandidate> | undefined;
}) => {
  // Render when allCandidates array changes
  useEffect(() => {}, [allCandidates]);

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [voteCandidate] = useMutation(VOTE_CANDIDATE, {
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.vote);
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  // Update Candidate - Function
  const handleUpdateCandidate = async (candidateID: string) => {
    // updateCandidate - useMutation
    await voteCandidate({
      variables: {
        id: candidateID,
      },
    });
  };

  // If No Candidates List is EMPTY
  if (!allCandidates || allCandidates.length === 0) {
    return (
      <StyledSection>
        <Span>
          Candidates List is empty.
          <Link href={navLinks.myCandidate.href} passHref>
            <StyledLink>Please chose one Candidate</StyledLink>
          </Link>
        </Span>
      </StyledSection>
    );
  }

  // If Candidates List is NOT empty
  return (
    <StyledSection>
      <StyledH2 id={currentPageLinks.homePage.rankingSection}>
        Candidates Ranking
      </StyledH2>
      <LeadingCandidate
        candidatesArray={allCandidates}
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        handleUpdateCandidate={handleUpdateCandidate}
      />
      <CandidatesRanking
        candidatesArray={allCandidates}
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        handleUpdateCandidate={handleUpdateCandidate}
      />
    </StyledSection>
  );
};

export default CandidatesRankingSection;
