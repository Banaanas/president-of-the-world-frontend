import Head from "next/head";
import { useRouter } from "next/router";

import SignUpPage from "../Components/_Pages/SignUpPage/SignUpPage";
import SEO from "../SEO/seo-data";

const SignUp = () => {
  // Next Router
  const router = useRouter();
  // Get the currentURL - Split the eventual URL fragment and query string
  const currentURL = router.asPath.split("#")[0].split("?")[0];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{SEO.signUp.title}</title>
        <meta name="description" content={SEO.signUp.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${currentURL}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.signUp.title} key="og-title" />
        <meta
          property="og:url"
          content={`https://president-of-the-world.cyrilo.app${currentURL}`}
          key="og-url"
        />
      </Head>

      <SignUpPage />
    </>
  );
};

export default SignUp;
