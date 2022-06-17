import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import Loader from "../../Common/Loader";
import FormPage from "../../Form/FormPage";
import LoginIllustration from "../../Illustrations/LoginIllustration";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthentication.isAuthenticated,
  );

  // if ALREADY authenticated, Redirect - With Spinner
  useEffect(() => {
    if (isAuthenticated) {
      // eslint-disable-next-line no-void
      void router.push("/");
    }
  }, [isAuthenticated, router]);

  // if ALREADY authenticated, Loader Spinner Rendering
  if (isAuthenticated) {
    return (
      <StyledPageMain>
        <Loader />
      </StyledPageMain>
    );
  }

  // If Not Authenticated, Return Login Page
  return (
    <FormPage
      illustrationComponent={<LoginIllustration />}
      formComponent={<LoginForm />}
    />
  );
};

export default LoginPage;
