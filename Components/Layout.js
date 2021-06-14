import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import GlobalStyles from "../styles/GlobalStyles";
import appTheme from "../styles/appTheme";
import Header from "./Header";
import {
  getAuthenticatedUser,
  resetAuthenticatedUser,
} from "../store/slices/authenticationSlice";
import Footer from "./Footer/Footer";
import toasts from "../utils/toasts";

/* isAuthenticated is used here, because redux hooks can only be used inside
 * the Redux Provider, set up in the _app.js file, parent of Layout.js
 *  */

// Persistent Layout
const Layout = ({ children }) => {
  // useDispatch - Redux State
  const dispatch = useDispatch();

  // useApolloClient - Apollo Client
  const client = useApolloClient();

  // Next.js Router
  const router = useRouter();

  // Chakra-UI Toast
  const toast = useToast();

  // useEffect - Set localStorage - Redux State
  useEffect(() => {
    const authenticatedUser = window.localStorage.getItem("authenticatedUser");

    // If User not Authenticated, Return
    if (!authenticatedUser) return;

    // Get Authenticated User - Dispatch - Redux State
    dispatch(getAuthenticatedUser(authenticatedUser));
  }, [dispatch]);

  // Storage Event - useEffect
  useEffect(() => {
    // LOGIN / LOGOUT - MULTI TABS
    // Only works when 2 or more Tabs are opened
    window.addEventListener("storage", (event) => {
      // Login
      if (event.key !== null) {
        try {
          // Display Success Toast
          toast(toasts.login);
          // Reload Page - (To get state synchronized)
          window.location.reload(false);
        } catch (error) {
          // Display Error Toast
          toast(toasts.error(error));
        }
      }
      // Logout
      if (event.key === null) {
        try {
          // Clear localStorage
          localStorage.clear();
          // Reset Apollo Store / Token
          // client.resetStore() was causing an error. Contrary to resetStore()
          // clearStore doesn't refetch all queries;
          client.clearStore();
          // Reset Authenticated User - Dispatch - Redux State
          dispatch(resetAuthenticatedUser());
          // Display Success Toast
          toast(toasts.logout);
        } catch (error) {
          // Display Error Toast
          toast(toasts.error(error));
        }
      }
    });
  }, [router, dispatch]);

  return (
    <EmotionThemeProvider theme={appTheme}>
      <ChakraProvider>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </EmotionThemeProvider>
  );
};

export default Layout;
