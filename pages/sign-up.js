import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import SignUpForm from "../Components/SignUpPage/SignUpForm";
import FormPage from "../Components/Form/FormPage";
import SignUpIllustration from "../Components/Illustrations/SignUpIllustration";

const SignUpPage = () => {
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

  // If Not Authenticated, Return Sign Up Page
  return (
    <FormPage
      illustrationComponent={<SignUpIllustration />}
      formComponent={<SignUpForm />}
      rowReverse
    />
  );
};

export default SignUpPage;
