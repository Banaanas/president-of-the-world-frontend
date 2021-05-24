import styled from "@emotion/styled";
import FormAndIllustrationContainer from "./FormAndIllustrationContainer";
import StyledH1 from "../StyledComponents/StyledH1";
import StyledPageMain from "../StyledComponents/StyledPageMain";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 128px;
  width: 100%;
`;
const FormPage = ({ pageHeading, illustrationComponent, formComponent }) => {
  return (
    <StyledPageMain>
      <Container>
        {pageHeading ? <StyledH1>{pageHeading}</StyledH1> : null}
        <FormAndIllustrationContainer>
          {illustrationComponent}
          {formComponent}
        </FormAndIllustrationContainer>
      </Container>
    </StyledPageMain>
  );
};

export default FormPage;
