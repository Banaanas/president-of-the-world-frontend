import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ApolloError, useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { useToast } from "@chakra-ui/react";
import LogoIcon from "./Illustrations/LogoIcon";
import appTheme from "../styles/appTheme";
import { resetAuthenticatedUser } from "../store/slices/authenticationSlice";
import GitHubBanner from "./GitHubBanner";
import toasts from "../utils/toasts";
import { RootState } from "../store/store";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  margin: 0 4px;
  padding: 2px 8px;
  overflow: hidden;
  color: ${appTheme.colors.secondary.default};
  font-weight: ${appTheme.fontWeight.bold};
  text-decoration: none;
  list-style: none;
  background: ${appTheme.colors.primary.default};
  border-radius: 8px;
  transition: opacity 250ms ease;

  @media ${appTheme.queries.tabletAndUp} {
    margin: 0 16px;
    padding: 8px;
  }

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

const StyledLiGradient = styled(StyledLink)`
  color: ${appTheme.colors.secondary.default};
  list-style: none;
  background: ${appTheme.colors.tertiary.default};
  background: linear-gradient(
    ${appTheme.colors.tertiary.default},
    ${appTheme.colors.tertiary.lighter}
  );
`;

const Header = () => {
  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthentication.isAuthenticated,
  );

  // useDispatch - Redux State
  const dispatch = useDispatch();

  // useApolloClient - Apollo Client
  const client = useApolloClient();

  // Chakra-UI Toast
  const toast = useToast();

  // Logout - Function
  const handleLogout = () => {
    try {
      // Clear localStorage
      localStorage.clear();
      // Reset Apollo Store / Token
      // eslint-disable-next-line no-void
      void client.resetStore();
      // Reset Authenticated User - Dispatch - Redux State
      dispatch(resetAuthenticatedUser());
      // Display Success Toast
      toast(toasts.logout);
    } catch (error) {
      // Display Error Toast
      toast(toasts.error(error as ApolloError));
    }
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <LogoIcon />
        </a>
      </Link>
      <Nav>
        <List>
          <Li>
            <Link href="/my-candidate" passHref>
              <StyledLiGradient>My Candidate</StyledLiGradient>
            </Link>
          </Li>
          <Li>
            {isAuthenticated ? (
              <StyledLink as="button" onClick={handleLogout}>
                Logout
              </StyledLink>
            ) : null}
          </Li>
        </List>
      </Nav>
      <GitHubBanner />
    </HeaderContainer>
  );
};

export default Header;
