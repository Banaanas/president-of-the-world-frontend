import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";
import FormPage from "../Components/Form/FormPage";
import UpdateCandidateForm from "../Components/_Pages/UpdateCandidatePage/UpdateCandidateForm";
import UpdateCandidateIllustration from "../Components/Illustrations/UpdateCandidateIllustration";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const UpdateCandidate = () => {
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
    return (
      <FormPage
        pageHeading="My Candidate"
        subHeading="My Candidate"
        illustrationComponent={<UpdateCandidateIllustration />}
        formComponent={
          <UpdateCandidateForm loggedInUser={data?.loggedInUser} />
        }
        rowReverse
      />
    );
  }

  // if ALREADY authenticated, Loader Spinner Rendering
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

export default UpdateCandidate;
