import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";
import styled from "@emotion/styled";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledH1 from "../Components/StyledComponents/StyledH1";
import MyCandidateIllustration from "../Components/Illustrations/MyCandidatellustration";
import MyCandidateForm from "../Components/MyCandidate/MyCandidateForm";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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

const SubmitCandidate = () => {
  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    console.log("IS MOUNTED");
  }, [isMounted]);

  console.log("IS MOUNTED :", isMounted);

  // if MOUNTED && NOT AUTHENTICATED, Redirect
  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isMounted]);

  const { data, error, loading } = useQuery(LOGGED_IN_USER);

  // if MOUNTED && AUTHENTICATED && NO CANDIDATE YET, Candidate Form
  if (
    isMounted &&
    isAuthenticated &&
    !loading &&
    !data?.loggedInUser?.candidate
  ) {
    return (
      <StyledPageMain>
        <Container>
          <StyledH1>My Candidate</StyledH1>

          <MyCandidateIllustration />
          <MyCandidateForm />
        </Container>
      </StyledPageMain>
    );
  }

  // Loading Spinner
  return (
    <StyledPageMain>
      <Loader type="Puff" color="white" height={100} width={100} />
    </StyledPageMain>
  );
};

export default SubmitCandidate;
