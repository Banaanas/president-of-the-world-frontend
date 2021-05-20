import styled from "@emotion/styled";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import { Form } from "formik";
import appTheme from "../../styles/appTheme";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 300px;
  padding: 24px;
  color: ${appTheme.colors.secondary.default};
  background-color: ${appTheme.colors.primary.default};
  border-radius: 10px;
  box-shadow: ${appTheme.elevation.xl};
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  font-weight: ${appTheme.fontWeight.bold};
  background: ${appTheme.colors.warning.default};
  border-radius: 8px;
  transition: filter 500ms ease;

  &:hover {
    filter: drop-shadow(0 0 2px ${appTheme.colors.secondary.default});
  }
`;

const ChakraFormControl = styled(FormControl)`
  margin-bottom: 4px;
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
  font-weight: ${appTheme.fontWeight.bold};
`;

export {
  StyledForm,
  SubmitButton,
  ChakraFormControl,
  ChakraLabel,
  ChakraInput,
  ChakraErrorMessage,
  ChakraSelect,
};
