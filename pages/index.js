import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { ALL_CANDIDATES } from "../lib/queries/queries";
import HeroBannerSection from "../Components/_Pages/HomePage/HeroBannerSection";
import CounterSection from "../Components/_Pages/HomePage/CounterSection/CounterSection";
import CandidatesRankingSection from "../Components/_Pages/HomePage/CandidatesRankingSection/CandidatesRankingSection";
import StyledHR from "../Components/StyledHR";
import pageVariants from "../styles/animations";

const Home = () => {
  const { data, error, loading } = useQuery(ALL_CANDIDATES);

  // AnimatePresence Key
  const router = useRouter();

  return (
    <>
      <Head>
        <title key="title">President of the World</title>
        <meta name="description" content="Application made by Cyrilo" />
      </Head>
      <StyledPageMain
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="initial"
        key={router} /* AnimatePresence Key */
      >
        <HeroBannerSection />
        <CounterSection width="90%" />
        <StyledHR />
        <CandidatesRankingSection allCandidates={data?.allCandidates} />
        <StyledHR width="50%" />
      </StyledPageMain>
    </>
  );
};

/* Return the apolloClient with data, add it to the Apollo Cache.
 * Then the Component retrieve data from the cache with a query
 * https://github.com/vercel/next.js/tree/canary/examples/with-apollo */
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_CANDIDATES,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Home;
