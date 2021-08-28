import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { ALL_CANDIDATES } from "../lib/queries/queries";
import HeroBannerSection from "../Components/_Pages/HomePage/HeroBannerSection";
import CounterSection from "../Components/_Pages/HomePage/CounterSection/CounterSection";
import CandidatesRankingSection from "../Components/_Pages/HomePage/CandidatesRankingSection/CandidatesRankingSection";
import StyledHR from "../Components/StyledHR";
import pageVariants from "../styles/animations";
import SEO from "../SEO/seo-data";
import { AllCandidatesData } from "../types/types";

const Home = () => {
  const { data } = useQuery<AllCandidatesData>(ALL_CANDIDATES, {
    pollInterval: 500, // Execute query at specific interval
  });

  // AnimatePresence Key
  const router = useRouter();

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{SEO.index.title}</title>
        <meta name="description" content={SEO.index.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.index.title} key="og-title" />
        <meta
          property="og:url"
          content={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="og-url"
        />
      </Head>
      <StyledPageMain
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="initial"
        key={router.pathname} /* AnimatePresence Key */
      >
        <HeroBannerSection allCandidates={data?.allCandidates} />
        <StyledHR />
        <CounterSection />
        <StyledHR />
        <CandidatesRankingSection allCandidates={data?.allCandidates} />
      </StyledPageMain>
    </>
  );
};

/* Return the apolloClient with data, add it to the Apollo Cache.
 * Then the Component retrieve data from the cache with a query
 * https://github.com/vercel/next.js/tree/canary/examples/with-apollo */
export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_CANDIDATES,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
