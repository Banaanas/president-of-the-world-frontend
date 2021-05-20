import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useToast } from "@chakra-ui/react";
import { localStorageValue } from "../../lib/apolloClient";
import store from "../../store/store";
import { getAuthenticatedUser } from "../../store/slices/authenticationSlice";
import appTheme from "../../styles/appTheme";
import FormHeading from "../../Components/Form/FormHeading";
import {
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
} from "../Form/StyledFormComponents";
import { LOGIN } from "../../lib/queries/queries";

const StyledForm = styled.form`
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

const LoginForm = () => {
  const [username, setUsername] = useState("Cyrilo");
  const [password, setPassword] = useState("jocaste");

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [login, resultLogin] = useMutation(LOGIN, {
    onCompleted: () => {
      // Display Success Toast
      toast({
        title: "🙂 Login Successful 🏠",
        description: "You are connected to the Application.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },
    onError: () => {
      // Display Error Toast
      toast({
        title: "Wrong Credentials",
        description: "Invalid Username or Password",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });

  // If Logged In User
  useEffect(() => {
    // If Login works
    if (resultLogin.data) {
      // Retrieve token from GraphQL mutation
      const token = resultLogin.data.login.value;
      // Set localStorage
      localStorage.setItem(localStorageValue, token);
      // Get Authenticated User - Dispatch - Redux State
      store.dispatch(getAuthenticatedUser(resultLogin.data));
    }
  }, [resultLogin.data]);

  // Login - Function
  const handleLogin = async (event) => {
    event.preventDefault();
    // Login - useMutation
    await login({ variables: { username, password } });

    // Reinitialize Inputs (Before userLogin() - Component Unmount)
    setUsername("");
    setPassword("");
  };

  // SET USERNAME LOGIN - FUNCTION
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // SET PASSWORD LOGIN - FUNCTION
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleLogin}>
      <FormHeading
        heading="Sign In to your Account"
        subHeading="You don't have an account ?"
        linkText="Sign Up"
        link="/sign-up"
      />

      <ChakraFormControl isRequired>
        <ChakraLabel htmlFor="username">Username</ChakraLabel>
        <ChakraInput
          type="text"
          value={username}
          id="username"
          onChange={handleUsernameChange}
        />
      </ChakraFormControl>
      <ChakraFormControl isRequired>
        <ChakraLabel htmlFor="username">Password</ChakraLabel>
        <ChakraInput
          type="password"
          value={password}
          id="password"
          onChange={handlePasswordChange}
        />
      </ChakraFormControl>
      <SubmitButton type="submit">LOGIN</SubmitButton>
    </StyledForm>
  );
};

export default LoginForm;
