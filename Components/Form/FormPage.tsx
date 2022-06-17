import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

import pageVariants from "../../styles/animations";
import appTheme from "../../styles/appTheme";
import StyledH1 from "../StyledComponents/StyledH1";
import StyledH2 from "../StyledComponents/StyledH2";
import StyledPageMain from "../StyledComponents/StyledPageMain";
import FormAndIllustrationContainer from "./FormAndIllustrationContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  @media ${appTheme.queries.tabletAndUp} {
    margin-bottom: 64px;
  }
`;

const Heading = styled(StyledH1)`
  font-size: clamp(16px, 8vw, 40px);
`;

const SubHeading = styled(StyledH2)`
  margin-top: 8px;
`;

interface FormPageProps {
  pageHeading?: string;
  subHeading?: string;
  illustrationComponent: React.ReactNode;
  formComponent: React.ReactNode;
  rowReverse?: boolean;
}

const FormPage = ({
  pageHeading,
  subHeading,
  illustrationComponent,
  formComponent,
  rowReverse,
}: FormPageProps) => {
  // Next.js Router
  const router = useRouter();

  return (
    <StyledPageMain
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      key={router.pathname} /* AnimatePresence Key */
    >
      <Container>
        <HeadingContainer>
          {pageHeading ? <Heading>{pageHeading}</Heading> : null}
          {subHeading ? <SubHeading>{subHeading}</SubHeading> : null}
        </HeadingContainer>
        <FormAndIllustrationContainer rowReverse={rowReverse}>
          {illustrationComponent}
          {formComponent}
        </FormAndIllustrationContainer>
      </Container>
    </StyledPageMain>
  );
};

export default FormPage;
