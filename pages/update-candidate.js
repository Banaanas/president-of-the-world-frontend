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
import MyCandidatePage from "../Components/_Pages/MyCandidatePage/MyCandidatePage";
import UpdateCandidatePage from "../Components/_Pages/UpdateCandidatePage/UpdateCandidatePage";

const UpdateCandidate = () => {
  // Next Router
  const router = useRouter();

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated and the
  const { data, error, loading } = useQuery(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  // if ALREADY authenticated, Redirect
  useEffect(() => {
    if (data?.loggedInUser === null) {
      router.push("/login");
    }
  }, [data, loading, router]);

  return <UpdateCandidatePage loggedInUser={data?.loggedInUser} />;
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
