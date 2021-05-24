import Head from "next/head";
import { useQuery } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { ALL_CANDIDATES, LOGGED_IN_USER } from "../lib/queries/queries";
import HeroBannerSection from "../Components/_Pages/HomePage/HeroBannerSection";
import CounterSection from "../Components/_Pages/HomePage/CounterSection/CounterSection";

const Home = () => {
  // const { data, error, loading } = useQuery(ALL_CANDIDATES);
  const { data, error, loading } = useQuery(LOGGED_IN_USER);

  return (
    <>
      <Head>
        <title key="title">President of the World</title>
        <meta name="description" content="Application made by Cyrilo" />
      </Head>
      <StyledPageMain>
        <HeroBannerSection />
        <CounterSection />
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
