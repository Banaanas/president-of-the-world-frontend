import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "@apollo/client";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import FormPage from "../Components/Form/FormPage";
import SubmitCandidateIllustration from "../Components/Illustrations/SubmitCandidateIllustration";
import CandidateProfileIllustration from "../Components/Illustrations/CandidateProfileIllustration";
import CandidateProfile from "../Components/_Pages/MyCandidatePage/CandidateProfile";

/* Because of Next.js SSR, Redux useSelector was always used on an EMPTY store on Page Reload.
/* Then the MyCandidatePage Component always had the isAuthenticated === false during the
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
      <FormPage
        pageHeading="My Candidate"
        illustrationComponent={<CandidateProfileIllustration />}
        formComponent={<CandidateProfile />}
        rowReverse
      />
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
      <FormPage
        pageHeading="My Candidate"
        illustrationComponent={<SubmitCandidateIllustration />}
        formComponent={<SubmitCandidateForm />}
      />
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
