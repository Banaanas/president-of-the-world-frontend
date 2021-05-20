import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import LoginIllustration from "../Components/Illustrations/LoginIllustration";
import SignUpForm from "../Components/SignUpPage/SignUpForm";
import SignUpIllustration from "../Components/Illustrations/SignUpIllustration";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  /*  Hide Illustration */
  svg {
    display: none;
  }

  @media (min-width: 850px) {
    flex-direction: row;

    /*  Display Illustration */
    svg {
      display: block;
    }
  }
`;

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

  // If Not Authenticated, Return Sign Up Page
  return (
    <StyledPageMain>
      <Container>
        <SignUpIllustration />
        <SignUpForm />
      </Container>
    </StyledPageMain>
  );
};

export default LoginPage;
