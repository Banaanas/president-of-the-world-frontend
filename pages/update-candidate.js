import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import UpdateCandidatePage from "../Components/_Pages/UpdateCandidatePage/UpdateCandidatePage";
import Head from "next/head";
import SEO from "../SEO/seo-data";

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

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{SEO.updateCandidate.title}</title>
        <meta name="description" content={SEO.updateCandidate.description} />
        <link
          rel="canonical"
          href={`https://cyrilo.dev${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content={SEO.updateCandidate.title}
          key="og-title"
        />
        <meta
          property="og:url"
          content={`https://cyrilo.dev${router.asPath}`}
          key="og-url"
        />
      </Head>
      <UpdateCandidatePage loggedInUser={data?.loggedInUser} />
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

export default UpdateCandidate;
