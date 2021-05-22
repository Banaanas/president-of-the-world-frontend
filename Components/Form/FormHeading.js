import Link from "next/link";
import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";
import { formHeadingStyle } from "../../styles/css-composition";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const FormTitle = styled.div`
  ${formHeadingStyle}
`;

const SubHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${appTheme.colors.secondary.light};
  font-weight: ${appTheme.fontWeight.medium};
  font-size: ${appTheme.fontSize.sm};

  a {
    margin-left: 8px;
    font-weight: ${appTheme.fontWeight.bold};
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

const FormHeading = ({ heading, subHeading, linkText, link }) => {
  return (
    <Container>
      <FormTitle>{heading}</FormTitle>
      <SubHeadingContainer>
        <span>{subHeading}</span>
        {link ? (
          <Link href={link}>
            <a>{linkText}</a>
          </Link>
        ) : null}
      </SubHeadingContainer>
    </Container>
  );
};

export default FormHeading;
