const navLinks: NavLinks = {
  home: {
    name: "home",
    href: "/",
  },
  myCandidate: {
    name: "My candidate",
    href: "/my-candidate",
  },
  updateCandidate: {
    href: "/update-candidate",
    name: "Update candidate",
  },
  login: {
    href: "/login",
    name: "Login",
  },
  signUp: {
    href: "/sign-up",
    name: "Sign Up",
  },
};

export default navLinks;

interface NavLink {
  name: string;
  href: string;
}

interface NavLinks {
  home: NavLink;
  myCandidate: NavLink;
  updateCandidate: NavLink;
  login: NavLink;
  signUp: NavLink;
}
