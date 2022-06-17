import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import UpdateCandidatePage from "../Components/_Pages/UpdateCandidatePage/UpdateCandidatePage";
import Loader from "../Components/Common/Loader";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import SEO from "../SEO/seo-data";
import { LoggedInUserData } from "../types/types";

const UpdateCandidate = () => {
  // Next Router
  const router = useRouter();

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated and the
  const { data, loading } = useQuery<LoggedInUserData>(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  // if ALREADY authenticated, Redirect
  useEffect(() => {
    if (data?.loggedInUser.candidate === null && !loading) {
      // eslint-disable-next-line no-void
      void router.push("/login");
    }
  }, [data, loading, router]);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{SEO.updateCandidate.title}</title>
        <meta name="description" content={SEO.updateCandidate.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${router.asPath}`}
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
          content={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="og-url"
        />
      </Head>

      {data?.loggedInUser.candidate && !loading ? (
        <UpdateCandidatePage loggedInUser={data?.loggedInUser} />
      ) : (
        <StyledPageMain>
          <Loader />
        </StyledPageMain>
      )}
    </>
  );
};

export default UpdateCandidate;
