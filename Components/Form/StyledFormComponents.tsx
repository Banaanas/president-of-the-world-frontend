import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Form } from "formik";

import appTheme from "../../styles/appTheme";
import { formStyle, submitButtonStyle } from "../../styles/css-composition";

const StyledFormikForm = styled(Form)`
  ${formStyle}
`;

// For LoginForm - Form Without Formik
const StyledForm = styled.form`
  ${formStyle};
`;

const SubmitButton = styled.button`
  ${submitButtonStyle}
`;

const ChakraFormControl = styled(FormControl)`
  margin-bottom: 16px;
`;

const ChakraLabel = styled(FormLabel)`
  font-weight: ${appTheme.fontWeight.bold};
  border: ${appTheme.colors.secondary.default};
`;

const ChakraInput = styled(Input)`
  border: ${appTheme.colors.secondary.lighter} 1px solid;

  &:focus {
    border-color: ${appTheme.colors.tertiary.default};
    box-shadow: 0 0 0 1px ${appTheme.colors.tertiary.default};
  }
`;

const ChakraErrorMessage = styled(FormErrorMessage)`
  width: 250px; /* To maintain the Form width */
  font-weight: ${appTheme.fontWeight.bold};
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

export {
  ButtonsContainer,
  ChakraErrorMessage,
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  ChakraSelect,
  StyledForm,
  StyledFormikForm,
  SubmitButton,
};
