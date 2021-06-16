import styled from "@emotion/styled";

const StyledErrorPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  svg {
    margin: clamp(32px, 8vw, 128px);
  }
`;

export default StyledErrorPagesContainer;
