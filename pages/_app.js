import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { useApollo } from "../lib/apolloClient";
import Layout from "../Components/Layout";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default MyApp;
