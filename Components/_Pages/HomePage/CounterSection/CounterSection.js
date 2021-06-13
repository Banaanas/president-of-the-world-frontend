import Link from "next/link";
import styled from "@emotion/styled";
import Counter from "./Counter";
import appTheme from "../../../../styles/appTheme";
import StyledSection from "../../../StyledComponents/StyledSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledLink = styled.a`
  position: relative;
  z-index: 1;
  width: 136px;
  margin-top: 36px;
  padding: 4px 8px;
  font-weight: ${appTheme.fontWeight.bold};
  text-align: center;
  background: ${appTheme.colors.tertiary.default};
  border: 4px solid ${appTheme.colors.tertiary.lighter};
  border-radius: 8px;
  cursor: pointer;

  /* ::before opacity changes onHover */
  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
    background: ${appTheme.colors.secondary.default};
    opacity: 0;
    transition: opacity 2500ms ease;
    content: "";
  }

  :hover::before {
    opacity: 1;
  }
`;

const CounterSection = () => {
  return (
    <StyledSection>
      <Counter />
    </StyledSection>
  );
};

export default CounterSection;
