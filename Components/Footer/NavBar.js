import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  padding: 0.5rem;
  background-color: ${appTheme.colors.secondary.default};
`;

const StyledList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  width: 80%;
  padding: 0;
  list-style: none;
`;

const StyledNavLink = styled.a`
  color: ${appTheme.colors.tertiary.default};
  font-weight: bolder;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  opacity: 1;
  transition: opacity 250ms ease;

  &:hover {
    opacity: 0.6;
  }
`;

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My Candidate",
    href: "/my-candidate",
  },
];

const NavBar = () => {
  const router = useRouter();
  return (
    <StyledNav>
      <StyledList>
        {navItems.map((item, index) => {
          return (
            <li key={`${item.href}-${item.name}`}>
              <Link href={item.href}>
                <StyledNavLink>{item.name}</StyledNavLink>
              </Link>
            </li>
          );
        })}
      </StyledList>
    </StyledNav>
  );
};

export default NavBar;
