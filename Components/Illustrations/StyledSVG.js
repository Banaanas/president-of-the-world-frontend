import styled from "@emotion/styled";

const StyledSVG = styled.svg`
  width: clamp(320px, 65%, 400px);
  transform: ${({ horizontalflip }) =>
    horizontalflip ? `scalex(-1) ` : undefined};
`;

export default StyledSVG;
