import styled from "@emotion/styled";
import React from "react";

import appTheme from "../styles/appTheme";

interface WrapperProps {
  href?: string;
}

const Wrapper = styled.button<WrapperProps>`
  width: fit-content;
  padding: 8px 16px;
  color: ${appTheme.colors.secondary.default};
  font-weight: ${appTheme.fontWeight.bold};
  font-size: ${appTheme.fontSize.sm};
  text-transform: uppercase;
  background-color: ${appTheme.colors.warning.default};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl};
  }

  &:hover {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  :active {
    transform: translateY(-2px);
  }
`;

interface LinkButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  delegated?: Array<unknown>;
}

const LinkButton = ({
  href,
  onClick,
  children,
  ...delegated
}: LinkButtonProps) => {
  // If LinkButton gets href === a
  // Else, === button
  const tag = typeof href === "string" ? "a" : "button";

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper as={tag} href={href} onClick={onClick} {...delegated}>
      {children}
    </Wrapper>
  );
};

export default LinkButton;
