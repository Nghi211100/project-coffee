import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql-client/apollo';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
