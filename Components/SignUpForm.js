import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { localStorageValue } from "../lib/apolloClient";
import store from "../store/store";
import { getAuthenticatedUser } from "../store/slices/authenticationSlice";
import StyledButton from "./StyledComponents/StyledButton";
import {
  displayNotification,
  hideNotification,
} from "../store/slices/notificationSlice";
import { CREATE_USER, LOGIN } from "../lib/queries/queries";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    color: var(--color-3);

    input {
      align-self: center;
      width: 90%;
    }
  }

  button {
    margin-top: 1rem;
  }
`;

const SignUpForm = () => {
  const [username, setUsername] = useState("Cyril-1");
  const [password, setPassword] = useState("jocaste");
  const [passwordConfirmation, setPasswordConfirmation] = useState("jocaste");

  // createUser - useMutation
  const [createUser, resultCreateUser] = useMutation(CREATE_USER, {
    onError: (error) => {
      // Display Notification - Dispatch - Redux State
      store.dispatch(displayNotification(error.graphQLErrors[0].message));
      // Reset Notification - Dispatch - Redux State
      setTimeout(() => store.dispatch(hideNotification()), 5000);
    },
  });

  // Login - useMutation
  const [login, resultLogin] = useMutation(LOGIN, {
    onError: (error) => {
      // Display Notification - Dispatch - Redux State
      store.dispatch(displayNotification(error.graphQLErrors[0].message));
      // Reset Notification - Dispatch - Redux State
      setTimeout(() => store.dispatch(hideNotification()), 5000);
    },
  });

/*  // If Logged In User
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
  }, [resultLogin.data]);*/

  // Login - Function
  const handleCreateUser = async (event) => {
    event.preventDefault();

    // createUser - useMutation
    await createUser({
      variables: { username, password, passwordConfirmation },
    });
    // login - useMutation
    await login({ variables: { username, password } });
  };

  return (
    <StyledForm onSubmit={handleCreateUser}>
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
      <div>
        Password Confirmation
        <input
          type="password"
          value={passwordConfirmation}
          onChange={({ target }) => setPasswordConfirmation(target.value)}
        />
      </div>
      <StyledButton type="submit">Sign Up</StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
