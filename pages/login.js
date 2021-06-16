import { useRouter } from "next/router";
import Head from "next/head";
import SEO from "../SEO/seo-data";
import LoginPage from "../Components/_Pages/LoginPage/LoginPage";

const Login = () => {
  // Next Router
  const router = useRouter();

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
