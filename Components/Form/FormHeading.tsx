import styled from "@emotion/styled";
import Link from "next/link";

import appTheme from "../../styles/appTheme";
import { formHeadingStyle } from "../../styles/css-composition";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const FormTitle = styled.div`
  ${formHeadingStyle}
`;

const SubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${appTheme.colors.secondary.light};
  font-weight: ${appTheme.fontWeight.medium};
  font-size: ${appTheme.fontSize.sm};

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
  }

  /* Link in SignUp and Login Forms */
  a {
    margin-left: 8px;
    font-weight: ${appTheme.fontWeight.bold};
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

interface FormHeadingProps {
  heading: string;
  subHeading?: string;
  linkText?: string;
  link?: string;
}

const FormHeading = ({
  heading,
  subHeading,
  linkText,
  link,
}: FormHeadingProps) => {
  return (
    <Container>
      <FormTitle>{heading}</FormTitle>
      {subHeading ? (
        <SubHeadingContainer>
          <span>{subHeading}</span>
          {link ? (
            <Link href={link}>
              <a>{linkText}</a>
            </Link>
          ) : null}
        </SubHeadingContainer>
      ) : null}
    </Container>
  );
};

export default FormHeading;
