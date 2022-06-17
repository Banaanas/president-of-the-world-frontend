import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import MyCandidatePage from "../Components/_Pages/MyCandidatePage/MyCandidatePage";
import SEO from "../SEO/seo-data";
import { LoggedInUserData } from "../types/types";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import Loader from "../Components/Common/Loader";

const MyCandidate = () => {
  // Next Router
  const router = useRouter();

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated
  // Console Warning --> cf. Note 1
  const { data, loading } = useQuery<LoggedInUserData>(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  // if NOT authenticated, Redirect
  useEffect(() => {
    if (data?.loggedInUser === null && !loading) {
      // eslint-disable-next-line no-void
      void router.push("/login");
    }
  }, [data, loading, router]);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{SEO.myCandidate.title}</title>
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
          content={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="og-url"
        />
      </Head>

      {data?.loggedInUser && !loading ? (
        <MyCandidatePage loggedInUser={data?.loggedInUser} />
      ) : (
        <StyledPageMain>
          <Loader />;
        </StyledPageMain>
      )}
    </>
  );
};

export default MyCandidate;
