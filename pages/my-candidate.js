import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import MyCandidatePage from "../Components/_Pages/MyCandidatePage/MyCandidatePage";
import SEO from "../SEO/seo-data";

const MyCandidate = () => {
  // Next Router
  const router = useRouter();

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated
  const { data, loading } = useQuery(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  // if NOT authenticated, Redirect
  useEffect(() => {
    if (data?.loggedInUser === null) {
      router.push("/login");
    }
  }, [data, loading, router]);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{SEO.myCandidate.title}</title>
        <meta name="description" content={SEO.myCandidate.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content={SEO.myCandidate.title}
          key="og-title"
        />
        <meta
          property="og:url"
          content={`https://cyrilo.dev${router.asPath}`}
          key="og-url"
        />
      </Head>
      <MyCandidatePage loggedInUser={data?.loggedInUser} />
    </>
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
