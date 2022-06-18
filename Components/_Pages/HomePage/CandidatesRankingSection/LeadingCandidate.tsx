import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { AiFillStar as StarIcon } from "react-icons/ai";
import { HiOutlineLocationMarker as LocationIcon } from "react-icons/hi";

import appTheme from "../../../../styles/appTheme";
import { RequiredCandidate } from "../../../../types/types";
import numberWithSpaces from "../../../../utils/number-with-spaces";
import sortCandidatesFunction from "../../../../utils/sort-candidates-function";
import { CandidatePoliticalOrientation } from "./CandidatesRanking";
import VoteButton from "./VoteButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const LeadingCandidateCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 16px 4px;
  padding: 8px 16px;
  background-color: ${appTheme.colors.tertiary.darker};
  border-radius: 8px;

  & > div {
    margin: 16px;
  }

  /* No margin for First and Last children Div */
  & > div:first-of-type,
  & > div:last-of-type {
    margin: 0;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  color: ${appTheme.colors.tertiary.default};
  background-color: ${appTheme.colors.primary.default};
  border-radius: 4px;
`;

const BaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameContainer = styled(BaseContainer)`
  /* Last Name */
  span:nth-of-type(1) {
    margin-right: 4px; /* Space between lastName and firstName */
    text-transform: uppercase;
  }

  /* First Name */
  span:nth-of-type(2) {
    text-transform: capitalize;
  }
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
  background-color: ${appTheme.colors.tertiary.default};
  border-radius: 50%;
`;

const StyledCandidatePoliticalOrientation = styled(
  CandidatePoliticalOrientation,
)`
  /* Reset width values */
  width: fit-content;
  min-width: fit-content;
`;

/* Votes and Button Container */
const VoteContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Star Icon SVG */
  & svg {
    margin-left: 8px;
  }

  /* Votes Number and Star Icon Container */
  & span:nth-of-type(2) {
    margin: 8px;
    color: ${appTheme.colors.warning.default};
  }
`;

// Common Animation Properties for buttonAnimation and afterAnimation
const coordinatedAnimation = "2000ms ease infinite alternate-reverse";

// Vote for Me Button Animation
const buttonAnimation = keyframes`
  0% {
      transform:rotate(15deg);
    } 
  50% {
      transform:  rotate(0deg);
    }
  100% {
      transform:rotate(-15deg);
    }
`;

// Vote for Me Button ::after Animation
const afterAnimation = keyframes`
  0% {
      opacity: 0;
    } 
  50% {
      opacity: 1;
    }
  100% {
      opacity: 0;
    }
`;

const StyledVoteButton = styled(VoteButton)`
  position: relative;
  overflow: hidden;
  color: ${appTheme.colors.primary.default};
  background-color: ${appTheme.colors.secondary.default};
  border: 3px solid ${appTheme.colors.primary.default};

  /* On small devices, buttonAnimation breaks layout  */
  @media ${appTheme.queries.tabletAndUp} {
    animation: ${buttonAnimation} ${coordinatedAnimation};
  }

  /* ::before opacity changes onHover */
  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
    background-color: ${appTheme.colors.tertiary.darker};
    opacity: 0;
    transition: opacity 250ms ease;
    content: "";
  }

  /* ::after opacity changes on afterAnimation */
  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
    background-color: ${appTheme.colors.tertiary.darker};
    opacity: 1;
    animation: ${afterAnimation} ${coordinatedAnimation};
    content: "";
  }

  :hover::before {
    opacity: 1;
  }
`;

interface LeadingCandidateProps {
  candidatesArray: Array<RequiredCandidate>;
  handleUpdateCandidate: (id: string) => void;
}

const LeadingCandidate = ({
  candidatesArray,
  handleUpdateCandidate,
}: LeadingCandidateProps) => {
  // Most Voted Candidate
  const [leadingCandidate] = sortCandidatesFunction(candidatesArray);

  return (
    <Container>
      <LeadingCandidateCard>
        <NumberContainer>1</NumberContainer>
        <NameContainer>
          <span>{leadingCandidate?.lastName}</span>
          <span>{leadingCandidate?.firstName}</span>
        </NameContainer>
        <CountryContainer>
          <StyledLocationIcon />
          <span>{leadingCandidate?.country}</span>
        </CountryContainer>
        <StyledCandidatePoliticalOrientation
          politicalOrientation={leadingCandidate?.politicalOrientation}
        >
          <span>{leadingCandidate?.politicalOrientation}</span>
        </StyledCandidatePoliticalOrientation>
      </LeadingCandidateCard>
      <VoteContainer>
        <span>Leading Candidate |</span>
        <span>
          {numberWithSpaces(leadingCandidate?.votes)} <StarIcon />
        </span>
        <StyledVoteButton
          onClick={() => handleUpdateCandidate(leadingCandidate.id)}
        >
          Vote for Me
        </StyledVoteButton>
      </VoteContainer>
    </Container>
  );
};

export default LeadingCandidate;
