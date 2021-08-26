import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useApollo } from "../lib/apolloClient";
import SEO from "../SEO/next-seo.config";
import Layout from "../Components/Layout";
import store from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultSeo {...SEO} />
        <AnimatePresence initial={false} exitBeforeEnter>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ApolloProvider>
    </ReduxProvider>
  );
};

export default MyApp;
