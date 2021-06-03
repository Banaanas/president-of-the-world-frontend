import styled from "@emotion/styled";
import { AiFillStar as StarIcon } from "react-icons/ai";
import { HiOutlineLocationMarker as LocationIcon } from "react-icons/hi";
import sortCandidatesFunction from "../../../../utils/sort-candidates-function";
import numberWithSpaces from "../../../../utils/number-with-spaces";
import appTheme from "../../../../styles/appTheme";
import { CandidatePoliticalOrientation } from "./CandidatesRanking";
import VoteButton from "./VoteButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeadingCandidateCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  padding: 8px 16px;
  background: ${appTheme.colors.tertiary.darker};
  border-radius: 8px;

  *:not(:first-child) *:not(:last-child) {
    margin: 16px;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  color: ${appTheme.colors.tertiary.darker};
  background: ${appTheme.colors.primary.default};
  border-radius: 4px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* Space between lastName and firstName */
  span:nth-of-type(1) {
    margin-right: 4px;
  }
`;

const VoteContainer = styled(NameContainer)`
  align-items: center;
  justify-content: center;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Star Icon SVG */
  & svg {
    margin-left: 8px;
  }

  & span:nth-of-type(2) {
    margin: 0 8px;
    color: ${appTheme.colors.warning.default};
  }
`;

const StyledVoteButton = styled(VoteButton)`
  color: ${appTheme.colors.primary.default};
  background: ${appTheme.colors.secondary.default};
  border: 3px solid ${appTheme.colors.primary.default};
`;

const CountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  

  /* LocationIcon SVG */
  & svg {
    margin-right: 2px;
  }
`;

const StyledLocationIcon = styled(LocationIcon)`
  background: ${appTheme.colors.tertiary.default};
  border-radius: 50%;
`;

const StyledCandidatePoliticalOrientation = styled(
  CandidatePoliticalOrientation,
)`
  /* Reset width values */
  width: fit-content;
  min-width: fit-content;
`;

const LeadingCandidate = ({ candidatesArray, handleUpdateCandidate }) => {
  // Most Voted Candidate
  const [firstCandidate] = sortCandidatesFunction(candidatesArray);

  return (
    <Container>
      <LeadingCandidateCard>
        <NumberContainer>1</NumberContainer>
        <NameContainer>
          <span>{firstCandidate.firstName}</span>
          <span>{firstCandidate.lastName}</span>
        </NameContainer>
        <CountryContainer>
          <StyledLocationIcon />
          <span>{firstCandidate.country}</span>
        </CountryContainer>
        <StyledCandidatePoliticalOrientation
          politicalOrientation={firstCandidate.politicalOrientation}
        >
          <span>{firstCandidate.politicalOrientation}</span>
        </StyledCandidatePoliticalOrientation>
      </LeadingCandidateCard>
      <VoteContainer>
        <span>Leading Candidate |</span>
        <span>
          {numberWithSpaces(firstCandidate.votes)} <StarIcon />
        </span>
        <StyledVoteButton
          onClick={() => handleUpdateCandidate(firstCandidate.id)}
        >
          Vote for Me
        </StyledVoteButton>
      </VoteContainer>
    </Container>
  );
};

export default LeadingCandidate;
