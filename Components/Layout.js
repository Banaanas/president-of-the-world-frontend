import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
import Header from "./Header";
import { getAuthenticatedUser } from "../store/slices/authenticationSlice";

/* isAuthenticated is used here, because redux hooks can only be used inside
 * the Redux Provider, set up in the _app.js file, parent of Layout.js
 *  */

// Persistent Layout
const Layout = ({ children }) => {
  // useDispatch - Redux State
  const dispatch = useDispatch();

  // useEffect - Set localStorage - Redux State
  useEffect(() => {
    const authenticatedUser = window.localStorage.getItem("authenticatedUser");

    // If User not Authenticated, Return
    if (!authenticatedUser) return;

    // Get Authenticated User - Dispatch - Redux State
    dispatch(getAuthenticatedUser(authenticatedUser));
  }, [dispatch]);

  return (
    <EmotionThemeProvider theme={appTheme}>
      <ChakraProvider>
        <GlobalStyles />
        <Header />
        {children}
      </ChakraProvider>
    </EmotionThemeProvider>
  );
};

export default Layout;
