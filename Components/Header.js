import Link from "next/link";
import styled from "@emotion/styled";
import LogoIcon from "./Illustrations/LogoIcon";
import appTheme from "../styles/appTheme";
import { useSelector } from "react-redux";
import { useApolloClient } from "@apollo/client";
import store from "../store/store";
import { resetAuthenticatedUser } from "../store/slices/authenticationSlice";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px 16px 0 16px;
  font-weight: var(--font-weight-bold);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: var(--font-weight-bold);
  background: transparent;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  padding: 2px;
`;

const StyledLi = styled.li`
  list-style: none;
  box-shadow: var(--elevation-2);
`;

const StyledLink = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 8px;
  overflow: hidden;
  color: ${appTheme.colors.secondary.default};
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  list-style: none;
  background: ${appTheme.colors.primary.default};
  border-radius: 8px;
  box-shadow: var(--elevation-2);
  transition: opacity 250ms ease;

  ::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    display: block;
    background: ${appTheme.colors.tertiary.default};
    opacity: 0;
    transition: opacity 250ms ease;
    content: "";
  }

  :hover::before {
    opacity: 1;
  }
`;

const Header = () => {
  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );

  const client = useApolloClient();

  // Logout - Function
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Reset Apollo Store / Token
    client.resetStore();
    // Reset Authenticated User - Dispatch - Redux State
    store.dispatch(resetAuthenticatedUser());
  };

  return (
    <HeaderContainer>
      <Nav>
        <List>
          <StyledLi>
            <Link href="/">
              <a>
                <LogoIcon />
              </a>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href="/my-candidate" passHref>
              <StyledLink>My Candidate</StyledLink>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href={isAuthenticated ? "/my-candidate" : "/login"} passHref>
              <StyledLink>Chose your Candidate</StyledLink>
            </Link>
          </StyledLi>
          <StyledLi>
            {isAuthenticated ? (
              <StyledLink as="button" onClick={handleLogout}>
                Logout
              </StyledLink>
            ) : null}
          </StyledLi>
        </List>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
