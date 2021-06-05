import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useToast } from "@chakra-ui/react";
import { VOTE_CANDIDATE } from "../../../../lib/queries/queries";
import appTheme from "../../../../styles/appTheme";
import StyledH1 from "../../../StyledComponents/StyledH1";
import StyledSection from "../../../StyledComponents/StyledSection";
import CandidatesRanking from "./CandidatesRanking";
import LeadingCandidate from "./LeadingCandidate";

const StyledH2 = styled(StyledH1)`
  margin-bottom: 32px;
  font-size: ${appTheme.fontSize.xl2};
`;

const CandidatesRankingSection = ({ allCandidates }) => {
  // Render when allCandidates array changes
  useEffect(() => {}, [allCandidates]);

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [voteCandidate] = useMutation(VOTE_CANDIDATE, {
    onCompleted: () => {
      // Display Success Toast
      toast({
        title: "🗳️ Successful Vote 🌠",
        description: "One more Vote for this candidate.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error) => {
      // Display Error Toast
      toast({
        title: "❌ Something Wrong Happened ⚠️",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  // Update Candidate - Function
  const handleUpdateCandidate = async (candidateID) => {
    // updateCandidate - useMutation
    await voteCandidate({
      variables: {
        id: candidateID,
      },
    });
  };

  return (
    <StyledSection>
      <StyledH2>Candidates Ranking</StyledH2>
      <LeadingCandidate
        candidatesArray={allCandidates}
        handleUpdateCandidate={handleUpdateCandidate}
      />
      <CandidatesRanking
        candidatesArray={allCandidates}
        handleUpdateCandidate={handleUpdateCandidate}
      />
    </StyledSection>
  );
};

export default CandidatesRankingSection;
