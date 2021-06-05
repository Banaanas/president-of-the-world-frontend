import styled from "@emotion/styled";

const FormAndIllustrationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  /*  Hide Illustration */
  svg {
    display: none;
  }

  @media (min-width: 850px) {
²
    /*  Display Illustration */
    svg {
      display: block;
    }
  }
`;

export default FormAndIllustrationContainer;
