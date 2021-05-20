import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { LOGIN } from "../lib/queries/queries";
import { localStorageValue } from "../lib/apolloClient";
import store from "../store/store";
import { getAuthenticatedUser } from "../store/slices/authenticationSlice";
import StyledButton from "./StyledComponents/StyledButton";
import {
  displayNotification,
  hideNotification,
} from "../store/slices/notificationSlice";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    color: var(--color-3);
  }

  input {
    margin-left: 0.5rem;
  }

  button {
    margin-top: 1rem;
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("Cyrilo");
  const [password, setPassword] = useState("jocaste");

  // Login - useMutation
  const [login, resultLogin] = useMutation(LOGIN, {
    onError: (error) => {
      // Display Notification - Dispatch - Redux State
      store.dispatch(displayNotification(error.graphQLErrors[0].message));
      // Reset Notification - Dispatch - Redux State
      setTimeout(() => store.dispatch(hideNotification()), 5000);
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
  };

  return (
    <StyledForm onSubmit={handleLogin}>
      <div>
        Username
        <input
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
