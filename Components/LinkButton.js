import styled from "@emotion/styled";
import appTheme from "../styles/appTheme";

const Wrapper = styled.button`
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
    padding: 16px 32px;
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

const LinkButton = ({ href, children, ...delegated }) => {
  const tag = typeof href === "string" ? "a" : "button";

  return (
    <Wrapper as={tag} href={href} {...delegated}>
      {children}
    </Wrapper>
  );
};

export default LinkButton;
