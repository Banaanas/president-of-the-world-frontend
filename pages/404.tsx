import Head from "next/head";

import ErrorPage from "../Components/_Pages/ErrorPages/ErrorPage";
import SEO from "../SEO/seo-data";

const Custom404Page = () => (
  <>
    <Head>
      <title>{SEO.page404.title}</title>
    </Head>
    <ErrorPage errorCode="404" />
  </>
);

export default Custom404Page;
