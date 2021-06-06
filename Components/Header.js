import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useApolloClient } from "@apollo/client";
import styled from "@emotion/styled";
import { useToast } from "@chakra-ui/react";
import LogoIcon from "./Illustrations/LogoIcon";
import appTheme from "../styles/appTheme";
import { resetAuthenticatedUser } from "../store/slices/authenticationSlice";
import GitHubBanner from "./GitHubBanner";

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
  background: transparent;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

const StyledLi = styled.li`
  list-style: none;
`;

const StyledLink = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  margin: 0 4px;
  padding: 8px;
  overflow: hidden;
  color: ${appTheme.colors.secondary.default};
  font-weight: ${appTheme.fontWeight.bold};
  text-decoration: none;
  list-style: none;
  background: ${appTheme.colors.primary.default};
  border-radius: 8px;
  box-shadow: ${appTheme.elevation.md};
  transition: opacity 250ms ease;

  @media ${appTheme.queries.tabletAndUp} {
    margin: 0 16px;
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

const Header = () => {
  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
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
      client.resetStore();
      // Reset Authenticated User - Dispatch - Redux State
      dispatch(resetAuthenticatedUser());

      // Display Success Toast
      toast({
        title: "👋🏽 Logout Successful 🤟🏽",
        description: "You are not connected to the Application anymore.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Display Error Toast
      toast({
        title: "❌ Something Wrong Happened ⚠️",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <HeaderContainer>
      <StyledLi>
        <Link href="/">
          <a>
            <LogoIcon />
          </a>
        </Link>
      </StyledLi>
      <Nav>
        <List>
          <StyledLi>
            <Link href="/my-candidate" passHref>
              <StyledLink>My Candidate</StyledLink>
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
      <GitHubBanner />
    </HeaderContainer>
  );
};

export default Header;
