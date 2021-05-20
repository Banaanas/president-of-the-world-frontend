import Link from "next/link";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-1);

  button {
    margin-top: 1rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--color-1);
  border-bottom: 3px solid var(--color-3);
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;

  a {
    margin-right: 1rem;
    color: var(--color-3);
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const GlobalNav = () => {
  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );
  return (
    <StyledContainer>
      <StyledNav>
        <StyledList>
          <li>
            <Link href="/">
              <a>Authors</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a>Books</a>
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link href="/add-book-form">
                <a>Add Book</a>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <a>LOGIN</a>
              </Link>
            </li>
          )}
        </StyledList>
      </StyledNav>
      {isAuthenticated ? <LogoutButton /> : null}
    </StyledContainer>
  );
};

export default GlobalNav;
