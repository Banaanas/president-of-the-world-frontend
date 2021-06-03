import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import FormPage from "../Components/Form/FormPage";
import SubmitCandidateIllustration from "../Components/Illustrations/SubmitCandidateIllustration";
import CandidateProfileIllustration from "../Components/Illustrations/CandidateProfileIllustration";
import CandidateProfile from "../Components/_Pages/MyCandidatePage/CandidateProfile";
import SubmitCandidateForm from "../Components/_Pages/MyCandidatePage/SubmitCandidateForm";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

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

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated and the
  const { data, error, loading } = useQuery(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data?.loggedInUser === null) {
      router.push("/login");
    }
  }, [data, loading, router]);

  if (data?.loggedInUser) {
    const hasCandidate = data?.loggedInUser?.candidate;

    if (hasCandidate) {
      return (
        <FormPage
          pageHeading="My Candidate"
          illustrationComponent={<CandidateProfileIllustration />}
          formComponent={<CandidateProfile loggedInUser={data?.loggedInUser} />}
          rowReverse
        />
      );
    }

    if (!hasCandidate) {
      return (
        <FormPage
          pageHeading="My Candidate"
          subHeading="Please, chose the Candidate you want."
          illustrationComponent={<SubmitCandidateIllustration />}
          formComponent={<SubmitCandidateForm />}
        />
      );
    }
  }

  // Loading Spinner
  return (
    <StyledPageMain>
      <Loader type="Puff" color="white" height={100} width={100} />
    </StyledPageMain>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LOGGED_IN_USER,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default MyCandidate;
