import { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useToast } from "@chakra-ui/react";
import StyledH1 from "../../../StyledComponents/StyledH1";
import appTheme from "../../../../styles/appTheme";
import CandidatesRanking from "./CandidatesRanking";
import LeadingCandidate from "./LeadingCandidate";
import {
  ALL_CANDIDATES,
  VOTE_CANDIDATE,
} from "../../../../lib/queries/queries";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 128px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledH2 = styled(StyledH1)`
  font-size: ${appTheme.fontSize.xl2};
`;

const CandidatesRankingSection = () => {
  const { data, error, loading } = useQuery(ALL_CANDIDATES, {
    pollInterval: 100,
  });

  // Render when allCandidates array changes
  useEffect(() => {}, [data]);

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [voteCandidate, resultVoteCandidate] = useMutation(VOTE_CANDIDATE, {
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
        candidatesArray={data.allCandidates}
        handleUpdateCandidate={handleUpdateCandidate}
      />
      <CandidatesRanking
        candidatesArray={data.allCandidates}
        handleUpdateCandidate={handleUpdateCandidate}
      />
    </StyledSection>
  );
};

export default CandidatesRankingSection;
