import { Tooltip } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiFillStar as StarIcon } from "react-icons/ai";

import appTheme from "../../../../styles/appTheme";
import {
  PoliticalOrientation,
  RequiredCandidate,
} from "../../../../types/types";
import numberWithSpaces from "../../../../utils/number-with-spaces";
import sortCandidatesFunction from "../../../../utils/sort-candidates-function";
import VoteButton from "./VoteButton";

const tableWidths = {
  rank: "100px",
  name: "100px",
  country: "100px",
  politicalOrientation: "100px",
  votes: "100px",
};

const candidateDetailsPadding = "0 4px";
const tableBorderRadius = "4px";

const CandidatesTable = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 75%, 100%);
  overflow-x: auto;
  border-radius: ${tableBorderRadius};

  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    background-color: ${appTheme.colors.primary.darker};
    border-bottom-right-radius: ${tableBorderRadius};
    border-bottom-left-radius: ${tableBorderRadius};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${appTheme.colors.tertiary.darker};
    border: solid 1px ${appTheme.colors.tertiary.default};
    border-radius: ${tableBorderRadius};
    border-radius: ${tableBorderRadius};
  }
`;

interface CandidateRowProps {
  secondary: boolean;
}

// type CandidatePoliticalOrientationProps = Omit<PoliticalOrientation, "Center">;
interface CandidatePoliticalOrientationProps {
  politicalOrientation: Omit<PoliticalOrientation, "Center">;
}

// Candidate Details Row
const CandidateRow = styled.div<CandidateRowProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-width: 600px;
  padding: 16px 0;
  color: ${appTheme.colors.secondary.default};
  background-color: ${appTheme.colors.primary.default};
  background-color: ${({ secondary }) =>
    secondary
      ? `${appTheme.colors.tertiary.lightest1}`
      : `${appTheme.colors.tertiary.lighter}`};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

// Candidate Details - CandidateRank's Style applies to all Candidate Details
const CandidateRank = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${tableWidths.rank};
  padding: ${candidateDetailsPadding};
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const CandidateNameContainer = styled(CandidateRank)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${tableWidths.name};
  text-align: center;

  /* Candidate LastName */
  & span {
    text-transform: uppercase;
  }
`;

const CandidateCountry = styled(CandidateRank)`
  width: ${tableWidths.country};
`;

export const CandidatePoliticalOrientation = styled(
  CandidateRank,
)<CandidatePoliticalOrientationProps>`
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
        background-color: red;
        color: ${appTheme.colors.textDefault}
    `;
      }
      if (politicalOrientation === "Right") {
        return `
        background-color: blue;
        color: ${appTheme.colors.textDefault};

    `;
      }
      return `
        background-color: lightgray;
        color: ${appTheme.colors.secondary.default};
    `;
    }}
  }
`;

const CandidateVotes = styled(CandidateRank)`
  display: flex;
  justify-content: flex-end;
  width: ${tableWidths.votes};
  margin-bottom: 16px;
  overflow-x: auto;

  & svg {
    margin-right: 2px;
    color: ${appTheme.colors.tertiary.darker};
  }
`;

const ButtonAndVotesNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface CandidatesRankingProps {
  candidatesArray: Array<RequiredCandidate>;
  handleUpdateCandidate: (id: string) => void;
}

const CandidatesRanking = ({
  candidatesArray,
  handleUpdateCandidate,
}: CandidatesRankingProps) => {
  // Candidates List by Votes Number
  const sortedCandidates = sortCandidatesFunction(candidatesArray);

  return (
    <CandidatesTable>
      {sortedCandidates.map((candidate, index) =>
        // Display Candidates List from the second one
        // The Leading Candidate is displayed in its own card
        index >= 1 ? (
          <CandidateRow key={candidate?.id} secondary={Boolean(index % 2)}>
            <CandidateRank>{index + 1}</CandidateRank>
            <ButtonAndVotesNumberContainer>
              <Tooltip
                label={`${numberWithSpaces(candidate?.votes)} votes`}
                aria-label={`${numberWithSpaces(candidate?.votes)} votes`}
              >
                <CandidateVotes>
                  <StarIcon />
                  {numberWithSpaces(candidate?.votes)}
                </CandidateVotes>
              </Tooltip>
              <VoteButton
                type="button"
                onClick={() => handleUpdateCandidate(candidate?.id)}
              >
                Vote for Me
              </VoteButton>
            </ButtonAndVotesNumberContainer>
            <CandidateNameContainer>
              <span>{candidate?.lastName}</span>
              {candidate?.firstName}
            </CandidateNameContainer>

            <CandidateCountry>{candidate.country}</CandidateCountry>
            <CandidatePoliticalOrientation
              politicalOrientation={candidate.politicalOrientation}
            >
              <span>{candidate.politicalOrientation}</span>
            </CandidatePoliticalOrientation>
          </CandidateRow>
        ) : null,
      )}
    </CandidatesTable>
  );
};

export default CandidatesRanking;
