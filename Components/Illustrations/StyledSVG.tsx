import styled from "@emotion/styled";

interface StyledSVGProps {
  horizontalFlip?: boolean;
}

const StyledSVG = styled.svg<StyledSVGProps>`
  width: clamp(320px, 65%, 400px);
  transform: ${({ horizontalFlip }) =>
    horizontalFlip ? `scalex(-1) ` : undefined};
`;

export default StyledSVG;
