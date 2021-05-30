import styled from "@emotion/styled";
import Counter from "./Counter";
import appTheme from "../../../../styles/appTheme";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 128px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Link = styled.a`
  width: 136px;
  padding: 4px 8px;
  font-weight: ${appTheme.fontWeight.bold};
  text-align: center;
  background: ${appTheme.colors.tertiary.default};
  border: 4px solid ${appTheme.colors.tertiary.lighter};
  border-radius: 8px;
  cursor: pointer;
`;

const CounterSection = () => {
  return (
    <StyledSection>
      <Container>
        <Counter />
        <Link>Chose Your Own Candidate</Link>
      </Container>
    </StyledSection>
  );
};

export default CounterSection;