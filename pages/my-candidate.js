import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import MyCandidateIllustration from "../Components/Illustrations/MyCandidatellustration";
import MyCandidateForm from "../Components/MyCandidate/MyCandidateForm";
import MyCandidateProfile from "../Components/MyCandidate/MyCandidateProfile";
import StyledH1 from "../Components/StyledComponents/StyledH1";

const Container = styled.div`
  display: flex;
  flex: 1;
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

/* Because of Next.js SSR, Redux useSelector was always used on an EMPTY store on Page Reload.
/* Then the MyCandidate Component always had the isAuthenticated === false during the
/* Page Refresh. So the Redirection was automatic, even if the User was authenticated.
/* That's why an isMounted State has been used here : isAuthenticated is only used
/* after the Component has been mounted, ie. when the Store has been initialized on Client Side
/* (not the Server).
*/

const MyCandidate = () => {
  // Next Router
  const router = useRouter();

  // isAuthenticated - Redux State
  const isAuthenticated = useSelector(
    (state) => state.userAuthentication.isAuthenticated,
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // if MOUNTED && NOT AUTHENTICATED, Redirect
  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isMounted]);

  const { data, error, loading } = useQuery(LOGGED_IN_USER, {
    pollInterval: 1,
  });

  // if MOUNTED && AUTHENTICATED && ALREADY ONE CANDIDATE, Update Candidate Form
  if (
    isMounted &&
    isAuthenticated &&
    !loading &&
    data?.loggedInUser?.candidate
  ) {
    return (
      <StyledPageMain>
        <Container>
          <StyledH1>My Candidate</StyledH1>
          <MyCandidateProfile />
        </Container>
      </StyledPageMain>
    );
  }

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

export default MyCandidate;
