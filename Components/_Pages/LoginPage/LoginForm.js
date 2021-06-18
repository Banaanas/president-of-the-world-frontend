import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { localStorageValue } from "../../../lib/apolloClient";
import { getAuthenticatedUser } from "../../../store/slices/authenticationSlice";
import FormHeading from "../../Form/FormHeading";
import {
  ChakraFormControl,
  ChakraInput,
  ChakraLabel,
  StyledForm,
  SubmitButton,
} from "../../Form/StyledFormComponents";
import { LOGGED_IN_USER, LOGIN } from "../../../lib/queries/queries";
import toasts from "../../../utils/toasts";

const LoginForm = () => {
  // Visitor(s) Account - For Users who don't want to Sign Up
  const [username, setUsername] = useState("visitor-account");
  const [password, setPassword] = useState("password");

  // useDispatch - Redux State
  const dispatch = useDispatch();

  // Chakra-UI Toast
  const toast = useToast();

  // Login - useMutation
  const [login, resultLogin] = useMutation(LOGIN, {
    refetchQueries: { query: LOGGED_IN_USER, fetchPolicy: "network-only" },
    onCompleted: () => {
      // Display Success Toast
      toast(toasts.login);
    },
    onError: (error) => {
      // Display Error Toast
      toast(toasts.error(error));
    },
  });

  // If Logged In User
  useEffect(() => {
    // If Login works
    if (resultLogin.data) {
      // Retrieve token from GraphQL mutation
      const { token } = resultLogin.data.login;
      // Set localStorage
      localStorage.setItem(localStorageValue, token);
      // Get Authenticated User - Dispatch - Redux State
      dispatch(getAuthenticatedUser(resultLogin.data));
    }
  }, [dispatch, resultLogin.data]);

  // Login - Function
  const handleLogin = async (event) => {
    event.preventDefault();
    // Login - useMutation
    await login({ variables: { username, password } });

    // Reinitialize Inputs (Before Component Unmount)
    setUsername("");
    setPassword("");
  };

  // Set Username Login
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Set Password Login
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleLogin}>
      <FormHeading
        heading="Sign In to your Account"
        subHeading="Don't have an account yet ?"
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
      <SubmitButton type="submit">Login</SubmitButton>
    </StyledForm>
  );
};

export default LoginForm;
