import styled from "@emotion/styled";
import { FaOm as AumIcon } from "react-icons/fa";

import appTheme from "../../styles/appTheme";
import ContactIcons from "./ContactIcons";

const StyledAumIcon = styled(AumIcon)`
  margin: 0 4px;
  color: ${appTheme.colors.tertiary.default};
  font-size: 16px;
`;

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  font-size: 16px;

  a {
    margin-right: 4px;
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
