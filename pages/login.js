import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import SEO from "../SEO/seo-data";
import LoginPage from "../Components/_Pages/LoginPage/LoginPage";
import { LOGGED_IN_USER } from "../lib/queries/queries";

const Login = () => {
  // Next Router
  const router = useRouter();

  // The Query uses the NETWORK ONLY and NOT THE CACHE because the Cache
  // was not updated
  const { data, error, loading } = useQuery(LOGGED_IN_USER, {
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{SEO.login.title}</title>
        <meta name="description" content={SEO.login.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.login.title} key="og-title" />
        <meta
          property="og:url"
          content={`https://cyrilo.dev${router.asPath}`}
          key="og-url"
        />
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
