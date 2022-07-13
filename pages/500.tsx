import Head from "next/head";

import ErrorPage from "../Components/_Pages/ErrorPages/ErrorPage";
import SEO from "../SEO/seo-data";

const Custom500Page = () => (
  <>
    <Head>
      <title>{SEO.page500.title}</title>
    </Head>
    <ErrorPage errorCode="500" />
  </>
);

export default Custom500Page;
