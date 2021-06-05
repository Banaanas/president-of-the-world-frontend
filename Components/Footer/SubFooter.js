import styled from "@emotion/styled";
import { FaOm as AumIcon } from "react-icons/fa";
import ContactIcons from "./ContactIcons";
import appTheme from "../../styles/appTheme";

const StyledAumIcon = styled(AumIcon)`
  margin: 0 0.5rem;
  color: ${appTheme.colors.tertiary.default};
  font-size: 1rem;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  background-color: ${appTheme.colors.secondary.default};

  a {
    margin-right: 0.25rem;
    color: ${appTheme.colors.tertiary.default};
    text-decoration: none;
  }
`;

const SubFooter = () => (
  <>
    <StyledSpan>
      <span>
        <a
          aria-label="Personal Website"
          href="https://cyrilo.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="https://cyrilo.dev"
        >
          CyrilO
        </a>
        | Imagined with
      </span>
      <StyledAumIcon />
    </StyledSpan>
    <ContactIcons />
  </>
);

export default SubFooter;
