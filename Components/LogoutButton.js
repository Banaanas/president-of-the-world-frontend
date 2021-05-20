import { useApolloClient } from "@apollo/client";
import store from "../store/store";
import { resetAuthenticatedUser } from "../store/slices/authenticationSlice";
import StyledButton from "./StyledComponents/StyledButton";

const LogoutButton = () => {
  const client = useApolloClient();

  // Logout - Function
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    // Reset Apollo Store / Token
    client.resetStore();
    // Reset Authenticated User - Dispatch - Redux State
    store.dispatch(resetAuthenticatedUser());
  };

  return (
    <StyledButton type="submit" onClick={handleLogout}>
      Logout
    </StyledButton>
  );
};

export default LogoutButton;
