import styled from "@emotion/styled";

const FormAndIllustrationContainer = styled.div`
  display: flex;
  flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};
  flex: 1;
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
