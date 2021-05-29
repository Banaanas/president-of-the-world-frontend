import { useRouter } from "next/router";
import styled from "@emotion/styled";
import FormAndIllustrationContainer from "./FormAndIllustrationContainer";
import StyledH1 from "../StyledComponents/StyledH1";
import StyledPageMain from "../StyledComponents/StyledPageMain";
import StyledH2 from "../StyledComponents/StyledH2";
import pageVariants from "../../styles/animations";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 64px;
`;

const SubHeading = styled(StyledH2)`
  margin-top: 8px;
`;

const FormPage = ({
  pageHeading,
  subHeading,
  illustrationComponent,
  formComponent,
  rowReverse,
}) => {
  const router = useRouter();

  return (
    <StyledPageMain
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="initial"
      key={router} /* AnimatePresence Key */
    >
      <Container>
        <HeadingContainer>
          {pageHeading ? <StyledH1>{pageHeading}</StyledH1> : null}
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
