import styled from "@emotion/styled";

interface FormAndIllustrationContainerProps {
  rowReverse?: boolean;
}

const FormAndIllustrationContainer = styled.div<FormAndIllustrationContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-around;
  width: 100%;

  /*  Hide Illustration */
  svg {
    display: none;
  }

  @media (min-width: 850px) {
    /*  Display Illustration */
    svg {
      display: block;
    }
  }
`;

export default FormAndIllustrationContainer;
