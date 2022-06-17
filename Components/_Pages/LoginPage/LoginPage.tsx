import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import FormPage from "../../Form/FormPage";
import LoginIllustration from "../../Illustrations/LoginIllustration";
import LoginForm from "./LoginForm";
import { RootState } from "../../../store/store";
import Loader from "../../Common/Loader";

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
  }, [isAuthenticated]);

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
