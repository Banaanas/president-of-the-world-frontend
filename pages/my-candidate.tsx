import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import MyCandidatePage from "../Components/_Pages/MyCandidatePage/MyCandidatePage";
import Loader from "../Components/Common/Loader";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import { LOGGED_IN_USER } from "../lib/queries/queries";
import SEO from "../SEO/seo-data";
import { LoggedInUserData } from "../types/types";

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
        {/* Page excluded from sitemap */}
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
