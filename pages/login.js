import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import LoginIllustration from "../Components/Illustrations/LoginIllustration";
import FormPage from "../Components/Form/FormPage";
import LoginForm from "../Components/_Pages/LoginPage/LoginForm";

const LoginPage = () => {
  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );

  // if ALREADY authenticated, Redirect - With Spinner
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
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
