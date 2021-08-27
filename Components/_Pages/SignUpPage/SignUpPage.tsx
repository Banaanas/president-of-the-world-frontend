import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import FormPage from "../../Form/FormPage";
import SignUpIllustration from "../../Illustrations/SignUpIllustration";
import SignUpForm from "./SignUpForm";
import { RootState } from "../../../store/store";

const SignUpPage = () => {
  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuthentication.isAuthenticated,
  );

  // if ALREADY authenticated, Redirect
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
