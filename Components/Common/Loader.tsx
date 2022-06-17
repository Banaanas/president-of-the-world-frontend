import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import appTheme from "../../styles/appTheme";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{ width?: string; color?: string }>`
  position: relative;
  width: ${({ width }) => width || "96px"};
  height: ${({ width }) => width || "96px"};
  border: 10px solid ${appTheme.colors.white};
  border-left: 10px solid
    ${({ color }) => color || appTheme.colors.tertiary.default};
  border-radius: 50%;
  transform: translateZ(0);
  animation: ${rotateAnimation} 0.75s infinite linear;
`;

const Loader = ({ width, color }: LoaderProps) => {
  return <Container width={width} color={color} />;
};

export default Loader;

interface LoaderProps {
  width?: string;
  color?: string;
}
