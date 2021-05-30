import styled from "@emotion/styled";
import StyledH1 from "../../../StyledComponents/StyledH1";
import appTheme from "../../../../styles/appTheme";
import CandidatesRanking from "./CandidatesRanking";

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
  return (
    <StyledSection>
      <StyledH2>Candidates Ranking</StyledH2>
      <CandidatesRanking />
    </StyledSection>
  );
};

export default CandidatesRankingSection;
