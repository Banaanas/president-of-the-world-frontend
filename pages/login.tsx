import Head from "next/head";
import { useRouter } from "next/router";

import LoginPage from "../Components/_Pages/LoginPage/LoginPage";
import SEO from "../SEO/seo-data";

const Login = () => {
  // Next Router
  const router = useRouter();
  // Get the currentURL - Split the eventual URL fragment and query string
  const currentURL = router.asPath.split("#")[0].split("?")[0];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{SEO.login.title}</title>
        <meta name="description" content={SEO.login.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${currentURL}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.login.title} key="og-title" />
        <meta
          property="og:url"
          content={`https://president-of-the-world.cyrilo.app${currentURL}`}
          key="og-url"
        />
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
