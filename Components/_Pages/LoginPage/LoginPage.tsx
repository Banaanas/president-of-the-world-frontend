import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import FormPage from "../../Form/FormPage";
import LoginIllustration from "../../Illustrations/LoginIllustration";
import LoginForm from "./LoginForm";
import { RootState } from "../../../store/store";

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
        <Loader type="Puff" color="white" height={100} width={100} />
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
