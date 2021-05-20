import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "@emotion/styled";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import LoginIllustration from "../Components/Illustrations/LoginIllustration";
import { useQuery } from "@apollo/client";
import { ALL_CANDIDATES, LOGGED_IN_USER } from "../lib/queries/queries";
import MyCandidateIllustration from "../Components/Illustrations/MyCandidatellustration";
import MyCandidateForm from "../Components/MyCandidate/MyCandidateForm";

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

  // if MOUNTED && NOT AUTHENTICATED, My Candidate Page
  if (isMounted && isAuthenticated) {
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
