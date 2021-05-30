import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Tooltip, useToast } from "@chakra-ui/react";
import { AiFillStar as StarIcon } from "react-icons/ai";
import appTheme from "../../../../styles/appTheme";
import {
  ALL_CANDIDATES,
  VOTE_CANDIDATE,
} from "../../../../lib/queries/queries";
import numberWithSpaces from "../../../../utils/number-with-spaces";
import { submitButtonStyle } from "../../../../styles/css-composition";

const tableWidths = {
  rank: "100px",
  name: "100px",
  country: "100px",
  politicalOrientation: "100px",
  votes: "100px",
};

const candidateDetailsPadding = "0 4px";

const CandidatesTable = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 75%, 100%);
  overflow: hidden;
  border-radius: 8px;
`;

// Candidate Details Row
const CandidateRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: ${appTheme.colors.secondary.default};
  background-color: ${appTheme.colors.primary.default};
  background-color: ${({ secondary }) =>
    secondary
      ? `${appTheme.colors.tertiary.lightest1}`
      : `${appTheme.colors.tertiary.lighter}`};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 16px 0;
`;

// Candidate Details - CandidateRank's Style applies to all Candidate Details
const CandidateRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${tableWidths.rank};
  padding: ${candidateDetailsPadding};
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const CandidateNameContainer = styled(CandidateRank)`
  display: flex;
  flex-direction: column;
  width: ${tableWidths.name};
  text-align: left;

  /* Candidate LastName */
  & span {
    text-transform: uppercase;
  }
`;

const CandidateCountry = styled(CandidateRank)`
  width: ${tableWidths.country};
`;

const CandidatePoliticalOrientation = styled(CandidateRank)`
  width: ${tableWidths.politicalOrientation};

  /* Political Orientation Span */
  & span {
    padding: 4px 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 4px;

    /* Change Background in function of politicalOrientation */
    ${({ politicalOrientation }) => {
      if (politicalOrientation === "Left") {
        return `
        background: red;
        color: ${appTheme.colors.textDefault}
    `;
      }
      if (politicalOrientation === "Right") {
        return `
        background: blue;
        color: ${appTheme.colors.textDefault};

    `;
      }
      return `
        background: lightgray;
        color: ${appTheme.colors.secondary.default};
    `;
    }}
  }
`;

const CandidateVotes = styled(CandidateRank)`
  display: flex;
  justify-content: flex-start;
  justify-self: flex-end;
  width: ${tableWidths.votes};

  & svg {
    margin-right: 4px;
  }
`;

const VoteButton = styled.button`
  ${submitButtonStyle};

  width: fit-content;
  margin-top: 0; /* Cancel CSS Composition */
  color: ${appTheme.colors.textDefault};
  text-transform: none;
  background: ${appTheme.colors.tertiary.default};
`;

const CandidatesRanking = () => {
  const { data, error, loading } = useQuery(ALL_CANDIDATES, {
    pollInterval: 100,
  });

  // Chakra-UI Toast
  const toast = useToast();

  // Sort Candidates in function of Votes Number
  const sortCandidatesFunction = (arr) => {
    const sortedArr = [...arr];

    // Reverse Array to first display
    sortedArr.reverse(); //
    sortedArr.sort((a, b) => (a.votes < b.votes ? 1 : -1));
    return sortedArr;
  };

  const sortedCandidates = sortCandidatesFunction(data.allCandidates);

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
    <CandidatesTable>
      {sortedCandidates.map((candidate, index) => (
        <CandidateRow key={candidate.id} secondary={index % 2}>
          <Container>
            <CandidateRank>{index + 1}</CandidateRank>
            <VoteButton
              type="button"
              onClick={() => handleUpdateCandidate(candidate.id)}
            >
              Vote for Me
            </VoteButton>
            <CandidateNameContainer>
              <span>{candidate.lastName}</span>
              {candidate.firstName}
            </CandidateNameContainer>
          </Container>
          <Container>
            <CandidateCountry>{candidate.country}</CandidateCountry>
            <CandidatePoliticalOrientation
              politicalOrientation={candidate.politicalOrientation}
            >
              <span>{candidate.politicalOrientation}</span>
            </CandidatePoliticalOrientation>
            <Tooltip
              label={`${numberWithSpaces(candidate.votes)} votes`}
              aria-label={`${numberWithSpaces(candidate.votes)} votes`}
            >
              <CandidateVotes>
                <StarIcon />
                {numberWithSpaces(candidate.votes)}
              </CandidateVotes>
            </Tooltip>
          </Container>
        </CandidateRow>
      ))}
    </CandidatesTable>
  );
};

export default CandidatesRanking;
