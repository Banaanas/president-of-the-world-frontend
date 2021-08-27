import Head from "next/head";
import { useRouter } from "next/router";
import SEO from "../SEO/seo-data";
import SignUpPage from "../Components/_Pages/SignUpPage/SignUpPage";

const SignUp = () => {
  // Next Router
  const router = useRouter();

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title key="title">{SEO.signUp.title}</title>
        <meta name="description" content={SEO.signUp.description} />
        <link
          rel="canonical"
          href={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="canonical"
        />
        {/* Open Graph */}
        <meta property="og:title" content={SEO.signUp.title} key="og-title" />
        <meta
          property="og:url"
          content={`https://president-of-the-world.cyrilo.app${router.asPath}`}
          key="og-url"
        />
      </Head>

      <SignUpPage />
    </>
  );
};

export default SignUp;
