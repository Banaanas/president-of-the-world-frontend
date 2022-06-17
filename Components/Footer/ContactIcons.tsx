import styled from "@emotion/styled";
import { HiOutlineGlobeAlt as PersonalWebsiteIcon } from "react-icons/hi";
import { ImLinkedin as LinkedInIcon } from "react-icons/im";
import { IoMdMail as MailIcon } from "react-icons/io";
import { VscGithubInverted as GitHubIcon } from "react-icons/vsc";

import appTheme from "../../styles/appTheme";

const StyledSocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 2px;
  background-color: ${appTheme.colors.secondary.default};

  a {
    margin: 0 8px;
  }

  svg {
    color: ${appTheme.colors.primary.light};
    font-size: 19px;
    transform: scale(1);
    opacity: 0.9;
    transition: transform, opacity, 200ms ease;
  }

  svg:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const ContactIcons = () => (
  <StyledSocialIconsContainer>
    <a
      aria-label="Personal Website"
      href="https://cyrilo.dev"
      target="_blank"
      rel="noopener noreferrer"
      title="https://cyrilo.dev"
    >
      <PersonalWebsiteIcon />
    </a>
    <a
      aria-label="GitHub Profile Link"
      href="https://github.com/Banaanas"
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub Profile"
    >
      <GitHubIcon />
    </a>
    <a
      aria-label="Cyrilo Dev Mail"
      href="mailto:cyrilo.dev@gmail.com"
      title="cyrilo.dev@gmail.com"
    >
      <MailIcon />
    </a>
    <a
      aria-label="LinkedIn Profile"
      href="https://www.linkedin.com/in/cyril-dev/"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn Profile"
    >
      <LinkedInIcon />
    </a>
  </StyledSocialIconsContainer>
);

export default ContactIcons;
