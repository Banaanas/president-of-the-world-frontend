import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import Loader from "../../Common/Loader";
import FormPage from "../../Form/FormPage";
import SignUpIllustration from "../../Illustrations/SignUpIllustration";
import StyledPageMain from "../../StyledComponents/StyledPageMain";
import SignUpForm from "./SignUpForm";

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
        <Loader />
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
